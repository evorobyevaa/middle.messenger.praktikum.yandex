/* eslint-disable @typescript-eslint/ban-ts-comment */
import { expect } from "chai";
import HTTPTransport from "./HTTPTransport";

import sinon, { SinonFakeXMLHttpRequest, SinonFakeXMLHttpRequestStatic } from 'sinon';

describe('Отправка запросов', () => {
	let xhr: SinonFakeXMLHttpRequestStatic;
  let instance: HTTPTransport;
  const requests: SinonFakeXMLHttpRequest[] = [];

  beforeEach(() => {
    xhr = sinon.useFakeXMLHttpRequest();
    
    // @ts-expect-error
    global.XMLHttpRequest = xhr;

    xhr.onCreate = ((request: SinonFakeXMLHttpRequest) => {
      requests.push(request);
    });
    instance = new HTTPTransport("/auth");
  });
	
	afterEach(() => {
    requests.length = 0;
  })


	it('Проверка, отправляются ли GET запросы', () => {
		instance.get("/user", {});

    const [request] = requests;
    
    expect(request.method).to.eq("GET");
	})

  it('Проверка, отправляются ли POST запросы', () => {
		instance.post("/user", {});

    const [request] = requests;
    
    expect(request.method).to.eq("POST");
	})
	
	it('Проверка, отправляются ли PUT запросы', () => {
		instance.put("/user", {});

    const [request] = requests;
    
    expect(request.method).to.eq("PUT");
	})

  it('Проверка, отправляются ли DELETE запросы', () => {
		instance.delete("/user", {});

    const [request] = requests;
    
    expect(request.method).to.eq("DELETE");
	})
})
