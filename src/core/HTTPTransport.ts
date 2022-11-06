export enum Method {
  GET = "GET",
  PUT = "PUT",
  POST = "POST",
  DELETE = "DELETE",
}

interface Options {
  method?: Method;
  data?: unknown;
  headers?: Record<string, string>;
}

type HTTPMethod = (url: string, options?: Options) => Promise<unknown>;

function queryStringify(data: Record<string, string>): string {
  return Object.entries(data)
    .map(([key, value]) => `${key}=${value}`)
    .join("&")
    .slice(0, -1);
}

export default class HTTPTransport {
  static API_URL = "https://ya-praktikum.tech/api/v2";
  protected endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = `${HTTPTransport.API_URL}${endpoint}`;
  }

  get: HTTPMethod = (url, options = {}) => {
    const newUrl = options.data ? url + queryStringify(options.data as Record<string, string>) : url;
    return this.request(newUrl, { ...options });
  }

  post: HTTPMethod = (url, options = {}) => {
    return this.request(url, { ...options, method: Method.POST });
  }

  put: HTTPMethod = (url, options = {}) => {
    return this.request(url, { ...options, method: Method.PUT });
  }

  delete: HTTPMethod = (url, options = {}) => {
    return this.request(url, { ...options, method: Method.DELETE });
  }

  request = (url: string, options: Options = { method: Method.GET }): Promise<any> => {
    const { headers = {}, method, data } = options;

    const isFormData = headers?.["Content-Type"] === "multipart/form-data";
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      xhr.open(method || Method.GET, `${this.endpoint}${url}`);
      
      if(!isFormData) {
        xhr.setRequestHeader("Content-Type", "application/json");
      }

      if (headers) {
        Object.entries(headers).forEach(([key, value]) => {
          if (!isFormData) {
            xhr.setRequestHeader(key, value);
          }
        })
      }

      xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status < 400) {
            resolve(xhr.response);
          } else {
            reject(xhr.response);
          }
        }
      }

      xhr.onload = () => {
        resolve(xhr);
      };

      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.ontimeout = reject;
      xhr.withCredentials = true;
      xhr.responseType = "json";

      if (method === Method.GET || !data) {
        xhr.send();
      } else if (isFormData) {
        xhr.send(data as XMLHttpRequestBodyInit);
      } else {
        xhr.send(JSON.stringify(data));
      }
    });
  }
}
