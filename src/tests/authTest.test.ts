import { describe, expect, test } from "vitest";

const person = undefined;

describe("person", () => {
  test("person is defined", () => {
    expect(person).toBeDefined();
  });

  // test("is active", () => {
  //   expect(person.isActive).toBeTruthy();
  // });
});
