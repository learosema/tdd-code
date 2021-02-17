import { Vector, vec2, vec3, add, sub, length, distance } from "./index";

describe("Vector initialization", () => {
  test("vec2 function should initialize a Vector type with x and y components defined", () => {
    const vec: Vector = vec2(1, 2);
    expect(vec.x).toBe(1);
    expect(vec.y).toBe(2);
    expect(vec.z).toBe(0);
  });

  test("vec3 function should initialize a Vector type with x, y and z components defined", () => {
    const vec: Vector = vec3(1, 2, 3);
    expect(vec.x).toBe(1);
    expect(vec.y).toBe(2);
    expect(vec.z).toBe(3);
  });
});

describe("Vector arithmetics", () => {
  test("add should take 2 parameters of type Vector and return the addition of two", () => {
    const a = vec3(1, 2, 3);
    const b = vec3(2, 3, 4);
    expect(add(a, b)).toStrictEqual({ x: 3, y: 5, z: 7 });
  });

  test("sub should take 2 parameters of type Vector and return the subtraction of two", () => {
    const a = vec3(1, 2, 3);
    const b = vec3(2, 3, 4);
    expect(sub(a, b)).toStrictEqual({ x: -1, y: -1, z: -1 });
  });
});

describe("Vector length and distance", () => {
  test("length should return the length of a vector", () => {
    const a = vec2(3, 4);
    expect(length(a)).toBe(5);
  });

  test("distance should return the distance between two vectors", () => {
    const a = vec2(4, 5);
    const b = vec2(1, 1);
    expect(distance(a, b)).toBe(5);
  });
});
