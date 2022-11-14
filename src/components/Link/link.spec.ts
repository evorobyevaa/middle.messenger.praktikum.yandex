import { Link } from "./link";
import { expect } from "chai";
import { Router } from "core";
import sinon from "sinon";

describe("Link", () => {
  it("Рендер", () => {
    new Link({ href: "/" });
  });

  it("Проверка ссылки", () => {
    const link = new Link({ href: "/" });
    const element = link.element;

    expect(element).to.be.instanceof(window.HTMLAnchorElement);
  });

  it("Переход по событию click", () => {
    const link = new Link({ href: "/" });
    const spy = sinon.spy(Router, "go");
    const element = link.element as HTMLAnchorElement;

    element.click();

    expect(spy.calledOnce).to.eq(true);
  });
});
