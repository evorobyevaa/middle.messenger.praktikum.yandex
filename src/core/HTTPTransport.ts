export enum Method {
  GET = "GET",
  PUT = "PUT",
  POST = "POST",
  DELETE = "DELETE",
}

interface Options {
  method: Method;
  data?: any;
  timeout?: number;
  headers?: Record<string, string>;
}

function queryStringify(data: string) {
  return Object.entries(data)
    .map(([key, value]) => `${key}=${value}`)
    .join('&')
    .slice(0, -1);
}

export default class HTTPTransport {
  get = (url: string, options: Options = { method: Method.GET }) => {
    return this.request(
      `${url}${queryStringify(options.data)}`,
      { ...options }
    );
  };

  post = (url: string, options: Options = { method: Method.POST }) => {
    return this.request(
      url,
      { ...options }
    );
  };

  put = (url: string, options: Options = { method: Method.PUT }) => {
    return this.request(
      url,
      { ...options }
    );
  };

  delete = (url: string, options: Options = { method: Method.DELETE }) => {
    return this.request(
      url,
      { ...options }
    );
  };

  request = (url: string, options: Options) => {
    const { headers = {}, method, data } = options;

    return new Promise(function (resolve, reject) {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url);

      Object.entries(headers)
        .forEach(([key, value]) => 
        xhr.setRequestHeader(key, value));

      xhr.onload = function () {
        resolve(xhr);
      };

      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.timeout = (options.timeout) ? options.timeout: 0;
      xhr.ontimeout = reject;

      if (method === Method.GET || !data) {
        xhr.send();
      } else {
        xhr.send(data);
      }
    });
  };
}