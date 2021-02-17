export type Vector = {
  x: number;
  y: number;
  z: number;
};

export function vec2(x: number, y: number): Vector {
  return { x, y, z: 0 };
}

export function vec3(x: number, y: number, z: number): Vector {
  return { x, y, z };
}

export function add(a: Vector, b: Vector): Vector {
  return { x: a.x + b.x, y: a.y + b.y, z: a.z + b.z };
}

export function sub(a: Vector, b: Vector): Vector {
  return { x: a.x - b.x, y: a.y - b.y, z: a.z - b.z };
}

export function length(a: Vector): number {
  return Math.hypot(a.x, a.y, a.z);
}

export function distance(a: Vector, b: Vector): number {
  return length(sub(b, a));
}
