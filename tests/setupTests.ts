import "@testing-library/jest-dom";
import { setupServer } from "msw/node";
import { http, HttpResponse } from "msw";
import { beforeAll, afterEach, afterAll } from "vitest";

export const handlers = [
  http.get("http://localhost:8080/actuator/health", () => {
    return HttpResponse.json({ status: "UP" }, { status: 200 });
  }),
];

export const server = setupServer(...handlers);

beforeAll(() => {
  server.listen();
});
afterEach(() => {
  server.resetHandlers();
});
afterAll(() => {
  server.close();
});
