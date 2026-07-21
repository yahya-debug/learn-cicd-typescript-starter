import { getAPIKey } from "../api/auth.js";
import { describe, expect, test } from "vitest";

describe("auth", () => {
  test("authorization header is found", () => {
    const authHeader = {
      authorization: "ApiKey Tok",
    };
    expect(getAPIKey(authHeader)).toBeDefined();
  });
});
