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
    .map(([key, value]) => `${key}=${value}&`)
    .join('')
    .slice(0, -1);
}

export default class HTTPTransport {
  get = (url: string, options: Options = { method: Method.GET }) => {
    return this.request(
      `${url}${queryStringify(options.data)}`,
      { ...options },
      options.timeout
    );
  };

  post = (url: string, options: Options = { method: Method.POST }) => {
    return this.request(
      url,
      { ...options },
      options.timeout
    );
  };

  put = (url: string, options: Options = { method: Method.PUT }) => {
    return this.request(
      url,
      { ...options },
      options.timeout
    );
  };

  delete = (url: string, options: Options = { method: Method.DELETE }) => {
    return this.request(
      url,
      { ...options },
      options.timeout
    );
  };

  request = (url: string, options: Options, timeout = 5000) => {
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
      xhr.timeout = timeout;
      xhr.ontimeout = reject;

      if (method === Method.GET || !data) {
        xhr.send();
      } else {
        xhr.send(data);
      }
    });
  };
}