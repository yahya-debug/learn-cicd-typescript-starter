import { getAPIKey } from "../api/auth.js";
import { describe, expect, test } from "vitest";

describe("auth", () => {
  test("authorization header is found", () => {
    const authHeader = {
      Authorization: "Bearer Tok",
    };
    expect(getAPIKey(authHeader)).toBeDefined();
  });
});
