/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const ar = "146";
const $t = "srgb", yn = "srgb-linear";
const wr = "300 es";
class ti {
  addEventListener(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    const n = this._listeners;
    n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
  }
  hasEventListener(e, t) {
    if (this._listeners === void 0)
      return !1;
    const n = this._listeners;
    return n[e] !== void 0 && n[e].indexOf(t) !== -1;
  }
  removeEventListener(e, t) {
    if (this._listeners === void 0)
      return;
    const i = this._listeners[e];
    if (i !== void 0) {
      const s = i.indexOf(t);
      s !== -1 && i.splice(s, 1);
    }
  }
  dispatchEvent(e) {
    if (this._listeners === void 0)
      return;
    const n = this._listeners[e.type];
    if (n !== void 0) {
      e.target = this;
      const i = n.slice(0);
      for (let s = 0, r = i.length; s < r; s++)
        i[s].call(this, e);
      e.target = null;
    }
  }
}
const it = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
let Tr = 1234567;
const yi = Math.PI / 180, Si = 180 / Math.PI;
function Ct() {
  const a = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
  return (it[a & 255] + it[a >> 8 & 255] + it[a >> 16 & 255] + it[a >> 24 & 255] + "-" + it[e & 255] + it[e >> 8 & 255] + "-" + it[e >> 16 & 15 | 64] + it[e >> 24 & 255] + "-" + it[t & 63 | 128] + it[t >> 8 & 255] + "-" + it[t >> 16 & 255] + it[t >> 24 & 255] + it[n & 255] + it[n >> 8 & 255] + it[n >> 16 & 255] + it[n >> 24 & 255]).toLowerCase();
}
function lt(a, e, t) {
  return Math.max(e, Math.min(t, a));
}
function or(a, e) {
  return (a % e + e) % e;
}
function Ro(a, e, t, n, i) {
  return n + (a - e) * (i - n) / (t - e);
}
function Lo(a, e, t) {
  return a !== e ? (t - a) / (e - a) : 0;
}
function Mi(a, e, t) {
  return (1 - t) * a + t * e;
}
function Do(a, e, t, n) {
  return Mi(a, e, 1 - Math.exp(-t * n));
}
function Po(a, e = 1) {
  return e - Math.abs(or(a, e * 2) - e);
}
function Io(a, e, t) {
  return a <= e ? 0 : a >= t ? 1 : (a = (a - e) / (t - e), a * a * (3 - 2 * a));
}
function No(a, e, t) {
  return a <= e ? 0 : a >= t ? 1 : (a = (a - e) / (t - e), a * a * a * (a * (a * 6 - 15) + 10));
}
function Fo(a, e) {
  return a + Math.floor(Math.random() * (e - a + 1));
}
function Uo(a, e) {
  return a + Math.random() * (e - a);
}
function Oo(a) {
  return a * (0.5 - Math.random());
}
function Bo(a) {
  a !== void 0 && (Tr = a);
  let e = Tr += 1831565813;
  return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
}
function zo(a) {
  return a * yi;
}
function Go(a) {
  return a * Si;
}
function Qs(a) {
  return (a & a - 1) === 0 && a !== 0;
}
function Ha(a) {
  return Math.pow(2, Math.ceil(Math.log(a) / Math.LN2));
}
function ls(a) {
  return Math.pow(2, Math.floor(Math.log(a) / Math.LN2));
}
function ko(a, e, t, n, i) {
  const s = Math.cos, r = Math.sin, o = s(t / 2), l = r(t / 2), c = s((e + n) / 2), u = r((e + n) / 2), h = s((e - n) / 2), d = r((e - n) / 2), p = s((n - e) / 2), g = r((n - e) / 2);
  switch (i) {
    case "XYX":
      a.set(o * u, l * h, l * d, o * c);
      break;
    case "YZY":
      a.set(l * d, o * u, l * h, o * c);
      break;
    case "ZXZ":
      a.set(l * h, l * d, o * u, o * c);
      break;
    case "XZX":
      a.set(o * u, l * g, l * p, o * c);
      break;
    case "YXY":
      a.set(l * p, o * u, l * g, o * c);
      break;
    case "ZYZ":
      a.set(l * g, l * p, o * u, o * c);
      break;
    default:
      console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + i);
  }
}
function Xt(a, e) {
  switch (e.constructor) {
    case Float32Array:
      return a;
    case Uint16Array:
      return a / 65535;
    case Uint8Array:
      return a / 255;
    case Int16Array:
      return Math.max(a / 32767, -1);
    case Int8Array:
      return Math.max(a / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function Be(a, e) {
  switch (e.constructor) {
    case Float32Array:
      return a;
    case Uint16Array:
      return Math.round(a * 65535);
    case Uint8Array:
      return Math.round(a * 255);
    case Int16Array:
      return Math.round(a * 32767);
    case Int8Array:
      return Math.round(a * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
var Vo = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  DEG2RAD: yi,
  RAD2DEG: Si,
  generateUUID: Ct,
  clamp: lt,
  euclideanModulo: or,
  mapLinear: Ro,
  inverseLerp: Lo,
  lerp: Mi,
  damp: Do,
  pingpong: Po,
  smoothstep: Io,
  smootherstep: No,
  randInt: Fo,
  randFloat: Uo,
  randFloatSpread: Oo,
  seededRandom: Bo,
  degToRad: zo,
  radToDeg: Go,
  isPowerOfTwo: Qs,
  ceilPowerOfTwo: Ha,
  floorPowerOfTwo: ls,
  setQuaternionFromProperEuler: ko,
  normalize: Be,
  denormalize: Xt
});
class Le {
  constructor(e = 0, t = 0) {
    Le.prototype.isVector2 = !0, this.x = e, this.y = t;
  }
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  set(e, t) {
    return this.x = e, this.y = t, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this;
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  applyMatrix3(e) {
    const t = this.x, n = this.y, i = e.elements;
    return this.x = i[0] * t + i[3] * n + i[6], this.y = i[1] * t + i[4] * n + i[7], this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
  }
  roundToZero() {
    return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y;
    return t * t + n * n;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this;
  }
  rotateAround(e, t) {
    const n = Math.cos(t), i = Math.sin(t), s = this.x - e.x, r = this.y - e.y;
    return this.x = s * n - r * i + e.x, this.y = s * i + r * n + e.y, this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class Mt {
  constructor() {
    Mt.prototype.isMatrix3 = !0, this.elements = [
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ];
  }
  set(e, t, n, i, s, r, o, l, c) {
    const u = this.elements;
    return u[0] = e, u[1] = i, u[2] = o, u[3] = t, u[4] = s, u[5] = l, u[6] = n, u[7] = r, u[8] = c, this;
  }
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ), this;
  }
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], this;
  }
  extractBasis(e, t, n) {
    return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
  }
  setFromMatrix4(e) {
    const t = e.elements;
    return this.set(
      t[0],
      t[4],
      t[8],
      t[1],
      t[5],
      t[9],
      t[2],
      t[6],
      t[10]
    ), this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, i = t.elements, s = this.elements, r = n[0], o = n[3], l = n[6], c = n[1], u = n[4], h = n[7], d = n[2], p = n[5], g = n[8], m = i[0], f = i[3], _ = i[6], T = i[1], M = i[4], S = i[7], b = i[2], A = i[5], D = i[8];
    return s[0] = r * m + o * T + l * b, s[3] = r * f + o * M + l * A, s[6] = r * _ + o * S + l * D, s[1] = c * m + u * T + h * b, s[4] = c * f + u * M + h * A, s[7] = c * _ + u * S + h * D, s[2] = d * m + p * T + g * b, s[5] = d * f + p * M + g * A, s[8] = d * _ + p * S + g * D, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], s = e[3], r = e[4], o = e[5], l = e[6], c = e[7], u = e[8];
    return t * r * u - t * o * c - n * s * u + n * o * l + i * s * c - i * r * l;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], s = e[3], r = e[4], o = e[5], l = e[6], c = e[7], u = e[8], h = u * r - o * c, d = o * l - u * s, p = c * s - r * l, g = t * h + n * d + i * p;
    if (g === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const m = 1 / g;
    return e[0] = h * m, e[1] = (i * c - u * n) * m, e[2] = (o * n - i * r) * m, e[3] = d * m, e[4] = (u * t - i * l) * m, e[5] = (i * s - o * t) * m, e[6] = p * m, e[7] = (n * l - c * t) * m, e[8] = (r * t - n * s) * m, this;
  }
  transpose() {
    let e;
    const t = this.elements;
    return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this;
  }
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  transposeIntoArray(e) {
    const t = this.elements;
    return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this;
  }
  setUvTransform(e, t, n, i, s, r, o) {
    const l = Math.cos(s), c = Math.sin(s);
    return this.set(
      n * l,
      n * c,
      -n * (l * r + c * o) + r + e,
      -i * c,
      i * l,
      -i * (-c * r + l * o) + o + t,
      0,
      0,
      1
    ), this;
  }
  scale(e, t) {
    const n = this.elements;
    return n[0] *= e, n[3] *= e, n[6] *= e, n[1] *= t, n[4] *= t, n[7] *= t, this;
  }
  rotate(e) {
    const t = Math.cos(e), n = Math.sin(e), i = this.elements, s = i[0], r = i[3], o = i[6], l = i[1], c = i[4], u = i[7];
    return i[0] = t * s + n * l, i[3] = t * r + n * c, i[6] = t * o + n * u, i[1] = -n * s + t * l, i[4] = -n * r + t * c, i[7] = -n * o + t * u, this;
  }
  translate(e, t) {
    const n = this.elements;
    return n[0] += e * n[2], n[3] += e * n[5], n[6] += e * n[8], n[1] += t * n[2], n[4] += t * n[5], n[7] += t * n[8], this;
  }
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let i = 0; i < 9; i++)
      if (t[i] !== n[i])
        return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 9; n++)
      this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e;
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
function Wa(a) {
  for (let e = a.length - 1; e >= 0; --e)
    if (a[e] >= 65535)
      return !0;
  return !1;
}
function bi(a) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", a);
}
function Sn(a) {
  return a < 0.04045 ? a * 0.0773993808 : Math.pow(a * 0.9478672986 + 0.0521327014, 2.4);
}
function rs(a) {
  return a < 31308e-7 ? a * 12.92 : 1.055 * Math.pow(a, 0.41666) - 0.055;
}
const xs = {
  [$t]: { [yn]: Sn },
  [yn]: { [$t]: rs }
}, wt = {
  legacyMode: !0,
  get workingColorSpace() {
    return yn;
  },
  set workingColorSpace(a) {
    console.warn("THREE.ColorManagement: .workingColorSpace is readonly.");
  },
  convert: function(a, e, t) {
    if (this.legacyMode || e === t || !e || !t)
      return a;
    if (xs[e] && xs[e][t] !== void 0) {
      const n = xs[e][t];
      return a.r = n(a.r), a.g = n(a.g), a.b = n(a.b), a;
    }
    throw new Error("Unsupported color space conversion.");
  },
  fromWorkingColorSpace: function(a, e) {
    return this.convert(a, this.workingColorSpace, e);
  },
  toWorkingColorSpace: function(a, e) {
    return this.convert(a, e, this.workingColorSpace);
  }
}, $a = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
}, Xe = { r: 0, g: 0, b: 0 }, Tt = { h: 0, s: 0, l: 0 }, Fi = { h: 0, s: 0, l: 0 };
function vs(a, e, t) {
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? a + (e - a) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? a + (e - a) * 6 * (2 / 3 - t) : a;
}
function Ui(a, e) {
  return e.r = a.r, e.g = a.g, e.b = a.b, e;
}
class Me {
  constructor(e, t, n) {
    return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, t === void 0 && n === void 0 ? this.set(e) : this.setRGB(e, t, n);
  }
  set(e) {
    return e && e.isColor ? this.copy(e) : typeof e == "number" ? this.setHex(e) : typeof e == "string" && this.setStyle(e), this;
  }
  setScalar(e) {
    return this.r = e, this.g = e, this.b = e, this;
  }
  setHex(e, t = $t) {
    return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, wt.toWorkingColorSpace(this, t), this;
  }
  setRGB(e, t, n, i = yn) {
    return this.r = e, this.g = t, this.b = n, wt.toWorkingColorSpace(this, i), this;
  }
  setHSL(e, t, n, i = yn) {
    if (e = or(e, 1), t = lt(t, 0, 1), n = lt(n, 0, 1), t === 0)
      this.r = this.g = this.b = n;
    else {
      const s = n <= 0.5 ? n * (1 + t) : n + t - n * t, r = 2 * n - s;
      this.r = vs(r, s, e + 1 / 3), this.g = vs(r, s, e), this.b = vs(r, s, e - 1 / 3);
    }
    return wt.toWorkingColorSpace(this, i), this;
  }
  setStyle(e, t = $t) {
    function n(s) {
      s !== void 0 && parseFloat(s) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.");
    }
    let i;
    if (i = /^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)) {
      let s;
      const r = i[1], o = i[2];
      switch (r) {
        case "rgb":
        case "rgba":
          if (s = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return this.r = Math.min(255, parseInt(s[1], 10)) / 255, this.g = Math.min(255, parseInt(s[2], 10)) / 255, this.b = Math.min(255, parseInt(s[3], 10)) / 255, wt.toWorkingColorSpace(this, t), n(s[4]), this;
          if (s = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return this.r = Math.min(100, parseInt(s[1], 10)) / 100, this.g = Math.min(100, parseInt(s[2], 10)) / 100, this.b = Math.min(100, parseInt(s[3], 10)) / 100, wt.toWorkingColorSpace(this, t), n(s[4]), this;
          break;
        case "hsl":
        case "hsla":
          if (s = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) {
            const l = parseFloat(s[1]) / 360, c = parseFloat(s[2]) / 100, u = parseFloat(s[3]) / 100;
            return n(s[4]), this.setHSL(l, c, u, t);
          }
          break;
      }
    } else if (i = /^\#([A-Fa-f\d]+)$/.exec(e)) {
      const s = i[1], r = s.length;
      if (r === 3)
        return this.r = parseInt(s.charAt(0) + s.charAt(0), 16) / 255, this.g = parseInt(s.charAt(1) + s.charAt(1), 16) / 255, this.b = parseInt(s.charAt(2) + s.charAt(2), 16) / 255, wt.toWorkingColorSpace(this, t), this;
      if (r === 6)
        return this.r = parseInt(s.charAt(0) + s.charAt(1), 16) / 255, this.g = parseInt(s.charAt(2) + s.charAt(3), 16) / 255, this.b = parseInt(s.charAt(4) + s.charAt(5), 16) / 255, wt.toWorkingColorSpace(this, t), this;
    }
    return e && e.length > 0 ? this.setColorName(e, t) : this;
  }
  setColorName(e, t = $t) {
    const n = $a[e.toLowerCase()];
    return n !== void 0 ? this.setHex(n, t) : console.warn("THREE.Color: Unknown color " + e), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return this.r = e.r, this.g = e.g, this.b = e.b, this;
  }
  copySRGBToLinear(e) {
    return this.r = Sn(e.r), this.g = Sn(e.g), this.b = Sn(e.b), this;
  }
  copyLinearToSRGB(e) {
    return this.r = rs(e.r), this.g = rs(e.g), this.b = rs(e.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = $t) {
    return wt.fromWorkingColorSpace(Ui(this, Xe), e), lt(Xe.r * 255, 0, 255) << 16 ^ lt(Xe.g * 255, 0, 255) << 8 ^ lt(Xe.b * 255, 0, 255) << 0;
  }
  getHexString(e = $t) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = yn) {
    wt.fromWorkingColorSpace(Ui(this, Xe), t);
    const n = Xe.r, i = Xe.g, s = Xe.b, r = Math.max(n, i, s), o = Math.min(n, i, s);
    let l, c;
    const u = (o + r) / 2;
    if (o === r)
      l = 0, c = 0;
    else {
      const h = r - o;
      switch (c = u <= 0.5 ? h / (r + o) : h / (2 - r - o), r) {
        case n:
          l = (i - s) / h + (i < s ? 6 : 0);
          break;
        case i:
          l = (s - n) / h + 2;
          break;
        case s:
          l = (n - i) / h + 4;
          break;
      }
      l /= 6;
    }
    return e.h = l, e.s = c, e.l = u, e;
  }
  getRGB(e, t = yn) {
    return wt.fromWorkingColorSpace(Ui(this, Xe), t), e.r = Xe.r, e.g = Xe.g, e.b = Xe.b, e;
  }
  getStyle(e = $t) {
    return wt.fromWorkingColorSpace(Ui(this, Xe), e), e !== $t ? `color(${e} ${Xe.r} ${Xe.g} ${Xe.b})` : `rgb(${Xe.r * 255 | 0},${Xe.g * 255 | 0},${Xe.b * 255 | 0})`;
  }
  offsetHSL(e, t, n) {
    return this.getHSL(Tt), Tt.h += e, Tt.s += t, Tt.l += n, this.setHSL(Tt.h, Tt.s, Tt.l), this;
  }
  add(e) {
    return this.r += e.r, this.g += e.g, this.b += e.b, this;
  }
  addColors(e, t) {
    return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this;
  }
  addScalar(e) {
    return this.r += e, this.g += e, this.b += e, this;
  }
  sub(e) {
    return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this;
  }
  multiply(e) {
    return this.r *= e.r, this.g *= e.g, this.b *= e.b, this;
  }
  multiplyScalar(e) {
    return this.r *= e, this.g *= e, this.b *= e, this;
  }
  lerp(e, t) {
    return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this;
  }
  lerpColors(e, t, n) {
    return this.r = e.r + (t.r - e.r) * n, this.g = e.g + (t.g - e.g) * n, this.b = e.b + (t.b - e.b) * n, this;
  }
  lerpHSL(e, t) {
    this.getHSL(Tt), e.getHSL(Fi);
    const n = Mi(Tt.h, Fi.h, t), i = Mi(Tt.s, Fi.s, t), s = Mi(Tt.l, Fi.l, t);
    return this.setHSL(n, i, s), this;
  }
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  fromArray(e, t = 0) {
    return this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e;
  }
  fromBufferAttribute(e, t) {
    return this.r = e.getX(t), this.g = e.getY(t), this.b = e.getZ(t), this;
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
Me.NAMES = $a;
let Dn;
class qa {
  static getDataURL(e) {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u")
      return e.src;
    let t;
    if (e instanceof HTMLCanvasElement)
      t = e;
    else {
      Dn === void 0 && (Dn = bi("canvas")), Dn.width = e.width, Dn.height = e.height;
      const n = Dn.getContext("2d");
      e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height), t = Dn;
    }
    return t.width > 2048 || t.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", e), t.toDataURL("image/jpeg", 0.6)) : t.toDataURL("image/png");
  }
  static sRGBToLinear(e) {
    if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
      const t = bi("canvas");
      t.width = e.width, t.height = e.height;
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const i = n.getImageData(0, 0, e.width, e.height), s = i.data;
      for (let r = 0; r < s.length; r++)
        s[r] = Sn(s[r] / 255) * 255;
      return n.putImageData(i, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[n] = Math.floor(Sn(t[n] / 255) * 255) : t[n] = Sn(t[n]);
      return {
        data: t,
        width: e.width,
        height: e.height
      };
    } else
      return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
  }
}
class Xa {
  constructor(e = null) {
    this.isSource = !0, this.uuid = Ct(), this.data = e, this.version = 0;
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.images[this.uuid] !== void 0)
      return e.images[this.uuid];
    const n = {
      uuid: this.uuid,
      url: ""
    }, i = this.data;
    if (i !== null) {
      let s;
      if (Array.isArray(i)) {
        s = [];
        for (let r = 0, o = i.length; r < o; r++)
          i[r].isDataTexture ? s.push(ys(i[r].image)) : s.push(ys(i[r]));
      } else
        s = ys(i);
      n.url = s;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function ys(a) {
  return typeof HTMLImageElement < "u" && a instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && a instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && a instanceof ImageBitmap ? qa.getDataURL(a) : a.data ? {
    data: Array.from(a.data),
    width: a.width,
    height: a.height,
    type: a.data.constructor.name
  } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let Ho = 0;
class ut extends ti {
  constructor(e = ut.DEFAULT_IMAGE, t = ut.DEFAULT_MAPPING, n = 1001, i = 1001, s = 1006, r = 1008, o = 1023, l = 1009, c = 1, u = 3e3) {
    super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: Ho++ }), this.uuid = Ct(), this.name = "", this.source = new Xa(e), this.mipmaps = [], this.mapping = t, this.wrapS = n, this.wrapT = i, this.magFilter = s, this.minFilter = r, this.anisotropy = c, this.format = o, this.internalFormat = null, this.type = l, this.offset = new Le(0, 0), this.repeat = new Le(1, 1), this.center = new Le(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new Mt(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.encoding = u, this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1, this.needsPMREMUpdate = !1;
  }
  get image() {
    return this.source.data;
  }
  set image(e) {
    this.source.data = e;
  }
  updateMatrix() {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.name = e.name, this.source = e.source, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.encoding = e.encoding, this.userData = JSON.parse(JSON.stringify(e.userData)), this.needsUpdate = !0, this;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.textures[this.uuid] !== void 0)
      return e.textures[this.uuid];
    const n = {
      metadata: {
        version: 4.5,
        type: "Texture",
        generator: "Texture.toJSON"
      },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(e).uuid,
      mapping: this.mapping,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      type: this.type,
      encoding: this.encoding,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment
    };
    return JSON.stringify(this.userData) !== "{}" && (n.userData = this.userData), t || (e.textures[this.uuid] = n), n;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(e) {
    if (this.mapping !== 300)
      return e;
    if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1)
      switch (this.wrapS) {
        case 1e3:
          e.x = e.x - Math.floor(e.x);
          break;
        case 1001:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case 1002:
          Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
          break;
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case 1e3:
          e.y = e.y - Math.floor(e.y);
          break;
        case 1001:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case 1002:
          Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y);
          break;
      }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  set needsUpdate(e) {
    e === !0 && (this.version++, this.source.needsUpdate = !0);
  }
}
ut.DEFAULT_IMAGE = null;
ut.DEFAULT_MAPPING = 300;
class ze {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    ze.prototype.isVector4 = !0, this.x = e, this.y = t, this.z = n, this.w = i;
  }
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  set(e, t, n, i) {
    return this.x = e, this.y = t, this.z = n, this.w = i, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this.w = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setZ(e) {
    return this.z = e, this;
  }
  setW(e) {
    return this.w = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w !== void 0 ? e.w : 1, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this.w += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this.w *= e.w, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this;
  }
  applyMatrix4(e) {
    const t = this.x, n = this.y, i = this.z, s = this.w, r = e.elements;
    return this.x = r[0] * t + r[4] * n + r[8] * i + r[12] * s, this.y = r[1] * t + r[5] * n + r[9] * i + r[13] * s, this.z = r[2] * t + r[6] * n + r[10] * i + r[14] * s, this.w = r[3] * t + r[7] * n + r[11] * i + r[15] * s, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    const t = Math.sqrt(1 - e.w * e.w);
    return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this;
  }
  setAxisAngleFromRotationMatrix(e) {
    let t, n, i, s;
    const l = e.elements, c = l[0], u = l[4], h = l[8], d = l[1], p = l[5], g = l[9], m = l[2], f = l[6], _ = l[10];
    if (Math.abs(u - d) < 0.01 && Math.abs(h - m) < 0.01 && Math.abs(g - f) < 0.01) {
      if (Math.abs(u + d) < 0.1 && Math.abs(h + m) < 0.1 && Math.abs(g + f) < 0.1 && Math.abs(c + p + _ - 3) < 0.1)
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const M = (c + 1) / 2, S = (p + 1) / 2, b = (_ + 1) / 2, A = (u + d) / 4, D = (h + m) / 4, x = (g + f) / 4;
      return M > S && M > b ? M < 0.01 ? (n = 0, i = 0.707106781, s = 0.707106781) : (n = Math.sqrt(M), i = A / n, s = D / n) : S > b ? S < 0.01 ? (n = 0.707106781, i = 0, s = 0.707106781) : (i = Math.sqrt(S), n = A / i, s = x / i) : b < 0.01 ? (n = 0.707106781, i = 0.707106781, s = 0) : (s = Math.sqrt(b), n = D / s, i = x / s), this.set(n, i, s, t), this;
    }
    let T = Math.sqrt((f - g) * (f - g) + (h - m) * (h - m) + (d - u) * (d - u));
    return Math.abs(T) < 1e-3 && (T = 1), this.x = (f - g) / T, this.y = (h - m) / T, this.z = (d - u) / T, this.w = Math.acos((c + p + _ - 1) / 2), this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this.w = Math.max(e.w, Math.min(t.w, this.w)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this.w = Math.max(e, Math.min(t, this.w)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
  }
  roundToZero() {
    return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this.w = e.w + (t.w - e.w) * n, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this.w = e.getW(t), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class wn extends ti {
  constructor(e = 1, t = 1, n = {}) {
    super(), this.isWebGLRenderTarget = !0, this.width = e, this.height = t, this.depth = 1, this.scissor = new ze(0, 0, e, t), this.scissorTest = !1, this.viewport = new ze(0, 0, e, t);
    const i = { width: e, height: t, depth: 1 };
    this.texture = new ut(i, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.encoding), this.texture.isRenderTargetTexture = !0, this.texture.flipY = !1, this.texture.generateMipmaps = n.generateMipmaps !== void 0 ? n.generateMipmaps : !1, this.texture.internalFormat = n.internalFormat !== void 0 ? n.internalFormat : null, this.texture.minFilter = n.minFilter !== void 0 ? n.minFilter : 1006, this.depthBuffer = n.depthBuffer !== void 0 ? n.depthBuffer : !0, this.stencilBuffer = n.stencilBuffer !== void 0 ? n.stencilBuffer : !1, this.depthTexture = n.depthTexture !== void 0 ? n.depthTexture : null, this.samples = n.samples !== void 0 ? n.samples : 0;
  }
  setSize(e, t, n = 1) {
    (this.width !== e || this.height !== t || this.depth !== n) && (this.width = e, this.height = t, this.depth = n, this.texture.image.width = e, this.texture.image.height = t, this.texture.image.depth = n, this.dispose()), this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.width = e.width, this.height = e.height, this.depth = e.depth, this.viewport.copy(e.viewport), this.texture = e.texture.clone(), this.texture.isRenderTargetTexture = !0;
    const t = Object.assign({}, e.texture.image);
    return this.texture.source = new Xa(t), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class ja extends ut {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null), this.isDataArrayTexture = !0, this.image = { data: e, width: t, height: n, depth: i }, this.magFilter = 1003, this.minFilter = 1003, this.wrapR = 1001, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class Wo extends ut {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null), this.isData3DTexture = !0, this.image = { data: e, width: t, height: n, depth: i }, this.magFilter = 1003, this.minFilter = 1003, this.wrapR = 1001, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class ln {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    this.isQuaternion = !0, this._x = e, this._y = t, this._z = n, this._w = i;
  }
  static slerpFlat(e, t, n, i, s, r, o) {
    let l = n[i + 0], c = n[i + 1], u = n[i + 2], h = n[i + 3];
    const d = s[r + 0], p = s[r + 1], g = s[r + 2], m = s[r + 3];
    if (o === 0) {
      e[t + 0] = l, e[t + 1] = c, e[t + 2] = u, e[t + 3] = h;
      return;
    }
    if (o === 1) {
      e[t + 0] = d, e[t + 1] = p, e[t + 2] = g, e[t + 3] = m;
      return;
    }
    if (h !== m || l !== d || c !== p || u !== g) {
      let f = 1 - o;
      const _ = l * d + c * p + u * g + h * m, T = _ >= 0 ? 1 : -1, M = 1 - _ * _;
      if (M > Number.EPSILON) {
        const b = Math.sqrt(M), A = Math.atan2(b, _ * T);
        f = Math.sin(f * A) / b, o = Math.sin(o * A) / b;
      }
      const S = o * T;
      if (l = l * f + d * S, c = c * f + p * S, u = u * f + g * S, h = h * f + m * S, f === 1 - o) {
        const b = 1 / Math.sqrt(l * l + c * c + u * u + h * h);
        l *= b, c *= b, u *= b, h *= b;
      }
    }
    e[t] = l, e[t + 1] = c, e[t + 2] = u, e[t + 3] = h;
  }
  static multiplyQuaternionsFlat(e, t, n, i, s, r) {
    const o = n[i], l = n[i + 1], c = n[i + 2], u = n[i + 3], h = s[r], d = s[r + 1], p = s[r + 2], g = s[r + 3];
    return e[t] = o * g + u * h + l * p - c * d, e[t + 1] = l * g + u * d + c * h - o * p, e[t + 2] = c * g + u * p + o * d - l * h, e[t + 3] = u * g - o * h - l * d - c * p, e;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(e) {
    this._w = e, this._onChangeCallback();
  }
  set(e, t, n, i) {
    return this._x = e, this._y = t, this._z = n, this._w = i, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this;
  }
  setFromEuler(e, t) {
    const n = e._x, i = e._y, s = e._z, r = e._order, o = Math.cos, l = Math.sin, c = o(n / 2), u = o(i / 2), h = o(s / 2), d = l(n / 2), p = l(i / 2), g = l(s / 2);
    switch (r) {
      case "XYZ":
        this._x = d * u * h + c * p * g, this._y = c * p * h - d * u * g, this._z = c * u * g + d * p * h, this._w = c * u * h - d * p * g;
        break;
      case "YXZ":
        this._x = d * u * h + c * p * g, this._y = c * p * h - d * u * g, this._z = c * u * g - d * p * h, this._w = c * u * h + d * p * g;
        break;
      case "ZXY":
        this._x = d * u * h - c * p * g, this._y = c * p * h + d * u * g, this._z = c * u * g + d * p * h, this._w = c * u * h - d * p * g;
        break;
      case "ZYX":
        this._x = d * u * h - c * p * g, this._y = c * p * h + d * u * g, this._z = c * u * g - d * p * h, this._w = c * u * h + d * p * g;
        break;
      case "YZX":
        this._x = d * u * h + c * p * g, this._y = c * p * h + d * u * g, this._z = c * u * g - d * p * h, this._w = c * u * h - d * p * g;
        break;
      case "XZY":
        this._x = d * u * h - c * p * g, this._y = c * p * h - d * u * g, this._z = c * u * g + d * p * h, this._w = c * u * h + d * p * g;
        break;
      default:
        console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + r);
    }
    return t !== !1 && this._onChangeCallback(), this;
  }
  setFromAxisAngle(e, t) {
    const n = t / 2, i = Math.sin(n);
    return this._x = e.x * i, this._y = e.y * i, this._z = e.z * i, this._w = Math.cos(n), this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e) {
    const t = e.elements, n = t[0], i = t[4], s = t[8], r = t[1], o = t[5], l = t[9], c = t[2], u = t[6], h = t[10], d = n + o + h;
    if (d > 0) {
      const p = 0.5 / Math.sqrt(d + 1);
      this._w = 0.25 / p, this._x = (u - l) * p, this._y = (s - c) * p, this._z = (r - i) * p;
    } else if (n > o && n > h) {
      const p = 2 * Math.sqrt(1 + n - o - h);
      this._w = (u - l) / p, this._x = 0.25 * p, this._y = (i + r) / p, this._z = (s + c) / p;
    } else if (o > h) {
      const p = 2 * Math.sqrt(1 + o - n - h);
      this._w = (s - c) / p, this._x = (i + r) / p, this._y = 0.25 * p, this._z = (l + u) / p;
    } else {
      const p = 2 * Math.sqrt(1 + h - n - o);
      this._w = (r - i) / p, this._x = (s + c) / p, this._y = (l + u) / p, this._z = 0.25 * p;
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    return n < Number.EPSILON ? (n = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = n)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = n), this.normalize();
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(lt(this.dot(e), -1, 1)));
  }
  rotateTowards(e, t) {
    const n = this.angleTo(e);
    if (n === 0)
      return this;
    const i = Math.min(1, t / n);
    return this.slerp(e, i), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
  }
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  normalize() {
    let e = this.length();
    return e === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this._onChangeCallback(), this;
  }
  multiply(e) {
    return this.multiplyQuaternions(this, e);
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  multiplyQuaternions(e, t) {
    const n = e._x, i = e._y, s = e._z, r = e._w, o = t._x, l = t._y, c = t._z, u = t._w;
    return this._x = n * u + r * o + i * c - s * l, this._y = i * u + r * l + s * o - n * c, this._z = s * u + r * c + n * l - i * o, this._w = r * u - n * o - i * l - s * c, this._onChangeCallback(), this;
  }
  slerp(e, t) {
    if (t === 0)
      return this;
    if (t === 1)
      return this.copy(e);
    const n = this._x, i = this._y, s = this._z, r = this._w;
    let o = r * e._w + n * e._x + i * e._y + s * e._z;
    if (o < 0 ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, o = -o) : this.copy(e), o >= 1)
      return this._w = r, this._x = n, this._y = i, this._z = s, this;
    const l = 1 - o * o;
    if (l <= Number.EPSILON) {
      const p = 1 - t;
      return this._w = p * r + t * this._w, this._x = p * n + t * this._x, this._y = p * i + t * this._y, this._z = p * s + t * this._z, this.normalize(), this._onChangeCallback(), this;
    }
    const c = Math.sqrt(l), u = Math.atan2(c, o), h = Math.sin((1 - t) * u) / c, d = Math.sin(t * u) / c;
    return this._w = r * h + this._w * d, this._x = n * h + this._x * d, this._y = i * h + this._y * d, this._z = s * h + this._z * d, this._onChangeCallback(), this;
  }
  slerpQuaternions(e, t, n) {
    return this.copy(e).slerp(t, n);
  }
  random() {
    const e = Math.random(), t = Math.sqrt(1 - e), n = Math.sqrt(e), i = 2 * Math.PI * Math.random(), s = 2 * Math.PI * Math.random();
    return this.set(
      t * Math.cos(i),
      n * Math.sin(s),
      n * Math.cos(s),
      t * Math.sin(i)
    );
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w;
  }
  fromArray(e, t = 0) {
    return this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this._onChangeCallback(), this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e;
  }
  fromBufferAttribute(e, t) {
    return this._x = e.getX(t), this._y = e.getY(t), this._z = e.getZ(t), this._w = e.getW(t), this;
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class R {
  constructor(e = 0, t = 0, n = 0) {
    R.prototype.isVector3 = !0, this.x = e, this.y = t, this.z = n;
  }
  set(e, t, n) {
    return n === void 0 && (n = this.z), this.x = e, this.y = t, this.z = n, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setZ(e) {
    return this.z = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this;
  }
  multiplyVectors(e, t) {
    return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this;
  }
  applyEuler(e) {
    return this.applyQuaternion(Er.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(Er.setFromAxisAngle(e, t));
  }
  applyMatrix3(e) {
    const t = this.x, n = this.y, i = this.z, s = e.elements;
    return this.x = s[0] * t + s[3] * n + s[6] * i, this.y = s[1] * t + s[4] * n + s[7] * i, this.z = s[2] * t + s[5] * n + s[8] * i, this;
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    const t = this.x, n = this.y, i = this.z, s = e.elements, r = 1 / (s[3] * t + s[7] * n + s[11] * i + s[15]);
    return this.x = (s[0] * t + s[4] * n + s[8] * i + s[12]) * r, this.y = (s[1] * t + s[5] * n + s[9] * i + s[13]) * r, this.z = (s[2] * t + s[6] * n + s[10] * i + s[14]) * r, this;
  }
  applyQuaternion(e) {
    const t = this.x, n = this.y, i = this.z, s = e.x, r = e.y, o = e.z, l = e.w, c = l * t + r * i - o * n, u = l * n + o * t - s * i, h = l * i + s * n - r * t, d = -s * t - r * n - o * i;
    return this.x = c * l + d * -s + u * -o - h * -r, this.y = u * l + d * -r + h * -s - c * -o, this.z = h * l + d * -o + c * -r - u * -s, this;
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld);
  }
  transformDirection(e) {
    const t = this.x, n = this.y, i = this.z, s = e.elements;
    return this.x = s[0] * t + s[4] * n + s[8] * i, this.y = s[1] * t + s[5] * n + s[9] * i, this.z = s[2] * t + s[6] * n + s[10] * i, this.normalize();
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this.z /= e.z, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
  }
  roundToZero() {
    return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this;
  }
  cross(e) {
    return this.crossVectors(this, e);
  }
  crossVectors(e, t) {
    const n = e.x, i = e.y, s = e.z, r = t.x, o = t.y, l = t.z;
    return this.x = i * l - s * o, this.y = s * r - n * l, this.z = n * o - i * r, this;
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0)
      return this.set(0, 0, 0);
    const n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n);
  }
  projectOnPlane(e) {
    return Ms.copy(this).projectOnVector(e), this.sub(Ms);
  }
  reflect(e) {
    return this.sub(Ms.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0)
      return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(lt(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y, i = this.z - e.z;
    return t * t + n * n + i * i;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z);
  }
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  setFromSphericalCoords(e, t, n) {
    const i = Math.sin(t) * e;
    return this.x = i * Math.sin(n), this.y = Math.cos(t) * e, this.z = i * Math.cos(n), this;
  }
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  setFromCylindricalCoords(e, t, n) {
    return this.x = e * Math.sin(t), this.y = n, this.z = e * Math.cos(t), this;
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return this.x = t[12], this.y = t[13], this.z = t[14], this;
  }
  setFromMatrixScale(e) {
    const t = this.setFromMatrixColumn(e, 0).length(), n = this.setFromMatrixColumn(e, 1).length(), i = this.setFromMatrixColumn(e, 2).length();
    return this.x = t, this.y = n, this.z = i, this;
  }
  setFromMatrixColumn(e, t) {
    return this.fromArray(e.elements, t * 4);
  }
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, t * 3);
  }
  setFromEuler(e) {
    return this.x = e._x, this.y = e._y, this.z = e._z, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
  }
  randomDirection() {
    const e = (Math.random() - 0.5) * 2, t = Math.random() * Math.PI * 2, n = Math.sqrt(1 - e ** 2);
    return this.x = n * Math.cos(t), this.y = n * Math.sin(t), this.z = e, this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const Ms = /* @__PURE__ */ new R(), Er = /* @__PURE__ */ new ln();
class ni {
  constructor(e = new R(1 / 0, 1 / 0, 1 / 0), t = new R(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = !0, this.min = e, this.max = t;
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    let t = 1 / 0, n = 1 / 0, i = 1 / 0, s = -1 / 0, r = -1 / 0, o = -1 / 0;
    for (let l = 0, c = e.length; l < c; l += 3) {
      const u = e[l], h = e[l + 1], d = e[l + 2];
      u < t && (t = u), h < n && (n = h), d < i && (i = d), u > s && (s = u), h > r && (r = h), d > o && (o = d);
    }
    return this.min.set(t, n, i), this.max.set(s, r, o), this;
  }
  setFromBufferAttribute(e) {
    let t = 1 / 0, n = 1 / 0, i = 1 / 0, s = -1 / 0, r = -1 / 0, o = -1 / 0;
    for (let l = 0, c = e.count; l < c; l++) {
      const u = e.getX(l), h = e.getY(l), d = e.getZ(l);
      u < t && (t = u), h < n && (n = h), d < i && (i = d), u > s && (s = u), h > r && (r = h), d > o && (o = d);
    }
    return this.min.set(t, n, i), this.max.set(s, r, o), this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++)
      this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = dn.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
  }
  setFromObject(e, t = !1) {
    return this.makeEmpty(), this.expandByObject(e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  makeEmpty() {
    return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
  }
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  }
  getCenter(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  }
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  expandByObject(e, t = !1) {
    e.updateWorldMatrix(!1, !1);
    const n = e.geometry;
    if (n !== void 0)
      if (t && n.attributes != null && n.attributes.position !== void 0) {
        const s = n.attributes.position;
        for (let r = 0, o = s.count; r < o; r++)
          dn.fromBufferAttribute(s, r).applyMatrix4(e.matrixWorld), this.expandByPoint(dn);
      } else
        n.boundingBox === null && n.computeBoundingBox(), Ss.copy(n.boundingBox), Ss.applyMatrix4(e.matrixWorld), this.union(Ss);
    const i = e.children;
    for (let s = 0, r = i.length; s < r; s++)
      this.expandByObject(i[s], t);
    return this;
  }
  containsPoint(e) {
    return !(e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y || e.z < this.min.z || e.z > this.max.z);
  }
  containsBox(e) {
    return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z;
  }
  getParameter(e, t) {
    return t.set(
      (e.x - this.min.x) / (this.max.x - this.min.x),
      (e.y - this.min.y) / (this.max.y - this.min.y),
      (e.z - this.min.z) / (this.max.z - this.min.z)
    );
  }
  intersectsBox(e) {
    return !(e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y || e.max.z < this.min.z || e.min.z > this.max.z);
  }
  intersectsSphere(e) {
    return this.clampPoint(e.center, dn), dn.distanceToSquared(e.center) <= e.radius * e.radius;
  }
  intersectsPlane(e) {
    let t, n;
    return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant;
  }
  intersectsTriangle(e) {
    if (this.isEmpty())
      return !1;
    this.getCenter(ci), Oi.subVectors(this.max, ci), Pn.subVectors(e.a, ci), In.subVectors(e.b, ci), Nn.subVectors(e.c, ci), Yt.subVectors(In, Pn), Zt.subVectors(Nn, In), fn.subVectors(Pn, Nn);
    let t = [
      0,
      -Yt.z,
      Yt.y,
      0,
      -Zt.z,
      Zt.y,
      0,
      -fn.z,
      fn.y,
      Yt.z,
      0,
      -Yt.x,
      Zt.z,
      0,
      -Zt.x,
      fn.z,
      0,
      -fn.x,
      -Yt.y,
      Yt.x,
      0,
      -Zt.y,
      Zt.x,
      0,
      -fn.y,
      fn.x,
      0
    ];
    return !bs(t, Pn, In, Nn, Oi) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !bs(t, Pn, In, Nn, Oi)) ? !1 : (Bi.crossVectors(Yt, Zt), t = [Bi.x, Bi.y, Bi.z], bs(t, Pn, In, Nn, Oi));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return dn.copy(e).clamp(this.min, this.max).sub(e).length();
  }
  getBoundingSphere(e) {
    return this.getCenter(e.center), e.radius = this.getSize(dn).length() * 0.5, e;
  }
  intersect(e) {
    return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty() ? this : (zt[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), zt[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), zt[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), zt[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), zt[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), zt[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), zt[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), zt[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(zt), this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
const zt = [
  /* @__PURE__ */ new R(),
  /* @__PURE__ */ new R(),
  /* @__PURE__ */ new R(),
  /* @__PURE__ */ new R(),
  /* @__PURE__ */ new R(),
  /* @__PURE__ */ new R(),
  /* @__PURE__ */ new R(),
  /* @__PURE__ */ new R()
], dn = /* @__PURE__ */ new R(), Ss = /* @__PURE__ */ new ni(), Pn = /* @__PURE__ */ new R(), In = /* @__PURE__ */ new R(), Nn = /* @__PURE__ */ new R(), Yt = /* @__PURE__ */ new R(), Zt = /* @__PURE__ */ new R(), fn = /* @__PURE__ */ new R(), ci = /* @__PURE__ */ new R(), Oi = /* @__PURE__ */ new R(), Bi = /* @__PURE__ */ new R(), pn = /* @__PURE__ */ new R();
function bs(a, e, t, n, i) {
  for (let s = 0, r = a.length - 3; s <= r; s += 3) {
    pn.fromArray(a, s);
    const o = i.x * Math.abs(pn.x) + i.y * Math.abs(pn.y) + i.z * Math.abs(pn.z), l = e.dot(pn), c = t.dot(pn), u = n.dot(pn);
    if (Math.max(-Math.max(l, c, u), Math.min(l, c, u)) > o)
      return !1;
  }
  return !0;
}
const $o = /* @__PURE__ */ new ni(), ui = /* @__PURE__ */ new R(), ws = /* @__PURE__ */ new R();
class ii {
  constructor(e = new R(), t = -1) {
    this.center = e, this.radius = t;
  }
  set(e, t) {
    return this.center.copy(e), this.radius = t, this;
  }
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : $o.setFromPoints(e).getCenter(n);
    let i = 0;
    for (let s = 0, r = e.length; s < r; s++)
      i = Math.max(i, n.distanceToSquared(e[s]));
    return this.radius = Math.sqrt(i), this;
  }
  copy(e) {
    return this.center.copy(e.center), this.radius = e.radius, this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), this.radius = -1, this;
  }
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(e) {
    const t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(e, t) {
    const n = this.center.distanceToSquared(e);
    return t.copy(e), n > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t;
  }
  getBoundingBox(e) {
    return this.isEmpty() ? (e.makeEmpty(), e) : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  }
  applyMatrix4(e) {
    return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this;
  }
  translate(e) {
    return this.center.add(e), this;
  }
  expandByPoint(e) {
    if (this.isEmpty())
      return this.center.copy(e), this.radius = 0, this;
    ui.subVectors(e, this.center);
    const t = ui.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t), i = (n - this.radius) * 0.5;
      this.center.addScaledVector(ui, i / n), this.radius += i;
    }
    return this;
  }
  union(e) {
    return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === !0 ? this.radius = Math.max(this.radius, e.radius) : (ws.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(ui.copy(e.center).add(ws)), this.expandByPoint(ui.copy(e.center).sub(ws))), this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Gt = /* @__PURE__ */ new R(), Ts = /* @__PURE__ */ new R(), zi = /* @__PURE__ */ new R(), Jt = /* @__PURE__ */ new R(), Es = /* @__PURE__ */ new R(), Gi = /* @__PURE__ */ new R(), As = /* @__PURE__ */ new R();
class lr {
  constructor(e = new R(), t = new R(0, 0, -1)) {
    this.origin = e, this.direction = t;
  }
  set(e, t) {
    return this.origin.copy(e), this.direction.copy(t), this;
  }
  copy(e) {
    return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
  }
  at(e, t) {
    return t.copy(this.direction).multiplyScalar(e).add(this.origin);
  }
  lookAt(e) {
    return this.direction.copy(e).sub(this.origin).normalize(), this;
  }
  recast(e) {
    return this.origin.copy(this.at(e, Gt)), this;
  }
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    const n = t.dot(this.direction);
    return n < 0 ? t.copy(this.origin) : t.copy(this.direction).multiplyScalar(n).add(this.origin);
  }
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  distanceSqToPoint(e) {
    const t = Gt.subVectors(e, this.origin).dot(this.direction);
    return t < 0 ? this.origin.distanceToSquared(e) : (Gt.copy(this.direction).multiplyScalar(t).add(this.origin), Gt.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, n, i) {
    Ts.copy(e).add(t).multiplyScalar(0.5), zi.copy(t).sub(e).normalize(), Jt.copy(this.origin).sub(Ts);
    const s = e.distanceTo(t) * 0.5, r = -this.direction.dot(zi), o = Jt.dot(this.direction), l = -Jt.dot(zi), c = Jt.lengthSq(), u = Math.abs(1 - r * r);
    let h, d, p, g;
    if (u > 0)
      if (h = r * l - o, d = r * o - l, g = s * u, h >= 0)
        if (d >= -g)
          if (d <= g) {
            const m = 1 / u;
            h *= m, d *= m, p = h * (h + r * d + 2 * o) + d * (r * h + d + 2 * l) + c;
          } else
            d = s, h = Math.max(0, -(r * d + o)), p = -h * h + d * (d + 2 * l) + c;
        else
          d = -s, h = Math.max(0, -(r * d + o)), p = -h * h + d * (d + 2 * l) + c;
      else
        d <= -g ? (h = Math.max(0, -(-r * s + o)), d = h > 0 ? -s : Math.min(Math.max(-s, -l), s), p = -h * h + d * (d + 2 * l) + c) : d <= g ? (h = 0, d = Math.min(Math.max(-s, -l), s), p = d * (d + 2 * l) + c) : (h = Math.max(0, -(r * s + o)), d = h > 0 ? s : Math.min(Math.max(-s, -l), s), p = -h * h + d * (d + 2 * l) + c);
    else
      d = r > 0 ? -s : s, h = Math.max(0, -(r * d + o)), p = -h * h + d * (d + 2 * l) + c;
    return n && n.copy(this.direction).multiplyScalar(h).add(this.origin), i && i.copy(zi).multiplyScalar(d).add(Ts), p;
  }
  intersectSphere(e, t) {
    Gt.subVectors(e.center, this.origin);
    const n = Gt.dot(this.direction), i = Gt.dot(Gt) - n * n, s = e.radius * e.radius;
    if (i > s)
      return null;
    const r = Math.sqrt(s - i), o = n - r, l = n + r;
    return o < 0 && l < 0 ? null : o < 0 ? this.at(l, t) : this.at(o, t);
  }
  intersectsSphere(e) {
    return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  distanceToPlane(e) {
    const t = e.normal.dot(this.direction);
    if (t === 0)
      return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    const n = -(this.origin.dot(e.normal) + e.constant) / t;
    return n >= 0 ? n : null;
  }
  intersectPlane(e, t) {
    const n = this.distanceToPlane(e);
    return n === null ? null : this.at(n, t);
  }
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    return t === 0 || e.normal.dot(this.direction) * t < 0;
  }
  intersectBox(e, t) {
    let n, i, s, r, o, l;
    const c = 1 / this.direction.x, u = 1 / this.direction.y, h = 1 / this.direction.z, d = this.origin;
    return c >= 0 ? (n = (e.min.x - d.x) * c, i = (e.max.x - d.x) * c) : (n = (e.max.x - d.x) * c, i = (e.min.x - d.x) * c), u >= 0 ? (s = (e.min.y - d.y) * u, r = (e.max.y - d.y) * u) : (s = (e.max.y - d.y) * u, r = (e.min.y - d.y) * u), n > r || s > i || ((s > n || isNaN(n)) && (n = s), (r < i || isNaN(i)) && (i = r), h >= 0 ? (o = (e.min.z - d.z) * h, l = (e.max.z - d.z) * h) : (o = (e.max.z - d.z) * h, l = (e.min.z - d.z) * h), n > l || o > i) || ((o > n || n !== n) && (n = o), (l < i || i !== i) && (i = l), i < 0) ? null : this.at(n >= 0 ? n : i, t);
  }
  intersectsBox(e) {
    return this.intersectBox(e, Gt) !== null;
  }
  intersectTriangle(e, t, n, i, s) {
    Es.subVectors(t, e), Gi.subVectors(n, e), As.crossVectors(Es, Gi);
    let r = this.direction.dot(As), o;
    if (r > 0) {
      if (i)
        return null;
      o = 1;
    } else if (r < 0)
      o = -1, r = -r;
    else
      return null;
    Jt.subVectors(this.origin, e);
    const l = o * this.direction.dot(Gi.crossVectors(Jt, Gi));
    if (l < 0)
      return null;
    const c = o * this.direction.dot(Es.cross(Jt));
    if (c < 0 || l + c > r)
      return null;
    const u = -o * Jt.dot(As);
    return u < 0 ? null : this.at(u / r, s);
  }
  applyMatrix4(e) {
    return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this;
  }
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Ce {
  constructor() {
    Ce.prototype.isMatrix4 = !0, this.elements = [
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ];
  }
  set(e, t, n, i, s, r, o, l, c, u, h, d, p, g, m, f) {
    const _ = this.elements;
    return _[0] = e, _[4] = t, _[8] = n, _[12] = i, _[1] = s, _[5] = r, _[9] = o, _[13] = l, _[2] = c, _[6] = u, _[10] = h, _[14] = d, _[3] = p, _[7] = g, _[11] = m, _[15] = f, this;
  }
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  clone() {
    return new Ce().fromArray(this.elements);
  }
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], this;
  }
  copyPosition(e) {
    const t = this.elements, n = e.elements;
    return t[12] = n[12], t[13] = n[13], t[14] = n[14], this;
  }
  setFromMatrix3(e) {
    const t = e.elements;
    return this.set(
      t[0],
      t[3],
      t[6],
      0,
      t[1],
      t[4],
      t[7],
      0,
      t[2],
      t[5],
      t[8],
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  extractBasis(e, t, n) {
    return e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this;
  }
  makeBasis(e, t, n) {
    return this.set(
      e.x,
      t.x,
      n.x,
      0,
      e.y,
      t.y,
      n.y,
      0,
      e.z,
      t.z,
      n.z,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  extractRotation(e) {
    const t = this.elements, n = e.elements, i = 1 / Fn.setFromMatrixColumn(e, 0).length(), s = 1 / Fn.setFromMatrixColumn(e, 1).length(), r = 1 / Fn.setFromMatrixColumn(e, 2).length();
    return t[0] = n[0] * i, t[1] = n[1] * i, t[2] = n[2] * i, t[3] = 0, t[4] = n[4] * s, t[5] = n[5] * s, t[6] = n[6] * s, t[7] = 0, t[8] = n[8] * r, t[9] = n[9] * r, t[10] = n[10] * r, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromEuler(e) {
    const t = this.elements, n = e.x, i = e.y, s = e.z, r = Math.cos(n), o = Math.sin(n), l = Math.cos(i), c = Math.sin(i), u = Math.cos(s), h = Math.sin(s);
    if (e.order === "XYZ") {
      const d = r * u, p = r * h, g = o * u, m = o * h;
      t[0] = l * u, t[4] = -l * h, t[8] = c, t[1] = p + g * c, t[5] = d - m * c, t[9] = -o * l, t[2] = m - d * c, t[6] = g + p * c, t[10] = r * l;
    } else if (e.order === "YXZ") {
      const d = l * u, p = l * h, g = c * u, m = c * h;
      t[0] = d + m * o, t[4] = g * o - p, t[8] = r * c, t[1] = r * h, t[5] = r * u, t[9] = -o, t[2] = p * o - g, t[6] = m + d * o, t[10] = r * l;
    } else if (e.order === "ZXY") {
      const d = l * u, p = l * h, g = c * u, m = c * h;
      t[0] = d - m * o, t[4] = -r * h, t[8] = g + p * o, t[1] = p + g * o, t[5] = r * u, t[9] = m - d * o, t[2] = -r * c, t[6] = o, t[10] = r * l;
    } else if (e.order === "ZYX") {
      const d = r * u, p = r * h, g = o * u, m = o * h;
      t[0] = l * u, t[4] = g * c - p, t[8] = d * c + m, t[1] = l * h, t[5] = m * c + d, t[9] = p * c - g, t[2] = -c, t[6] = o * l, t[10] = r * l;
    } else if (e.order === "YZX") {
      const d = r * l, p = r * c, g = o * l, m = o * c;
      t[0] = l * u, t[4] = m - d * h, t[8] = g * h + p, t[1] = h, t[5] = r * u, t[9] = -o * u, t[2] = -c * u, t[6] = p * h + g, t[10] = d - m * h;
    } else if (e.order === "XZY") {
      const d = r * l, p = r * c, g = o * l, m = o * c;
      t[0] = l * u, t[4] = -h, t[8] = c * u, t[1] = d * h + m, t[5] = r * u, t[9] = p * h - g, t[2] = g * h - p, t[6] = o * u, t[10] = m * h + d;
    }
    return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromQuaternion(e) {
    return this.compose(qo, e, Xo);
  }
  lookAt(e, t, n) {
    const i = this.elements;
    return pt.subVectors(e, t), pt.lengthSq() === 0 && (pt.z = 1), pt.normalize(), Qt.crossVectors(n, pt), Qt.lengthSq() === 0 && (Math.abs(n.z) === 1 ? pt.x += 1e-4 : pt.z += 1e-4, pt.normalize(), Qt.crossVectors(n, pt)), Qt.normalize(), ki.crossVectors(pt, Qt), i[0] = Qt.x, i[4] = ki.x, i[8] = pt.x, i[1] = Qt.y, i[5] = ki.y, i[9] = pt.y, i[2] = Qt.z, i[6] = ki.z, i[10] = pt.z, this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, i = t.elements, s = this.elements, r = n[0], o = n[4], l = n[8], c = n[12], u = n[1], h = n[5], d = n[9], p = n[13], g = n[2], m = n[6], f = n[10], _ = n[14], T = n[3], M = n[7], S = n[11], b = n[15], A = i[0], D = i[4], x = i[8], E = i[12], F = i[1], q = i[5], ne = i[9], U = i[13], P = i[2], V = i[6], X = i[10], K = i[14], H = i[3], N = i[7], O = i[11], Q = i[15];
    return s[0] = r * A + o * F + l * P + c * H, s[4] = r * D + o * q + l * V + c * N, s[8] = r * x + o * ne + l * X + c * O, s[12] = r * E + o * U + l * K + c * Q, s[1] = u * A + h * F + d * P + p * H, s[5] = u * D + h * q + d * V + p * N, s[9] = u * x + h * ne + d * X + p * O, s[13] = u * E + h * U + d * K + p * Q, s[2] = g * A + m * F + f * P + _ * H, s[6] = g * D + m * q + f * V + _ * N, s[10] = g * x + m * ne + f * X + _ * O, s[14] = g * E + m * U + f * K + _ * Q, s[3] = T * A + M * F + S * P + b * H, s[7] = T * D + M * q + S * V + b * N, s[11] = T * x + M * ne + S * X + b * O, s[15] = T * E + M * U + S * K + b * Q, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[4], i = e[8], s = e[12], r = e[1], o = e[5], l = e[9], c = e[13], u = e[2], h = e[6], d = e[10], p = e[14], g = e[3], m = e[7], f = e[11], _ = e[15];
    return g * (+s * l * h - i * c * h - s * o * d + n * c * d + i * o * p - n * l * p) + m * (+t * l * p - t * c * d + s * r * d - i * r * p + i * c * u - s * l * u) + f * (+t * c * h - t * o * p - s * r * h + n * r * p + s * o * u - n * c * u) + _ * (-i * o * u - t * l * h + t * o * d + i * r * h - n * r * d + n * l * u);
  }
  transpose() {
    const e = this.elements;
    let t;
    return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this;
  }
  setPosition(e, t, n) {
    const i = this.elements;
    return e.isVector3 ? (i[12] = e.x, i[13] = e.y, i[14] = e.z) : (i[12] = e, i[13] = t, i[14] = n), this;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], s = e[3], r = e[4], o = e[5], l = e[6], c = e[7], u = e[8], h = e[9], d = e[10], p = e[11], g = e[12], m = e[13], f = e[14], _ = e[15], T = h * f * c - m * d * c + m * l * p - o * f * p - h * l * _ + o * d * _, M = g * d * c - u * f * c - g * l * p + r * f * p + u * l * _ - r * d * _, S = u * m * c - g * h * c + g * o * p - r * m * p - u * o * _ + r * h * _, b = g * h * l - u * m * l - g * o * d + r * m * d + u * o * f - r * h * f, A = t * T + n * M + i * S + s * b;
    if (A === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const D = 1 / A;
    return e[0] = T * D, e[1] = (m * d * s - h * f * s - m * i * p + n * f * p + h * i * _ - n * d * _) * D, e[2] = (o * f * s - m * l * s + m * i * c - n * f * c - o * i * _ + n * l * _) * D, e[3] = (h * l * s - o * d * s - h * i * c + n * d * c + o * i * p - n * l * p) * D, e[4] = M * D, e[5] = (u * f * s - g * d * s + g * i * p - t * f * p - u * i * _ + t * d * _) * D, e[6] = (g * l * s - r * f * s - g * i * c + t * f * c + r * i * _ - t * l * _) * D, e[7] = (r * d * s - u * l * s + u * i * c - t * d * c - r * i * p + t * l * p) * D, e[8] = S * D, e[9] = (g * h * s - u * m * s - g * n * p + t * m * p + u * n * _ - t * h * _) * D, e[10] = (r * m * s - g * o * s + g * n * c - t * m * c - r * n * _ + t * o * _) * D, e[11] = (u * o * s - r * h * s - u * n * c + t * h * c + r * n * p - t * o * p) * D, e[12] = b * D, e[13] = (u * m * i - g * h * i + g * n * d - t * m * d - u * n * f + t * h * f) * D, e[14] = (g * o * i - r * m * i - g * n * l + t * m * l + r * n * f - t * o * f) * D, e[15] = (r * h * i - u * o * i + u * n * l - t * h * l - r * n * d + t * o * d) * D, this;
  }
  scale(e) {
    const t = this.elements, n = e.x, i = e.y, s = e.z;
    return t[0] *= n, t[4] *= i, t[8] *= s, t[1] *= n, t[5] *= i, t[9] *= s, t[2] *= n, t[6] *= i, t[10] *= s, t[3] *= n, t[7] *= i, t[11] *= s, this;
  }
  getMaxScaleOnAxis() {
    const e = this.elements, t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6], i = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, n, i));
  }
  makeTranslation(e, t, n) {
    return this.set(
      1,
      0,
      0,
      e,
      0,
      1,
      0,
      t,
      0,
      0,
      1,
      n,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationX(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      1,
      0,
      0,
      0,
      0,
      t,
      -n,
      0,
      0,
      n,
      t,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationY(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      0,
      n,
      0,
      0,
      1,
      0,
      0,
      -n,
      0,
      t,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationZ(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      -n,
      0,
      0,
      n,
      t,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationAxis(e, t) {
    const n = Math.cos(t), i = Math.sin(t), s = 1 - n, r = e.x, o = e.y, l = e.z, c = s * r, u = s * o;
    return this.set(
      c * r + n,
      c * o - i * l,
      c * l + i * o,
      0,
      c * o + i * l,
      u * o + n,
      u * l - i * r,
      0,
      c * l - i * o,
      u * l + i * r,
      s * l * l + n,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeScale(e, t, n) {
    return this.set(
      e,
      0,
      0,
      0,
      0,
      t,
      0,
      0,
      0,
      0,
      n,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeShear(e, t, n, i, s, r) {
    return this.set(
      1,
      n,
      s,
      0,
      e,
      1,
      r,
      0,
      t,
      i,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  compose(e, t, n) {
    const i = this.elements, s = t._x, r = t._y, o = t._z, l = t._w, c = s + s, u = r + r, h = o + o, d = s * c, p = s * u, g = s * h, m = r * u, f = r * h, _ = o * h, T = l * c, M = l * u, S = l * h, b = n.x, A = n.y, D = n.z;
    return i[0] = (1 - (m + _)) * b, i[1] = (p + S) * b, i[2] = (g - M) * b, i[3] = 0, i[4] = (p - S) * A, i[5] = (1 - (d + _)) * A, i[6] = (f + T) * A, i[7] = 0, i[8] = (g + M) * D, i[9] = (f - T) * D, i[10] = (1 - (d + m)) * D, i[11] = 0, i[12] = e.x, i[13] = e.y, i[14] = e.z, i[15] = 1, this;
  }
  decompose(e, t, n) {
    const i = this.elements;
    let s = Fn.set(i[0], i[1], i[2]).length();
    const r = Fn.set(i[4], i[5], i[6]).length(), o = Fn.set(i[8], i[9], i[10]).length();
    this.determinant() < 0 && (s = -s), e.x = i[12], e.y = i[13], e.z = i[14], Et.copy(this);
    const c = 1 / s, u = 1 / r, h = 1 / o;
    return Et.elements[0] *= c, Et.elements[1] *= c, Et.elements[2] *= c, Et.elements[4] *= u, Et.elements[5] *= u, Et.elements[6] *= u, Et.elements[8] *= h, Et.elements[9] *= h, Et.elements[10] *= h, t.setFromRotationMatrix(Et), n.x = s, n.y = r, n.z = o, this;
  }
  makePerspective(e, t, n, i, s, r) {
    const o = this.elements, l = 2 * s / (t - e), c = 2 * s / (n - i), u = (t + e) / (t - e), h = (n + i) / (n - i), d = -(r + s) / (r - s), p = -2 * r * s / (r - s);
    return o[0] = l, o[4] = 0, o[8] = u, o[12] = 0, o[1] = 0, o[5] = c, o[9] = h, o[13] = 0, o[2] = 0, o[6] = 0, o[10] = d, o[14] = p, o[3] = 0, o[7] = 0, o[11] = -1, o[15] = 0, this;
  }
  makeOrthographic(e, t, n, i, s, r) {
    const o = this.elements, l = 1 / (t - e), c = 1 / (n - i), u = 1 / (r - s), h = (t + e) * l, d = (n + i) * c, p = (r + s) * u;
    return o[0] = 2 * l, o[4] = 0, o[8] = 0, o[12] = -h, o[1] = 0, o[5] = 2 * c, o[9] = 0, o[13] = -d, o[2] = 0, o[6] = 0, o[10] = -2 * u, o[14] = -p, o[3] = 0, o[7] = 0, o[11] = 0, o[15] = 1, this;
  }
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let i = 0; i < 16; i++)
      if (t[i] !== n[i])
        return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 16; n++)
      this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e[t + 9] = n[9], e[t + 10] = n[10], e[t + 11] = n[11], e[t + 12] = n[12], e[t + 13] = n[13], e[t + 14] = n[14], e[t + 15] = n[15], e;
  }
}
const Fn = /* @__PURE__ */ new R(), Et = /* @__PURE__ */ new Ce(), qo = /* @__PURE__ */ new R(0, 0, 0), Xo = /* @__PURE__ */ new R(1, 1, 1), Qt = /* @__PURE__ */ new R(), ki = /* @__PURE__ */ new R(), pt = /* @__PURE__ */ new R(), Ar = /* @__PURE__ */ new Ce(), Cr = /* @__PURE__ */ new ln();
class Li {
  constructor(e = 0, t = 0, n = 0, i = Li.DefaultOrder) {
    this.isEuler = !0, this._x = e, this._y = t, this._z = n, this._order = i;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(e) {
    this._order = e, this._onChangeCallback();
  }
  set(e, t, n, i = this._order) {
    return this._x = e, this._y = t, this._z = n, this._order = i, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(e) {
    return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e, t = this._order, n = !0) {
    const i = e.elements, s = i[0], r = i[4], o = i[8], l = i[1], c = i[5], u = i[9], h = i[2], d = i[6], p = i[10];
    switch (t) {
      case "XYZ":
        this._y = Math.asin(lt(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(-u, p), this._z = Math.atan2(-r, s)) : (this._x = Math.atan2(d, c), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-lt(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._y = Math.atan2(o, p), this._z = Math.atan2(l, c)) : (this._y = Math.atan2(-h, s), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(lt(d, -1, 1)), Math.abs(d) < 0.9999999 ? (this._y = Math.atan2(-h, p), this._z = Math.atan2(-r, c)) : (this._y = 0, this._z = Math.atan2(l, s));
        break;
      case "ZYX":
        this._y = Math.asin(-lt(h, -1, 1)), Math.abs(h) < 0.9999999 ? (this._x = Math.atan2(d, p), this._z = Math.atan2(l, s)) : (this._x = 0, this._z = Math.atan2(-r, c));
        break;
      case "YZX":
        this._z = Math.asin(lt(l, -1, 1)), Math.abs(l) < 0.9999999 ? (this._x = Math.atan2(-u, c), this._y = Math.atan2(-h, s)) : (this._x = 0, this._y = Math.atan2(o, p));
        break;
      case "XZY":
        this._z = Math.asin(-lt(r, -1, 1)), Math.abs(r) < 0.9999999 ? (this._x = Math.atan2(d, c), this._y = Math.atan2(o, s)) : (this._x = Math.atan2(-u, p), this._y = 0);
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
    }
    return this._order = t, n === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, n) {
    return Ar.makeRotationFromQuaternion(e), this.setFromRotationMatrix(Ar, t, n);
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return Cr.setFromEuler(this), this.setFromQuaternion(Cr, e);
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order;
  }
  fromArray(e) {
    return this._x = e[0], this._y = e[1], this._z = e[2], e[3] !== void 0 && (this._order = e[3]), this._onChangeCallback(), this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e;
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
  toVector3() {
    console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead");
  }
}
Li.DefaultOrder = "XYZ";
Li.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"];
class Ka {
  constructor() {
    this.mask = 1;
  }
  set(e) {
    this.mask = (1 << e | 0) >>> 0;
  }
  enable(e) {
    this.mask |= 1 << e | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(e) {
    this.mask ^= 1 << e | 0;
  }
  disable(e) {
    this.mask &= ~(1 << e | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(e) {
    return (this.mask & e.mask) !== 0;
  }
  isEnabled(e) {
    return (this.mask & (1 << e | 0)) !== 0;
  }
}
let jo = 0;
const Rr = /* @__PURE__ */ new R(), Un = /* @__PURE__ */ new ln(), kt = /* @__PURE__ */ new Ce(), Vi = /* @__PURE__ */ new R(), hi = /* @__PURE__ */ new R(), Ko = /* @__PURE__ */ new R(), Yo = /* @__PURE__ */ new ln(), Lr = /* @__PURE__ */ new R(1, 0, 0), Dr = /* @__PURE__ */ new R(0, 1, 0), Pr = /* @__PURE__ */ new R(0, 0, 1), Zo = { type: "added" }, Ir = { type: "removed" };
class ke extends ti {
  constructor() {
    super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: jo++ }), this.uuid = Ct(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = ke.DefaultUp.clone();
    const e = new R(), t = new Li(), n = new ln(), i = new R(1, 1, 1);
    function s() {
      n.setFromEuler(t, !1);
    }
    function r() {
      t.setFromQuaternion(n, void 0, !1);
    }
    t._onChange(s), n._onChange(r), Object.defineProperties(this, {
      position: {
        configurable: !0,
        enumerable: !0,
        value: e
      },
      rotation: {
        configurable: !0,
        enumerable: !0,
        value: t
      },
      quaternion: {
        configurable: !0,
        enumerable: !0,
        value: n
      },
      scale: {
        configurable: !0,
        enumerable: !0,
        value: i
      },
      modelViewMatrix: {
        value: new Ce()
      },
      normalMatrix: {
        value: new Mt()
      }
    }), this.matrix = new Ce(), this.matrixWorld = new Ce(), this.matrixAutoUpdate = ke.DefaultMatrixAutoUpdate, this.matrixWorldNeedsUpdate = !1, this.matrixWorldAutoUpdate = ke.DefaultMatrixWorldAutoUpdate, this.layers = new Ka(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {};
  }
  onBeforeRender() {
  }
  onAfterRender() {
  }
  applyMatrix4(e) {
    this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(e) {
    return this.quaternion.premultiply(e), this;
  }
  setRotationFromAxisAngle(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  }
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, !0);
  }
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  rotateOnAxis(e, t) {
    return Un.setFromAxisAngle(e, t), this.quaternion.multiply(Un), this;
  }
  rotateOnWorldAxis(e, t) {
    return Un.setFromAxisAngle(e, t), this.quaternion.premultiply(Un), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(Lr, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(Dr, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(Pr, e);
  }
  translateOnAxis(e, t) {
    return Rr.copy(e).applyQuaternion(this.quaternion), this.position.add(Rr.multiplyScalar(t)), this;
  }
  translateX(e) {
    return this.translateOnAxis(Lr, e);
  }
  translateY(e) {
    return this.translateOnAxis(Dr, e);
  }
  translateZ(e) {
    return this.translateOnAxis(Pr, e);
  }
  localToWorld(e) {
    return e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return e.applyMatrix4(kt.copy(this.matrixWorld).invert());
  }
  lookAt(e, t, n) {
    e.isVector3 ? Vi.copy(e) : Vi.set(e, t, n);
    const i = this.parent;
    this.updateWorldMatrix(!0, !1), hi.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? kt.lookAt(hi, Vi, this.up) : kt.lookAt(Vi, hi, this.up), this.quaternion.setFromRotationMatrix(kt), i && (kt.extractRotation(i.matrixWorld), Un.setFromRotationMatrix(kt), this.quaternion.premultiply(Un.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++)
        this.add(arguments[t]);
      return this;
    }
    return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.parent !== null && e.parent.remove(e), e.parent = this, this.children.push(e), e.dispatchEvent(Zo)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++)
        this.remove(arguments[n]);
      return this;
    }
    const t = this.children.indexOf(e);
    return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(Ir)), this;
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  clear() {
    for (let e = 0; e < this.children.length; e++) {
      const t = this.children[e];
      t.parent = null, t.dispatchEvent(Ir);
    }
    return this.children.length = 0, this;
  }
  attach(e) {
    return this.updateWorldMatrix(!0, !1), kt.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), kt.multiply(e.parent.matrixWorld)), e.applyMatrix4(kt), this.add(e), e.updateWorldMatrix(!1, !0), this;
  }
  getObjectById(e) {
    return this.getObjectByProperty("id", e);
  }
  getObjectByName(e) {
    return this.getObjectByProperty("name", e);
  }
  getObjectByProperty(e, t) {
    if (this[e] === t)
      return this;
    for (let n = 0, i = this.children.length; n < i; n++) {
      const r = this.children[n].getObjectByProperty(e, t);
      if (r !== void 0)
        return r;
    }
  }
  getWorldPosition(e) {
    return this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld);
  }
  getWorldQuaternion(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(hi, e, Ko), e;
  }
  getWorldScale(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(hi, Yo, e), e;
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  }
  raycast() {
  }
  traverse(e) {
    e(this);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++)
      t[n].traverse(e);
  }
  traverseVisible(e) {
    if (this.visible === !1)
      return;
    e(this);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++)
      t[n].traverseVisible(e);
  }
  traverseAncestors(e) {
    const t = this.parent;
    t !== null && (e(t), t.traverseAncestors(e));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0;
  }
  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, e = !0);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++) {
      const s = t[n];
      (s.matrixWorldAutoUpdate === !0 || e === !0) && s.updateMatrixWorld(e);
    }
  }
  updateWorldMatrix(e, t) {
    const n = this.parent;
    if (e === !0 && n !== null && n.matrixWorldAutoUpdate === !0 && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), t === !0) {
      const i = this.children;
      for (let s = 0, r = i.length; s < r; s++) {
        const o = i[s];
        o.matrixWorldAutoUpdate === !0 && o.updateWorldMatrix(!1, !0);
      }
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string", n = {};
    t && (e = {
      geometries: {},
      materials: {},
      textures: {},
      images: {},
      shapes: {},
      skeletons: {},
      animations: {},
      nodes: {}
    }, n.metadata = {
      version: 4.5,
      type: "Object",
      generator: "Object3D.toJSON"
    });
    const i = {};
    i.uuid = this.uuid, i.type = this.type, this.name !== "" && (i.name = this.name), this.castShadow === !0 && (i.castShadow = !0), this.receiveShadow === !0 && (i.receiveShadow = !0), this.visible === !1 && (i.visible = !1), this.frustumCulled === !1 && (i.frustumCulled = !1), this.renderOrder !== 0 && (i.renderOrder = this.renderOrder), JSON.stringify(this.userData) !== "{}" && (i.userData = this.userData), i.layers = this.layers.mask, i.matrix = this.matrix.toArray(), this.matrixAutoUpdate === !1 && (i.matrixAutoUpdate = !1), this.isInstancedMesh && (i.type = "InstancedMesh", i.count = this.count, i.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (i.instanceColor = this.instanceColor.toJSON()));
    function s(o, l) {
      return o[l.uuid] === void 0 && (o[l.uuid] = l.toJSON(e)), l.uuid;
    }
    if (this.isScene)
      this.background && (this.background.isColor ? i.background = this.background.toJSON() : this.background.isTexture && (i.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (i.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      i.geometry = s(e.geometries, this.geometry);
      const o = this.geometry.parameters;
      if (o !== void 0 && o.shapes !== void 0) {
        const l = o.shapes;
        if (Array.isArray(l))
          for (let c = 0, u = l.length; c < u; c++) {
            const h = l[c];
            s(e.shapes, h);
          }
        else
          s(e.shapes, l);
      }
    }
    if (this.isSkinnedMesh && (i.bindMode = this.bindMode, i.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (s(e.skeletons, this.skeleton), i.skeleton = this.skeleton.uuid)), this.material !== void 0)
      if (Array.isArray(this.material)) {
        const o = [];
        for (let l = 0, c = this.material.length; l < c; l++)
          o.push(s(e.materials, this.material[l]));
        i.material = o;
      } else
        i.material = s(e.materials, this.material);
    if (this.children.length > 0) {
      i.children = [];
      for (let o = 0; o < this.children.length; o++)
        i.children.push(this.children[o].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      i.animations = [];
      for (let o = 0; o < this.animations.length; o++) {
        const l = this.animations[o];
        i.animations.push(s(e.animations, l));
      }
    }
    if (t) {
      const o = r(e.geometries), l = r(e.materials), c = r(e.textures), u = r(e.images), h = r(e.shapes), d = r(e.skeletons), p = r(e.animations), g = r(e.nodes);
      o.length > 0 && (n.geometries = o), l.length > 0 && (n.materials = l), c.length > 0 && (n.textures = c), u.length > 0 && (n.images = u), h.length > 0 && (n.shapes = h), d.length > 0 && (n.skeletons = d), p.length > 0 && (n.animations = p), g.length > 0 && (n.nodes = g);
    }
    return n.object = i, n;
    function r(o) {
      const l = [];
      for (const c in o) {
        const u = o[c];
        delete u.metadata, l.push(u);
      }
      return l;
    }
  }
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  copy(e, t = !0) {
    if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.userData = JSON.parse(JSON.stringify(e.userData)), t === !0)
      for (let n = 0; n < e.children.length; n++) {
        const i = e.children[n];
        this.add(i.clone());
      }
    return this;
  }
}
ke.DefaultUp = /* @__PURE__ */ new R(0, 1, 0);
ke.DefaultMatrixAutoUpdate = !0;
ke.DefaultMatrixWorldAutoUpdate = !0;
const At = /* @__PURE__ */ new R(), Vt = /* @__PURE__ */ new R(), Cs = /* @__PURE__ */ new R(), Ht = /* @__PURE__ */ new R(), On = /* @__PURE__ */ new R(), Bn = /* @__PURE__ */ new R(), Nr = /* @__PURE__ */ new R(), Rs = /* @__PURE__ */ new R(), Ls = /* @__PURE__ */ new R(), Ds = /* @__PURE__ */ new R();
class qt {
  constructor(e = new R(), t = new R(), n = new R()) {
    this.a = e, this.b = t, this.c = n;
  }
  static getNormal(e, t, n, i) {
    i.subVectors(n, t), At.subVectors(e, t), i.cross(At);
    const s = i.lengthSq();
    return s > 0 ? i.multiplyScalar(1 / Math.sqrt(s)) : i.set(0, 0, 0);
  }
  static getBarycoord(e, t, n, i, s) {
    At.subVectors(i, t), Vt.subVectors(n, t), Cs.subVectors(e, t);
    const r = At.dot(At), o = At.dot(Vt), l = At.dot(Cs), c = Vt.dot(Vt), u = Vt.dot(Cs), h = r * c - o * o;
    if (h === 0)
      return s.set(-2, -1, -1);
    const d = 1 / h, p = (c * l - o * u) * d, g = (r * u - o * l) * d;
    return s.set(1 - p - g, g, p);
  }
  static containsPoint(e, t, n, i) {
    return this.getBarycoord(e, t, n, i, Ht), Ht.x >= 0 && Ht.y >= 0 && Ht.x + Ht.y <= 1;
  }
  static getUV(e, t, n, i, s, r, o, l) {
    return this.getBarycoord(e, t, n, i, Ht), l.set(0, 0), l.addScaledVector(s, Ht.x), l.addScaledVector(r, Ht.y), l.addScaledVector(o, Ht.z), l;
  }
  static isFrontFacing(e, t, n, i) {
    return At.subVectors(n, t), Vt.subVectors(e, t), At.cross(Vt).dot(i) < 0;
  }
  set(e, t, n) {
    return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
  }
  setFromPointsAndIndices(e, t, n, i) {
    return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[i]), this;
  }
  setFromAttributeAndIndices(e, t, n, i) {
    return this.a.fromBufferAttribute(e, t), this.b.fromBufferAttribute(e, n), this.c.fromBufferAttribute(e, i), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
  }
  getArea() {
    return At.subVectors(this.c, this.b), Vt.subVectors(this.a, this.b), At.cross(Vt).length() * 0.5;
  }
  getMidpoint(e) {
    return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return qt.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return qt.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getUV(e, t, n, i, s) {
    return qt.getUV(e, this.a, this.b, this.c, t, n, i, s);
  }
  containsPoint(e) {
    return qt.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return qt.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const n = this.a, i = this.b, s = this.c;
    let r, o;
    On.subVectors(i, n), Bn.subVectors(s, n), Rs.subVectors(e, n);
    const l = On.dot(Rs), c = Bn.dot(Rs);
    if (l <= 0 && c <= 0)
      return t.copy(n);
    Ls.subVectors(e, i);
    const u = On.dot(Ls), h = Bn.dot(Ls);
    if (u >= 0 && h <= u)
      return t.copy(i);
    const d = l * h - u * c;
    if (d <= 0 && l >= 0 && u <= 0)
      return r = l / (l - u), t.copy(n).addScaledVector(On, r);
    Ds.subVectors(e, s);
    const p = On.dot(Ds), g = Bn.dot(Ds);
    if (g >= 0 && p <= g)
      return t.copy(s);
    const m = p * c - l * g;
    if (m <= 0 && c >= 0 && g <= 0)
      return o = c / (c - g), t.copy(n).addScaledVector(Bn, o);
    const f = u * g - p * h;
    if (f <= 0 && h - u >= 0 && p - g >= 0)
      return Nr.subVectors(s, i), o = (h - u) / (h - u + (p - g)), t.copy(i).addScaledVector(Nr, o);
    const _ = 1 / (f + m + d);
    return r = m * _, o = d * _, t.copy(n).addScaledVector(On, r).addScaledVector(Bn, o);
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
let Jo = 0;
class It extends ti {
  constructor() {
    super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: Jo++ }), this.uuid = Ct(), this.name = "", this.type = "Material", this.blending = 1, this.side = 0, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.blendSrc = 204, this.blendDst = 205, this.blendEquation = 100, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc = 3, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = 519, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = 7680, this.stencilZFail = 7680, this.stencilZPass = 7680, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    this._alphaTest > 0 != e > 0 && this.version++, this._alphaTest = e;
  }
  onBuild() {
  }
  onBeforeRender() {
  }
  onBeforeCompile() {
  }
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(e) {
    if (e !== void 0)
      for (const t in e) {
        const n = e[t];
        if (n === void 0) {
          console.warn("THREE.Material: '" + t + "' parameter is undefined.");
          continue;
        }
        const i = this[t];
        if (i === void 0) {
          console.warn("THREE." + this.type + ": '" + t + "' is not a property of this material.");
          continue;
        }
        i && i.isColor ? i.set(n) : i && i.isVector3 && n && n.isVector3 ? i.copy(n) : this[t] = n;
      }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    t && (e = {
      textures: {},
      images: {}
    });
    const n = {
      metadata: {
        version: 4.5,
        type: "Material",
        generator: "Material.toJSON"
      }
    };
    n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== 1 && (n.blending = this.blending), this.side !== 0 && (n.side = this.side), this.vertexColors && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === !0 && (n.transparent = this.transparent), n.depthFunc = this.depthFunc, n.depthTest = this.depthTest, n.depthWrite = this.depthWrite, n.colorWrite = this.colorWrite, n.stencilWrite = this.stencilWrite, n.stencilWriteMask = this.stencilWriteMask, n.stencilFunc = this.stencilFunc, n.stencilRef = this.stencilRef, n.stencilFuncMask = this.stencilFuncMask, n.stencilFail = this.stencilFail, n.stencilZFail = this.stencilZFail, n.stencilZPass = this.stencilZPass, this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === !0 && (n.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === !0 && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaToCoverage === !0 && (n.alphaToCoverage = this.alphaToCoverage), this.premultipliedAlpha === !0 && (n.premultipliedAlpha = this.premultipliedAlpha), this.wireframe === !0 && (n.wireframe = this.wireframe), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (n.flatShading = this.flatShading), this.visible === !1 && (n.visible = !1), this.toneMapped === !1 && (n.toneMapped = !1), this.fog === !1 && (n.fog = !1), JSON.stringify(this.userData) !== "{}" && (n.userData = this.userData);
    function i(s) {
      const r = [];
      for (const o in s) {
        const l = s[o];
        delete l.metadata, r.push(l);
      }
      return r;
    }
    if (t) {
      const s = i(e.textures), r = i(e.images);
      s.length > 0 && (n.textures = s), r.length > 0 && (n.images = r);
    }
    return n;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.name = e.name, this.blending = e.blending, this.side = e.side, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite;
    const t = e.clippingPlanes;
    let n = null;
    if (t !== null) {
      const i = t.length;
      n = new Array(i);
      for (let s = 0; s !== i; ++s)
        n[s] = t[s].clone();
    }
    return this.clippingPlanes = n, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.alphaToCoverage = e.alphaToCoverage, this.premultipliedAlpha = e.premultipliedAlpha, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
}
class on extends It {
  constructor(e) {
    super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new Me(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = 0, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
  }
}
const qe = /* @__PURE__ */ new R(), Hi = /* @__PURE__ */ new Le();
class dt {
  constructor(e, t, n) {
    if (Array.isArray(e))
      throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = !0, this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = n === !0, this.usage = 35044, this.updateRange = { offset: 0, count: -1 }, this.version = 0;
  }
  onUploadCallback() {
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  setUsage(e) {
    return this.usage = e, this;
  }
  copy(e) {
    return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this;
  }
  copyAt(e, t, n) {
    e *= this.itemSize, n *= t.itemSize;
    for (let i = 0, s = this.itemSize; i < s; i++)
      this.array[e + i] = t.array[n + i];
    return this;
  }
  copyArray(e) {
    return this.array.set(e), this;
  }
  applyMatrix3(e) {
    if (this.itemSize === 2)
      for (let t = 0, n = this.count; t < n; t++)
        Hi.fromBufferAttribute(this, t), Hi.applyMatrix3(e), this.setXY(t, Hi.x, Hi.y);
    else if (this.itemSize === 3)
      for (let t = 0, n = this.count; t < n; t++)
        qe.fromBufferAttribute(this, t), qe.applyMatrix3(e), this.setXYZ(t, qe.x, qe.y, qe.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++)
      qe.fromBufferAttribute(this, t), qe.applyMatrix4(e), this.setXYZ(t, qe.x, qe.y, qe.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      qe.fromBufferAttribute(this, t), qe.applyNormalMatrix(e), this.setXYZ(t, qe.x, qe.y, qe.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      qe.fromBufferAttribute(this, t), qe.transformDirection(e), this.setXYZ(t, qe.x, qe.y, qe.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = Xt(t, this.array)), t;
  }
  setX(e, t) {
    return this.normalized && (t = Be(t, this.array)), this.array[e * this.itemSize] = t, this;
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = Xt(t, this.array)), t;
  }
  setY(e, t) {
    return this.normalized && (t = Be(t, this.array)), this.array[e * this.itemSize + 1] = t, this;
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = Xt(t, this.array)), t;
  }
  setZ(e, t) {
    return this.normalized && (t = Be(t, this.array)), this.array[e * this.itemSize + 2] = t, this;
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = Xt(t, this.array)), t;
  }
  setW(e, t) {
    return this.normalized && (t = Be(t, this.array)), this.array[e * this.itemSize + 3] = t, this;
  }
  setXY(e, t, n) {
    return e *= this.itemSize, this.normalized && (t = Be(t, this.array), n = Be(n, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this;
  }
  setXYZ(e, t, n, i) {
    return e *= this.itemSize, this.normalized && (t = Be(t, this.array), n = Be(n, this.array), i = Be(i, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this;
  }
  setXYZW(e, t, n, i, s) {
    return e *= this.itemSize, this.normalized && (t = Be(t, this.array), n = Be(n, this.array), i = Be(i, this.array), s = Be(s, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this.array[e + 3] = s, this;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const e = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized
    };
    return this.name !== "" && (e.name = this.name), this.usage !== 35044 && (e.usage = this.usage), (this.updateRange.offset !== 0 || this.updateRange.count !== -1) && (e.updateRange = this.updateRange), e;
  }
  copyColorsArray() {
    console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.");
  }
  copyVector2sArray() {
    console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.");
  }
  copyVector3sArray() {
    console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.");
  }
  copyVector4sArray() {
    console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.");
  }
}
class Ya extends dt {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class Za extends dt {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class jt extends dt {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
let Qo = 0;
const vt = /* @__PURE__ */ new Ce(), Ps = /* @__PURE__ */ new ke(), zn = /* @__PURE__ */ new R(), mt = /* @__PURE__ */ new ni(), di = /* @__PURE__ */ new ni(), Je = /* @__PURE__ */ new R();
class Nt extends ti {
  constructor() {
    super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: Qo++ }), this.uuid = Ct(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return Array.isArray(e) ? this.index = new (Wa(e) ? Za : Ya)(e, 1) : this.index = e, this;
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  setAttribute(e, t) {
    return this.attributes[e] = t, this;
  }
  deleteAttribute(e) {
    return delete this.attributes[e], this;
  }
  hasAttribute(e) {
    return this.attributes[e] !== void 0;
  }
  addGroup(e, t, n = 0) {
    this.groups.push({
      start: e,
      count: t,
      materialIndex: n
    });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(e, t) {
    this.drawRange.start = e, this.drawRange.count = t;
  }
  applyMatrix4(e) {
    const t = this.attributes.position;
    t !== void 0 && (t.applyMatrix4(e), t.needsUpdate = !0);
    const n = this.attributes.normal;
    if (n !== void 0) {
      const s = new Mt().getNormalMatrix(e);
      n.applyNormalMatrix(s), n.needsUpdate = !0;
    }
    const i = this.attributes.tangent;
    return i !== void 0 && (i.transformDirection(e), i.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  applyQuaternion(e) {
    return vt.makeRotationFromQuaternion(e), this.applyMatrix4(vt), this;
  }
  rotateX(e) {
    return vt.makeRotationX(e), this.applyMatrix4(vt), this;
  }
  rotateY(e) {
    return vt.makeRotationY(e), this.applyMatrix4(vt), this;
  }
  rotateZ(e) {
    return vt.makeRotationZ(e), this.applyMatrix4(vt), this;
  }
  translate(e, t, n) {
    return vt.makeTranslation(e, t, n), this.applyMatrix4(vt), this;
  }
  scale(e, t, n) {
    return vt.makeScale(e, t, n), this.applyMatrix4(vt), this;
  }
  lookAt(e) {
    return Ps.lookAt(e), Ps.updateMatrix(), this.applyMatrix4(Ps.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(zn).negate(), this.translate(zn.x, zn.y, zn.z), this;
  }
  setFromPoints(e) {
    const t = [];
    for (let n = 0, i = e.length; n < i; n++) {
      const s = e[n];
      t.push(s.x, s.y, s.z || 0);
    }
    return this.setAttribute("position", new jt(t, 3)), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new ni());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingBox.set(
        new R(-1 / 0, -1 / 0, -1 / 0),
        new R(1 / 0, 1 / 0, 1 / 0)
      );
      return;
    }
    if (e !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(e), t)
        for (let n = 0, i = t.length; n < i; n++) {
          const s = t[n];
          mt.setFromBufferAttribute(s), this.morphTargetsRelative ? (Je.addVectors(this.boundingBox.min, mt.min), this.boundingBox.expandByPoint(Je), Je.addVectors(this.boundingBox.max, mt.max), this.boundingBox.expandByPoint(Je)) : (this.boundingBox.expandByPoint(mt.min), this.boundingBox.expandByPoint(mt.max));
        }
    } else
      this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new ii());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingSphere.set(new R(), 1 / 0);
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if (mt.setFromBufferAttribute(e), t)
        for (let s = 0, r = t.length; s < r; s++) {
          const o = t[s];
          di.setFromBufferAttribute(o), this.morphTargetsRelative ? (Je.addVectors(mt.min, di.min), mt.expandByPoint(Je), Je.addVectors(mt.max, di.max), mt.expandByPoint(Je)) : (mt.expandByPoint(di.min), mt.expandByPoint(di.max));
        }
      mt.getCenter(n);
      let i = 0;
      for (let s = 0, r = e.count; s < r; s++)
        Je.fromBufferAttribute(e, s), i = Math.max(i, n.distanceToSquared(Je));
      if (t)
        for (let s = 0, r = t.length; s < r; s++) {
          const o = t[s], l = this.morphTargetsRelative;
          for (let c = 0, u = o.count; c < u; c++)
            Je.fromBufferAttribute(o, c), l && (zn.fromBufferAttribute(e, c), Je.add(zn)), i = Math.max(i, n.distanceToSquared(Je));
        }
      this.boundingSphere.radius = Math.sqrt(i), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
    }
  }
  computeTangents() {
    const e = this.index, t = this.attributes;
    if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) {
      console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const n = e.array, i = t.position.array, s = t.normal.array, r = t.uv.array, o = i.length / 3;
    this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new dt(new Float32Array(4 * o), 4));
    const l = this.getAttribute("tangent").array, c = [], u = [];
    for (let F = 0; F < o; F++)
      c[F] = new R(), u[F] = new R();
    const h = new R(), d = new R(), p = new R(), g = new Le(), m = new Le(), f = new Le(), _ = new R(), T = new R();
    function M(F, q, ne) {
      h.fromArray(i, F * 3), d.fromArray(i, q * 3), p.fromArray(i, ne * 3), g.fromArray(r, F * 2), m.fromArray(r, q * 2), f.fromArray(r, ne * 2), d.sub(h), p.sub(h), m.sub(g), f.sub(g);
      const U = 1 / (m.x * f.y - f.x * m.y);
      !isFinite(U) || (_.copy(d).multiplyScalar(f.y).addScaledVector(p, -m.y).multiplyScalar(U), T.copy(p).multiplyScalar(m.x).addScaledVector(d, -f.x).multiplyScalar(U), c[F].add(_), c[q].add(_), c[ne].add(_), u[F].add(T), u[q].add(T), u[ne].add(T));
    }
    let S = this.groups;
    S.length === 0 && (S = [{
      start: 0,
      count: n.length
    }]);
    for (let F = 0, q = S.length; F < q; ++F) {
      const ne = S[F], U = ne.start, P = ne.count;
      for (let V = U, X = U + P; V < X; V += 3)
        M(
          n[V + 0],
          n[V + 1],
          n[V + 2]
        );
    }
    const b = new R(), A = new R(), D = new R(), x = new R();
    function E(F) {
      D.fromArray(s, F * 3), x.copy(D);
      const q = c[F];
      b.copy(q), b.sub(D.multiplyScalar(D.dot(q))).normalize(), A.crossVectors(x, q);
      const U = A.dot(u[F]) < 0 ? -1 : 1;
      l[F * 4] = b.x, l[F * 4 + 1] = b.y, l[F * 4 + 2] = b.z, l[F * 4 + 3] = U;
    }
    for (let F = 0, q = S.length; F < q; ++F) {
      const ne = S[F], U = ne.start, P = ne.count;
      for (let V = U, X = U + P; V < X; V += 3)
        E(n[V + 0]), E(n[V + 1]), E(n[V + 2]);
    }
  }
  computeVertexNormals() {
    const e = this.index, t = this.getAttribute("position");
    if (t !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0)
        n = new dt(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n);
      else
        for (let d = 0, p = n.count; d < p; d++)
          n.setXYZ(d, 0, 0, 0);
      const i = new R(), s = new R(), r = new R(), o = new R(), l = new R(), c = new R(), u = new R(), h = new R();
      if (e)
        for (let d = 0, p = e.count; d < p; d += 3) {
          const g = e.getX(d + 0), m = e.getX(d + 1), f = e.getX(d + 2);
          i.fromBufferAttribute(t, g), s.fromBufferAttribute(t, m), r.fromBufferAttribute(t, f), u.subVectors(r, s), h.subVectors(i, s), u.cross(h), o.fromBufferAttribute(n, g), l.fromBufferAttribute(n, m), c.fromBufferAttribute(n, f), o.add(u), l.add(u), c.add(u), n.setXYZ(g, o.x, o.y, o.z), n.setXYZ(m, l.x, l.y, l.z), n.setXYZ(f, c.x, c.y, c.z);
        }
      else
        for (let d = 0, p = t.count; d < p; d += 3)
          i.fromBufferAttribute(t, d + 0), s.fromBufferAttribute(t, d + 1), r.fromBufferAttribute(t, d + 2), u.subVectors(r, s), h.subVectors(i, s), u.cross(h), n.setXYZ(d + 0, u.x, u.y, u.z), n.setXYZ(d + 1, u.x, u.y, u.z), n.setXYZ(d + 2, u.x, u.y, u.z);
      this.normalizeNormals(), n.needsUpdate = !0;
    }
  }
  merge() {
    return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."), this;
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, n = e.count; t < n; t++)
      Je.fromBufferAttribute(e, t), Je.normalize(), e.setXYZ(t, Je.x, Je.y, Je.z);
  }
  toNonIndexed() {
    function e(o, l) {
      const c = o.array, u = o.itemSize, h = o.normalized, d = new c.constructor(l.length * u);
      let p = 0, g = 0;
      for (let m = 0, f = l.length; m < f; m++) {
        o.isInterleavedBufferAttribute ? p = l[m] * o.data.stride + o.offset : p = l[m] * u;
        for (let _ = 0; _ < u; _++)
          d[g++] = c[p++];
      }
      return new dt(d, u, h);
    }
    if (this.index === null)
      return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const t = new Nt(), n = this.index.array, i = this.attributes;
    for (const o in i) {
      const l = i[o], c = e(l, n);
      t.setAttribute(o, c);
    }
    const s = this.morphAttributes;
    for (const o in s) {
      const l = [], c = s[o];
      for (let u = 0, h = c.length; u < h; u++) {
        const d = c[u], p = e(d, n);
        l.push(p);
      }
      t.morphAttributes[o] = l;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const r = this.groups;
    for (let o = 0, l = r.length; o < l; o++) {
      const c = r[o];
      t.addGroup(c.start, c.count, c.materialIndex);
    }
    return t;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.5,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON"
      }
    };
    if (e.uuid = this.uuid, e.type = this.type, this.name !== "" && (e.name = this.name), Object.keys(this.userData).length > 0 && (e.userData = this.userData), this.parameters !== void 0) {
      const l = this.parameters;
      for (const c in l)
        l[c] !== void 0 && (e[c] = l[c]);
      return e;
    }
    e.data = { attributes: {} };
    const t = this.index;
    t !== null && (e.data.index = {
      type: t.array.constructor.name,
      array: Array.prototype.slice.call(t.array)
    });
    const n = this.attributes;
    for (const l in n) {
      const c = n[l];
      e.data.attributes[l] = c.toJSON(e.data);
    }
    const i = {};
    let s = !1;
    for (const l in this.morphAttributes) {
      const c = this.morphAttributes[l], u = [];
      for (let h = 0, d = c.length; h < d; h++) {
        const p = c[h];
        u.push(p.toJSON(e.data));
      }
      u.length > 0 && (i[l] = u, s = !0);
    }
    s && (e.data.morphAttributes = i, e.data.morphTargetsRelative = this.morphTargetsRelative);
    const r = this.groups;
    r.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(r)));
    const o = this.boundingSphere;
    return o !== null && (e.data.boundingSphere = {
      center: o.center.toArray(),
      radius: o.radius
    }), e;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
    const t = {};
    this.name = e.name;
    const n = e.index;
    n !== null && this.setIndex(n.clone(t));
    const i = e.attributes;
    for (const c in i) {
      const u = i[c];
      this.setAttribute(c, u.clone(t));
    }
    const s = e.morphAttributes;
    for (const c in s) {
      const u = [], h = s[c];
      for (let d = 0, p = h.length; d < p; d++)
        u.push(h[d].clone(t));
      this.morphAttributes[c] = u;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const r = e.groups;
    for (let c = 0, u = r.length; c < u; c++) {
      const h = r[c];
      this.addGroup(h.start, h.count, h.materialIndex);
    }
    const o = e.boundingBox;
    o !== null && (this.boundingBox = o.clone());
    const l = e.boundingSphere;
    return l !== null && (this.boundingSphere = l.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, e.parameters !== void 0 && (this.parameters = Object.assign({}, e.parameters)), this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const Fr = /* @__PURE__ */ new Ce(), Gn = /* @__PURE__ */ new lr(), Is = /* @__PURE__ */ new ii(), en = /* @__PURE__ */ new R(), tn = /* @__PURE__ */ new R(), nn = /* @__PURE__ */ new R(), Ns = /* @__PURE__ */ new R(), Fs = /* @__PURE__ */ new R(), Us = /* @__PURE__ */ new R(), Wi = /* @__PURE__ */ new R(), $i = /* @__PURE__ */ new R(), qi = /* @__PURE__ */ new R(), Xi = /* @__PURE__ */ new Le(), ji = /* @__PURE__ */ new Le(), Ki = /* @__PURE__ */ new Le(), Os = /* @__PURE__ */ new R(), Yi = /* @__PURE__ */ new R();
class gt extends ke {
  constructor(e = new Nt(), t = new on()) {
    super(), this.isMesh = !0, this.type = "Mesh", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this.material = e.material, this.geometry = e.geometry, this;
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, r = i.length; s < r; s++) {
          const o = i[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = s;
        }
      }
    }
  }
  raycast(e, t) {
    const n = this.geometry, i = this.material, s = this.matrixWorld;
    if (i === void 0 || (n.boundingSphere === null && n.computeBoundingSphere(), Is.copy(n.boundingSphere), Is.applyMatrix4(s), e.ray.intersectsSphere(Is) === !1) || (Fr.copy(s).invert(), Gn.copy(e.ray).applyMatrix4(Fr), n.boundingBox !== null && Gn.intersectsBox(n.boundingBox) === !1))
      return;
    let r;
    const o = n.index, l = n.attributes.position, c = n.morphAttributes.position, u = n.morphTargetsRelative, h = n.attributes.uv, d = n.attributes.uv2, p = n.groups, g = n.drawRange;
    if (o !== null)
      if (Array.isArray(i))
        for (let m = 0, f = p.length; m < f; m++) {
          const _ = p[m], T = i[_.materialIndex], M = Math.max(_.start, g.start), S = Math.min(o.count, Math.min(_.start + _.count, g.start + g.count));
          for (let b = M, A = S; b < A; b += 3) {
            const D = o.getX(b), x = o.getX(b + 1), E = o.getX(b + 2);
            r = Zi(this, T, e, Gn, l, c, u, h, d, D, x, E), r && (r.faceIndex = Math.floor(b / 3), r.face.materialIndex = _.materialIndex, t.push(r));
          }
        }
      else {
        const m = Math.max(0, g.start), f = Math.min(o.count, g.start + g.count);
        for (let _ = m, T = f; _ < T; _ += 3) {
          const M = o.getX(_), S = o.getX(_ + 1), b = o.getX(_ + 2);
          r = Zi(this, i, e, Gn, l, c, u, h, d, M, S, b), r && (r.faceIndex = Math.floor(_ / 3), t.push(r));
        }
      }
    else if (l !== void 0)
      if (Array.isArray(i))
        for (let m = 0, f = p.length; m < f; m++) {
          const _ = p[m], T = i[_.materialIndex], M = Math.max(_.start, g.start), S = Math.min(l.count, Math.min(_.start + _.count, g.start + g.count));
          for (let b = M, A = S; b < A; b += 3) {
            const D = b, x = b + 1, E = b + 2;
            r = Zi(this, T, e, Gn, l, c, u, h, d, D, x, E), r && (r.faceIndex = Math.floor(b / 3), r.face.materialIndex = _.materialIndex, t.push(r));
          }
        }
      else {
        const m = Math.max(0, g.start), f = Math.min(l.count, g.start + g.count);
        for (let _ = m, T = f; _ < T; _ += 3) {
          const M = _, S = _ + 1, b = _ + 2;
          r = Zi(this, i, e, Gn, l, c, u, h, d, M, S, b), r && (r.faceIndex = Math.floor(_ / 3), t.push(r));
        }
      }
  }
}
function el(a, e, t, n, i, s, r, o) {
  let l;
  if (e.side === 1 ? l = n.intersectTriangle(r, s, i, !0, o) : l = n.intersectTriangle(i, s, r, e.side !== 2, o), l === null)
    return null;
  Yi.copy(o), Yi.applyMatrix4(a.matrixWorld);
  const c = t.ray.origin.distanceTo(Yi);
  return c < t.near || c > t.far ? null : {
    distance: c,
    point: Yi.clone(),
    object: a
  };
}
function Zi(a, e, t, n, i, s, r, o, l, c, u, h) {
  en.fromBufferAttribute(i, c), tn.fromBufferAttribute(i, u), nn.fromBufferAttribute(i, h);
  const d = a.morphTargetInfluences;
  if (s && d) {
    Wi.set(0, 0, 0), $i.set(0, 0, 0), qi.set(0, 0, 0);
    for (let g = 0, m = s.length; g < m; g++) {
      const f = d[g], _ = s[g];
      f !== 0 && (Ns.fromBufferAttribute(_, c), Fs.fromBufferAttribute(_, u), Us.fromBufferAttribute(_, h), r ? (Wi.addScaledVector(Ns, f), $i.addScaledVector(Fs, f), qi.addScaledVector(Us, f)) : (Wi.addScaledVector(Ns.sub(en), f), $i.addScaledVector(Fs.sub(tn), f), qi.addScaledVector(Us.sub(nn), f)));
    }
    en.add(Wi), tn.add($i), nn.add(qi);
  }
  a.isSkinnedMesh && (a.boneTransform(c, en), a.boneTransform(u, tn), a.boneTransform(h, nn));
  const p = el(a, e, t, n, en, tn, nn, Os);
  if (p) {
    o && (Xi.fromBufferAttribute(o, c), ji.fromBufferAttribute(o, u), Ki.fromBufferAttribute(o, h), p.uv = qt.getUV(Os, en, tn, nn, Xi, ji, Ki, new Le())), l && (Xi.fromBufferAttribute(l, c), ji.fromBufferAttribute(l, u), Ki.fromBufferAttribute(l, h), p.uv2 = qt.getUV(Os, en, tn, nn, Xi, ji, Ki, new Le()));
    const g = {
      a: c,
      b: u,
      c: h,
      normal: new R(),
      materialIndex: 0
    };
    qt.getNormal(en, tn, nn, g.normal), p.face = g;
  }
  return p;
}
class si extends Nt {
  constructor(e = 1, t = 1, n = 1, i = 1, s = 1, r = 1) {
    super(), this.type = "BoxGeometry", this.parameters = {
      width: e,
      height: t,
      depth: n,
      widthSegments: i,
      heightSegments: s,
      depthSegments: r
    };
    const o = this;
    i = Math.floor(i), s = Math.floor(s), r = Math.floor(r);
    const l = [], c = [], u = [], h = [];
    let d = 0, p = 0;
    g("z", "y", "x", -1, -1, n, t, e, r, s, 0), g("z", "y", "x", 1, -1, n, t, -e, r, s, 1), g("x", "z", "y", 1, 1, e, n, t, i, r, 2), g("x", "z", "y", 1, -1, e, n, -t, i, r, 3), g("x", "y", "z", 1, -1, e, t, n, i, s, 4), g("x", "y", "z", -1, -1, e, t, -n, i, s, 5), this.setIndex(l), this.setAttribute("position", new jt(c, 3)), this.setAttribute("normal", new jt(u, 3)), this.setAttribute("uv", new jt(h, 2));
    function g(m, f, _, T, M, S, b, A, D, x, E) {
      const F = S / D, q = b / x, ne = S / 2, U = b / 2, P = A / 2, V = D + 1, X = x + 1;
      let K = 0, H = 0;
      const N = new R();
      for (let O = 0; O < X; O++) {
        const Q = O * q - U;
        for (let Z = 0; Z < V; Z++) {
          const Y = Z * F - ne;
          N[m] = Y * T, N[f] = Q * M, N[_] = P, c.push(N.x, N.y, N.z), N[m] = 0, N[f] = 0, N[_] = A > 0 ? 1 : -1, u.push(N.x, N.y, N.z), h.push(Z / D), h.push(1 - O / x), K += 1;
        }
      }
      for (let O = 0; O < x; O++)
        for (let Q = 0; Q < D; Q++) {
          const Z = d + Q + V * O, Y = d + Q + V * (O + 1), oe = d + (Q + 1) + V * (O + 1), ve = d + (Q + 1) + V * O;
          l.push(Z, Y, ve), l.push(Y, oe, ve), H += 6;
        }
      o.addGroup(p, H, E), p += H, d += K;
    }
  }
  static fromJSON(e) {
    return new si(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments);
  }
}
function Kn(a) {
  const e = {};
  for (const t in a) {
    e[t] = {};
    for (const n in a[t]) {
      const i = a[t][n];
      i && (i.isColor || i.isMatrix3 || i.isMatrix4 || i.isVector2 || i.isVector3 || i.isVector4 || i.isTexture || i.isQuaternion) ? e[t][n] = i.clone() : Array.isArray(i) ? e[t][n] = i.slice() : e[t][n] = i;
    }
  }
  return e;
}
function ot(a) {
  const e = {};
  for (let t = 0; t < a.length; t++) {
    const n = Kn(a[t]);
    for (const i in n)
      e[i] = n[i];
  }
  return e;
}
function tl(a) {
  const e = [];
  for (let t = 0; t < a.length; t++)
    e.push(a[t].clone());
  return e;
}
const nl = { clone: Kn, merge: ot };
var il = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, sl = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class Tn extends It {
  constructor(e) {
    super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = il, this.fragmentShader = sl, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.extensions = {
      derivatives: !1,
      fragDepth: !1,
      drawBuffers: !1,
      shaderTextureLOD: !1
    }, this.defaultAttributeValues = {
      color: [1, 1, 1],
      uv: [0, 0],
      uv2: [0, 0]
    }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, e !== void 0 && this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = Kn(e.uniforms), this.uniformsGroups = tl(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    t.glslVersion = this.glslVersion, t.uniforms = {};
    for (const i in this.uniforms) {
      const r = this.uniforms[i].value;
      r && r.isTexture ? t.uniforms[i] = {
        type: "t",
        value: r.toJSON(e).uuid
      } : r && r.isColor ? t.uniforms[i] = {
        type: "c",
        value: r.getHex()
      } : r && r.isVector2 ? t.uniforms[i] = {
        type: "v2",
        value: r.toArray()
      } : r && r.isVector3 ? t.uniforms[i] = {
        type: "v3",
        value: r.toArray()
      } : r && r.isVector4 ? t.uniforms[i] = {
        type: "v4",
        value: r.toArray()
      } : r && r.isMatrix3 ? t.uniforms[i] = {
        type: "m3",
        value: r.toArray()
      } : r && r.isMatrix4 ? t.uniforms[i] = {
        type: "m4",
        value: r.toArray()
      } : t.uniforms[i] = {
        value: r
      };
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader;
    const n = {};
    for (const i in this.extensions)
      this.extensions[i] === !0 && (n[i] = !0);
    return Object.keys(n).length > 0 && (t.extensions = n), t;
  }
}
class Ja extends ke {
  constructor() {
    super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new Ce(), this.projectionMatrix = new Ce(), this.projectionMatrixInverse = new Ce();
  }
  copy(e, t) {
    return super.copy(e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this;
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(-t[8], -t[9], -t[10]).normalize();
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(e, t) {
    super.updateWorldMatrix(e, t), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class ct extends Ja {
  constructor(e = 50, t = 1, n = 0.1, i = 2e3) {
    super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = n, this.far = i, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this;
  }
  setFocalLength(e) {
    const t = 0.5 * this.getFilmHeight() / e;
    this.fov = Si * 2 * Math.atan(t), this.updateProjectionMatrix();
  }
  getFocalLength() {
    const e = Math.tan(yi * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / e;
  }
  getEffectiveFOV() {
    return Si * 2 * Math.atan(
      Math.tan(yi * 0.5 * this.fov) / this.zoom
    );
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  setViewOffset(e, t, n, i, s, r) {
    this.aspect = e / t, this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = s, this.view.height = r, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = this.near;
    let t = e * Math.tan(yi * 0.5 * this.fov) / this.zoom, n = 2 * t, i = this.aspect * n, s = -0.5 * i;
    const r = this.view;
    if (this.view !== null && this.view.enabled) {
      const l = r.fullWidth, c = r.fullHeight;
      s += r.offsetX * i / l, t -= r.offsetY * n / c, i *= r.width / l, n *= r.height / c;
    }
    const o = this.filmOffset;
    o !== 0 && (s += e * o / this.getFilmWidth()), this.projectionMatrix.makePerspective(s, s + i, t, t - n, e, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t;
  }
}
const kn = 90, Vn = 1;
class rl extends ke {
  constructor(e, t, n) {
    super(), this.type = "CubeCamera", this.renderTarget = n;
    const i = new ct(kn, Vn, e, t);
    i.layers = this.layers, i.up.set(0, -1, 0), i.lookAt(new R(1, 0, 0)), this.add(i);
    const s = new ct(kn, Vn, e, t);
    s.layers = this.layers, s.up.set(0, -1, 0), s.lookAt(new R(-1, 0, 0)), this.add(s);
    const r = new ct(kn, Vn, e, t);
    r.layers = this.layers, r.up.set(0, 0, 1), r.lookAt(new R(0, 1, 0)), this.add(r);
    const o = new ct(kn, Vn, e, t);
    o.layers = this.layers, o.up.set(0, 0, -1), o.lookAt(new R(0, -1, 0)), this.add(o);
    const l = new ct(kn, Vn, e, t);
    l.layers = this.layers, l.up.set(0, -1, 0), l.lookAt(new R(0, 0, 1)), this.add(l);
    const c = new ct(kn, Vn, e, t);
    c.layers = this.layers, c.up.set(0, -1, 0), c.lookAt(new R(0, 0, -1)), this.add(c);
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const n = this.renderTarget, [i, s, r, o, l, c] = this.children, u = e.getRenderTarget(), h = e.toneMapping, d = e.xr.enabled;
    e.toneMapping = 0, e.xr.enabled = !1;
    const p = n.texture.generateMipmaps;
    n.texture.generateMipmaps = !1, e.setRenderTarget(n, 0), e.render(t, i), e.setRenderTarget(n, 1), e.render(t, s), e.setRenderTarget(n, 2), e.render(t, r), e.setRenderTarget(n, 3), e.render(t, o), e.setRenderTarget(n, 4), e.render(t, l), n.texture.generateMipmaps = p, e.setRenderTarget(n, 5), e.render(t, c), e.setRenderTarget(u), e.toneMapping = h, e.xr.enabled = d, n.texture.needsPMREMUpdate = !0;
  }
}
class Qa extends ut {
  constructor(e, t, n, i, s, r, o, l, c, u) {
    e = e !== void 0 ? e : [], t = t !== void 0 ? t : 301, super(e, t, n, i, s, r, o, l, c, u), this.isCubeTexture = !0, this.flipY = !1;
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class al extends wn {
  constructor(e = 1, t = {}) {
    super(e, e, t), this.isWebGLCubeRenderTarget = !0;
    const n = { width: e, height: e, depth: 1 }, i = [n, n, n, n, n, n];
    this.texture = new Qa(i, t.mapping, t.wrapS, t.wrapT, t.magFilter, t.minFilter, t.format, t.type, t.anisotropy, t.encoding), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = t.generateMipmaps !== void 0 ? t.generateMipmaps : !1, this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : 1006;
  }
  fromEquirectangularTexture(e, t) {
    this.texture.type = t.type, this.texture.encoding = t.encoding, this.texture.generateMipmaps = t.generateMipmaps, this.texture.minFilter = t.minFilter, this.texture.magFilter = t.magFilter;
    const n = {
      uniforms: {
        tEquirect: { value: null }
      },
      vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,
      fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`
    }, i = new si(5, 5, 5), s = new Tn({
      name: "CubemapFromEquirect",
      uniforms: Kn(n.uniforms),
      vertexShader: n.vertexShader,
      fragmentShader: n.fragmentShader,
      side: 1,
      blending: 0
    });
    s.uniforms.tEquirect.value = t;
    const r = new gt(i, s), o = t.minFilter;
    return t.minFilter === 1008 && (t.minFilter = 1006), new rl(1, 10, this).update(e, r), t.minFilter = o, r.geometry.dispose(), r.material.dispose(), this;
  }
  clear(e, t, n, i) {
    const s = e.getRenderTarget();
    for (let r = 0; r < 6; r++)
      e.setRenderTarget(this, r), e.clear(t, n, i);
    e.setRenderTarget(s);
  }
}
const Bs = /* @__PURE__ */ new R(), ol = /* @__PURE__ */ new R(), ll = /* @__PURE__ */ new Mt();
class gn {
  constructor(e = new R(1, 0, 0), t = 0) {
    this.isPlane = !0, this.normal = e, this.constant = t;
  }
  set(e, t) {
    return this.normal.copy(e), this.constant = t, this;
  }
  setComponents(e, t, n, i) {
    return this.normal.set(e, t, n), this.constant = i, this;
  }
  setFromNormalAndCoplanarPoint(e, t) {
    return this.normal.copy(e), this.constant = -t.dot(this.normal), this;
  }
  setFromCoplanarPoints(e, t, n) {
    const i = Bs.subVectors(n, t).cross(ol.subVectors(e, t)).normalize();
    return this.setFromNormalAndCoplanarPoint(i, e), this;
  }
  copy(e) {
    return this.normal.copy(e.normal), this.constant = e.constant, this;
  }
  normalize() {
    const e = 1 / this.normal.length();
    return this.normal.multiplyScalar(e), this.constant *= e, this;
  }
  negate() {
    return this.constant *= -1, this.normal.negate(), this;
  }
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  projectPoint(e, t) {
    return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e);
  }
  intersectLine(e, t) {
    const n = e.delta(Bs), i = this.normal.dot(n);
    if (i === 0)
      return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const s = -(e.start.dot(this.normal) + this.constant) / i;
    return s < 0 || s > 1 ? null : t.copy(n).multiplyScalar(s).add(e.start);
  }
  intersectsLine(e) {
    const t = this.distanceToPoint(e.start), n = this.distanceToPoint(e.end);
    return t < 0 && n > 0 || n < 0 && t > 0;
  }
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(e, t) {
    const n = t || ll.getNormalMatrix(e), i = this.coplanarPoint(Bs).applyMatrix4(e), s = this.normal.applyMatrix3(n).normalize();
    return this.constant = -i.dot(s), this;
  }
  translate(e) {
    return this.constant -= e.dot(this.normal), this;
  }
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Hn = /* @__PURE__ */ new ii(), Ji = /* @__PURE__ */ new R();
class cr {
  constructor(e = new gn(), t = new gn(), n = new gn(), i = new gn(), s = new gn(), r = new gn()) {
    this.planes = [e, t, n, i, s, r];
  }
  set(e, t, n, i, s, r) {
    const o = this.planes;
    return o[0].copy(e), o[1].copy(t), o[2].copy(n), o[3].copy(i), o[4].copy(s), o[5].copy(r), this;
  }
  copy(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++)
      t[n].copy(e.planes[n]);
    return this;
  }
  setFromProjectionMatrix(e) {
    const t = this.planes, n = e.elements, i = n[0], s = n[1], r = n[2], o = n[3], l = n[4], c = n[5], u = n[6], h = n[7], d = n[8], p = n[9], g = n[10], m = n[11], f = n[12], _ = n[13], T = n[14], M = n[15];
    return t[0].setComponents(o - i, h - l, m - d, M - f).normalize(), t[1].setComponents(o + i, h + l, m + d, M + f).normalize(), t[2].setComponents(o + s, h + c, m + p, M + _).normalize(), t[3].setComponents(o - s, h - c, m - p, M - _).normalize(), t[4].setComponents(o - r, h - u, m - g, M - T).normalize(), t[5].setComponents(o + r, h + u, m + g, M + T).normalize(), this;
  }
  intersectsObject(e) {
    const t = e.geometry;
    return t.boundingSphere === null && t.computeBoundingSphere(), Hn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld), this.intersectsSphere(Hn);
  }
  intersectsSprite(e) {
    return Hn.center.set(0, 0, 0), Hn.radius = 0.7071067811865476, Hn.applyMatrix4(e.matrixWorld), this.intersectsSphere(Hn);
  }
  intersectsSphere(e) {
    const t = this.planes, n = e.center, i = -e.radius;
    for (let s = 0; s < 6; s++)
      if (t[s].distanceToPoint(n) < i)
        return !1;
    return !0;
  }
  intersectsBox(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) {
      const i = t[n];
      if (Ji.x = i.normal.x > 0 ? e.max.x : e.min.x, Ji.y = i.normal.y > 0 ? e.max.y : e.min.y, Ji.z = i.normal.z > 0 ? e.max.z : e.min.z, i.distanceToPoint(Ji) < 0)
        return !1;
    }
    return !0;
  }
  containsPoint(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++)
      if (t[n].distanceToPoint(e) < 0)
        return !1;
    return !0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
function eo() {
  let a = null, e = !1, t = null, n = null;
  function i(s, r) {
    t(s, r), n = a.requestAnimationFrame(i);
  }
  return {
    start: function() {
      e !== !0 && t !== null && (n = a.requestAnimationFrame(i), e = !0);
    },
    stop: function() {
      a.cancelAnimationFrame(n), e = !1;
    },
    setAnimationLoop: function(s) {
      t = s;
    },
    setContext: function(s) {
      a = s;
    }
  };
}
function cl(a, e) {
  const t = e.isWebGL2, n = /* @__PURE__ */ new WeakMap();
  function i(c, u) {
    const h = c.array, d = c.usage, p = a.createBuffer();
    a.bindBuffer(u, p), a.bufferData(u, h, d), c.onUploadCallback();
    let g;
    if (h instanceof Float32Array)
      g = 5126;
    else if (h instanceof Uint16Array)
      if (c.isFloat16BufferAttribute)
        if (t)
          g = 5131;
        else
          throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");
      else
        g = 5123;
    else if (h instanceof Int16Array)
      g = 5122;
    else if (h instanceof Uint32Array)
      g = 5125;
    else if (h instanceof Int32Array)
      g = 5124;
    else if (h instanceof Int8Array)
      g = 5120;
    else if (h instanceof Uint8Array)
      g = 5121;
    else if (h instanceof Uint8ClampedArray)
      g = 5121;
    else
      throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + h);
    return {
      buffer: p,
      type: g,
      bytesPerElement: h.BYTES_PER_ELEMENT,
      version: c.version
    };
  }
  function s(c, u, h) {
    const d = u.array, p = u.updateRange;
    a.bindBuffer(h, c), p.count === -1 ? a.bufferSubData(h, 0, d) : (t ? a.bufferSubData(
      h,
      p.offset * d.BYTES_PER_ELEMENT,
      d,
      p.offset,
      p.count
    ) : a.bufferSubData(
      h,
      p.offset * d.BYTES_PER_ELEMENT,
      d.subarray(p.offset, p.offset + p.count)
    ), p.count = -1);
  }
  function r(c) {
    return c.isInterleavedBufferAttribute && (c = c.data), n.get(c);
  }
  function o(c) {
    c.isInterleavedBufferAttribute && (c = c.data);
    const u = n.get(c);
    u && (a.deleteBuffer(u.buffer), n.delete(c));
  }
  function l(c, u) {
    if (c.isGLBufferAttribute) {
      const d = n.get(c);
      (!d || d.version < c.version) && n.set(c, {
        buffer: c.buffer,
        type: c.type,
        bytesPerElement: c.elementSize,
        version: c.version
      });
      return;
    }
    c.isInterleavedBufferAttribute && (c = c.data);
    const h = n.get(c);
    h === void 0 ? n.set(c, i(c, u)) : h.version < c.version && (s(h.buffer, c, u), h.version = c.version);
  }
  return {
    get: r,
    remove: o,
    update: l
  };
}
class ur extends Nt {
  constructor(e = 1, t = 1, n = 1, i = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = {
      width: e,
      height: t,
      widthSegments: n,
      heightSegments: i
    };
    const s = e / 2, r = t / 2, o = Math.floor(n), l = Math.floor(i), c = o + 1, u = l + 1, h = e / o, d = t / l, p = [], g = [], m = [], f = [];
    for (let _ = 0; _ < u; _++) {
      const T = _ * d - r;
      for (let M = 0; M < c; M++) {
        const S = M * h - s;
        g.push(S, -T, 0), m.push(0, 0, 1), f.push(M / o), f.push(1 - _ / l);
      }
    }
    for (let _ = 0; _ < l; _++)
      for (let T = 0; T < o; T++) {
        const M = T + c * _, S = T + c * (_ + 1), b = T + 1 + c * (_ + 1), A = T + 1 + c * _;
        p.push(M, S, A), p.push(S, b, A);
      }
    this.setIndex(p), this.setAttribute("position", new jt(g, 3)), this.setAttribute("normal", new jt(m, 3)), this.setAttribute("uv", new jt(f, 2));
  }
  static fromJSON(e) {
    return new ur(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
var ul = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`, hl = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, dl = `#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`, fl = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, pl = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`, ml = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, gl = "vec3 transformed = vec3( position );", _l = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, xl = `vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`, vl = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`, yl = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`, Ml = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`, Sl = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, bl = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, wl = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, Tl = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, El = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, Al = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`, Cl = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`, Rl = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`, Ll = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`, Dl = `vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`, Pl = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, Il = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`, Nl = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, Fl = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, Ul = "gl_FragColor = linearToOutputTexel( gl_FragColor );", Ol = `vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`, Bl = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`, zl = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, Gl = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`, kl = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, Vl = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`, Hl = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, Wl = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, $l = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, ql = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, Xl = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`, jl = `#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`, Kl = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, Yl = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, Zl = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
#define Material_LightProbeLOD( material )	(0)`, Jl = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`, Ql = `#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`, ec = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, tc = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`, nc = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, ic = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`, sc = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`, rc = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`, ac = `
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`, oc = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`, lc = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`, cc = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, uc = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, hc = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`, dc = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`, fc = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, pc = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, mc = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`, gc = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, _c = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`, xc = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, vc = `#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, yc = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`, Mc = `#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`, Sc = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`, bc = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`, wc = `#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`, Tc = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Ec = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Ac = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, Cc = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`, Rc = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`, Lc = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`, Dc = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`, Pc = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, Ic = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, Nc = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`, Fc = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, Uc = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, Oc = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, Bc = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, zc = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`, Gc = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, kc = `#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`, Vc = `#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`, Hc = `#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`, Wc = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`, $c = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, qc = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`, Xc = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, jc = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`, Kc = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, Yc = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, Zc = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, Jc = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`, Qc = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`, eu = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`, tu = `#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`, nu = `#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`, iu = `#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`, su = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`, ru = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`, au = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`, ou = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const lu = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, cu = `uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`, uu = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, hu = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`, du = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, fu = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`, pu = `#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`, mu = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`, gu = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`, _u = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`, xu = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, vu = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`, yu = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, Mu = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, Su = `#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`, bu = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, wu = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Tu = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Eu = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`, Au = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Cu = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`, Ru = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`, Lu = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Du = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Pu = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`, Iu = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Nu = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Fu = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Uu = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`, Ou = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, Bu = `#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, zu = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`, Gu = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, ku = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`, be = {
  alphamap_fragment: ul,
  alphamap_pars_fragment: hl,
  alphatest_fragment: dl,
  alphatest_pars_fragment: fl,
  aomap_fragment: pl,
  aomap_pars_fragment: ml,
  begin_vertex: gl,
  beginnormal_vertex: _l,
  bsdfs: xl,
  iridescence_fragment: vl,
  bumpmap_pars_fragment: yl,
  clipping_planes_fragment: Ml,
  clipping_planes_pars_fragment: Sl,
  clipping_planes_pars_vertex: bl,
  clipping_planes_vertex: wl,
  color_fragment: Tl,
  color_pars_fragment: El,
  color_pars_vertex: Al,
  color_vertex: Cl,
  common: Rl,
  cube_uv_reflection_fragment: Ll,
  defaultnormal_vertex: Dl,
  displacementmap_pars_vertex: Pl,
  displacementmap_vertex: Il,
  emissivemap_fragment: Nl,
  emissivemap_pars_fragment: Fl,
  encodings_fragment: Ul,
  encodings_pars_fragment: Ol,
  envmap_fragment: Bl,
  envmap_common_pars_fragment: zl,
  envmap_pars_fragment: Gl,
  envmap_pars_vertex: kl,
  envmap_physical_pars_fragment: Ql,
  envmap_vertex: Vl,
  fog_vertex: Hl,
  fog_pars_vertex: Wl,
  fog_fragment: $l,
  fog_pars_fragment: ql,
  gradientmap_pars_fragment: Xl,
  lightmap_fragment: jl,
  lightmap_pars_fragment: Kl,
  lights_lambert_fragment: Yl,
  lights_lambert_pars_fragment: Zl,
  lights_pars_begin: Jl,
  lights_toon_fragment: ec,
  lights_toon_pars_fragment: tc,
  lights_phong_fragment: nc,
  lights_phong_pars_fragment: ic,
  lights_physical_fragment: sc,
  lights_physical_pars_fragment: rc,
  lights_fragment_begin: ac,
  lights_fragment_maps: oc,
  lights_fragment_end: lc,
  logdepthbuf_fragment: cc,
  logdepthbuf_pars_fragment: uc,
  logdepthbuf_pars_vertex: hc,
  logdepthbuf_vertex: dc,
  map_fragment: fc,
  map_pars_fragment: pc,
  map_particle_fragment: mc,
  map_particle_pars_fragment: gc,
  metalnessmap_fragment: _c,
  metalnessmap_pars_fragment: xc,
  morphcolor_vertex: vc,
  morphnormal_vertex: yc,
  morphtarget_pars_vertex: Mc,
  morphtarget_vertex: Sc,
  normal_fragment_begin: bc,
  normal_fragment_maps: wc,
  normal_pars_fragment: Tc,
  normal_pars_vertex: Ec,
  normal_vertex: Ac,
  normalmap_pars_fragment: Cc,
  clearcoat_normal_fragment_begin: Rc,
  clearcoat_normal_fragment_maps: Lc,
  clearcoat_pars_fragment: Dc,
  iridescence_pars_fragment: Pc,
  output_fragment: Ic,
  packing: Nc,
  premultiplied_alpha_fragment: Fc,
  project_vertex: Uc,
  dithering_fragment: Oc,
  dithering_pars_fragment: Bc,
  roughnessmap_fragment: zc,
  roughnessmap_pars_fragment: Gc,
  shadowmap_pars_fragment: kc,
  shadowmap_pars_vertex: Vc,
  shadowmap_vertex: Hc,
  shadowmask_pars_fragment: Wc,
  skinbase_vertex: $c,
  skinning_pars_vertex: qc,
  skinning_vertex: Xc,
  skinnormal_vertex: jc,
  specularmap_fragment: Kc,
  specularmap_pars_fragment: Yc,
  tonemapping_fragment: Zc,
  tonemapping_pars_fragment: Jc,
  transmission_fragment: Qc,
  transmission_pars_fragment: eu,
  uv_pars_fragment: tu,
  uv_pars_vertex: nu,
  uv_vertex: iu,
  uv2_pars_fragment: su,
  uv2_pars_vertex: ru,
  uv2_vertex: au,
  worldpos_vertex: ou,
  background_vert: lu,
  background_frag: cu,
  backgroundCube_vert: uu,
  backgroundCube_frag: hu,
  cube_vert: du,
  cube_frag: fu,
  depth_vert: pu,
  depth_frag: mu,
  distanceRGBA_vert: gu,
  distanceRGBA_frag: _u,
  equirect_vert: xu,
  equirect_frag: vu,
  linedashed_vert: yu,
  linedashed_frag: Mu,
  meshbasic_vert: Su,
  meshbasic_frag: bu,
  meshlambert_vert: wu,
  meshlambert_frag: Tu,
  meshmatcap_vert: Eu,
  meshmatcap_frag: Au,
  meshnormal_vert: Cu,
  meshnormal_frag: Ru,
  meshphong_vert: Lu,
  meshphong_frag: Du,
  meshphysical_vert: Pu,
  meshphysical_frag: Iu,
  meshtoon_vert: Nu,
  meshtoon_frag: Fu,
  points_vert: Uu,
  points_frag: Ou,
  shadow_vert: Bu,
  shadow_frag: zu,
  sprite_vert: Gu,
  sprite_frag: ku
}, te = {
  common: {
    diffuse: { value: /* @__PURE__ */ new Me(16777215) },
    opacity: { value: 1 },
    map: { value: null },
    uvTransform: { value: /* @__PURE__ */ new Mt() },
    uv2Transform: { value: /* @__PURE__ */ new Mt() },
    alphaMap: { value: null },
    alphaTest: { value: 0 }
  },
  specularmap: {
    specularMap: { value: null }
  },
  envmap: {
    envMap: { value: null },
    flipEnvMap: { value: -1 },
    reflectivity: { value: 1 },
    ior: { value: 1.5 },
    refractionRatio: { value: 0.98 }
  },
  aomap: {
    aoMap: { value: null },
    aoMapIntensity: { value: 1 }
  },
  lightmap: {
    lightMap: { value: null },
    lightMapIntensity: { value: 1 }
  },
  emissivemap: {
    emissiveMap: { value: null }
  },
  bumpmap: {
    bumpMap: { value: null },
    bumpScale: { value: 1 }
  },
  normalmap: {
    normalMap: { value: null },
    normalScale: { value: /* @__PURE__ */ new Le(1, 1) }
  },
  displacementmap: {
    displacementMap: { value: null },
    displacementScale: { value: 1 },
    displacementBias: { value: 0 }
  },
  roughnessmap: {
    roughnessMap: { value: null }
  },
  metalnessmap: {
    metalnessMap: { value: null }
  },
  gradientmap: {
    gradientMap: { value: null }
  },
  fog: {
    fogDensity: { value: 25e-5 },
    fogNear: { value: 1 },
    fogFar: { value: 2e3 },
    fogColor: { value: /* @__PURE__ */ new Me(16777215) }
  },
  lights: {
    ambientLightColor: { value: [] },
    lightProbe: { value: [] },
    directionalLights: { value: [], properties: {
      direction: {},
      color: {}
    } },
    directionalLightShadows: { value: [], properties: {
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    directionalShadowMap: { value: [] },
    directionalShadowMatrix: { value: [] },
    spotLights: { value: [], properties: {
      color: {},
      position: {},
      direction: {},
      distance: {},
      coneCos: {},
      penumbraCos: {},
      decay: {}
    } },
    spotLightShadows: { value: [], properties: {
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    spotLightMap: { value: [] },
    spotShadowMap: { value: [] },
    spotLightMatrix: { value: [] },
    pointLights: { value: [], properties: {
      color: {},
      position: {},
      decay: {},
      distance: {}
    } },
    pointLightShadows: { value: [], properties: {
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {},
      shadowCameraNear: {},
      shadowCameraFar: {}
    } },
    pointShadowMap: { value: [] },
    pointShadowMatrix: { value: [] },
    hemisphereLights: { value: [], properties: {
      direction: {},
      skyColor: {},
      groundColor: {}
    } },
    rectAreaLights: { value: [], properties: {
      color: {},
      position: {},
      width: {},
      height: {}
    } },
    ltc_1: { value: null },
    ltc_2: { value: null }
  },
  points: {
    diffuse: { value: /* @__PURE__ */ new Me(16777215) },
    opacity: { value: 1 },
    size: { value: 1 },
    scale: { value: 1 },
    map: { value: null },
    alphaMap: { value: null },
    alphaTest: { value: 0 },
    uvTransform: { value: /* @__PURE__ */ new Mt() }
  },
  sprite: {
    diffuse: { value: /* @__PURE__ */ new Me(16777215) },
    opacity: { value: 1 },
    center: { value: /* @__PURE__ */ new Le(0.5, 0.5) },
    rotation: { value: 0 },
    map: { value: null },
    alphaMap: { value: null },
    alphaTest: { value: 0 },
    uvTransform: { value: /* @__PURE__ */ new Mt() }
  }
}, Pt = {
  basic: {
    uniforms: /* @__PURE__ */ ot([
      te.common,
      te.specularmap,
      te.envmap,
      te.aomap,
      te.lightmap,
      te.fog
    ]),
    vertexShader: be.meshbasic_vert,
    fragmentShader: be.meshbasic_frag
  },
  lambert: {
    uniforms: /* @__PURE__ */ ot([
      te.common,
      te.specularmap,
      te.envmap,
      te.aomap,
      te.lightmap,
      te.emissivemap,
      te.bumpmap,
      te.normalmap,
      te.displacementmap,
      te.fog,
      te.lights,
      {
        emissive: { value: /* @__PURE__ */ new Me(0) }
      }
    ]),
    vertexShader: be.meshlambert_vert,
    fragmentShader: be.meshlambert_frag
  },
  phong: {
    uniforms: /* @__PURE__ */ ot([
      te.common,
      te.specularmap,
      te.envmap,
      te.aomap,
      te.lightmap,
      te.emissivemap,
      te.bumpmap,
      te.normalmap,
      te.displacementmap,
      te.fog,
      te.lights,
      {
        emissive: { value: /* @__PURE__ */ new Me(0) },
        specular: { value: /* @__PURE__ */ new Me(1118481) },
        shininess: { value: 30 }
      }
    ]),
    vertexShader: be.meshphong_vert,
    fragmentShader: be.meshphong_frag
  },
  standard: {
    uniforms: /* @__PURE__ */ ot([
      te.common,
      te.envmap,
      te.aomap,
      te.lightmap,
      te.emissivemap,
      te.bumpmap,
      te.normalmap,
      te.displacementmap,
      te.roughnessmap,
      te.metalnessmap,
      te.fog,
      te.lights,
      {
        emissive: { value: /* @__PURE__ */ new Me(0) },
        roughness: { value: 1 },
        metalness: { value: 0 },
        envMapIntensity: { value: 1 }
      }
    ]),
    vertexShader: be.meshphysical_vert,
    fragmentShader: be.meshphysical_frag
  },
  toon: {
    uniforms: /* @__PURE__ */ ot([
      te.common,
      te.aomap,
      te.lightmap,
      te.emissivemap,
      te.bumpmap,
      te.normalmap,
      te.displacementmap,
      te.gradientmap,
      te.fog,
      te.lights,
      {
        emissive: { value: /* @__PURE__ */ new Me(0) }
      }
    ]),
    vertexShader: be.meshtoon_vert,
    fragmentShader: be.meshtoon_frag
  },
  matcap: {
    uniforms: /* @__PURE__ */ ot([
      te.common,
      te.bumpmap,
      te.normalmap,
      te.displacementmap,
      te.fog,
      {
        matcap: { value: null }
      }
    ]),
    vertexShader: be.meshmatcap_vert,
    fragmentShader: be.meshmatcap_frag
  },
  points: {
    uniforms: /* @__PURE__ */ ot([
      te.points,
      te.fog
    ]),
    vertexShader: be.points_vert,
    fragmentShader: be.points_frag
  },
  dashed: {
    uniforms: /* @__PURE__ */ ot([
      te.common,
      te.fog,
      {
        scale: { value: 1 },
        dashSize: { value: 1 },
        totalSize: { value: 2 }
      }
    ]),
    vertexShader: be.linedashed_vert,
    fragmentShader: be.linedashed_frag
  },
  depth: {
    uniforms: /* @__PURE__ */ ot([
      te.common,
      te.displacementmap
    ]),
    vertexShader: be.depth_vert,
    fragmentShader: be.depth_frag
  },
  normal: {
    uniforms: /* @__PURE__ */ ot([
      te.common,
      te.bumpmap,
      te.normalmap,
      te.displacementmap,
      {
        opacity: { value: 1 }
      }
    ]),
    vertexShader: be.meshnormal_vert,
    fragmentShader: be.meshnormal_frag
  },
  sprite: {
    uniforms: /* @__PURE__ */ ot([
      te.sprite,
      te.fog
    ]),
    vertexShader: be.sprite_vert,
    fragmentShader: be.sprite_frag
  },
  background: {
    uniforms: {
      uvTransform: { value: /* @__PURE__ */ new Mt() },
      t2D: { value: null }
    },
    vertexShader: be.background_vert,
    fragmentShader: be.background_frag
  },
  backgroundCube: {
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 },
      backgroundBlurriness: { value: 0 }
    },
    vertexShader: be.backgroundCube_vert,
    fragmentShader: be.backgroundCube_frag
  },
  cube: {
    uniforms: {
      tCube: { value: null },
      tFlip: { value: -1 },
      opacity: { value: 1 }
    },
    vertexShader: be.cube_vert,
    fragmentShader: be.cube_frag
  },
  equirect: {
    uniforms: {
      tEquirect: { value: null }
    },
    vertexShader: be.equirect_vert,
    fragmentShader: be.equirect_frag
  },
  distanceRGBA: {
    uniforms: /* @__PURE__ */ ot([
      te.common,
      te.displacementmap,
      {
        referencePosition: { value: /* @__PURE__ */ new R() },
        nearDistance: { value: 1 },
        farDistance: { value: 1e3 }
      }
    ]),
    vertexShader: be.distanceRGBA_vert,
    fragmentShader: be.distanceRGBA_frag
  },
  shadow: {
    uniforms: /* @__PURE__ */ ot([
      te.lights,
      te.fog,
      {
        color: { value: /* @__PURE__ */ new Me(0) },
        opacity: { value: 1 }
      }
    ]),
    vertexShader: be.shadow_vert,
    fragmentShader: be.shadow_frag
  }
};
Pt.physical = {
  uniforms: /* @__PURE__ */ ot([
    Pt.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatNormalScale: { value: /* @__PURE__ */ new Le(1, 1) },
      clearcoatNormalMap: { value: null },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      sheen: { value: 0 },
      sheenColor: { value: /* @__PURE__ */ new Me(0) },
      sheenColorMap: { value: null },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionSamplerSize: { value: /* @__PURE__ */ new Le() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: /* @__PURE__ */ new Me(0) },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularColor: { value: /* @__PURE__ */ new Me(1, 1, 1) },
      specularColorMap: { value: null }
    }
  ]),
  vertexShader: be.meshphysical_vert,
  fragmentShader: be.meshphysical_frag
};
function Vu(a, e, t, n, i, s, r) {
  const o = new Me(0);
  let l = s === !0 ? 0 : 1, c, u, h = null, d = 0, p = null;
  function g(f, _) {
    let T = !1, M = _.isScene === !0 ? _.background : null;
    M && M.isTexture && (M = (_.backgroundBlurriness > 0 ? t : e).get(M));
    const S = a.xr, b = S.getSession && S.getSession();
    b && b.environmentBlendMode === "additive" && (M = null), M === null ? m(o, l) : M && M.isColor && (m(M, 1), T = !0), (a.autoClear || T) && a.clear(a.autoClearColor, a.autoClearDepth, a.autoClearStencil), M && (M.isCubeTexture || M.mapping === 306) ? (u === void 0 && (u = new gt(
      new si(1, 1, 1),
      new Tn({
        name: "BackgroundCubeMaterial",
        uniforms: Kn(Pt.backgroundCube.uniforms),
        vertexShader: Pt.backgroundCube.vertexShader,
        fragmentShader: Pt.backgroundCube.fragmentShader,
        side: 1,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), u.geometry.deleteAttribute("normal"), u.geometry.deleteAttribute("uv"), u.onBeforeRender = function(A, D, x) {
      this.matrixWorld.copyPosition(x.matrixWorld);
    }, Object.defineProperty(u.material, "envMap", {
      get: function() {
        return this.uniforms.envMap.value;
      }
    }), i.update(u)), u.material.uniforms.envMap.value = M, u.material.uniforms.flipEnvMap.value = M.isCubeTexture && M.isRenderTargetTexture === !1 ? -1 : 1, u.material.uniforms.backgroundBlurriness.value = _.backgroundBlurriness, (h !== M || d !== M.version || p !== a.toneMapping) && (u.material.needsUpdate = !0, h = M, d = M.version, p = a.toneMapping), u.layers.enableAll(), f.unshift(u, u.geometry, u.material, 0, 0, null)) : M && M.isTexture && (c === void 0 && (c = new gt(
      new ur(2, 2),
      new Tn({
        name: "BackgroundMaterial",
        uniforms: Kn(Pt.background.uniforms),
        vertexShader: Pt.background.vertexShader,
        fragmentShader: Pt.background.fragmentShader,
        side: 0,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), c.geometry.deleteAttribute("normal"), Object.defineProperty(c.material, "map", {
      get: function() {
        return this.uniforms.t2D.value;
      }
    }), i.update(c)), c.material.uniforms.t2D.value = M, M.matrixAutoUpdate === !0 && M.updateMatrix(), c.material.uniforms.uvTransform.value.copy(M.matrix), (h !== M || d !== M.version || p !== a.toneMapping) && (c.material.needsUpdate = !0, h = M, d = M.version, p = a.toneMapping), c.layers.enableAll(), f.unshift(c, c.geometry, c.material, 0, 0, null));
  }
  function m(f, _) {
    n.buffers.color.setClear(f.r, f.g, f.b, _, r);
  }
  return {
    getClearColor: function() {
      return o;
    },
    setClearColor: function(f, _ = 1) {
      o.set(f), l = _, m(o, l);
    },
    getClearAlpha: function() {
      return l;
    },
    setClearAlpha: function(f) {
      l = f, m(o, l);
    },
    render: g
  };
}
function Hu(a, e, t, n) {
  const i = a.getParameter(34921), s = n.isWebGL2 ? null : e.get("OES_vertex_array_object"), r = n.isWebGL2 || s !== null, o = {}, l = f(null);
  let c = l, u = !1;
  function h(P, V, X, K, H) {
    let N = !1;
    if (r) {
      const O = m(K, X, V);
      c !== O && (c = O, p(c.object)), N = _(P, K, X, H), N && T(P, K, X, H);
    } else {
      const O = V.wireframe === !0;
      (c.geometry !== K.id || c.program !== X.id || c.wireframe !== O) && (c.geometry = K.id, c.program = X.id, c.wireframe = O, N = !0);
    }
    H !== null && t.update(H, 34963), (N || u) && (u = !1, x(P, V, X, K), H !== null && a.bindBuffer(34963, t.get(H).buffer));
  }
  function d() {
    return n.isWebGL2 ? a.createVertexArray() : s.createVertexArrayOES();
  }
  function p(P) {
    return n.isWebGL2 ? a.bindVertexArray(P) : s.bindVertexArrayOES(P);
  }
  function g(P) {
    return n.isWebGL2 ? a.deleteVertexArray(P) : s.deleteVertexArrayOES(P);
  }
  function m(P, V, X) {
    const K = X.wireframe === !0;
    let H = o[P.id];
    H === void 0 && (H = {}, o[P.id] = H);
    let N = H[V.id];
    N === void 0 && (N = {}, H[V.id] = N);
    let O = N[K];
    return O === void 0 && (O = f(d()), N[K] = O), O;
  }
  function f(P) {
    const V = [], X = [], K = [];
    for (let H = 0; H < i; H++)
      V[H] = 0, X[H] = 0, K[H] = 0;
    return {
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: V,
      enabledAttributes: X,
      attributeDivisors: K,
      object: P,
      attributes: {},
      index: null
    };
  }
  function _(P, V, X, K) {
    const H = c.attributes, N = V.attributes;
    let O = 0;
    const Q = X.getAttributes();
    for (const Z in Q)
      if (Q[Z].location >= 0) {
        const oe = H[Z];
        let ve = N[Z];
        if (ve === void 0 && (Z === "instanceMatrix" && P.instanceMatrix && (ve = P.instanceMatrix), Z === "instanceColor" && P.instanceColor && (ve = P.instanceColor)), oe === void 0 || oe.attribute !== ve || ve && oe.data !== ve.data)
          return !0;
        O++;
      }
    return c.attributesNum !== O || c.index !== K;
  }
  function T(P, V, X, K) {
    const H = {}, N = V.attributes;
    let O = 0;
    const Q = X.getAttributes();
    for (const Z in Q)
      if (Q[Z].location >= 0) {
        let oe = N[Z];
        oe === void 0 && (Z === "instanceMatrix" && P.instanceMatrix && (oe = P.instanceMatrix), Z === "instanceColor" && P.instanceColor && (oe = P.instanceColor));
        const ve = {};
        ve.attribute = oe, oe && oe.data && (ve.data = oe.data), H[Z] = ve, O++;
      }
    c.attributes = H, c.attributesNum = O, c.index = K;
  }
  function M() {
    const P = c.newAttributes;
    for (let V = 0, X = P.length; V < X; V++)
      P[V] = 0;
  }
  function S(P) {
    b(P, 0);
  }
  function b(P, V) {
    const X = c.newAttributes, K = c.enabledAttributes, H = c.attributeDivisors;
    X[P] = 1, K[P] === 0 && (a.enableVertexAttribArray(P), K[P] = 1), H[P] !== V && ((n.isWebGL2 ? a : e.get("ANGLE_instanced_arrays"))[n.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](P, V), H[P] = V);
  }
  function A() {
    const P = c.newAttributes, V = c.enabledAttributes;
    for (let X = 0, K = V.length; X < K; X++)
      V[X] !== P[X] && (a.disableVertexAttribArray(X), V[X] = 0);
  }
  function D(P, V, X, K, H, N) {
    n.isWebGL2 === !0 && (X === 5124 || X === 5125) ? a.vertexAttribIPointer(P, V, X, H, N) : a.vertexAttribPointer(P, V, X, K, H, N);
  }
  function x(P, V, X, K) {
    if (n.isWebGL2 === !1 && (P.isInstancedMesh || K.isInstancedBufferGeometry) && e.get("ANGLE_instanced_arrays") === null)
      return;
    M();
    const H = K.attributes, N = X.getAttributes(), O = V.defaultAttributeValues;
    for (const Q in N) {
      const Z = N[Q];
      if (Z.location >= 0) {
        let Y = H[Q];
        if (Y === void 0 && (Q === "instanceMatrix" && P.instanceMatrix && (Y = P.instanceMatrix), Q === "instanceColor" && P.instanceColor && (Y = P.instanceColor)), Y !== void 0) {
          const oe = Y.normalized, ve = Y.itemSize, $ = t.get(Y);
          if ($ === void 0)
            continue;
          const Ue = $.buffer, ge = $.type, ye = $.bytesPerElement;
          if (Y.isInterleavedBufferAttribute) {
            const ae = Y.data, Ge = ae.stride, Ee = Y.offset;
            if (ae.isInstancedInterleavedBuffer) {
              for (let pe = 0; pe < Z.locationSize; pe++)
                b(Z.location + pe, ae.meshPerAttribute);
              P.isInstancedMesh !== !0 && K._maxInstanceCount === void 0 && (K._maxInstanceCount = ae.meshPerAttribute * ae.count);
            } else
              for (let pe = 0; pe < Z.locationSize; pe++)
                S(Z.location + pe);
            a.bindBuffer(34962, Ue);
            for (let pe = 0; pe < Z.locationSize; pe++)
              D(
                Z.location + pe,
                ve / Z.locationSize,
                ge,
                oe,
                Ge * ye,
                (Ee + ve / Z.locationSize * pe) * ye
              );
          } else {
            if (Y.isInstancedBufferAttribute) {
              for (let ae = 0; ae < Z.locationSize; ae++)
                b(Z.location + ae, Y.meshPerAttribute);
              P.isInstancedMesh !== !0 && K._maxInstanceCount === void 0 && (K._maxInstanceCount = Y.meshPerAttribute * Y.count);
            } else
              for (let ae = 0; ae < Z.locationSize; ae++)
                S(Z.location + ae);
            a.bindBuffer(34962, Ue);
            for (let ae = 0; ae < Z.locationSize; ae++)
              D(
                Z.location + ae,
                ve / Z.locationSize,
                ge,
                oe,
                ve * ye,
                ve / Z.locationSize * ae * ye
              );
          }
        } else if (O !== void 0) {
          const oe = O[Q];
          if (oe !== void 0)
            switch (oe.length) {
              case 2:
                a.vertexAttrib2fv(Z.location, oe);
                break;
              case 3:
                a.vertexAttrib3fv(Z.location, oe);
                break;
              case 4:
                a.vertexAttrib4fv(Z.location, oe);
                break;
              default:
                a.vertexAttrib1fv(Z.location, oe);
            }
        }
      }
    }
    A();
  }
  function E() {
    ne();
    for (const P in o) {
      const V = o[P];
      for (const X in V) {
        const K = V[X];
        for (const H in K)
          g(K[H].object), delete K[H];
        delete V[X];
      }
      delete o[P];
    }
  }
  function F(P) {
    if (o[P.id] === void 0)
      return;
    const V = o[P.id];
    for (const X in V) {
      const K = V[X];
      for (const H in K)
        g(K[H].object), delete K[H];
      delete V[X];
    }
    delete o[P.id];
  }
  function q(P) {
    for (const V in o) {
      const X = o[V];
      if (X[P.id] === void 0)
        continue;
      const K = X[P.id];
      for (const H in K)
        g(K[H].object), delete K[H];
      delete X[P.id];
    }
  }
  function ne() {
    U(), u = !0, c !== l && (c = l, p(c.object));
  }
  function U() {
    l.geometry = null, l.program = null, l.wireframe = !1;
  }
  return {
    setup: h,
    reset: ne,
    resetDefaultState: U,
    dispose: E,
    releaseStatesOfGeometry: F,
    releaseStatesOfProgram: q,
    initAttributes: M,
    enableAttribute: S,
    disableUnusedAttributes: A
  };
}
function Wu(a, e, t, n) {
  const i = n.isWebGL2;
  let s;
  function r(c) {
    s = c;
  }
  function o(c, u) {
    a.drawArrays(s, c, u), t.update(u, s, 1);
  }
  function l(c, u, h) {
    if (h === 0)
      return;
    let d, p;
    if (i)
      d = a, p = "drawArraysInstanced";
    else if (d = e.get("ANGLE_instanced_arrays"), p = "drawArraysInstancedANGLE", d === null) {
      console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      return;
    }
    d[p](s, c, u, h), t.update(u, s, h);
  }
  this.setMode = r, this.render = o, this.renderInstances = l;
}
function $u(a, e, t) {
  let n;
  function i() {
    if (n !== void 0)
      return n;
    if (e.has("EXT_texture_filter_anisotropic") === !0) {
      const D = e.get("EXT_texture_filter_anisotropic");
      n = a.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else
      n = 0;
    return n;
  }
  function s(D) {
    if (D === "highp") {
      if (a.getShaderPrecisionFormat(35633, 36338).precision > 0 && a.getShaderPrecisionFormat(35632, 36338).precision > 0)
        return "highp";
      D = "mediump";
    }
    return D === "mediump" && a.getShaderPrecisionFormat(35633, 36337).precision > 0 && a.getShaderPrecisionFormat(35632, 36337).precision > 0 ? "mediump" : "lowp";
  }
  const r = typeof WebGL2RenderingContext < "u" && a instanceof WebGL2RenderingContext || typeof WebGL2ComputeRenderingContext < "u" && a instanceof WebGL2ComputeRenderingContext;
  let o = t.precision !== void 0 ? t.precision : "highp";
  const l = s(o);
  l !== o && (console.warn("THREE.WebGLRenderer:", o, "not supported, using", l, "instead."), o = l);
  const c = r || e.has("WEBGL_draw_buffers"), u = t.logarithmicDepthBuffer === !0, h = a.getParameter(34930), d = a.getParameter(35660), p = a.getParameter(3379), g = a.getParameter(34076), m = a.getParameter(34921), f = a.getParameter(36347), _ = a.getParameter(36348), T = a.getParameter(36349), M = d > 0, S = r || e.has("OES_texture_float"), b = M && S, A = r ? a.getParameter(36183) : 0;
  return {
    isWebGL2: r,
    drawBuffers: c,
    getMaxAnisotropy: i,
    getMaxPrecision: s,
    precision: o,
    logarithmicDepthBuffer: u,
    maxTextures: h,
    maxVertexTextures: d,
    maxTextureSize: p,
    maxCubemapSize: g,
    maxAttributes: m,
    maxVertexUniforms: f,
    maxVaryings: _,
    maxFragmentUniforms: T,
    vertexTextures: M,
    floatFragmentTextures: S,
    floatVertexTextures: b,
    maxSamples: A
  };
}
function qu(a) {
  const e = this;
  let t = null, n = 0, i = !1, s = !1;
  const r = new gn(), o = new Mt(), l = { value: null, needsUpdate: !1 };
  this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function(h, d, p) {
    const g = h.length !== 0 || d || n !== 0 || i;
    return i = d, t = u(h, p, 0), n = h.length, g;
  }, this.beginShadows = function() {
    s = !0, u(null);
  }, this.endShadows = function() {
    s = !1, c();
  }, this.setState = function(h, d, p) {
    const g = h.clippingPlanes, m = h.clipIntersection, f = h.clipShadows, _ = a.get(h);
    if (!i || g === null || g.length === 0 || s && !f)
      s ? u(null) : c();
    else {
      const T = s ? 0 : n, M = T * 4;
      let S = _.clippingState || null;
      l.value = S, S = u(g, d, M, p);
      for (let b = 0; b !== M; ++b)
        S[b] = t[b];
      _.clippingState = S, this.numIntersection = m ? this.numPlanes : 0, this.numPlanes += T;
    }
  };
  function c() {
    l.value !== t && (l.value = t, l.needsUpdate = n > 0), e.numPlanes = n, e.numIntersection = 0;
  }
  function u(h, d, p, g) {
    const m = h !== null ? h.length : 0;
    let f = null;
    if (m !== 0) {
      if (f = l.value, g !== !0 || f === null) {
        const _ = p + m * 4, T = d.matrixWorldInverse;
        o.getNormalMatrix(T), (f === null || f.length < _) && (f = new Float32Array(_));
        for (let M = 0, S = p; M !== m; ++M, S += 4)
          r.copy(h[M]).applyMatrix4(T, o), r.normal.toArray(f, S), f[S + 3] = r.constant;
      }
      l.value = f, l.needsUpdate = !0;
    }
    return e.numPlanes = m, e.numIntersection = 0, f;
  }
}
function Xu(a) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(r, o) {
    return o === 303 ? r.mapping = 301 : o === 304 && (r.mapping = 302), r;
  }
  function n(r) {
    if (r && r.isTexture && r.isRenderTargetTexture === !1) {
      const o = r.mapping;
      if (o === 303 || o === 304)
        if (e.has(r)) {
          const l = e.get(r).texture;
          return t(l, r.mapping);
        } else {
          const l = r.image;
          if (l && l.height > 0) {
            const c = new al(l.height / 2);
            return c.fromEquirectangularTexture(a, r), e.set(r, c), r.addEventListener("dispose", i), t(c.texture, r.mapping);
          } else
            return null;
        }
    }
    return r;
  }
  function i(r) {
    const o = r.target;
    o.removeEventListener("dispose", i);
    const l = e.get(o);
    l !== void 0 && (e.delete(o), l.dispose());
  }
  function s() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: n,
    dispose: s
  };
}
class hr extends Ja {
  constructor(e = -1, t = 1, n = 1, i = -1, s = 0.1, r = 2e3) {
    super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = n, this.bottom = i, this.near = s, this.far = r, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this;
  }
  setViewOffset(e, t, n, i, s, r) {
    this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = s, this.view.height = r, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom), t = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, i = (this.top + this.bottom) / 2;
    let s = n - e, r = n + e, o = i + t, l = i - t;
    if (this.view !== null && this.view.enabled) {
      const c = (this.right - this.left) / this.view.fullWidth / this.zoom, u = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      s += c * this.view.offsetX, r = s + c * this.view.width, o -= u * this.view.offsetY, l = o - u * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(s, r, o, l, this.near, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t;
  }
}
const qn = 4, Ur = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], vn = 20, zs = /* @__PURE__ */ new hr(), Or = /* @__PURE__ */ new Me();
let Gs = null;
const _n = (1 + Math.sqrt(5)) / 2, Wn = 1 / _n, Br = [
  /* @__PURE__ */ new R(1, 1, 1),
  /* @__PURE__ */ new R(-1, 1, 1),
  /* @__PURE__ */ new R(1, 1, -1),
  /* @__PURE__ */ new R(-1, 1, -1),
  /* @__PURE__ */ new R(0, _n, Wn),
  /* @__PURE__ */ new R(0, _n, -Wn),
  /* @__PURE__ */ new R(Wn, 0, _n),
  /* @__PURE__ */ new R(-Wn, 0, _n),
  /* @__PURE__ */ new R(_n, Wn, 0),
  /* @__PURE__ */ new R(-_n, Wn, 0)
];
class zr {
  constructor(e) {
    this._renderer = e, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial);
  }
  fromScene(e, t = 0, n = 0.1, i = 100) {
    Gs = this._renderer.getRenderTarget(), this._setSize(256);
    const s = this._allocateTargets();
    return s.depthBuffer = !0, this._sceneToCubeUV(e, n, i, s), t > 0 && this._blur(s, 0, 0, t), this._applyPMREM(s), this._cleanup(s), s;
  }
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  compileCubemapShader() {
    this._cubemapMaterial === null && (this._cubemapMaterial = Vr(), this._compileMaterial(this._cubemapMaterial));
  }
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = kr(), this._compileMaterial(this._equirectMaterial));
  }
  dispose() {
    this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose();
  }
  _setSize(e) {
    this._lodMax = Math.floor(Math.log2(e)), this._cubeSize = Math.pow(2, this._lodMax);
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
    for (let e = 0; e < this._lodPlanes.length; e++)
      this._lodPlanes[e].dispose();
  }
  _cleanup(e) {
    this._renderer.setRenderTarget(Gs), e.scissorTest = !1, Qi(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === 301 || e.mapping === 302 ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), Gs = this._renderer.getRenderTarget();
    const n = t || this._allocateTargets();
    return this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n;
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112), t = 4 * this._cubeSize, n = {
      magFilter: 1006,
      minFilter: 1006,
      generateMipmaps: !1,
      type: 1016,
      format: 1023,
      encoding: 3e3,
      depthBuffer: !1
    }, i = Gr(e, t, n);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = Gr(e, t, n);
      const { _lodMax: s } = this;
      ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = ju(s)), this._blurMaterial = Ku(s, e, t);
    }
    return i;
  }
  _compileMaterial(e) {
    const t = new gt(this._lodPlanes[0], e);
    this._renderer.compile(t, zs);
  }
  _sceneToCubeUV(e, t, n, i) {
    const o = new ct(90, 1, t, n), l = [1, -1, 1, 1, 1, 1], c = [1, 1, 1, -1, -1, -1], u = this._renderer, h = u.autoClear, d = u.toneMapping;
    u.getClearColor(Or), u.toneMapping = 0, u.autoClear = !1;
    const p = new on({
      name: "PMREM.Background",
      side: 1,
      depthWrite: !1,
      depthTest: !1
    }), g = new gt(new si(), p);
    let m = !1;
    const f = e.background;
    f ? f.isColor && (p.color.copy(f), e.background = null, m = !0) : (p.color.copy(Or), m = !0);
    for (let _ = 0; _ < 6; _++) {
      const T = _ % 3;
      T === 0 ? (o.up.set(0, l[_], 0), o.lookAt(c[_], 0, 0)) : T === 1 ? (o.up.set(0, 0, l[_]), o.lookAt(0, c[_], 0)) : (o.up.set(0, l[_], 0), o.lookAt(0, 0, c[_]));
      const M = this._cubeSize;
      Qi(i, T * M, _ > 2 ? M : 0, M, M), u.setRenderTarget(i), m && u.render(g, o), u.render(e, o);
    }
    g.geometry.dispose(), g.material.dispose(), u.toneMapping = d, u.autoClear = h, e.background = f;
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer, i = e.mapping === 301 || e.mapping === 302;
    i ? (this._cubemapMaterial === null && (this._cubemapMaterial = Vr()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = kr());
    const s = i ? this._cubemapMaterial : this._equirectMaterial, r = new gt(this._lodPlanes[0], s), o = s.uniforms;
    o.envMap.value = e;
    const l = this._cubeSize;
    Qi(t, 0, 0, 3 * l, 2 * l), n.setRenderTarget(t), n.render(r, zs);
  }
  _applyPMREM(e) {
    const t = this._renderer, n = t.autoClear;
    t.autoClear = !1;
    for (let i = 1; i < this._lodPlanes.length; i++) {
      const s = Math.sqrt(this._sigmas[i] * this._sigmas[i] - this._sigmas[i - 1] * this._sigmas[i - 1]), r = Br[(i - 1) % Br.length];
      this._blur(e, i - 1, i, s, r);
    }
    t.autoClear = n;
  }
  _blur(e, t, n, i, s) {
    const r = this._pingPongRenderTarget;
    this._halfBlur(
      e,
      r,
      t,
      n,
      i,
      "latitudinal",
      s
    ), this._halfBlur(
      r,
      e,
      n,
      n,
      i,
      "longitudinal",
      s
    );
  }
  _halfBlur(e, t, n, i, s, r, o) {
    const l = this._renderer, c = this._blurMaterial;
    r !== "latitudinal" && r !== "longitudinal" && console.error(
      "blur direction must be either latitudinal or longitudinal!"
    );
    const u = 3, h = new gt(this._lodPlanes[i], c), d = c.uniforms, p = this._sizeLods[n] - 1, g = isFinite(s) ? Math.PI / (2 * p) : 2 * Math.PI / (2 * vn - 1), m = s / g, f = isFinite(s) ? 1 + Math.floor(u * m) : vn;
    f > vn && console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${vn}`);
    const _ = [];
    let T = 0;
    for (let D = 0; D < vn; ++D) {
      const x = D / m, E = Math.exp(-x * x / 2);
      _.push(E), D === 0 ? T += E : D < f && (T += 2 * E);
    }
    for (let D = 0; D < _.length; D++)
      _[D] = _[D] / T;
    d.envMap.value = e.texture, d.samples.value = f, d.weights.value = _, d.latitudinal.value = r === "latitudinal", o && (d.poleAxis.value = o);
    const { _lodMax: M } = this;
    d.dTheta.value = g, d.mipInt.value = M - n;
    const S = this._sizeLods[i], b = 3 * S * (i > M - qn ? i - M + qn : 0), A = 4 * (this._cubeSize - S);
    Qi(t, b, A, 3 * S, 2 * S), l.setRenderTarget(t), l.render(h, zs);
  }
}
function ju(a) {
  const e = [], t = [], n = [];
  let i = a;
  const s = a - qn + 1 + Ur.length;
  for (let r = 0; r < s; r++) {
    const o = Math.pow(2, i);
    t.push(o);
    let l = 1 / o;
    r > a - qn ? l = Ur[r - a + qn - 1] : r === 0 && (l = 0), n.push(l);
    const c = 1 / (o - 2), u = -c, h = 1 + c, d = [u, u, h, u, h, h, u, u, h, h, u, h], p = 6, g = 6, m = 3, f = 2, _ = 1, T = new Float32Array(m * g * p), M = new Float32Array(f * g * p), S = new Float32Array(_ * g * p);
    for (let A = 0; A < p; A++) {
      const D = A % 3 * 2 / 3 - 1, x = A > 2 ? 0 : -1, E = [
        D,
        x,
        0,
        D + 2 / 3,
        x,
        0,
        D + 2 / 3,
        x + 1,
        0,
        D,
        x,
        0,
        D + 2 / 3,
        x + 1,
        0,
        D,
        x + 1,
        0
      ];
      T.set(E, m * g * A), M.set(d, f * g * A);
      const F = [A, A, A, A, A, A];
      S.set(F, _ * g * A);
    }
    const b = new Nt();
    b.setAttribute("position", new dt(T, m)), b.setAttribute("uv", new dt(M, f)), b.setAttribute("faceIndex", new dt(S, _)), e.push(b), i > qn && i--;
  }
  return { lodPlanes: e, sizeLods: t, sigmas: n };
}
function Gr(a, e, t) {
  const n = new wn(a, e, t);
  return n.texture.mapping = 306, n.texture.name = "PMREM.cubeUv", n.scissorTest = !0, n;
}
function Qi(a, e, t, n, i) {
  a.viewport.set(e, t, n, i), a.scissor.set(e, t, n, i);
}
function Ku(a, e, t) {
  const n = new Float32Array(vn), i = new R(0, 1, 0);
  return new Tn({
    name: "SphericalGaussianBlur",
    defines: {
      n: vn,
      CUBEUV_TEXEL_WIDTH: 1 / e,
      CUBEUV_TEXEL_HEIGHT: 1 / t,
      CUBEUV_MAX_MIP: `${a}.0`
    },
    uniforms: {
      envMap: { value: null },
      samples: { value: 1 },
      weights: { value: n },
      latitudinal: { value: !1 },
      dTheta: { value: 0 },
      mipInt: { value: 0 },
      poleAxis: { value: i }
    },
    vertexShader: dr(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,
    blending: 0,
    depthTest: !1,
    depthWrite: !1
  });
}
function kr() {
  return new Tn({
    name: "EquirectangularToCubeUV",
    uniforms: {
      envMap: { value: null }
    },
    vertexShader: dr(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,
    blending: 0,
    depthTest: !1,
    depthWrite: !1
  });
}
function Vr() {
  return new Tn({
    name: "CubemapToCubeUV",
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 }
    },
    vertexShader: dr(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,
    blending: 0,
    depthTest: !1,
    depthWrite: !1
  });
}
function dr() {
  return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`;
}
function Yu(a) {
  let e = /* @__PURE__ */ new WeakMap(), t = null;
  function n(o) {
    if (o && o.isTexture) {
      const l = o.mapping, c = l === 303 || l === 304, u = l === 301 || l === 302;
      if (c || u)
        if (o.isRenderTargetTexture && o.needsPMREMUpdate === !0) {
          o.needsPMREMUpdate = !1;
          let h = e.get(o);
          return t === null && (t = new zr(a)), h = c ? t.fromEquirectangular(o, h) : t.fromCubemap(o, h), e.set(o, h), h.texture;
        } else {
          if (e.has(o))
            return e.get(o).texture;
          {
            const h = o.image;
            if (c && h && h.height > 0 || u && h && i(h)) {
              t === null && (t = new zr(a));
              const d = c ? t.fromEquirectangular(o) : t.fromCubemap(o);
              return e.set(o, d), o.addEventListener("dispose", s), d.texture;
            } else
              return null;
          }
        }
    }
    return o;
  }
  function i(o) {
    let l = 0;
    const c = 6;
    for (let u = 0; u < c; u++)
      o[u] !== void 0 && l++;
    return l === c;
  }
  function s(o) {
    const l = o.target;
    l.removeEventListener("dispose", s);
    const c = e.get(l);
    c !== void 0 && (e.delete(l), c.dispose());
  }
  function r() {
    e = /* @__PURE__ */ new WeakMap(), t !== null && (t.dispose(), t = null);
  }
  return {
    get: n,
    dispose: r
  };
}
function Zu(a) {
  const e = {};
  function t(n) {
    if (e[n] !== void 0)
      return e[n];
    let i;
    switch (n) {
      case "WEBGL_depth_texture":
        i = a.getExtension("WEBGL_depth_texture") || a.getExtension("MOZ_WEBGL_depth_texture") || a.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        i = a.getExtension("EXT_texture_filter_anisotropic") || a.getExtension("MOZ_EXT_texture_filter_anisotropic") || a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        i = a.getExtension("WEBGL_compressed_texture_s3tc") || a.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        i = a.getExtension("WEBGL_compressed_texture_pvrtc") || a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        i = a.getExtension(n);
    }
    return e[n] = i, i;
  }
  return {
    has: function(n) {
      return t(n) !== null;
    },
    init: function(n) {
      n.isWebGL2 ? t("EXT_color_buffer_float") : (t("WEBGL_depth_texture"), t("OES_texture_float"), t("OES_texture_half_float"), t("OES_texture_half_float_linear"), t("OES_standard_derivatives"), t("OES_element_index_uint"), t("OES_vertex_array_object"), t("ANGLE_instanced_arrays")), t("OES_texture_float_linear"), t("EXT_color_buffer_half_float"), t("WEBGL_multisampled_render_to_texture");
    },
    get: function(n) {
      const i = t(n);
      return i === null && console.warn("THREE.WebGLRenderer: " + n + " extension not supported."), i;
    }
  };
}
function Ju(a, e, t, n) {
  const i = {}, s = /* @__PURE__ */ new WeakMap();
  function r(h) {
    const d = h.target;
    d.index !== null && e.remove(d.index);
    for (const g in d.attributes)
      e.remove(d.attributes[g]);
    d.removeEventListener("dispose", r), delete i[d.id];
    const p = s.get(d);
    p && (e.remove(p), s.delete(d)), n.releaseStatesOfGeometry(d), d.isInstancedBufferGeometry === !0 && delete d._maxInstanceCount, t.memory.geometries--;
  }
  function o(h, d) {
    return i[d.id] === !0 || (d.addEventListener("dispose", r), i[d.id] = !0, t.memory.geometries++), d;
  }
  function l(h) {
    const d = h.attributes;
    for (const g in d)
      e.update(d[g], 34962);
    const p = h.morphAttributes;
    for (const g in p) {
      const m = p[g];
      for (let f = 0, _ = m.length; f < _; f++)
        e.update(m[f], 34962);
    }
  }
  function c(h) {
    const d = [], p = h.index, g = h.attributes.position;
    let m = 0;
    if (p !== null) {
      const T = p.array;
      m = p.version;
      for (let M = 0, S = T.length; M < S; M += 3) {
        const b = T[M + 0], A = T[M + 1], D = T[M + 2];
        d.push(b, A, A, D, D, b);
      }
    } else {
      const T = g.array;
      m = g.version;
      for (let M = 0, S = T.length / 3 - 1; M < S; M += 3) {
        const b = M + 0, A = M + 1, D = M + 2;
        d.push(b, A, A, D, D, b);
      }
    }
    const f = new (Wa(d) ? Za : Ya)(d, 1);
    f.version = m;
    const _ = s.get(h);
    _ && e.remove(_), s.set(h, f);
  }
  function u(h) {
    const d = s.get(h);
    if (d) {
      const p = h.index;
      p !== null && d.version < p.version && c(h);
    } else
      c(h);
    return s.get(h);
  }
  return {
    get: o,
    update: l,
    getWireframeAttribute: u
  };
}
function Qu(a, e, t, n) {
  const i = n.isWebGL2;
  let s;
  function r(d) {
    s = d;
  }
  let o, l;
  function c(d) {
    o = d.type, l = d.bytesPerElement;
  }
  function u(d, p) {
    a.drawElements(s, p, o, d * l), t.update(p, s, 1);
  }
  function h(d, p, g) {
    if (g === 0)
      return;
    let m, f;
    if (i)
      m = a, f = "drawElementsInstanced";
    else if (m = e.get("ANGLE_instanced_arrays"), f = "drawElementsInstancedANGLE", m === null) {
      console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      return;
    }
    m[f](s, p, o, d * l, g), t.update(p, s, g);
  }
  this.setMode = r, this.setIndex = c, this.render = u, this.renderInstances = h;
}
function eh(a) {
  const e = {
    geometries: 0,
    textures: 0
  }, t = {
    frame: 0,
    calls: 0,
    triangles: 0,
    points: 0,
    lines: 0
  };
  function n(s, r, o) {
    switch (t.calls++, r) {
      case 4:
        t.triangles += o * (s / 3);
        break;
      case 1:
        t.lines += o * (s / 2);
        break;
      case 3:
        t.lines += o * (s - 1);
        break;
      case 2:
        t.lines += o * s;
        break;
      case 0:
        t.points += o * s;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", r);
        break;
    }
  }
  function i() {
    t.frame++, t.calls = 0, t.triangles = 0, t.points = 0, t.lines = 0;
  }
  return {
    memory: e,
    render: t,
    programs: null,
    autoReset: !0,
    reset: i,
    update: n
  };
}
function th(a, e) {
  return a[0] - e[0];
}
function nh(a, e) {
  return Math.abs(e[1]) - Math.abs(a[1]);
}
function ih(a, e, t) {
  const n = {}, i = new Float32Array(8), s = /* @__PURE__ */ new WeakMap(), r = new ze(), o = [];
  for (let c = 0; c < 8; c++)
    o[c] = [c, 0];
  function l(c, u, h, d) {
    const p = c.morphTargetInfluences;
    if (e.isWebGL2 === !0) {
      const m = u.morphAttributes.position || u.morphAttributes.normal || u.morphAttributes.color, f = m !== void 0 ? m.length : 0;
      let _ = s.get(u);
      if (_ === void 0 || _.count !== f) {
        let X = function() {
          P.dispose(), s.delete(u), u.removeEventListener("dispose", X);
        };
        var g = X;
        _ !== void 0 && _.texture.dispose();
        const S = u.morphAttributes.position !== void 0, b = u.morphAttributes.normal !== void 0, A = u.morphAttributes.color !== void 0, D = u.morphAttributes.position || [], x = u.morphAttributes.normal || [], E = u.morphAttributes.color || [];
        let F = 0;
        S === !0 && (F = 1), b === !0 && (F = 2), A === !0 && (F = 3);
        let q = u.attributes.position.count * F, ne = 1;
        q > e.maxTextureSize && (ne = Math.ceil(q / e.maxTextureSize), q = e.maxTextureSize);
        const U = new Float32Array(q * ne * 4 * f), P = new ja(U, q, ne, f);
        P.type = 1015, P.needsUpdate = !0;
        const V = F * 4;
        for (let K = 0; K < f; K++) {
          const H = D[K], N = x[K], O = E[K], Q = q * ne * 4 * K;
          for (let Z = 0; Z < H.count; Z++) {
            const Y = Z * V;
            S === !0 && (r.fromBufferAttribute(H, Z), U[Q + Y + 0] = r.x, U[Q + Y + 1] = r.y, U[Q + Y + 2] = r.z, U[Q + Y + 3] = 0), b === !0 && (r.fromBufferAttribute(N, Z), U[Q + Y + 4] = r.x, U[Q + Y + 5] = r.y, U[Q + Y + 6] = r.z, U[Q + Y + 7] = 0), A === !0 && (r.fromBufferAttribute(O, Z), U[Q + Y + 8] = r.x, U[Q + Y + 9] = r.y, U[Q + Y + 10] = r.z, U[Q + Y + 11] = O.itemSize === 4 ? r.w : 1);
          }
        }
        _ = {
          count: f,
          texture: P,
          size: new Le(q, ne)
        }, s.set(u, _), u.addEventListener("dispose", X);
      }
      let T = 0;
      for (let S = 0; S < p.length; S++)
        T += p[S];
      const M = u.morphTargetsRelative ? 1 : 1 - T;
      d.getUniforms().setValue(a, "morphTargetBaseInfluence", M), d.getUniforms().setValue(a, "morphTargetInfluences", p), d.getUniforms().setValue(a, "morphTargetsTexture", _.texture, t), d.getUniforms().setValue(a, "morphTargetsTextureSize", _.size);
    } else {
      const m = p === void 0 ? 0 : p.length;
      let f = n[u.id];
      if (f === void 0 || f.length !== m) {
        f = [];
        for (let b = 0; b < m; b++)
          f[b] = [b, 0];
        n[u.id] = f;
      }
      for (let b = 0; b < m; b++) {
        const A = f[b];
        A[0] = b, A[1] = p[b];
      }
      f.sort(nh);
      for (let b = 0; b < 8; b++)
        b < m && f[b][1] ? (o[b][0] = f[b][0], o[b][1] = f[b][1]) : (o[b][0] = Number.MAX_SAFE_INTEGER, o[b][1] = 0);
      o.sort(th);
      const _ = u.morphAttributes.position, T = u.morphAttributes.normal;
      let M = 0;
      for (let b = 0; b < 8; b++) {
        const A = o[b], D = A[0], x = A[1];
        D !== Number.MAX_SAFE_INTEGER && x ? (_ && u.getAttribute("morphTarget" + b) !== _[D] && u.setAttribute("morphTarget" + b, _[D]), T && u.getAttribute("morphNormal" + b) !== T[D] && u.setAttribute("morphNormal" + b, T[D]), i[b] = x, M += x) : (_ && u.hasAttribute("morphTarget" + b) === !0 && u.deleteAttribute("morphTarget" + b), T && u.hasAttribute("morphNormal" + b) === !0 && u.deleteAttribute("morphNormal" + b), i[b] = 0);
      }
      const S = u.morphTargetsRelative ? 1 : 1 - M;
      d.getUniforms().setValue(a, "morphTargetBaseInfluence", S), d.getUniforms().setValue(a, "morphTargetInfluences", i);
    }
  }
  return {
    update: l
  };
}
function sh(a, e, t, n) {
  let i = /* @__PURE__ */ new WeakMap();
  function s(l) {
    const c = n.render.frame, u = l.geometry, h = e.get(l, u);
    return i.get(h) !== c && (e.update(h), i.set(h, c)), l.isInstancedMesh && (l.hasEventListener("dispose", o) === !1 && l.addEventListener("dispose", o), t.update(l.instanceMatrix, 34962), l.instanceColor !== null && t.update(l.instanceColor, 34962)), h;
  }
  function r() {
    i = /* @__PURE__ */ new WeakMap();
  }
  function o(l) {
    const c = l.target;
    c.removeEventListener("dispose", o), t.remove(c.instanceMatrix), c.instanceColor !== null && t.remove(c.instanceColor);
  }
  return {
    update: s,
    dispose: r
  };
}
const to = /* @__PURE__ */ new ut(), no = /* @__PURE__ */ new ja(), io = /* @__PURE__ */ new Wo(), so = /* @__PURE__ */ new Qa(), Hr = [], Wr = [], $r = new Float32Array(16), qr = new Float32Array(9), Xr = new Float32Array(4);
function ri(a, e, t) {
  const n = a[0];
  if (n <= 0 || n > 0)
    return a;
  const i = e * t;
  let s = Hr[i];
  if (s === void 0 && (s = new Float32Array(i), Hr[i] = s), e !== 0) {
    n.toArray(s, 0);
    for (let r = 1, o = 0; r !== e; ++r)
      o += t, a[r].toArray(s, o);
  }
  return s;
}
function je(a, e) {
  if (a.length !== e.length)
    return !1;
  for (let t = 0, n = a.length; t < n; t++)
    if (a[t] !== e[t])
      return !1;
  return !0;
}
function Ke(a, e) {
  for (let t = 0, n = e.length; t < n; t++)
    a[t] = e[t];
}
function ds(a, e) {
  let t = Wr[e];
  t === void 0 && (t = new Int32Array(e), Wr[e] = t);
  for (let n = 0; n !== e; ++n)
    t[n] = a.allocateTextureUnit();
  return t;
}
function rh(a, e) {
  const t = this.cache;
  t[0] !== e && (a.uniform1f(this.addr, e), t[0] = e);
}
function ah(a, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (a.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (je(t, e))
      return;
    a.uniform2fv(this.addr, e), Ke(t, e);
  }
}
function oh(a, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (a.uniform3f(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else if (e.r !== void 0)
    (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (a.uniform3f(this.addr, e.r, e.g, e.b), t[0] = e.r, t[1] = e.g, t[2] = e.b);
  else {
    if (je(t, e))
      return;
    a.uniform3fv(this.addr, e), Ke(t, e);
  }
}
function lh(a, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (a.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (je(t, e))
      return;
    a.uniform4fv(this.addr, e), Ke(t, e);
  }
}
function ch(a, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (je(t, e))
      return;
    a.uniformMatrix2fv(this.addr, !1, e), Ke(t, e);
  } else {
    if (je(t, n))
      return;
    Xr.set(n), a.uniformMatrix2fv(this.addr, !1, Xr), Ke(t, n);
  }
}
function uh(a, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (je(t, e))
      return;
    a.uniformMatrix3fv(this.addr, !1, e), Ke(t, e);
  } else {
    if (je(t, n))
      return;
    qr.set(n), a.uniformMatrix3fv(this.addr, !1, qr), Ke(t, n);
  }
}
function hh(a, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (je(t, e))
      return;
    a.uniformMatrix4fv(this.addr, !1, e), Ke(t, e);
  } else {
    if (je(t, n))
      return;
    $r.set(n), a.uniformMatrix4fv(this.addr, !1, $r), Ke(t, n);
  }
}
function dh(a, e) {
  const t = this.cache;
  t[0] !== e && (a.uniform1i(this.addr, e), t[0] = e);
}
function fh(a, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (a.uniform2i(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (je(t, e))
      return;
    a.uniform2iv(this.addr, e), Ke(t, e);
  }
}
function ph(a, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (a.uniform3i(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (je(t, e))
      return;
    a.uniform3iv(this.addr, e), Ke(t, e);
  }
}
function mh(a, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (a.uniform4i(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (je(t, e))
      return;
    a.uniform4iv(this.addr, e), Ke(t, e);
  }
}
function gh(a, e) {
  const t = this.cache;
  t[0] !== e && (a.uniform1ui(this.addr, e), t[0] = e);
}
function _h(a, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (a.uniform2ui(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (je(t, e))
      return;
    a.uniform2uiv(this.addr, e), Ke(t, e);
  }
}
function xh(a, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (a.uniform3ui(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (je(t, e))
      return;
    a.uniform3uiv(this.addr, e), Ke(t, e);
  }
}
function vh(a, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (a.uniform4ui(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (je(t, e))
      return;
    a.uniform4uiv(this.addr, e), Ke(t, e);
  }
}
function yh(a, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (a.uniform1i(this.addr, i), n[0] = i), t.setTexture2D(e || to, i);
}
function Mh(a, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (a.uniform1i(this.addr, i), n[0] = i), t.setTexture3D(e || io, i);
}
function Sh(a, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (a.uniform1i(this.addr, i), n[0] = i), t.setTextureCube(e || so, i);
}
function bh(a, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (a.uniform1i(this.addr, i), n[0] = i), t.setTexture2DArray(e || no, i);
}
function wh(a) {
  switch (a) {
    case 5126:
      return rh;
    case 35664:
      return ah;
    case 35665:
      return oh;
    case 35666:
      return lh;
    case 35674:
      return ch;
    case 35675:
      return uh;
    case 35676:
      return hh;
    case 5124:
    case 35670:
      return dh;
    case 35667:
    case 35671:
      return fh;
    case 35668:
    case 35672:
      return ph;
    case 35669:
    case 35673:
      return mh;
    case 5125:
      return gh;
    case 36294:
      return _h;
    case 36295:
      return xh;
    case 36296:
      return vh;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return yh;
    case 35679:
    case 36299:
    case 36307:
      return Mh;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Sh;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return bh;
  }
}
function Th(a, e) {
  a.uniform1fv(this.addr, e);
}
function Eh(a, e) {
  const t = ri(e, this.size, 2);
  a.uniform2fv(this.addr, t);
}
function Ah(a, e) {
  const t = ri(e, this.size, 3);
  a.uniform3fv(this.addr, t);
}
function Ch(a, e) {
  const t = ri(e, this.size, 4);
  a.uniform4fv(this.addr, t);
}
function Rh(a, e) {
  const t = ri(e, this.size, 4);
  a.uniformMatrix2fv(this.addr, !1, t);
}
function Lh(a, e) {
  const t = ri(e, this.size, 9);
  a.uniformMatrix3fv(this.addr, !1, t);
}
function Dh(a, e) {
  const t = ri(e, this.size, 16);
  a.uniformMatrix4fv(this.addr, !1, t);
}
function Ph(a, e) {
  a.uniform1iv(this.addr, e);
}
function Ih(a, e) {
  a.uniform2iv(this.addr, e);
}
function Nh(a, e) {
  a.uniform3iv(this.addr, e);
}
function Fh(a, e) {
  a.uniform4iv(this.addr, e);
}
function Uh(a, e) {
  a.uniform1uiv(this.addr, e);
}
function Oh(a, e) {
  a.uniform2uiv(this.addr, e);
}
function Bh(a, e) {
  a.uniform3uiv(this.addr, e);
}
function zh(a, e) {
  a.uniform4uiv(this.addr, e);
}
function Gh(a, e, t) {
  const n = this.cache, i = e.length, s = ds(t, i);
  je(n, s) || (a.uniform1iv(this.addr, s), Ke(n, s));
  for (let r = 0; r !== i; ++r)
    t.setTexture2D(e[r] || to, s[r]);
}
function kh(a, e, t) {
  const n = this.cache, i = e.length, s = ds(t, i);
  je(n, s) || (a.uniform1iv(this.addr, s), Ke(n, s));
  for (let r = 0; r !== i; ++r)
    t.setTexture3D(e[r] || io, s[r]);
}
function Vh(a, e, t) {
  const n = this.cache, i = e.length, s = ds(t, i);
  je(n, s) || (a.uniform1iv(this.addr, s), Ke(n, s));
  for (let r = 0; r !== i; ++r)
    t.setTextureCube(e[r] || so, s[r]);
}
function Hh(a, e, t) {
  const n = this.cache, i = e.length, s = ds(t, i);
  je(n, s) || (a.uniform1iv(this.addr, s), Ke(n, s));
  for (let r = 0; r !== i; ++r)
    t.setTexture2DArray(e[r] || no, s[r]);
}
function Wh(a) {
  switch (a) {
    case 5126:
      return Th;
    case 35664:
      return Eh;
    case 35665:
      return Ah;
    case 35666:
      return Ch;
    case 35674:
      return Rh;
    case 35675:
      return Lh;
    case 35676:
      return Dh;
    case 5124:
    case 35670:
      return Ph;
    case 35667:
    case 35671:
      return Ih;
    case 35668:
    case 35672:
      return Nh;
    case 35669:
    case 35673:
      return Fh;
    case 5125:
      return Uh;
    case 36294:
      return Oh;
    case 36295:
      return Bh;
    case 36296:
      return zh;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Gh;
    case 35679:
    case 36299:
    case 36307:
      return kh;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Vh;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Hh;
  }
}
class $h {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.setValue = wh(t.type);
  }
}
class qh {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.size = t.size, this.setValue = Wh(t.type);
  }
}
class Xh {
  constructor(e) {
    this.id = e, this.seq = [], this.map = {};
  }
  setValue(e, t, n) {
    const i = this.seq;
    for (let s = 0, r = i.length; s !== r; ++s) {
      const o = i[s];
      o.setValue(e, t[o.id], n);
    }
  }
}
const ks = /(\w+)(\])?(\[|\.)?/g;
function jr(a, e) {
  a.seq.push(e), a.map[e.id] = e;
}
function jh(a, e, t) {
  const n = a.name, i = n.length;
  for (ks.lastIndex = 0; ; ) {
    const s = ks.exec(n), r = ks.lastIndex;
    let o = s[1];
    const l = s[2] === "]", c = s[3];
    if (l && (o = o | 0), c === void 0 || c === "[" && r + 2 === i) {
      jr(t, c === void 0 ? new $h(o, a, e) : new qh(o, a, e));
      break;
    } else {
      let h = t.map[o];
      h === void 0 && (h = new Xh(o), jr(t, h)), t = h;
    }
  }
}
class as {
  constructor(e, t) {
    this.seq = [], this.map = {};
    const n = e.getProgramParameter(t, 35718);
    for (let i = 0; i < n; ++i) {
      const s = e.getActiveUniform(t, i), r = e.getUniformLocation(t, s.name);
      jh(s, r, this);
    }
  }
  setValue(e, t, n, i) {
    const s = this.map[t];
    s !== void 0 && s.setValue(e, n, i);
  }
  setOptional(e, t, n) {
    const i = t[n];
    i !== void 0 && this.setValue(e, n, i);
  }
  static upload(e, t, n, i) {
    for (let s = 0, r = t.length; s !== r; ++s) {
      const o = t[s], l = n[o.id];
      l.needsUpdate !== !1 && o.setValue(e, l.value, i);
    }
  }
  static seqWithValue(e, t) {
    const n = [];
    for (let i = 0, s = e.length; i !== s; ++i) {
      const r = e[i];
      r.id in t && n.push(r);
    }
    return n;
  }
}
function Kr(a, e, t) {
  const n = a.createShader(e);
  return a.shaderSource(n, t), a.compileShader(n), n;
}
let Kh = 0;
function Yh(a, e) {
  const t = a.split(`
`), n = [], i = Math.max(e - 6, 0), s = Math.min(e + 6, t.length);
  for (let r = i; r < s; r++) {
    const o = r + 1;
    n.push(`${o === e ? ">" : " "} ${o}: ${t[r]}`);
  }
  return n.join(`
`);
}
function Zh(a) {
  switch (a) {
    case 3e3:
      return ["Linear", "( value )"];
    case 3001:
      return ["sRGB", "( value )"];
    default:
      return console.warn("THREE.WebGLProgram: Unsupported encoding:", a), ["Linear", "( value )"];
  }
}
function Yr(a, e, t) {
  const n = a.getShaderParameter(e, 35713), i = a.getShaderInfoLog(e).trim();
  if (n && i === "")
    return "";
  const s = /ERROR: 0:(\d+)/.exec(i);
  if (s) {
    const r = parseInt(s[1]);
    return t.toUpperCase() + `

` + i + `

` + Yh(a.getShaderSource(e), r);
  } else
    return i;
}
function Jh(a, e) {
  const t = Zh(e);
  return "vec4 " + a + "( vec4 value ) { return LinearTo" + t[0] + t[1] + "; }";
}
function Qh(a, e) {
  let t;
  switch (e) {
    case 1:
      t = "Linear";
      break;
    case 2:
      t = "Reinhard";
      break;
    case 3:
      t = "OptimizedCineon";
      break;
    case 4:
      t = "ACESFilmic";
      break;
    case 5:
      t = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), t = "Linear";
  }
  return "vec3 " + a + "( vec3 color ) { return " + t + "ToneMapping( color ); }";
}
function ed(a) {
  return [
    a.extensionDerivatives || !!a.envMapCubeUVHeight || a.bumpMap || a.tangentSpaceNormalMap || a.clearcoatNormalMap || a.flatShading || a.shaderID === "physical" ? "#extension GL_OES_standard_derivatives : enable" : "",
    (a.extensionFragDepth || a.logarithmicDepthBuffer) && a.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "",
    a.extensionDrawBuffers && a.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "",
    (a.extensionShaderTextureLOD || a.envMap || a.transmission) && a.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""
  ].filter(vi).join(`
`);
}
function td(a) {
  const e = [];
  for (const t in a) {
    const n = a[t];
    n !== !1 && e.push("#define " + t + " " + n);
  }
  return e.join(`
`);
}
function nd(a, e) {
  const t = {}, n = a.getProgramParameter(e, 35721);
  for (let i = 0; i < n; i++) {
    const s = a.getActiveAttrib(e, i), r = s.name;
    let o = 1;
    s.type === 35674 && (o = 2), s.type === 35675 && (o = 3), s.type === 35676 && (o = 4), t[r] = {
      type: s.type,
      location: a.getAttribLocation(e, r),
      locationSize: o
    };
  }
  return t;
}
function vi(a) {
  return a !== "";
}
function Zr(a, e) {
  const t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return a.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, t).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function Jr(a, e) {
  return a.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
}
const id = /^[ \t]*#include +<([\w\d./]+)>/gm;
function er(a) {
  return a.replace(id, sd);
}
function sd(a, e) {
  const t = be[e];
  if (t === void 0)
    throw new Error("Can not resolve #include <" + e + ">");
  return er(t);
}
const rd = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function Qr(a) {
  return a.replace(rd, ad);
}
function ad(a, e, t, n) {
  let i = "";
  for (let s = parseInt(e); s < parseInt(t); s++)
    i += n.replace(/\[\s*i\s*\]/g, "[ " + s + " ]").replace(/UNROLLED_LOOP_INDEX/g, s);
  return i;
}
function ea(a) {
  let e = "precision " + a.precision + ` float;
precision ` + a.precision + " int;";
  return a.precision === "highp" ? e += `
#define HIGH_PRECISION` : a.precision === "mediump" ? e += `
#define MEDIUM_PRECISION` : a.precision === "lowp" && (e += `
#define LOW_PRECISION`), e;
}
function od(a) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return a.shadowMapType === 1 ? e = "SHADOWMAP_TYPE_PCF" : a.shadowMapType === 2 ? e = "SHADOWMAP_TYPE_PCF_SOFT" : a.shadowMapType === 3 && (e = "SHADOWMAP_TYPE_VSM"), e;
}
function ld(a) {
  let e = "ENVMAP_TYPE_CUBE";
  if (a.envMap)
    switch (a.envMapMode) {
      case 301:
      case 302:
        e = "ENVMAP_TYPE_CUBE";
        break;
      case 306:
        e = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  return e;
}
function cd(a) {
  let e = "ENVMAP_MODE_REFLECTION";
  if (a.envMap)
    switch (a.envMapMode) {
      case 302:
        e = "ENVMAP_MODE_REFRACTION";
        break;
    }
  return e;
}
function ud(a) {
  let e = "ENVMAP_BLENDING_NONE";
  if (a.envMap)
    switch (a.combine) {
      case 0:
        e = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case 1:
        e = "ENVMAP_BLENDING_MIX";
        break;
      case 2:
        e = "ENVMAP_BLENDING_ADD";
        break;
    }
  return e;
}
function hd(a) {
  const e = a.envMapCubeUVHeight;
  if (e === null)
    return null;
  const t = Math.log2(e) - 2, n = 1 / e;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 7 * 16)), texelHeight: n, maxMip: t };
}
function dd(a, e, t, n) {
  const i = a.getContext(), s = t.defines;
  let r = t.vertexShader, o = t.fragmentShader;
  const l = od(t), c = ld(t), u = cd(t), h = ud(t), d = hd(t), p = t.isWebGL2 ? "" : ed(t), g = td(s), m = i.createProgram();
  let f, _, T = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
  t.isRawShaderMaterial ? (f = [
    g
  ].filter(vi).join(`
`), f.length > 0 && (f += `
`), _ = [
    p,
    g
  ].filter(vi).join(`
`), _.length > 0 && (_ += `
`)) : (f = [
    ea(t),
    "#define SHADER_NAME " + t.shaderName,
    g,
    t.instancing ? "#define USE_INSTANCING" : "",
    t.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
    t.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "",
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.map ? "#define USE_MAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + u : "",
    t.lightMap ? "#define USE_LIGHTMAP" : "",
    t.aoMap ? "#define USE_AOMAP" : "",
    t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    t.bumpMap ? "#define USE_BUMPMAP" : "",
    t.normalMap ? "#define USE_NORMALMAP" : "",
    t.normalMap && t.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "",
    t.normalMap && t.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "",
    t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    t.displacementMap && t.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "",
    t.specularMap ? "#define USE_SPECULARMAP" : "",
    t.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "",
    t.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "",
    t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    t.metalnessMap ? "#define USE_METALNESSMAP" : "",
    t.alphaMap ? "#define USE_ALPHAMAP" : "",
    t.transmission ? "#define USE_TRANSMISSION" : "",
    t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    t.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "",
    t.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "",
    t.vertexTangents ? "#define USE_TANGENT" : "",
    t.vertexColors ? "#define USE_COLOR" : "",
    t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    t.vertexUvs ? "#define USE_UV" : "",
    t.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
    t.flatShading ? "#define FLAT_SHADED" : "",
    t.skinning ? "#define USE_SKINNING" : "",
    t.morphTargets ? "#define USE_MORPHTARGETS" : "",
    t.morphNormals && t.flatShading === !1 ? "#define USE_MORPHNORMALS" : "",
    t.morphColors && t.isWebGL2 ? "#define USE_MORPHCOLORS" : "",
    t.morphTargetsCount > 0 && t.isWebGL2 ? "#define MORPHTARGETS_TEXTURE" : "",
    t.morphTargetsCount > 0 && t.isWebGL2 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride : "",
    t.morphTargetsCount > 0 && t.isWebGL2 ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount : "",
    t.doubleSided ? "#define DOUBLE_SIDED" : "",
    t.flipSided ? "#define FLIP_SIDED" : "",
    t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    t.shadowMapEnabled ? "#define " + l : "",
    t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
    t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    t.logarithmicDepthBuffer && t.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "",
    "uniform mat4 modelMatrix;",
    "uniform mat4 modelViewMatrix;",
    "uniform mat4 projectionMatrix;",
    "uniform mat4 viewMatrix;",
    "uniform mat3 normalMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    "#ifdef USE_INSTANCING",
    "	attribute mat4 instanceMatrix;",
    "#endif",
    "#ifdef USE_INSTANCING_COLOR",
    "	attribute vec3 instanceColor;",
    "#endif",
    "attribute vec3 position;",
    "attribute vec3 normal;",
    "attribute vec2 uv;",
    "#ifdef USE_TANGENT",
    "	attribute vec4 tangent;",
    "#endif",
    "#if defined( USE_COLOR_ALPHA )",
    "	attribute vec4 color;",
    "#elif defined( USE_COLOR )",
    "	attribute vec3 color;",
    "#endif",
    "#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )",
    "	attribute vec3 morphTarget0;",
    "	attribute vec3 morphTarget1;",
    "	attribute vec3 morphTarget2;",
    "	attribute vec3 morphTarget3;",
    "	#ifdef USE_MORPHNORMALS",
    "		attribute vec3 morphNormal0;",
    "		attribute vec3 morphNormal1;",
    "		attribute vec3 morphNormal2;",
    "		attribute vec3 morphNormal3;",
    "	#else",
    "		attribute vec3 morphTarget4;",
    "		attribute vec3 morphTarget5;",
    "		attribute vec3 morphTarget6;",
    "		attribute vec3 morphTarget7;",
    "	#endif",
    "#endif",
    "#ifdef USE_SKINNING",
    "	attribute vec4 skinIndex;",
    "	attribute vec4 skinWeight;",
    "#endif",
    `
`
  ].filter(vi).join(`
`), _ = [
    p,
    ea(t),
    "#define SHADER_NAME " + t.shaderName,
    g,
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.map ? "#define USE_MAP" : "",
    t.matcap ? "#define USE_MATCAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + c : "",
    t.envMap ? "#define " + u : "",
    t.envMap ? "#define " + h : "",
    d ? "#define CUBEUV_TEXEL_WIDTH " + d.texelWidth : "",
    d ? "#define CUBEUV_TEXEL_HEIGHT " + d.texelHeight : "",
    d ? "#define CUBEUV_MAX_MIP " + d.maxMip + ".0" : "",
    t.lightMap ? "#define USE_LIGHTMAP" : "",
    t.aoMap ? "#define USE_AOMAP" : "",
    t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    t.bumpMap ? "#define USE_BUMPMAP" : "",
    t.normalMap ? "#define USE_NORMALMAP" : "",
    t.normalMap && t.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "",
    t.normalMap && t.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "",
    t.clearcoat ? "#define USE_CLEARCOAT" : "",
    t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    t.iridescence ? "#define USE_IRIDESCENCE" : "",
    t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    t.specularMap ? "#define USE_SPECULARMAP" : "",
    t.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "",
    t.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "",
    t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    t.metalnessMap ? "#define USE_METALNESSMAP" : "",
    t.alphaMap ? "#define USE_ALPHAMAP" : "",
    t.alphaTest ? "#define USE_ALPHATEST" : "",
    t.sheen ? "#define USE_SHEEN" : "",
    t.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "",
    t.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "",
    t.transmission ? "#define USE_TRANSMISSION" : "",
    t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
    t.vertexTangents ? "#define USE_TANGENT" : "",
    t.vertexColors || t.instancingColor ? "#define USE_COLOR" : "",
    t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    t.vertexUvs ? "#define USE_UV" : "",
    t.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
    t.gradientMap ? "#define USE_GRADIENTMAP" : "",
    t.flatShading ? "#define FLAT_SHADED" : "",
    t.doubleSided ? "#define DOUBLE_SIDED" : "",
    t.flipSided ? "#define FLIP_SIDED" : "",
    t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    t.shadowMapEnabled ? "#define " + l : "",
    t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
    t.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "",
    t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    t.logarithmicDepthBuffer && t.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "",
    "uniform mat4 viewMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    t.toneMapping !== 0 ? "#define TONE_MAPPING" : "",
    t.toneMapping !== 0 ? be.tonemapping_pars_fragment : "",
    t.toneMapping !== 0 ? Qh("toneMapping", t.toneMapping) : "",
    t.dithering ? "#define DITHERING" : "",
    t.opaque ? "#define OPAQUE" : "",
    be.encodings_pars_fragment,
    Jh("linearToOutputTexel", t.outputEncoding),
    t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
    `
`
  ].filter(vi).join(`
`)), r = er(r), r = Zr(r, t), r = Jr(r, t), o = er(o), o = Zr(o, t), o = Jr(o, t), r = Qr(r), o = Qr(o), t.isWebGL2 && t.isRawShaderMaterial !== !0 && (T = `#version 300 es
`, f = [
    "precision mediump sampler2DArray;",
    "#define attribute in",
    "#define varying out",
    "#define texture2D texture"
  ].join(`
`) + `
` + f, _ = [
    "#define varying in",
    t.glslVersion === wr ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
    t.glslVersion === wr ? "" : "#define gl_FragColor pc_fragColor",
    "#define gl_FragDepthEXT gl_FragDepth",
    "#define texture2D texture",
    "#define textureCube texture",
    "#define texture2DProj textureProj",
    "#define texture2DLodEXT textureLod",
    "#define texture2DProjLodEXT textureProjLod",
    "#define textureCubeLodEXT textureLod",
    "#define texture2DGradEXT textureGrad",
    "#define texture2DProjGradEXT textureProjGrad",
    "#define textureCubeGradEXT textureGrad"
  ].join(`
`) + `
` + _);
  const M = T + f + r, S = T + _ + o, b = Kr(i, 35633, M), A = Kr(i, 35632, S);
  if (i.attachShader(m, b), i.attachShader(m, A), t.index0AttributeName !== void 0 ? i.bindAttribLocation(m, 0, t.index0AttributeName) : t.morphTargets === !0 && i.bindAttribLocation(m, 0, "position"), i.linkProgram(m), a.debug.checkShaderErrors) {
    const E = i.getProgramInfoLog(m).trim(), F = i.getShaderInfoLog(b).trim(), q = i.getShaderInfoLog(A).trim();
    let ne = !0, U = !0;
    if (i.getProgramParameter(m, 35714) === !1) {
      ne = !1;
      const P = Yr(i, b, "vertex"), V = Yr(i, A, "fragment");
      console.error(
        "THREE.WebGLProgram: Shader Error " + i.getError() + " - VALIDATE_STATUS " + i.getProgramParameter(m, 35715) + `

Program Info Log: ` + E + `
` + P + `
` + V
      );
    } else
      E !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", E) : (F === "" || q === "") && (U = !1);
    U && (this.diagnostics = {
      runnable: ne,
      programLog: E,
      vertexShader: {
        log: F,
        prefix: f
      },
      fragmentShader: {
        log: q,
        prefix: _
      }
    });
  }
  i.deleteShader(b), i.deleteShader(A);
  let D;
  this.getUniforms = function() {
    return D === void 0 && (D = new as(i, m)), D;
  };
  let x;
  return this.getAttributes = function() {
    return x === void 0 && (x = nd(i, m)), x;
  }, this.destroy = function() {
    n.releaseStatesOfProgram(this), i.deleteProgram(m), this.program = void 0;
  }, this.name = t.shaderName, this.id = Kh++, this.cacheKey = e, this.usedTimes = 1, this.program = m, this.vertexShader = b, this.fragmentShader = A, this;
}
let fd = 0;
class pd {
  constructor() {
    this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
  }
  update(e) {
    const t = e.vertexShader, n = e.fragmentShader, i = this._getShaderStage(t), s = this._getShaderStage(n), r = this._getShaderCacheForMaterial(e);
    return r.has(i) === !1 && (r.add(i), i.usedTimes++), r.has(s) === !1 && (r.add(s), s.usedTimes++), this;
  }
  remove(e) {
    const t = this.materialCache.get(e);
    for (const n of t)
      n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code);
    return this.materialCache.delete(e), this;
  }
  getVertexShaderID(e) {
    return this._getShaderStage(e.vertexShader).id;
  }
  getFragmentShaderID(e) {
    return this._getShaderStage(e.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(e) {
    const t = this.materialCache;
    let n = t.get(e);
    return n === void 0 && (n = /* @__PURE__ */ new Set(), t.set(e, n)), n;
  }
  _getShaderStage(e) {
    const t = this.shaderCache;
    let n = t.get(e);
    return n === void 0 && (n = new md(e), t.set(e, n)), n;
  }
}
class md {
  constructor(e) {
    this.id = fd++, this.code = e, this.usedTimes = 0;
  }
}
function gd(a, e, t, n, i, s, r) {
  const o = new Ka(), l = new pd(), c = [], u = i.isWebGL2, h = i.logarithmicDepthBuffer, d = i.vertexTextures;
  let p = i.precision;
  const g = {
    MeshDepthMaterial: "depth",
    MeshDistanceMaterial: "distanceRGBA",
    MeshNormalMaterial: "normal",
    MeshBasicMaterial: "basic",
    MeshLambertMaterial: "lambert",
    MeshPhongMaterial: "phong",
    MeshToonMaterial: "toon",
    MeshStandardMaterial: "physical",
    MeshPhysicalMaterial: "physical",
    MeshMatcapMaterial: "matcap",
    LineBasicMaterial: "basic",
    LineDashedMaterial: "dashed",
    PointsMaterial: "points",
    ShadowMaterial: "shadow",
    SpriteMaterial: "sprite"
  };
  function m(x, E, F, q, ne) {
    const U = q.fog, P = ne.geometry, V = x.isMeshStandardMaterial ? q.environment : null, X = (x.isMeshStandardMaterial ? t : e).get(x.envMap || V), K = !!X && X.mapping === 306 ? X.image.height : null, H = g[x.type];
    x.precision !== null && (p = i.getMaxPrecision(x.precision), p !== x.precision && console.warn("THREE.WebGLProgram.getParameters:", x.precision, "not supported, using", p, "instead."));
    const N = P.morphAttributes.position || P.morphAttributes.normal || P.morphAttributes.color, O = N !== void 0 ? N.length : 0;
    let Q = 0;
    P.morphAttributes.position !== void 0 && (Q = 1), P.morphAttributes.normal !== void 0 && (Q = 2), P.morphAttributes.color !== void 0 && (Q = 3);
    let Z, Y, oe, ve;
    if (H) {
      const Ge = Pt[H];
      Z = Ge.vertexShader, Y = Ge.fragmentShader;
    } else
      Z = x.vertexShader, Y = x.fragmentShader, l.update(x), oe = l.getVertexShaderID(x), ve = l.getFragmentShaderID(x);
    const $ = a.getRenderTarget(), Ue = x.alphaTest > 0, ge = x.clearcoat > 0, ye = x.iridescence > 0;
    return {
      isWebGL2: u,
      shaderID: H,
      shaderName: x.type,
      vertexShader: Z,
      fragmentShader: Y,
      defines: x.defines,
      customVertexShaderID: oe,
      customFragmentShaderID: ve,
      isRawShaderMaterial: x.isRawShaderMaterial === !0,
      glslVersion: x.glslVersion,
      precision: p,
      instancing: ne.isInstancedMesh === !0,
      instancingColor: ne.isInstancedMesh === !0 && ne.instanceColor !== null,
      supportsVertexTextures: d,
      outputEncoding: $ === null ? a.outputEncoding : $.isXRRenderTarget === !0 ? $.texture.encoding : 3e3,
      map: !!x.map,
      matcap: !!x.matcap,
      envMap: !!X,
      envMapMode: X && X.mapping,
      envMapCubeUVHeight: K,
      lightMap: !!x.lightMap,
      aoMap: !!x.aoMap,
      emissiveMap: !!x.emissiveMap,
      bumpMap: !!x.bumpMap,
      normalMap: !!x.normalMap,
      objectSpaceNormalMap: x.normalMapType === 1,
      tangentSpaceNormalMap: x.normalMapType === 0,
      decodeVideoTexture: !!x.map && x.map.isVideoTexture === !0 && x.map.encoding === 3001,
      clearcoat: ge,
      clearcoatMap: ge && !!x.clearcoatMap,
      clearcoatRoughnessMap: ge && !!x.clearcoatRoughnessMap,
      clearcoatNormalMap: ge && !!x.clearcoatNormalMap,
      iridescence: ye,
      iridescenceMap: ye && !!x.iridescenceMap,
      iridescenceThicknessMap: ye && !!x.iridescenceThicknessMap,
      displacementMap: !!x.displacementMap,
      roughnessMap: !!x.roughnessMap,
      metalnessMap: !!x.metalnessMap,
      specularMap: !!x.specularMap,
      specularIntensityMap: !!x.specularIntensityMap,
      specularColorMap: !!x.specularColorMap,
      opaque: x.transparent === !1 && x.blending === 1,
      alphaMap: !!x.alphaMap,
      alphaTest: Ue,
      gradientMap: !!x.gradientMap,
      sheen: x.sheen > 0,
      sheenColorMap: !!x.sheenColorMap,
      sheenRoughnessMap: !!x.sheenRoughnessMap,
      transmission: x.transmission > 0,
      transmissionMap: !!x.transmissionMap,
      thicknessMap: !!x.thicknessMap,
      combine: x.combine,
      vertexTangents: !!x.normalMap && !!P.attributes.tangent,
      vertexColors: x.vertexColors,
      vertexAlphas: x.vertexColors === !0 && !!P.attributes.color && P.attributes.color.itemSize === 4,
      vertexUvs: !!x.map || !!x.bumpMap || !!x.normalMap || !!x.specularMap || !!x.alphaMap || !!x.emissiveMap || !!x.roughnessMap || !!x.metalnessMap || !!x.clearcoatMap || !!x.clearcoatRoughnessMap || !!x.clearcoatNormalMap || !!x.iridescenceMap || !!x.iridescenceThicknessMap || !!x.displacementMap || !!x.transmissionMap || !!x.thicknessMap || !!x.specularIntensityMap || !!x.specularColorMap || !!x.sheenColorMap || !!x.sheenRoughnessMap,
      uvsVertexOnly: !(!!x.map || !!x.bumpMap || !!x.normalMap || !!x.specularMap || !!x.alphaMap || !!x.emissiveMap || !!x.roughnessMap || !!x.metalnessMap || !!x.clearcoatNormalMap || !!x.iridescenceMap || !!x.iridescenceThicknessMap || x.transmission > 0 || !!x.transmissionMap || !!x.thicknessMap || !!x.specularIntensityMap || !!x.specularColorMap || x.sheen > 0 || !!x.sheenColorMap || !!x.sheenRoughnessMap) && !!x.displacementMap,
      fog: !!U,
      useFog: x.fog === !0,
      fogExp2: U && U.isFogExp2,
      flatShading: !!x.flatShading,
      sizeAttenuation: x.sizeAttenuation,
      logarithmicDepthBuffer: h,
      skinning: ne.isSkinnedMesh === !0,
      morphTargets: P.morphAttributes.position !== void 0,
      morphNormals: P.morphAttributes.normal !== void 0,
      morphColors: P.morphAttributes.color !== void 0,
      morphTargetsCount: O,
      morphTextureStride: Q,
      numDirLights: E.directional.length,
      numPointLights: E.point.length,
      numSpotLights: E.spot.length,
      numSpotLightMaps: E.spotLightMap.length,
      numRectAreaLights: E.rectArea.length,
      numHemiLights: E.hemi.length,
      numDirLightShadows: E.directionalShadowMap.length,
      numPointLightShadows: E.pointShadowMap.length,
      numSpotLightShadows: E.spotShadowMap.length,
      numSpotLightShadowsWithMaps: E.numSpotLightShadowsWithMaps,
      numClippingPlanes: r.numPlanes,
      numClipIntersection: r.numIntersection,
      dithering: x.dithering,
      shadowMapEnabled: a.shadowMap.enabled && F.length > 0,
      shadowMapType: a.shadowMap.type,
      toneMapping: x.toneMapped ? a.toneMapping : 0,
      physicallyCorrectLights: a.physicallyCorrectLights,
      premultipliedAlpha: x.premultipliedAlpha,
      doubleSided: x.side === 2,
      flipSided: x.side === 1,
      useDepthPacking: !!x.depthPacking,
      depthPacking: x.depthPacking || 0,
      index0AttributeName: x.index0AttributeName,
      extensionDerivatives: x.extensions && x.extensions.derivatives,
      extensionFragDepth: x.extensions && x.extensions.fragDepth,
      extensionDrawBuffers: x.extensions && x.extensions.drawBuffers,
      extensionShaderTextureLOD: x.extensions && x.extensions.shaderTextureLOD,
      rendererExtensionFragDepth: u || n.has("EXT_frag_depth"),
      rendererExtensionDrawBuffers: u || n.has("WEBGL_draw_buffers"),
      rendererExtensionShaderTextureLod: u || n.has("EXT_shader_texture_lod"),
      customProgramCacheKey: x.customProgramCacheKey()
    };
  }
  function f(x) {
    const E = [];
    if (x.shaderID ? E.push(x.shaderID) : (E.push(x.customVertexShaderID), E.push(x.customFragmentShaderID)), x.defines !== void 0)
      for (const F in x.defines)
        E.push(F), E.push(x.defines[F]);
    return x.isRawShaderMaterial === !1 && (_(E, x), T(E, x), E.push(a.outputEncoding)), E.push(x.customProgramCacheKey), E.join();
  }
  function _(x, E) {
    x.push(E.precision), x.push(E.outputEncoding), x.push(E.envMapMode), x.push(E.envMapCubeUVHeight), x.push(E.combine), x.push(E.vertexUvs), x.push(E.fogExp2), x.push(E.sizeAttenuation), x.push(E.morphTargetsCount), x.push(E.morphAttributeCount), x.push(E.numDirLights), x.push(E.numPointLights), x.push(E.numSpotLights), x.push(E.numSpotLightMaps), x.push(E.numHemiLights), x.push(E.numRectAreaLights), x.push(E.numDirLightShadows), x.push(E.numPointLightShadows), x.push(E.numSpotLightShadows), x.push(E.numSpotLightShadowsWithMaps), x.push(E.shadowMapType), x.push(E.toneMapping), x.push(E.numClippingPlanes), x.push(E.numClipIntersection), x.push(E.depthPacking);
  }
  function T(x, E) {
    o.disableAll(), E.isWebGL2 && o.enable(0), E.supportsVertexTextures && o.enable(1), E.instancing && o.enable(2), E.instancingColor && o.enable(3), E.map && o.enable(4), E.matcap && o.enable(5), E.envMap && o.enable(6), E.lightMap && o.enable(7), E.aoMap && o.enable(8), E.emissiveMap && o.enable(9), E.bumpMap && o.enable(10), E.normalMap && o.enable(11), E.objectSpaceNormalMap && o.enable(12), E.tangentSpaceNormalMap && o.enable(13), E.clearcoat && o.enable(14), E.clearcoatMap && o.enable(15), E.clearcoatRoughnessMap && o.enable(16), E.clearcoatNormalMap && o.enable(17), E.iridescence && o.enable(18), E.iridescenceMap && o.enable(19), E.iridescenceThicknessMap && o.enable(20), E.displacementMap && o.enable(21), E.specularMap && o.enable(22), E.roughnessMap && o.enable(23), E.metalnessMap && o.enable(24), E.gradientMap && o.enable(25), E.alphaMap && o.enable(26), E.alphaTest && o.enable(27), E.vertexColors && o.enable(28), E.vertexAlphas && o.enable(29), E.vertexUvs && o.enable(30), E.vertexTangents && o.enable(31), E.uvsVertexOnly && o.enable(32), x.push(o.mask), o.disableAll(), E.fog && o.enable(0), E.useFog && o.enable(1), E.flatShading && o.enable(2), E.logarithmicDepthBuffer && o.enable(3), E.skinning && o.enable(4), E.morphTargets && o.enable(5), E.morphNormals && o.enable(6), E.morphColors && o.enable(7), E.premultipliedAlpha && o.enable(8), E.shadowMapEnabled && o.enable(9), E.physicallyCorrectLights && o.enable(10), E.doubleSided && o.enable(11), E.flipSided && o.enable(12), E.useDepthPacking && o.enable(13), E.dithering && o.enable(14), E.specularIntensityMap && o.enable(15), E.specularColorMap && o.enable(16), E.transmission && o.enable(17), E.transmissionMap && o.enable(18), E.thicknessMap && o.enable(19), E.sheen && o.enable(20), E.sheenColorMap && o.enable(21), E.sheenRoughnessMap && o.enable(22), E.decodeVideoTexture && o.enable(23), E.opaque && o.enable(24), x.push(o.mask);
  }
  function M(x) {
    const E = g[x.type];
    let F;
    if (E) {
      const q = Pt[E];
      F = nl.clone(q.uniforms);
    } else
      F = x.uniforms;
    return F;
  }
  function S(x, E) {
    let F;
    for (let q = 0, ne = c.length; q < ne; q++) {
      const U = c[q];
      if (U.cacheKey === E) {
        F = U, ++F.usedTimes;
        break;
      }
    }
    return F === void 0 && (F = new dd(a, E, x, s), c.push(F)), F;
  }
  function b(x) {
    if (--x.usedTimes === 0) {
      const E = c.indexOf(x);
      c[E] = c[c.length - 1], c.pop(), x.destroy();
    }
  }
  function A(x) {
    l.remove(x);
  }
  function D() {
    l.dispose();
  }
  return {
    getParameters: m,
    getProgramCacheKey: f,
    getUniforms: M,
    acquireProgram: S,
    releaseProgram: b,
    releaseShaderCache: A,
    programs: c,
    dispose: D
  };
}
function _d() {
  let a = /* @__PURE__ */ new WeakMap();
  function e(s) {
    let r = a.get(s);
    return r === void 0 && (r = {}, a.set(s, r)), r;
  }
  function t(s) {
    a.delete(s);
  }
  function n(s, r, o) {
    a.get(s)[r] = o;
  }
  function i() {
    a = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    remove: t,
    update: n,
    dispose: i
  };
}
function xd(a, e) {
  return a.groupOrder !== e.groupOrder ? a.groupOrder - e.groupOrder : a.renderOrder !== e.renderOrder ? a.renderOrder - e.renderOrder : a.material.id !== e.material.id ? a.material.id - e.material.id : a.z !== e.z ? a.z - e.z : a.id - e.id;
}
function ta(a, e) {
  return a.groupOrder !== e.groupOrder ? a.groupOrder - e.groupOrder : a.renderOrder !== e.renderOrder ? a.renderOrder - e.renderOrder : a.z !== e.z ? e.z - a.z : a.id - e.id;
}
function na() {
  const a = [];
  let e = 0;
  const t = [], n = [], i = [];
  function s() {
    e = 0, t.length = 0, n.length = 0, i.length = 0;
  }
  function r(h, d, p, g, m, f) {
    let _ = a[e];
    return _ === void 0 ? (_ = {
      id: h.id,
      object: h,
      geometry: d,
      material: p,
      groupOrder: g,
      renderOrder: h.renderOrder,
      z: m,
      group: f
    }, a[e] = _) : (_.id = h.id, _.object = h, _.geometry = d, _.material = p, _.groupOrder = g, _.renderOrder = h.renderOrder, _.z = m, _.group = f), e++, _;
  }
  function o(h, d, p, g, m, f) {
    const _ = r(h, d, p, g, m, f);
    p.transmission > 0 ? n.push(_) : p.transparent === !0 ? i.push(_) : t.push(_);
  }
  function l(h, d, p, g, m, f) {
    const _ = r(h, d, p, g, m, f);
    p.transmission > 0 ? n.unshift(_) : p.transparent === !0 ? i.unshift(_) : t.unshift(_);
  }
  function c(h, d) {
    t.length > 1 && t.sort(h || xd), n.length > 1 && n.sort(d || ta), i.length > 1 && i.sort(d || ta);
  }
  function u() {
    for (let h = e, d = a.length; h < d; h++) {
      const p = a[h];
      if (p.id === null)
        break;
      p.id = null, p.object = null, p.geometry = null, p.material = null, p.group = null;
    }
  }
  return {
    opaque: t,
    transmissive: n,
    transparent: i,
    init: s,
    push: o,
    unshift: l,
    finish: u,
    sort: c
  };
}
function vd() {
  let a = /* @__PURE__ */ new WeakMap();
  function e(n, i) {
    const s = a.get(n);
    let r;
    return s === void 0 ? (r = new na(), a.set(n, [r])) : i >= s.length ? (r = new na(), s.push(r)) : r = s[i], r;
  }
  function t() {
    a = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    dispose: t
  };
}
function yd() {
  const a = {};
  return {
    get: function(e) {
      if (a[e.id] !== void 0)
        return a[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            direction: new R(),
            color: new Me()
          };
          break;
        case "SpotLight":
          t = {
            position: new R(),
            direction: new R(),
            color: new Me(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0
          };
          break;
        case "PointLight":
          t = {
            position: new R(),
            color: new Me(),
            distance: 0,
            decay: 0
          };
          break;
        case "HemisphereLight":
          t = {
            direction: new R(),
            skyColor: new Me(),
            groundColor: new Me()
          };
          break;
        case "RectAreaLight":
          t = {
            color: new Me(),
            position: new R(),
            halfWidth: new R(),
            halfHeight: new R()
          };
          break;
      }
      return a[e.id] = t, t;
    }
  };
}
function Md() {
  const a = {};
  return {
    get: function(e) {
      if (a[e.id] !== void 0)
        return a[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Le()
          };
          break;
        case "SpotLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Le()
          };
          break;
        case "PointLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Le(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3
          };
          break;
      }
      return a[e.id] = t, t;
    }
  };
}
let Sd = 0;
function bd(a, e) {
  return (e.castShadow ? 2 : 0) - (a.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (a.map ? 1 : 0);
}
function wd(a, e) {
  const t = new yd(), n = Md(), i = {
    version: 0,
    hash: {
      directionalLength: -1,
      pointLength: -1,
      spotLength: -1,
      rectAreaLength: -1,
      hemiLength: -1,
      numDirectionalShadows: -1,
      numPointShadows: -1,
      numSpotShadows: -1,
      numSpotMaps: -1
    },
    ambient: [0, 0, 0],
    probe: [],
    directional: [],
    directionalShadow: [],
    directionalShadowMap: [],
    directionalShadowMatrix: [],
    spot: [],
    spotLightMap: [],
    spotShadow: [],
    spotShadowMap: [],
    spotLightMatrix: [],
    rectArea: [],
    rectAreaLTC1: null,
    rectAreaLTC2: null,
    point: [],
    pointShadow: [],
    pointShadowMap: [],
    pointShadowMatrix: [],
    hemi: [],
    numSpotLightShadowsWithMaps: 0
  };
  for (let u = 0; u < 9; u++)
    i.probe.push(new R());
  const s = new R(), r = new Ce(), o = new Ce();
  function l(u, h) {
    let d = 0, p = 0, g = 0;
    for (let q = 0; q < 9; q++)
      i.probe[q].set(0, 0, 0);
    let m = 0, f = 0, _ = 0, T = 0, M = 0, S = 0, b = 0, A = 0, D = 0, x = 0;
    u.sort(bd);
    const E = h !== !0 ? Math.PI : 1;
    for (let q = 0, ne = u.length; q < ne; q++) {
      const U = u[q], P = U.color, V = U.intensity, X = U.distance, K = U.shadow && U.shadow.map ? U.shadow.map.texture : null;
      if (U.isAmbientLight)
        d += P.r * V * E, p += P.g * V * E, g += P.b * V * E;
      else if (U.isLightProbe)
        for (let H = 0; H < 9; H++)
          i.probe[H].addScaledVector(U.sh.coefficients[H], V);
      else if (U.isDirectionalLight) {
        const H = t.get(U);
        if (H.color.copy(U.color).multiplyScalar(U.intensity * E), U.castShadow) {
          const N = U.shadow, O = n.get(U);
          O.shadowBias = N.bias, O.shadowNormalBias = N.normalBias, O.shadowRadius = N.radius, O.shadowMapSize = N.mapSize, i.directionalShadow[m] = O, i.directionalShadowMap[m] = K, i.directionalShadowMatrix[m] = U.shadow.matrix, S++;
        }
        i.directional[m] = H, m++;
      } else if (U.isSpotLight) {
        const H = t.get(U);
        H.position.setFromMatrixPosition(U.matrixWorld), H.color.copy(P).multiplyScalar(V * E), H.distance = X, H.coneCos = Math.cos(U.angle), H.penumbraCos = Math.cos(U.angle * (1 - U.penumbra)), H.decay = U.decay, i.spot[_] = H;
        const N = U.shadow;
        if (U.map && (i.spotLightMap[D] = U.map, D++, N.updateMatrices(U), U.castShadow && x++), i.spotLightMatrix[_] = N.matrix, U.castShadow) {
          const O = n.get(U);
          O.shadowBias = N.bias, O.shadowNormalBias = N.normalBias, O.shadowRadius = N.radius, O.shadowMapSize = N.mapSize, i.spotShadow[_] = O, i.spotShadowMap[_] = K, A++;
        }
        _++;
      } else if (U.isRectAreaLight) {
        const H = t.get(U);
        H.color.copy(P).multiplyScalar(V), H.halfWidth.set(U.width * 0.5, 0, 0), H.halfHeight.set(0, U.height * 0.5, 0), i.rectArea[T] = H, T++;
      } else if (U.isPointLight) {
        const H = t.get(U);
        if (H.color.copy(U.color).multiplyScalar(U.intensity * E), H.distance = U.distance, H.decay = U.decay, U.castShadow) {
          const N = U.shadow, O = n.get(U);
          O.shadowBias = N.bias, O.shadowNormalBias = N.normalBias, O.shadowRadius = N.radius, O.shadowMapSize = N.mapSize, O.shadowCameraNear = N.camera.near, O.shadowCameraFar = N.camera.far, i.pointShadow[f] = O, i.pointShadowMap[f] = K, i.pointShadowMatrix[f] = U.shadow.matrix, b++;
        }
        i.point[f] = H, f++;
      } else if (U.isHemisphereLight) {
        const H = t.get(U);
        H.skyColor.copy(U.color).multiplyScalar(V * E), H.groundColor.copy(U.groundColor).multiplyScalar(V * E), i.hemi[M] = H, M++;
      }
    }
    T > 0 && (e.isWebGL2 || a.has("OES_texture_float_linear") === !0 ? (i.rectAreaLTC1 = te.LTC_FLOAT_1, i.rectAreaLTC2 = te.LTC_FLOAT_2) : a.has("OES_texture_half_float_linear") === !0 ? (i.rectAreaLTC1 = te.LTC_HALF_1, i.rectAreaLTC2 = te.LTC_HALF_2) : console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")), i.ambient[0] = d, i.ambient[1] = p, i.ambient[2] = g;
    const F = i.hash;
    (F.directionalLength !== m || F.pointLength !== f || F.spotLength !== _ || F.rectAreaLength !== T || F.hemiLength !== M || F.numDirectionalShadows !== S || F.numPointShadows !== b || F.numSpotShadows !== A || F.numSpotMaps !== D) && (i.directional.length = m, i.spot.length = _, i.rectArea.length = T, i.point.length = f, i.hemi.length = M, i.directionalShadow.length = S, i.directionalShadowMap.length = S, i.pointShadow.length = b, i.pointShadowMap.length = b, i.spotShadow.length = A, i.spotShadowMap.length = A, i.directionalShadowMatrix.length = S, i.pointShadowMatrix.length = b, i.spotLightMatrix.length = A + D - x, i.spotLightMap.length = D, i.numSpotLightShadowsWithMaps = x, F.directionalLength = m, F.pointLength = f, F.spotLength = _, F.rectAreaLength = T, F.hemiLength = M, F.numDirectionalShadows = S, F.numPointShadows = b, F.numSpotShadows = A, F.numSpotMaps = D, i.version = Sd++);
  }
  function c(u, h) {
    let d = 0, p = 0, g = 0, m = 0, f = 0;
    const _ = h.matrixWorldInverse;
    for (let T = 0, M = u.length; T < M; T++) {
      const S = u[T];
      if (S.isDirectionalLight) {
        const b = i.directional[d];
        b.direction.setFromMatrixPosition(S.matrixWorld), s.setFromMatrixPosition(S.target.matrixWorld), b.direction.sub(s), b.direction.transformDirection(_), d++;
      } else if (S.isSpotLight) {
        const b = i.spot[g];
        b.position.setFromMatrixPosition(S.matrixWorld), b.position.applyMatrix4(_), b.direction.setFromMatrixPosition(S.matrixWorld), s.setFromMatrixPosition(S.target.matrixWorld), b.direction.sub(s), b.direction.transformDirection(_), g++;
      } else if (S.isRectAreaLight) {
        const b = i.rectArea[m];
        b.position.setFromMatrixPosition(S.matrixWorld), b.position.applyMatrix4(_), o.identity(), r.copy(S.matrixWorld), r.premultiply(_), o.extractRotation(r), b.halfWidth.set(S.width * 0.5, 0, 0), b.halfHeight.set(0, S.height * 0.5, 0), b.halfWidth.applyMatrix4(o), b.halfHeight.applyMatrix4(o), m++;
      } else if (S.isPointLight) {
        const b = i.point[p];
        b.position.setFromMatrixPosition(S.matrixWorld), b.position.applyMatrix4(_), p++;
      } else if (S.isHemisphereLight) {
        const b = i.hemi[f];
        b.direction.setFromMatrixPosition(S.matrixWorld), b.direction.transformDirection(_), f++;
      }
    }
  }
  return {
    setup: l,
    setupView: c,
    state: i
  };
}
function ia(a, e) {
  const t = new wd(a, e), n = [], i = [];
  function s() {
    n.length = 0, i.length = 0;
  }
  function r(h) {
    n.push(h);
  }
  function o(h) {
    i.push(h);
  }
  function l(h) {
    t.setup(n, h);
  }
  function c(h) {
    t.setupView(n, h);
  }
  return {
    init: s,
    state: {
      lightsArray: n,
      shadowsArray: i,
      lights: t
    },
    setupLights: l,
    setupLightsView: c,
    pushLight: r,
    pushShadow: o
  };
}
function Td(a, e) {
  let t = /* @__PURE__ */ new WeakMap();
  function n(s, r = 0) {
    const o = t.get(s);
    let l;
    return o === void 0 ? (l = new ia(a, e), t.set(s, [l])) : r >= o.length ? (l = new ia(a, e), o.push(l)) : l = o[r], l;
  }
  function i() {
    t = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: n,
    dispose: i
  };
}
class Ed extends It {
  constructor(e) {
    super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = 3200, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
  }
}
class Ad extends It {
  constructor(e) {
    super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.referencePosition = new R(), this.nearDistance = 1, this.farDistance = 1e3, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.referencePosition.copy(e.referencePosition), this.nearDistance = e.nearDistance, this.farDistance = e.farDistance, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
  }
}
const Cd = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, Rd = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function Ld(a, e, t) {
  let n = new cr();
  const i = new Le(), s = new Le(), r = new ze(), o = new Ed({ depthPacking: 3201 }), l = new Ad(), c = {}, u = t.maxTextureSize, h = { 0: 1, 1: 0, 2: 2 }, d = new Tn({
    defines: {
      VSM_SAMPLES: 8
    },
    uniforms: {
      shadow_pass: { value: null },
      resolution: { value: new Le() },
      radius: { value: 4 }
    },
    vertexShader: Cd,
    fragmentShader: Rd
  }), p = d.clone();
  p.defines.HORIZONTAL_PASS = 1;
  const g = new Nt();
  g.setAttribute(
    "position",
    new dt(
      new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]),
      3
    )
  );
  const m = new gt(g, d), f = this;
  this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = 1, this.render = function(S, b, A) {
    if (f.enabled === !1 || f.autoUpdate === !1 && f.needsUpdate === !1 || S.length === 0)
      return;
    const D = a.getRenderTarget(), x = a.getActiveCubeFace(), E = a.getActiveMipmapLevel(), F = a.state;
    F.setBlending(0), F.buffers.color.setClear(1, 1, 1, 1), F.buffers.depth.setTest(!0), F.setScissorTest(!1);
    for (let q = 0, ne = S.length; q < ne; q++) {
      const U = S[q], P = U.shadow;
      if (P === void 0) {
        console.warn("THREE.WebGLShadowMap:", U, "has no shadow.");
        continue;
      }
      if (P.autoUpdate === !1 && P.needsUpdate === !1)
        continue;
      i.copy(P.mapSize);
      const V = P.getFrameExtents();
      if (i.multiply(V), s.copy(P.mapSize), (i.x > u || i.y > u) && (i.x > u && (s.x = Math.floor(u / V.x), i.x = s.x * V.x, P.mapSize.x = s.x), i.y > u && (s.y = Math.floor(u / V.y), i.y = s.y * V.y, P.mapSize.y = s.y)), P.map === null) {
        const K = this.type !== 3 ? { minFilter: 1003, magFilter: 1003 } : {};
        P.map = new wn(i.x, i.y, K), P.map.texture.name = U.name + ".shadowMap", P.camera.updateProjectionMatrix();
      }
      a.setRenderTarget(P.map), a.clear();
      const X = P.getViewportCount();
      for (let K = 0; K < X; K++) {
        const H = P.getViewport(K);
        r.set(
          s.x * H.x,
          s.y * H.y,
          s.x * H.z,
          s.y * H.w
        ), F.viewport(r), P.updateMatrices(U, K), n = P.getFrustum(), M(b, A, P.camera, U, this.type);
      }
      P.isPointLightShadow !== !0 && this.type === 3 && _(P, A), P.needsUpdate = !1;
    }
    f.needsUpdate = !1, a.setRenderTarget(D, x, E);
  };
  function _(S, b) {
    const A = e.update(m);
    d.defines.VSM_SAMPLES !== S.blurSamples && (d.defines.VSM_SAMPLES = S.blurSamples, p.defines.VSM_SAMPLES = S.blurSamples, d.needsUpdate = !0, p.needsUpdate = !0), S.mapPass === null && (S.mapPass = new wn(i.x, i.y)), d.uniforms.shadow_pass.value = S.map.texture, d.uniforms.resolution.value = S.mapSize, d.uniforms.radius.value = S.radius, a.setRenderTarget(S.mapPass), a.clear(), a.renderBufferDirect(b, null, A, d, m, null), p.uniforms.shadow_pass.value = S.mapPass.texture, p.uniforms.resolution.value = S.mapSize, p.uniforms.radius.value = S.radius, a.setRenderTarget(S.map), a.clear(), a.renderBufferDirect(b, null, A, p, m, null);
  }
  function T(S, b, A, D, x, E) {
    let F = null;
    const q = A.isPointLight === !0 ? S.customDistanceMaterial : S.customDepthMaterial;
    if (q !== void 0 ? F = q : F = A.isPointLight === !0 ? l : o, a.localClippingEnabled && b.clipShadows === !0 && Array.isArray(b.clippingPlanes) && b.clippingPlanes.length !== 0 || b.displacementMap && b.displacementScale !== 0 || b.alphaMap && b.alphaTest > 0) {
      const ne = F.uuid, U = b.uuid;
      let P = c[ne];
      P === void 0 && (P = {}, c[ne] = P);
      let V = P[U];
      V === void 0 && (V = F.clone(), P[U] = V), F = V;
    }
    return F.visible = b.visible, F.wireframe = b.wireframe, E === 3 ? F.side = b.shadowSide !== null ? b.shadowSide : b.side : F.side = b.shadowSide !== null ? b.shadowSide : h[b.side], F.alphaMap = b.alphaMap, F.alphaTest = b.alphaTest, F.clipShadows = b.clipShadows, F.clippingPlanes = b.clippingPlanes, F.clipIntersection = b.clipIntersection, F.displacementMap = b.displacementMap, F.displacementScale = b.displacementScale, F.displacementBias = b.displacementBias, F.wireframeLinewidth = b.wireframeLinewidth, F.linewidth = b.linewidth, A.isPointLight === !0 && F.isMeshDistanceMaterial === !0 && (F.referencePosition.setFromMatrixPosition(A.matrixWorld), F.nearDistance = D, F.farDistance = x), F;
  }
  function M(S, b, A, D, x) {
    if (S.visible === !1)
      return;
    if (S.layers.test(b.layers) && (S.isMesh || S.isLine || S.isPoints) && (S.castShadow || S.receiveShadow && x === 3) && (!S.frustumCulled || n.intersectsObject(S))) {
      S.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse, S.matrixWorld);
      const q = e.update(S), ne = S.material;
      if (Array.isArray(ne)) {
        const U = q.groups;
        for (let P = 0, V = U.length; P < V; P++) {
          const X = U[P], K = ne[X.materialIndex];
          if (K && K.visible) {
            const H = T(S, K, D, A.near, A.far, x);
            a.renderBufferDirect(A, null, q, H, S, X);
          }
        }
      } else if (ne.visible) {
        const U = T(S, ne, D, A.near, A.far, x);
        a.renderBufferDirect(A, null, q, U, S, null);
      }
    }
    const F = S.children;
    for (let q = 0, ne = F.length; q < ne; q++)
      M(F[q], b, A, D, x);
  }
}
function Dd(a, e, t) {
  const n = t.isWebGL2;
  function i() {
    let C = !1;
    const G = new ze();
    let j = null;
    const re = new ze(0, 0, 0, 0);
    return {
      setMask: function(ce) {
        j !== ce && !C && (a.colorMask(ce, ce, ce, ce), j = ce);
      },
      setLocked: function(ce) {
        C = ce;
      },
      setClear: function(ce, Pe, Ze, nt, cn) {
        cn === !0 && (ce *= nt, Pe *= nt, Ze *= nt), G.set(ce, Pe, Ze, nt), re.equals(G) === !1 && (a.clearColor(ce, Pe, Ze, nt), re.copy(G));
      },
      reset: function() {
        C = !1, j = null, re.set(-1, 0, 0, 0);
      }
    };
  }
  function s() {
    let C = !1, G = null, j = null, re = null;
    return {
      setTest: function(ce) {
        ce ? Ue(2929) : ge(2929);
      },
      setMask: function(ce) {
        G !== ce && !C && (a.depthMask(ce), G = ce);
      },
      setFunc: function(ce) {
        if (j !== ce) {
          switch (ce) {
            case 0:
              a.depthFunc(512);
              break;
            case 1:
              a.depthFunc(519);
              break;
            case 2:
              a.depthFunc(513);
              break;
            case 3:
              a.depthFunc(515);
              break;
            case 4:
              a.depthFunc(514);
              break;
            case 5:
              a.depthFunc(518);
              break;
            case 6:
              a.depthFunc(516);
              break;
            case 7:
              a.depthFunc(517);
              break;
            default:
              a.depthFunc(515);
          }
          j = ce;
        }
      },
      setLocked: function(ce) {
        C = ce;
      },
      setClear: function(ce) {
        re !== ce && (a.clearDepth(ce), re = ce);
      },
      reset: function() {
        C = !1, G = null, j = null, re = null;
      }
    };
  }
  function r() {
    let C = !1, G = null, j = null, re = null, ce = null, Pe = null, Ze = null, nt = null, cn = null;
    return {
      setTest: function(He) {
        C || (He ? Ue(2960) : ge(2960));
      },
      setMask: function(He) {
        G !== He && !C && (a.stencilMask(He), G = He);
      },
      setFunc: function(He, Bt, _t) {
        (j !== He || re !== Bt || ce !== _t) && (a.stencilFunc(He, Bt, _t), j = He, re = Bt, ce = _t);
      },
      setOp: function(He, Bt, _t) {
        (Pe !== He || Ze !== Bt || nt !== _t) && (a.stencilOp(He, Bt, _t), Pe = He, Ze = Bt, nt = _t);
      },
      setLocked: function(He) {
        C = He;
      },
      setClear: function(He) {
        cn !== He && (a.clearStencil(He), cn = He);
      },
      reset: function() {
        C = !1, G = null, j = null, re = null, ce = null, Pe = null, Ze = null, nt = null, cn = null;
      }
    };
  }
  const o = new i(), l = new s(), c = new r(), u = /* @__PURE__ */ new WeakMap(), h = /* @__PURE__ */ new WeakMap();
  let d = {}, p = {}, g = /* @__PURE__ */ new WeakMap(), m = [], f = null, _ = !1, T = null, M = null, S = null, b = null, A = null, D = null, x = null, E = !1, F = null, q = null, ne = null, U = null, P = null;
  const V = a.getParameter(35661);
  let X = !1, K = 0;
  const H = a.getParameter(7938);
  H.indexOf("WebGL") !== -1 ? (K = parseFloat(/^WebGL (\d)/.exec(H)[1]), X = K >= 1) : H.indexOf("OpenGL ES") !== -1 && (K = parseFloat(/^OpenGL ES (\d)/.exec(H)[1]), X = K >= 2);
  let N = null, O = {};
  const Q = a.getParameter(3088), Z = a.getParameter(2978), Y = new ze().fromArray(Q), oe = new ze().fromArray(Z);
  function ve(C, G, j) {
    const re = new Uint8Array(4), ce = a.createTexture();
    a.bindTexture(C, ce), a.texParameteri(C, 10241, 9728), a.texParameteri(C, 10240, 9728);
    for (let Pe = 0; Pe < j; Pe++)
      a.texImage2D(G + Pe, 0, 6408, 1, 1, 0, 6408, 5121, re);
    return ce;
  }
  const $ = {};
  $[3553] = ve(3553, 3553, 1), $[34067] = ve(34067, 34069, 6), o.setClear(0, 0, 0, 1), l.setClear(1), c.setClear(0), Ue(2929), l.setFunc(3), st(!1), Lt(1), Ue(2884), et(0);
  function Ue(C) {
    d[C] !== !0 && (a.enable(C), d[C] = !0);
  }
  function ge(C) {
    d[C] !== !1 && (a.disable(C), d[C] = !1);
  }
  function ye(C, G) {
    return p[C] !== G ? (a.bindFramebuffer(C, G), p[C] = G, n && (C === 36009 && (p[36160] = G), C === 36160 && (p[36009] = G)), !0) : !1;
  }
  function ae(C, G) {
    let j = m, re = !1;
    if (C)
      if (j = g.get(G), j === void 0 && (j = [], g.set(G, j)), C.isWebGLMultipleRenderTargets) {
        const ce = C.texture;
        if (j.length !== ce.length || j[0] !== 36064) {
          for (let Pe = 0, Ze = ce.length; Pe < Ze; Pe++)
            j[Pe] = 36064 + Pe;
          j.length = ce.length, re = !0;
        }
      } else
        j[0] !== 36064 && (j[0] = 36064, re = !0);
    else
      j[0] !== 1029 && (j[0] = 1029, re = !0);
    re && (t.isWebGL2 ? a.drawBuffers(j) : e.get("WEBGL_draw_buffers").drawBuffersWEBGL(j));
  }
  function Ge(C) {
    return f !== C ? (a.useProgram(C), f = C, !0) : !1;
  }
  const Ee = {
    [100]: 32774,
    [101]: 32778,
    [102]: 32779
  };
  if (n)
    Ee[103] = 32775, Ee[104] = 32776;
  else {
    const C = e.get("EXT_blend_minmax");
    C !== null && (Ee[103] = C.MIN_EXT, Ee[104] = C.MAX_EXT);
  }
  const pe = {
    [200]: 0,
    [201]: 1,
    [202]: 768,
    [204]: 770,
    [210]: 776,
    [208]: 774,
    [206]: 772,
    [203]: 769,
    [205]: 771,
    [209]: 775,
    [207]: 773
  };
  function et(C, G, j, re, ce, Pe, Ze, nt) {
    if (C === 0) {
      _ === !0 && (ge(3042), _ = !1);
      return;
    }
    if (_ === !1 && (Ue(3042), _ = !0), C !== 5) {
      if (C !== T || nt !== E) {
        if ((M !== 100 || A !== 100) && (a.blendEquation(32774), M = 100, A = 100), nt)
          switch (C) {
            case 1:
              a.blendFuncSeparate(1, 771, 1, 771);
              break;
            case 2:
              a.blendFunc(1, 1);
              break;
            case 3:
              a.blendFuncSeparate(0, 769, 0, 1);
              break;
            case 4:
              a.blendFuncSeparate(0, 768, 0, 770);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", C);
              break;
          }
        else
          switch (C) {
            case 1:
              a.blendFuncSeparate(770, 771, 1, 771);
              break;
            case 2:
              a.blendFunc(770, 1);
              break;
            case 3:
              a.blendFuncSeparate(0, 769, 0, 1);
              break;
            case 4:
              a.blendFunc(0, 768);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", C);
              break;
          }
        S = null, b = null, D = null, x = null, T = C, E = nt;
      }
      return;
    }
    ce = ce || G, Pe = Pe || j, Ze = Ze || re, (G !== M || ce !== A) && (a.blendEquationSeparate(Ee[G], Ee[ce]), M = G, A = ce), (j !== S || re !== b || Pe !== D || Ze !== x) && (a.blendFuncSeparate(pe[j], pe[re], pe[Pe], pe[Ze]), S = j, b = re, D = Pe, x = Ze), T = C, E = null;
  }
  function ht(C, G) {
    C.side === 2 ? ge(2884) : Ue(2884);
    let j = C.side === 1;
    G && (j = !j), st(j), C.blending === 1 && C.transparent === !1 ? et(0) : et(C.blending, C.blendEquation, C.blendSrc, C.blendDst, C.blendEquationAlpha, C.blendSrcAlpha, C.blendDstAlpha, C.premultipliedAlpha), l.setFunc(C.depthFunc), l.setTest(C.depthTest), l.setMask(C.depthWrite), o.setMask(C.colorWrite);
    const re = C.stencilWrite;
    c.setTest(re), re && (c.setMask(C.stencilWriteMask), c.setFunc(C.stencilFunc, C.stencilRef, C.stencilFuncMask), c.setOp(C.stencilFail, C.stencilZFail, C.stencilZPass)), Oe(C.polygonOffset, C.polygonOffsetFactor, C.polygonOffsetUnits), C.alphaToCoverage === !0 ? Ue(32926) : ge(32926);
  }
  function st(C) {
    F !== C && (C ? a.frontFace(2304) : a.frontFace(2305), F = C);
  }
  function Lt(C) {
    C !== 0 ? (Ue(2884), C !== q && (C === 1 ? a.cullFace(1029) : C === 2 ? a.cullFace(1028) : a.cullFace(1032))) : ge(2884), q = C;
  }
  function tt(C) {
    C !== ne && (X && a.lineWidth(C), ne = C);
  }
  function Oe(C, G, j) {
    C ? (Ue(32823), (U !== G || P !== j) && (a.polygonOffset(G, j), U = G, P = j)) : ge(32823);
  }
  function Ut(C) {
    C ? Ue(3089) : ge(3089);
  }
  function Ot(C) {
    C === void 0 && (C = 33984 + V - 1), N !== C && (a.activeTexture(C), N = C);
  }
  function w(C, G, j) {
    j === void 0 && (N === null ? j = 33984 + V - 1 : j = N);
    let re = O[j];
    re === void 0 && (re = { type: void 0, texture: void 0 }, O[j] = re), (re.type !== C || re.texture !== G) && (N !== j && (a.activeTexture(j), N = j), a.bindTexture(C, G || $[C]), re.type = C, re.texture = G);
  }
  function v() {
    const C = O[N];
    C !== void 0 && C.type !== void 0 && (a.bindTexture(C.type, null), C.type = void 0, C.texture = void 0);
  }
  function z() {
    try {
      a.compressedTexImage2D.apply(a, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function J() {
    try {
      a.compressedTexImage3D.apply(a, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function ee() {
    try {
      a.texSubImage2D.apply(a, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function ie() {
    try {
      a.texSubImage3D.apply(a, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function _e() {
    try {
      a.compressedTexSubImage2D.apply(a, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function se() {
    try {
      a.compressedTexSubImage3D.apply(a, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function W() {
    try {
      a.texStorage2D.apply(a, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function de() {
    try {
      a.texStorage3D.apply(a, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function me() {
    try {
      a.texImage2D.apply(a, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function le() {
    try {
      a.texImage3D.apply(a, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function fe(C) {
    Y.equals(C) === !1 && (a.scissor(C.x, C.y, C.z, C.w), Y.copy(C));
  }
  function ue(C) {
    oe.equals(C) === !1 && (a.viewport(C.x, C.y, C.z, C.w), oe.copy(C));
  }
  function De(C, G) {
    let j = h.get(G);
    j === void 0 && (j = /* @__PURE__ */ new WeakMap(), h.set(G, j));
    let re = j.get(C);
    re === void 0 && (re = a.getUniformBlockIndex(G, C.name), j.set(C, re));
  }
  function Ve(C, G) {
    const re = h.get(G).get(C);
    u.get(C) !== re && (a.uniformBlockBinding(G, re, C.__bindingPointIndex), u.set(C, re));
  }
  function Ye() {
    a.disable(3042), a.disable(2884), a.disable(2929), a.disable(32823), a.disable(3089), a.disable(2960), a.disable(32926), a.blendEquation(32774), a.blendFunc(1, 0), a.blendFuncSeparate(1, 0, 1, 0), a.colorMask(!0, !0, !0, !0), a.clearColor(0, 0, 0, 0), a.depthMask(!0), a.depthFunc(513), a.clearDepth(1), a.stencilMask(4294967295), a.stencilFunc(519, 0, 4294967295), a.stencilOp(7680, 7680, 7680), a.clearStencil(0), a.cullFace(1029), a.frontFace(2305), a.polygonOffset(0, 0), a.activeTexture(33984), a.bindFramebuffer(36160, null), n === !0 && (a.bindFramebuffer(36009, null), a.bindFramebuffer(36008, null)), a.useProgram(null), a.lineWidth(1), a.scissor(0, 0, a.canvas.width, a.canvas.height), a.viewport(0, 0, a.canvas.width, a.canvas.height), d = {}, N = null, O = {}, p = {}, g = /* @__PURE__ */ new WeakMap(), m = [], f = null, _ = !1, T = null, M = null, S = null, b = null, A = null, D = null, x = null, E = !1, F = null, q = null, ne = null, U = null, P = null, Y.set(0, 0, a.canvas.width, a.canvas.height), oe.set(0, 0, a.canvas.width, a.canvas.height), o.reset(), l.reset(), c.reset();
  }
  return {
    buffers: {
      color: o,
      depth: l,
      stencil: c
    },
    enable: Ue,
    disable: ge,
    bindFramebuffer: ye,
    drawBuffers: ae,
    useProgram: Ge,
    setBlending: et,
    setMaterial: ht,
    setFlipSided: st,
    setCullFace: Lt,
    setLineWidth: tt,
    setPolygonOffset: Oe,
    setScissorTest: Ut,
    activeTexture: Ot,
    bindTexture: w,
    unbindTexture: v,
    compressedTexImage2D: z,
    compressedTexImage3D: J,
    texImage2D: me,
    texImage3D: le,
    updateUBOMapping: De,
    uniformBlockBinding: Ve,
    texStorage2D: W,
    texStorage3D: de,
    texSubImage2D: ee,
    texSubImage3D: ie,
    compressedTexSubImage2D: _e,
    compressedTexSubImage3D: se,
    scissor: fe,
    viewport: ue,
    reset: Ye
  };
}
function Pd(a, e, t, n, i, s, r) {
  const o = i.isWebGL2, l = i.maxTextures, c = i.maxCubemapSize, u = i.maxTextureSize, h = i.maxSamples, d = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, p = /OculusBrowser/g.test(typeof navigator > "u" ? "" : navigator.userAgent), g = /* @__PURE__ */ new WeakMap();
  let m;
  const f = /* @__PURE__ */ new WeakMap();
  let _ = !1;
  try {
    _ = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function T(w, v) {
    return _ ? new OffscreenCanvas(w, v) : bi("canvas");
  }
  function M(w, v, z, J) {
    let ee = 1;
    if ((w.width > J || w.height > J) && (ee = J / Math.max(w.width, w.height)), ee < 1 || v === !0)
      if (typeof HTMLImageElement < "u" && w instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && w instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && w instanceof ImageBitmap) {
        const ie = v ? ls : Math.floor, _e = ie(ee * w.width), se = ie(ee * w.height);
        m === void 0 && (m = T(_e, se));
        const W = z ? T(_e, se) : m;
        return W.width = _e, W.height = se, W.getContext("2d").drawImage(w, 0, 0, _e, se), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + w.width + "x" + w.height + ") to (" + _e + "x" + se + ")."), W;
      } else
        return "data" in w && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + w.width + "x" + w.height + ")."), w;
    return w;
  }
  function S(w) {
    return Qs(w.width) && Qs(w.height);
  }
  function b(w) {
    return o ? !1 : w.wrapS !== 1001 || w.wrapT !== 1001 || w.minFilter !== 1003 && w.minFilter !== 1006;
  }
  function A(w, v) {
    return w.generateMipmaps && v && w.minFilter !== 1003 && w.minFilter !== 1006;
  }
  function D(w) {
    a.generateMipmap(w);
  }
  function x(w, v, z, J, ee = !1) {
    if (o === !1)
      return v;
    if (w !== null) {
      if (a[w] !== void 0)
        return a[w];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + w + "'");
    }
    let ie = v;
    return v === 6403 && (z === 5126 && (ie = 33326), z === 5131 && (ie = 33325), z === 5121 && (ie = 33321)), v === 33319 && (z === 5126 && (ie = 33328), z === 5131 && (ie = 33327), z === 5121 && (ie = 33323)), v === 6408 && (z === 5126 && (ie = 34836), z === 5131 && (ie = 34842), z === 5121 && (ie = J === 3001 && ee === !1 ? 35907 : 32856), z === 32819 && (ie = 32854), z === 32820 && (ie = 32855)), (ie === 33325 || ie === 33326 || ie === 33327 || ie === 33328 || ie === 34842 || ie === 34836) && e.get("EXT_color_buffer_float"), ie;
  }
  function E(w, v, z) {
    return A(w, z) === !0 || w.isFramebufferTexture && w.minFilter !== 1003 && w.minFilter !== 1006 ? Math.log2(Math.max(v.width, v.height)) + 1 : w.mipmaps !== void 0 && w.mipmaps.length > 0 ? w.mipmaps.length : w.isCompressedTexture && Array.isArray(w.image) ? v.mipmaps.length : 1;
  }
  function F(w) {
    return w === 1003 || w === 1004 || w === 1005 ? 9728 : 9729;
  }
  function q(w) {
    const v = w.target;
    v.removeEventListener("dispose", q), U(v), v.isVideoTexture && g.delete(v);
  }
  function ne(w) {
    const v = w.target;
    v.removeEventListener("dispose", ne), V(v);
  }
  function U(w) {
    const v = n.get(w);
    if (v.__webglInit === void 0)
      return;
    const z = w.source, J = f.get(z);
    if (J) {
      const ee = J[v.__cacheKey];
      ee.usedTimes--, ee.usedTimes === 0 && P(w), Object.keys(J).length === 0 && f.delete(z);
    }
    n.remove(w);
  }
  function P(w) {
    const v = n.get(w);
    a.deleteTexture(v.__webglTexture);
    const z = w.source, J = f.get(z);
    delete J[v.__cacheKey], r.memory.textures--;
  }
  function V(w) {
    const v = w.texture, z = n.get(w), J = n.get(v);
    if (J.__webglTexture !== void 0 && (a.deleteTexture(J.__webglTexture), r.memory.textures--), w.depthTexture && w.depthTexture.dispose(), w.isWebGLCubeRenderTarget)
      for (let ee = 0; ee < 6; ee++)
        a.deleteFramebuffer(z.__webglFramebuffer[ee]), z.__webglDepthbuffer && a.deleteRenderbuffer(z.__webglDepthbuffer[ee]);
    else {
      if (a.deleteFramebuffer(z.__webglFramebuffer), z.__webglDepthbuffer && a.deleteRenderbuffer(z.__webglDepthbuffer), z.__webglMultisampledFramebuffer && a.deleteFramebuffer(z.__webglMultisampledFramebuffer), z.__webglColorRenderbuffer)
        for (let ee = 0; ee < z.__webglColorRenderbuffer.length; ee++)
          z.__webglColorRenderbuffer[ee] && a.deleteRenderbuffer(z.__webglColorRenderbuffer[ee]);
      z.__webglDepthRenderbuffer && a.deleteRenderbuffer(z.__webglDepthRenderbuffer);
    }
    if (w.isWebGLMultipleRenderTargets)
      for (let ee = 0, ie = v.length; ee < ie; ee++) {
        const _e = n.get(v[ee]);
        _e.__webglTexture && (a.deleteTexture(_e.__webglTexture), r.memory.textures--), n.remove(v[ee]);
      }
    n.remove(v), n.remove(w);
  }
  let X = 0;
  function K() {
    X = 0;
  }
  function H() {
    const w = X;
    return w >= l && console.warn("THREE.WebGLTextures: Trying to use " + w + " texture units while this GPU supports only " + l), X += 1, w;
  }
  function N(w) {
    const v = [];
    return v.push(w.wrapS), v.push(w.wrapT), v.push(w.wrapR || 0), v.push(w.magFilter), v.push(w.minFilter), v.push(w.anisotropy), v.push(w.internalFormat), v.push(w.format), v.push(w.type), v.push(w.generateMipmaps), v.push(w.premultiplyAlpha), v.push(w.flipY), v.push(w.unpackAlignment), v.push(w.encoding), v.join();
  }
  function O(w, v) {
    const z = n.get(w);
    if (w.isVideoTexture && Ut(w), w.isRenderTargetTexture === !1 && w.version > 0 && z.__version !== w.version) {
      const J = w.image;
      if (J === null)
        console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
      else if (J.complete === !1)
        console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        ge(z, w, v);
        return;
      }
    }
    t.bindTexture(3553, z.__webglTexture, 33984 + v);
  }
  function Q(w, v) {
    const z = n.get(w);
    if (w.version > 0 && z.__version !== w.version) {
      ge(z, w, v);
      return;
    }
    t.bindTexture(35866, z.__webglTexture, 33984 + v);
  }
  function Z(w, v) {
    const z = n.get(w);
    if (w.version > 0 && z.__version !== w.version) {
      ge(z, w, v);
      return;
    }
    t.bindTexture(32879, z.__webglTexture, 33984 + v);
  }
  function Y(w, v) {
    const z = n.get(w);
    if (w.version > 0 && z.__version !== w.version) {
      ye(z, w, v);
      return;
    }
    t.bindTexture(34067, z.__webglTexture, 33984 + v);
  }
  const oe = {
    [1e3]: 10497,
    [1001]: 33071,
    [1002]: 33648
  }, ve = {
    [1003]: 9728,
    [1004]: 9984,
    [1005]: 9986,
    [1006]: 9729,
    [1007]: 9985,
    [1008]: 9987
  };
  function $(w, v, z) {
    if (z ? (a.texParameteri(w, 10242, oe[v.wrapS]), a.texParameteri(w, 10243, oe[v.wrapT]), (w === 32879 || w === 35866) && a.texParameteri(w, 32882, oe[v.wrapR]), a.texParameteri(w, 10240, ve[v.magFilter]), a.texParameteri(w, 10241, ve[v.minFilter])) : (a.texParameteri(w, 10242, 33071), a.texParameteri(w, 10243, 33071), (w === 32879 || w === 35866) && a.texParameteri(w, 32882, 33071), (v.wrapS !== 1001 || v.wrapT !== 1001) && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), a.texParameteri(w, 10240, F(v.magFilter)), a.texParameteri(w, 10241, F(v.minFilter)), v.minFilter !== 1003 && v.minFilter !== 1006 && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")), e.has("EXT_texture_filter_anisotropic") === !0) {
      const J = e.get("EXT_texture_filter_anisotropic");
      if (v.type === 1015 && e.has("OES_texture_float_linear") === !1 || o === !1 && v.type === 1016 && e.has("OES_texture_half_float_linear") === !1)
        return;
      (v.anisotropy > 1 || n.get(v).__currentAnisotropy) && (a.texParameterf(w, J.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(v.anisotropy, i.getMaxAnisotropy())), n.get(v).__currentAnisotropy = v.anisotropy);
    }
  }
  function Ue(w, v) {
    let z = !1;
    w.__webglInit === void 0 && (w.__webglInit = !0, v.addEventListener("dispose", q));
    const J = v.source;
    let ee = f.get(J);
    ee === void 0 && (ee = {}, f.set(J, ee));
    const ie = N(v);
    if (ie !== w.__cacheKey) {
      ee[ie] === void 0 && (ee[ie] = {
        texture: a.createTexture(),
        usedTimes: 0
      }, r.memory.textures++, z = !0), ee[ie].usedTimes++;
      const _e = ee[w.__cacheKey];
      _e !== void 0 && (ee[w.__cacheKey].usedTimes--, _e.usedTimes === 0 && P(v)), w.__cacheKey = ie, w.__webglTexture = ee[ie].texture;
    }
    return z;
  }
  function ge(w, v, z) {
    let J = 3553;
    (v.isDataArrayTexture || v.isCompressedArrayTexture) && (J = 35866), v.isData3DTexture && (J = 32879);
    const ee = Ue(w, v), ie = v.source;
    t.bindTexture(J, w.__webglTexture, 33984 + z);
    const _e = n.get(ie);
    if (ie.version !== _e.__version || ee === !0) {
      t.activeTexture(33984 + z), a.pixelStorei(37440, v.flipY), a.pixelStorei(37441, v.premultiplyAlpha), a.pixelStorei(3317, v.unpackAlignment), a.pixelStorei(37443, 0);
      const se = b(v) && S(v.image) === !1;
      let W = M(v.image, se, !1, u);
      W = Ot(v, W);
      const de = S(W) || o, me = s.convert(v.format, v.encoding);
      let le = s.convert(v.type), fe = x(v.internalFormat, me, le, v.encoding, v.isVideoTexture);
      $(J, v, de);
      let ue;
      const De = v.mipmaps, Ve = o && v.isVideoTexture !== !0, Ye = _e.__version === void 0 || ee === !0, C = E(v, W, de);
      if (v.isDepthTexture)
        fe = 6402, o ? v.type === 1015 ? fe = 36012 : v.type === 1014 ? fe = 33190 : v.type === 1020 ? fe = 35056 : fe = 33189 : v.type === 1015 && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."), v.format === 1026 && fe === 6402 && v.type !== 1012 && v.type !== 1014 && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), v.type = 1014, le = s.convert(v.type)), v.format === 1027 && fe === 6402 && (fe = 34041, v.type !== 1020 && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), v.type = 1020, le = s.convert(v.type))), Ye && (Ve ? t.texStorage2D(3553, 1, fe, W.width, W.height) : t.texImage2D(3553, 0, fe, W.width, W.height, 0, me, le, null));
      else if (v.isDataTexture)
        if (De.length > 0 && de) {
          Ve && Ye && t.texStorage2D(3553, C, fe, De[0].width, De[0].height);
          for (let G = 0, j = De.length; G < j; G++)
            ue = De[G], Ve ? t.texSubImage2D(3553, G, 0, 0, ue.width, ue.height, me, le, ue.data) : t.texImage2D(3553, G, fe, ue.width, ue.height, 0, me, le, ue.data);
          v.generateMipmaps = !1;
        } else
          Ve ? (Ye && t.texStorage2D(3553, C, fe, W.width, W.height), t.texSubImage2D(3553, 0, 0, 0, W.width, W.height, me, le, W.data)) : t.texImage2D(3553, 0, fe, W.width, W.height, 0, me, le, W.data);
      else if (v.isCompressedTexture)
        if (v.isCompressedArrayTexture) {
          Ve && Ye && t.texStorage3D(35866, C, fe, De[0].width, De[0].height, W.depth);
          for (let G = 0, j = De.length; G < j; G++)
            ue = De[G], v.format !== 1023 ? me !== null ? Ve ? t.compressedTexSubImage3D(35866, G, 0, 0, 0, ue.width, ue.height, W.depth, me, ue.data, 0, 0) : t.compressedTexImage3D(35866, G, fe, ue.width, ue.height, W.depth, 0, ue.data, 0, 0) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : Ve ? t.texSubImage3D(35866, G, 0, 0, 0, ue.width, ue.height, W.depth, me, le, ue.data) : t.texImage3D(35866, G, fe, ue.width, ue.height, W.depth, 0, me, le, ue.data);
        } else {
          Ve && Ye && t.texStorage2D(3553, C, fe, De[0].width, De[0].height);
          for (let G = 0, j = De.length; G < j; G++)
            ue = De[G], v.format !== 1023 ? me !== null ? Ve ? t.compressedTexSubImage2D(3553, G, 0, 0, ue.width, ue.height, me, ue.data) : t.compressedTexImage2D(3553, G, fe, ue.width, ue.height, 0, ue.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : Ve ? t.texSubImage2D(3553, G, 0, 0, ue.width, ue.height, me, le, ue.data) : t.texImage2D(3553, G, fe, ue.width, ue.height, 0, me, le, ue.data);
        }
      else if (v.isDataArrayTexture)
        Ve ? (Ye && t.texStorage3D(35866, C, fe, W.width, W.height, W.depth), t.texSubImage3D(35866, 0, 0, 0, 0, W.width, W.height, W.depth, me, le, W.data)) : t.texImage3D(35866, 0, fe, W.width, W.height, W.depth, 0, me, le, W.data);
      else if (v.isData3DTexture)
        Ve ? (Ye && t.texStorage3D(32879, C, fe, W.width, W.height, W.depth), t.texSubImage3D(32879, 0, 0, 0, 0, W.width, W.height, W.depth, me, le, W.data)) : t.texImage3D(32879, 0, fe, W.width, W.height, W.depth, 0, me, le, W.data);
      else if (v.isFramebufferTexture) {
        if (Ye)
          if (Ve)
            t.texStorage2D(3553, C, fe, W.width, W.height);
          else {
            let G = W.width, j = W.height;
            for (let re = 0; re < C; re++)
              t.texImage2D(3553, re, fe, G, j, 0, me, le, null), G >>= 1, j >>= 1;
          }
      } else if (De.length > 0 && de) {
        Ve && Ye && t.texStorage2D(3553, C, fe, De[0].width, De[0].height);
        for (let G = 0, j = De.length; G < j; G++)
          ue = De[G], Ve ? t.texSubImage2D(3553, G, 0, 0, me, le, ue) : t.texImage2D(3553, G, fe, me, le, ue);
        v.generateMipmaps = !1;
      } else
        Ve ? (Ye && t.texStorage2D(3553, C, fe, W.width, W.height), t.texSubImage2D(3553, 0, 0, 0, me, le, W)) : t.texImage2D(3553, 0, fe, me, le, W);
      A(v, de) && D(J), _e.__version = ie.version, v.onUpdate && v.onUpdate(v);
    }
    w.__version = v.version;
  }
  function ye(w, v, z) {
    if (v.image.length !== 6)
      return;
    const J = Ue(w, v), ee = v.source;
    t.bindTexture(34067, w.__webglTexture, 33984 + z);
    const ie = n.get(ee);
    if (ee.version !== ie.__version || J === !0) {
      t.activeTexture(33984 + z), a.pixelStorei(37440, v.flipY), a.pixelStorei(37441, v.premultiplyAlpha), a.pixelStorei(3317, v.unpackAlignment), a.pixelStorei(37443, 0);
      const _e = v.isCompressedTexture || v.image[0].isCompressedTexture, se = v.image[0] && v.image[0].isDataTexture, W = [];
      for (let G = 0; G < 6; G++)
        !_e && !se ? W[G] = M(v.image[G], !1, !0, c) : W[G] = se ? v.image[G].image : v.image[G], W[G] = Ot(v, W[G]);
      const de = W[0], me = S(de) || o, le = s.convert(v.format, v.encoding), fe = s.convert(v.type), ue = x(v.internalFormat, le, fe, v.encoding), De = o && v.isVideoTexture !== !0, Ve = ie.__version === void 0 || J === !0;
      let Ye = E(v, de, me);
      $(34067, v, me);
      let C;
      if (_e) {
        De && Ve && t.texStorage2D(34067, Ye, ue, de.width, de.height);
        for (let G = 0; G < 6; G++) {
          C = W[G].mipmaps;
          for (let j = 0; j < C.length; j++) {
            const re = C[j];
            v.format !== 1023 ? le !== null ? De ? t.compressedTexSubImage2D(34069 + G, j, 0, 0, re.width, re.height, le, re.data) : t.compressedTexImage2D(34069 + G, j, ue, re.width, re.height, 0, re.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : De ? t.texSubImage2D(34069 + G, j, 0, 0, re.width, re.height, le, fe, re.data) : t.texImage2D(34069 + G, j, ue, re.width, re.height, 0, le, fe, re.data);
          }
        }
      } else {
        C = v.mipmaps, De && Ve && (C.length > 0 && Ye++, t.texStorage2D(34067, Ye, ue, W[0].width, W[0].height));
        for (let G = 0; G < 6; G++)
          if (se) {
            De ? t.texSubImage2D(34069 + G, 0, 0, 0, W[G].width, W[G].height, le, fe, W[G].data) : t.texImage2D(34069 + G, 0, ue, W[G].width, W[G].height, 0, le, fe, W[G].data);
            for (let j = 0; j < C.length; j++) {
              const ce = C[j].image[G].image;
              De ? t.texSubImage2D(34069 + G, j + 1, 0, 0, ce.width, ce.height, le, fe, ce.data) : t.texImage2D(34069 + G, j + 1, ue, ce.width, ce.height, 0, le, fe, ce.data);
            }
          } else {
            De ? t.texSubImage2D(34069 + G, 0, 0, 0, le, fe, W[G]) : t.texImage2D(34069 + G, 0, ue, le, fe, W[G]);
            for (let j = 0; j < C.length; j++) {
              const re = C[j];
              De ? t.texSubImage2D(34069 + G, j + 1, 0, 0, le, fe, re.image[G]) : t.texImage2D(34069 + G, j + 1, ue, le, fe, re.image[G]);
            }
          }
      }
      A(v, me) && D(34067), ie.__version = ee.version, v.onUpdate && v.onUpdate(v);
    }
    w.__version = v.version;
  }
  function ae(w, v, z, J, ee) {
    const ie = s.convert(z.format, z.encoding), _e = s.convert(z.type), se = x(z.internalFormat, ie, _e, z.encoding);
    n.get(v).__hasExternalTextures || (ee === 32879 || ee === 35866 ? t.texImage3D(ee, 0, se, v.width, v.height, v.depth, 0, ie, _e, null) : t.texImage2D(ee, 0, se, v.width, v.height, 0, ie, _e, null)), t.bindFramebuffer(36160, w), Oe(v) ? d.framebufferTexture2DMultisampleEXT(36160, J, ee, n.get(z).__webglTexture, 0, tt(v)) : (ee === 3553 || ee >= 34069 && ee <= 34074) && a.framebufferTexture2D(36160, J, ee, n.get(z).__webglTexture, 0), t.bindFramebuffer(36160, null);
  }
  function Ge(w, v, z) {
    if (a.bindRenderbuffer(36161, w), v.depthBuffer && !v.stencilBuffer) {
      let J = 33189;
      if (z || Oe(v)) {
        const ee = v.depthTexture;
        ee && ee.isDepthTexture && (ee.type === 1015 ? J = 36012 : ee.type === 1014 && (J = 33190));
        const ie = tt(v);
        Oe(v) ? d.renderbufferStorageMultisampleEXT(36161, ie, J, v.width, v.height) : a.renderbufferStorageMultisample(36161, ie, J, v.width, v.height);
      } else
        a.renderbufferStorage(36161, J, v.width, v.height);
      a.framebufferRenderbuffer(36160, 36096, 36161, w);
    } else if (v.depthBuffer && v.stencilBuffer) {
      const J = tt(v);
      z && Oe(v) === !1 ? a.renderbufferStorageMultisample(36161, J, 35056, v.width, v.height) : Oe(v) ? d.renderbufferStorageMultisampleEXT(36161, J, 35056, v.width, v.height) : a.renderbufferStorage(36161, 34041, v.width, v.height), a.framebufferRenderbuffer(36160, 33306, 36161, w);
    } else {
      const J = v.isWebGLMultipleRenderTargets === !0 ? v.texture : [v.texture];
      for (let ee = 0; ee < J.length; ee++) {
        const ie = J[ee], _e = s.convert(ie.format, ie.encoding), se = s.convert(ie.type), W = x(ie.internalFormat, _e, se, ie.encoding), de = tt(v);
        z && Oe(v) === !1 ? a.renderbufferStorageMultisample(36161, de, W, v.width, v.height) : Oe(v) ? d.renderbufferStorageMultisampleEXT(36161, de, W, v.width, v.height) : a.renderbufferStorage(36161, W, v.width, v.height);
      }
    }
    a.bindRenderbuffer(36161, null);
  }
  function Ee(w, v) {
    if (v && v.isWebGLCubeRenderTarget)
      throw new Error("Depth Texture with cube render targets is not supported");
    if (t.bindFramebuffer(36160, w), !(v.depthTexture && v.depthTexture.isDepthTexture))
      throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    (!n.get(v.depthTexture).__webglTexture || v.depthTexture.image.width !== v.width || v.depthTexture.image.height !== v.height) && (v.depthTexture.image.width = v.width, v.depthTexture.image.height = v.height, v.depthTexture.needsUpdate = !0), O(v.depthTexture, 0);
    const J = n.get(v.depthTexture).__webglTexture, ee = tt(v);
    if (v.depthTexture.format === 1026)
      Oe(v) ? d.framebufferTexture2DMultisampleEXT(36160, 36096, 3553, J, 0, ee) : a.framebufferTexture2D(36160, 36096, 3553, J, 0);
    else if (v.depthTexture.format === 1027)
      Oe(v) ? d.framebufferTexture2DMultisampleEXT(36160, 33306, 3553, J, 0, ee) : a.framebufferTexture2D(36160, 33306, 3553, J, 0);
    else
      throw new Error("Unknown depthTexture format");
  }
  function pe(w) {
    const v = n.get(w), z = w.isWebGLCubeRenderTarget === !0;
    if (w.depthTexture && !v.__autoAllocateDepthBuffer) {
      if (z)
        throw new Error("target.depthTexture not supported in Cube render targets");
      Ee(v.__webglFramebuffer, w);
    } else if (z) {
      v.__webglDepthbuffer = [];
      for (let J = 0; J < 6; J++)
        t.bindFramebuffer(36160, v.__webglFramebuffer[J]), v.__webglDepthbuffer[J] = a.createRenderbuffer(), Ge(v.__webglDepthbuffer[J], w, !1);
    } else
      t.bindFramebuffer(36160, v.__webglFramebuffer), v.__webglDepthbuffer = a.createRenderbuffer(), Ge(v.__webglDepthbuffer, w, !1);
    t.bindFramebuffer(36160, null);
  }
  function et(w, v, z) {
    const J = n.get(w);
    v !== void 0 && ae(J.__webglFramebuffer, w, w.texture, 36064, 3553), z !== void 0 && pe(w);
  }
  function ht(w) {
    const v = w.texture, z = n.get(w), J = n.get(v);
    w.addEventListener("dispose", ne), w.isWebGLMultipleRenderTargets !== !0 && (J.__webglTexture === void 0 && (J.__webglTexture = a.createTexture()), J.__version = v.version, r.memory.textures++);
    const ee = w.isWebGLCubeRenderTarget === !0, ie = w.isWebGLMultipleRenderTargets === !0, _e = S(w) || o;
    if (ee) {
      z.__webglFramebuffer = [];
      for (let se = 0; se < 6; se++)
        z.__webglFramebuffer[se] = a.createFramebuffer();
    } else {
      if (z.__webglFramebuffer = a.createFramebuffer(), ie)
        if (i.drawBuffers) {
          const se = w.texture;
          for (let W = 0, de = se.length; W < de; W++) {
            const me = n.get(se[W]);
            me.__webglTexture === void 0 && (me.__webglTexture = a.createTexture(), r.memory.textures++);
          }
        } else
          console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");
      if (o && w.samples > 0 && Oe(w) === !1) {
        const se = ie ? v : [v];
        z.__webglMultisampledFramebuffer = a.createFramebuffer(), z.__webglColorRenderbuffer = [], t.bindFramebuffer(36160, z.__webglMultisampledFramebuffer);
        for (let W = 0; W < se.length; W++) {
          const de = se[W];
          z.__webglColorRenderbuffer[W] = a.createRenderbuffer(), a.bindRenderbuffer(36161, z.__webglColorRenderbuffer[W]);
          const me = s.convert(de.format, de.encoding), le = s.convert(de.type), fe = x(de.internalFormat, me, le, de.encoding, w.isXRRenderTarget === !0), ue = tt(w);
          a.renderbufferStorageMultisample(36161, ue, fe, w.width, w.height), a.framebufferRenderbuffer(36160, 36064 + W, 36161, z.__webglColorRenderbuffer[W]);
        }
        a.bindRenderbuffer(36161, null), w.depthBuffer && (z.__webglDepthRenderbuffer = a.createRenderbuffer(), Ge(z.__webglDepthRenderbuffer, w, !0)), t.bindFramebuffer(36160, null);
      }
    }
    if (ee) {
      t.bindTexture(34067, J.__webglTexture), $(34067, v, _e);
      for (let se = 0; se < 6; se++)
        ae(z.__webglFramebuffer[se], w, v, 36064, 34069 + se);
      A(v, _e) && D(34067), t.unbindTexture();
    } else if (ie) {
      const se = w.texture;
      for (let W = 0, de = se.length; W < de; W++) {
        const me = se[W], le = n.get(me);
        t.bindTexture(3553, le.__webglTexture), $(3553, me, _e), ae(z.__webglFramebuffer, w, me, 36064 + W, 3553), A(me, _e) && D(3553);
      }
      t.unbindTexture();
    } else {
      let se = 3553;
      (w.isWebGL3DRenderTarget || w.isWebGLArrayRenderTarget) && (o ? se = w.isWebGL3DRenderTarget ? 32879 : 35866 : console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")), t.bindTexture(se, J.__webglTexture), $(se, v, _e), ae(z.__webglFramebuffer, w, v, 36064, se), A(v, _e) && D(se), t.unbindTexture();
    }
    w.depthBuffer && pe(w);
  }
  function st(w) {
    const v = S(w) || o, z = w.isWebGLMultipleRenderTargets === !0 ? w.texture : [w.texture];
    for (let J = 0, ee = z.length; J < ee; J++) {
      const ie = z[J];
      if (A(ie, v)) {
        const _e = w.isWebGLCubeRenderTarget ? 34067 : 3553, se = n.get(ie).__webglTexture;
        t.bindTexture(_e, se), D(_e), t.unbindTexture();
      }
    }
  }
  function Lt(w) {
    if (o && w.samples > 0 && Oe(w) === !1) {
      const v = w.isWebGLMultipleRenderTargets ? w.texture : [w.texture], z = w.width, J = w.height;
      let ee = 16384;
      const ie = [], _e = w.stencilBuffer ? 33306 : 36096, se = n.get(w), W = w.isWebGLMultipleRenderTargets === !0;
      if (W)
        for (let de = 0; de < v.length; de++)
          t.bindFramebuffer(36160, se.__webglMultisampledFramebuffer), a.framebufferRenderbuffer(36160, 36064 + de, 36161, null), t.bindFramebuffer(36160, se.__webglFramebuffer), a.framebufferTexture2D(36009, 36064 + de, 3553, null, 0);
      t.bindFramebuffer(36008, se.__webglMultisampledFramebuffer), t.bindFramebuffer(36009, se.__webglFramebuffer);
      for (let de = 0; de < v.length; de++) {
        ie.push(36064 + de), w.depthBuffer && ie.push(_e);
        const me = se.__ignoreDepthValues !== void 0 ? se.__ignoreDepthValues : !1;
        if (me === !1 && (w.depthBuffer && (ee |= 256), w.stencilBuffer && (ee |= 1024)), W && a.framebufferRenderbuffer(36008, 36064, 36161, se.__webglColorRenderbuffer[de]), me === !0 && (a.invalidateFramebuffer(36008, [_e]), a.invalidateFramebuffer(36009, [_e])), W) {
          const le = n.get(v[de]).__webglTexture;
          a.framebufferTexture2D(36009, 36064, 3553, le, 0);
        }
        a.blitFramebuffer(0, 0, z, J, 0, 0, z, J, ee, 9728), p && a.invalidateFramebuffer(36008, ie);
      }
      if (t.bindFramebuffer(36008, null), t.bindFramebuffer(36009, null), W)
        for (let de = 0; de < v.length; de++) {
          t.bindFramebuffer(36160, se.__webglMultisampledFramebuffer), a.framebufferRenderbuffer(36160, 36064 + de, 36161, se.__webglColorRenderbuffer[de]);
          const me = n.get(v[de]).__webglTexture;
          t.bindFramebuffer(36160, se.__webglFramebuffer), a.framebufferTexture2D(36009, 36064 + de, 3553, me, 0);
        }
      t.bindFramebuffer(36009, se.__webglMultisampledFramebuffer);
    }
  }
  function tt(w) {
    return Math.min(h, w.samples);
  }
  function Oe(w) {
    const v = n.get(w);
    return o && w.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === !0 && v.__useRenderToTexture !== !1;
  }
  function Ut(w) {
    const v = r.render.frame;
    g.get(w) !== v && (g.set(w, v), w.update());
  }
  function Ot(w, v) {
    const z = w.encoding, J = w.format, ee = w.type;
    return w.isCompressedTexture === !0 || w.isVideoTexture === !0 || w.format === 1035 || z !== 3e3 && (z === 3001 ? o === !1 ? e.has("EXT_sRGB") === !0 && J === 1023 ? (w.format = 1035, w.minFilter = 1006, w.generateMipmaps = !1) : v = qa.sRGBToLinear(v) : (J !== 1023 || ee !== 1009) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture encoding:", z)), v;
  }
  this.allocateTextureUnit = H, this.resetTextureUnits = K, this.setTexture2D = O, this.setTexture2DArray = Q, this.setTexture3D = Z, this.setTextureCube = Y, this.rebindTextures = et, this.setupRenderTarget = ht, this.updateRenderTargetMipmap = st, this.updateMultisampleRenderTarget = Lt, this.setupDepthRenderbuffer = pe, this.setupFrameBufferTexture = ae, this.useMultisampledRTT = Oe;
}
function Id(a, e, t) {
  const n = t.isWebGL2;
  function i(s, r = null) {
    let o;
    if (s === 1009)
      return 5121;
    if (s === 1017)
      return 32819;
    if (s === 1018)
      return 32820;
    if (s === 1010)
      return 5120;
    if (s === 1011)
      return 5122;
    if (s === 1012)
      return 5123;
    if (s === 1013)
      return 5124;
    if (s === 1014)
      return 5125;
    if (s === 1015)
      return 5126;
    if (s === 1016)
      return n ? 5131 : (o = e.get("OES_texture_half_float"), o !== null ? o.HALF_FLOAT_OES : null);
    if (s === 1021)
      return 6406;
    if (s === 1023)
      return 6408;
    if (s === 1024)
      return 6409;
    if (s === 1025)
      return 6410;
    if (s === 1026)
      return 6402;
    if (s === 1027)
      return 34041;
    if (s === 1028)
      return 6403;
    if (s === 1022)
      return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"), 6408;
    if (s === 1035)
      return o = e.get("EXT_sRGB"), o !== null ? o.SRGB_ALPHA_EXT : null;
    if (s === 1029)
      return 36244;
    if (s === 1030)
      return 33319;
    if (s === 1031)
      return 33320;
    if (s === 1033)
      return 36249;
    if (s === 33776 || s === 33777 || s === 33778 || s === 33779)
      if (r === 3001)
        if (o = e.get("WEBGL_compressed_texture_s3tc_srgb"), o !== null) {
          if (s === 33776)
            return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (s === 33777)
            return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (s === 33778)
            return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (s === 33779)
            return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else
          return null;
      else if (o = e.get("WEBGL_compressed_texture_s3tc"), o !== null) {
        if (s === 33776)
          return o.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (s === 33777)
          return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (s === 33778)
          return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (s === 33779)
          return o.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else
        return null;
    if (s === 35840 || s === 35841 || s === 35842 || s === 35843)
      if (o = e.get("WEBGL_compressed_texture_pvrtc"), o !== null) {
        if (s === 35840)
          return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (s === 35841)
          return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (s === 35842)
          return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (s === 35843)
          return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else
        return null;
    if (s === 36196)
      return o = e.get("WEBGL_compressed_texture_etc1"), o !== null ? o.COMPRESSED_RGB_ETC1_WEBGL : null;
    if (s === 37492 || s === 37496)
      if (o = e.get("WEBGL_compressed_texture_etc"), o !== null) {
        if (s === 37492)
          return r === 3001 ? o.COMPRESSED_SRGB8_ETC2 : o.COMPRESSED_RGB8_ETC2;
        if (s === 37496)
          return r === 3001 ? o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : o.COMPRESSED_RGBA8_ETC2_EAC;
      } else
        return null;
    if (s === 37808 || s === 37809 || s === 37810 || s === 37811 || s === 37812 || s === 37813 || s === 37814 || s === 37815 || s === 37816 || s === 37817 || s === 37818 || s === 37819 || s === 37820 || s === 37821)
      if (o = e.get("WEBGL_compressed_texture_astc"), o !== null) {
        if (s === 37808)
          return r === 3001 ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : o.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (s === 37809)
          return r === 3001 ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : o.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (s === 37810)
          return r === 3001 ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : o.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (s === 37811)
          return r === 3001 ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : o.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (s === 37812)
          return r === 3001 ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : o.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (s === 37813)
          return r === 3001 ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : o.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (s === 37814)
          return r === 3001 ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : o.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (s === 37815)
          return r === 3001 ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : o.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (s === 37816)
          return r === 3001 ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : o.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (s === 37817)
          return r === 3001 ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : o.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (s === 37818)
          return r === 3001 ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : o.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (s === 37819)
          return r === 3001 ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : o.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (s === 37820)
          return r === 3001 ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : o.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (s === 37821)
          return r === 3001 ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : o.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else
        return null;
    if (s === 36492)
      if (o = e.get("EXT_texture_compression_bptc"), o !== null) {
        if (s === 36492)
          return r === 3001 ? o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : o.COMPRESSED_RGBA_BPTC_UNORM_EXT;
      } else
        return null;
    return s === 1020 ? n ? 34042 : (o = e.get("WEBGL_depth_texture"), o !== null ? o.UNSIGNED_INT_24_8_WEBGL : null) : a[s] !== void 0 ? a[s] : null;
  }
  return { convert: i };
}
class Nd extends ct {
  constructor(e = []) {
    super(), this.isArrayCamera = !0, this.cameras = e;
  }
}
class Mn extends ke {
  constructor() {
    super(), this.isGroup = !0, this.type = "Group";
  }
}
const Fd = { type: "move" };
class Vs {
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  getHandSpace() {
    return this._hand === null && (this._hand = new Mn(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand;
  }
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new Mn(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new R(), this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new R()), this._targetRay;
  }
  getGripSpace() {
    return this._grip === null && (this._grip = new Mn(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new R(), this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new R()), this._grip;
  }
  dispatchEvent(e) {
    return this._targetRay !== null && this._targetRay.dispatchEvent(e), this._grip !== null && this._grip.dispatchEvent(e), this._hand !== null && this._hand.dispatchEvent(e), this;
  }
  disconnect(e) {
    return this.dispatchEvent({ type: "disconnected", data: e }), this._targetRay !== null && (this._targetRay.visible = !1), this._grip !== null && (this._grip.visible = !1), this._hand !== null && (this._hand.visible = !1), this;
  }
  update(e, t, n) {
    let i = null, s = null, r = null;
    const o = this._targetRay, l = this._grip, c = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (c && e.hand) {
        r = !0;
        for (const m of e.hand.values()) {
          const f = t.getJointPose(m, n);
          if (c.joints[m.jointName] === void 0) {
            const T = new Mn();
            T.matrixAutoUpdate = !1, T.visible = !1, c.joints[m.jointName] = T, c.add(T);
          }
          const _ = c.joints[m.jointName];
          f !== null && (_.matrix.fromArray(f.transform.matrix), _.matrix.decompose(_.position, _.rotation, _.scale), _.jointRadius = f.radius), _.visible = f !== null;
        }
        const u = c.joints["index-finger-tip"], h = c.joints["thumb-tip"], d = u.position.distanceTo(h.position), p = 0.02, g = 5e-3;
        c.inputState.pinching && d > p + g ? (c.inputState.pinching = !1, this.dispatchEvent({
          type: "pinchend",
          handedness: e.handedness,
          target: this
        })) : !c.inputState.pinching && d <= p - g && (c.inputState.pinching = !0, this.dispatchEvent({
          type: "pinchstart",
          handedness: e.handedness,
          target: this
        }));
      } else
        l !== null && e.gripSpace && (s = t.getPose(e.gripSpace, n), s !== null && (l.matrix.fromArray(s.transform.matrix), l.matrix.decompose(l.position, l.rotation, l.scale), s.linearVelocity ? (l.hasLinearVelocity = !0, l.linearVelocity.copy(s.linearVelocity)) : l.hasLinearVelocity = !1, s.angularVelocity ? (l.hasAngularVelocity = !0, l.angularVelocity.copy(s.angularVelocity)) : l.hasAngularVelocity = !1));
      o !== null && (i = t.getPose(e.targetRaySpace, n), i === null && s !== null && (i = s), i !== null && (o.matrix.fromArray(i.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), i.linearVelocity ? (o.hasLinearVelocity = !0, o.linearVelocity.copy(i.linearVelocity)) : o.hasLinearVelocity = !1, i.angularVelocity ? (o.hasAngularVelocity = !0, o.angularVelocity.copy(i.angularVelocity)) : o.hasAngularVelocity = !1, this.dispatchEvent(Fd)));
    }
    return o !== null && (o.visible = i !== null), l !== null && (l.visible = s !== null), c !== null && (c.visible = r !== null), this;
  }
}
class Ud extends ut {
  constructor(e, t, n, i, s, r, o, l, c, u) {
    if (u = u !== void 0 ? u : 1026, u !== 1026 && u !== 1027)
      throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    n === void 0 && u === 1026 && (n = 1014), n === void 0 && u === 1027 && (n = 1020), super(null, i, s, r, o, l, u, n, c), this.isDepthTexture = !0, this.image = { width: e, height: t }, this.magFilter = o !== void 0 ? o : 1003, this.minFilter = l !== void 0 ? l : 1003, this.flipY = !1, this.generateMipmaps = !1;
  }
}
class Od extends ti {
  constructor(e, t) {
    super();
    const n = this;
    let i = null, s = 1, r = null, o = "local-floor", l = null, c = null, u = null, h = null, d = null, p = null;
    const g = t.getContextAttributes();
    let m = null, f = null;
    const _ = [], T = [], M = new ct();
    M.layers.enable(1), M.viewport = new ze();
    const S = new ct();
    S.layers.enable(2), S.viewport = new ze();
    const b = [M, S], A = new Nd();
    A.layers.enable(1), A.layers.enable(2);
    let D = null, x = null;
    this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(N) {
      let O = _[N];
      return O === void 0 && (O = new Vs(), _[N] = O), O.getTargetRaySpace();
    }, this.getControllerGrip = function(N) {
      let O = _[N];
      return O === void 0 && (O = new Vs(), _[N] = O), O.getGripSpace();
    }, this.getHand = function(N) {
      let O = _[N];
      return O === void 0 && (O = new Vs(), _[N] = O), O.getHandSpace();
    };
    function E(N) {
      const O = T.indexOf(N.inputSource);
      if (O === -1)
        return;
      const Q = _[O];
      Q !== void 0 && Q.dispatchEvent({ type: N.type, data: N.inputSource });
    }
    function F() {
      i.removeEventListener("select", E), i.removeEventListener("selectstart", E), i.removeEventListener("selectend", E), i.removeEventListener("squeeze", E), i.removeEventListener("squeezestart", E), i.removeEventListener("squeezeend", E), i.removeEventListener("end", F), i.removeEventListener("inputsourceschange", q);
      for (let N = 0; N < _.length; N++) {
        const O = T[N];
        O !== null && (T[N] = null, _[N].disconnect(O));
      }
      D = null, x = null, e.setRenderTarget(m), d = null, h = null, u = null, i = null, f = null, H.stop(), n.isPresenting = !1, n.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(N) {
      s = N, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(N) {
      o = N, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return l || r;
    }, this.setReferenceSpace = function(N) {
      l = N;
    }, this.getBaseLayer = function() {
      return h !== null ? h : d;
    }, this.getBinding = function() {
      return u;
    }, this.getFrame = function() {
      return p;
    }, this.getSession = function() {
      return i;
    }, this.setSession = async function(N) {
      if (i = N, i !== null) {
        if (m = e.getRenderTarget(), i.addEventListener("select", E), i.addEventListener("selectstart", E), i.addEventListener("selectend", E), i.addEventListener("squeeze", E), i.addEventListener("squeezestart", E), i.addEventListener("squeezeend", E), i.addEventListener("end", F), i.addEventListener("inputsourceschange", q), g.xrCompatible !== !0 && await t.makeXRCompatible(), i.renderState.layers === void 0 || e.capabilities.isWebGL2 === !1) {
          const O = {
            antialias: i.renderState.layers === void 0 ? g.antialias : !0,
            alpha: g.alpha,
            depth: g.depth,
            stencil: g.stencil,
            framebufferScaleFactor: s
          };
          d = new XRWebGLLayer(i, t, O), i.updateRenderState({ baseLayer: d }), f = new wn(
            d.framebufferWidth,
            d.framebufferHeight,
            {
              format: 1023,
              type: 1009,
              encoding: e.outputEncoding,
              stencilBuffer: g.stencil
            }
          );
        } else {
          let O = null, Q = null, Z = null;
          g.depth && (Z = g.stencil ? 35056 : 33190, O = g.stencil ? 1027 : 1026, Q = g.stencil ? 1020 : 1014);
          const Y = {
            colorFormat: 32856,
            depthFormat: Z,
            scaleFactor: s
          };
          u = new XRWebGLBinding(i, t), h = u.createProjectionLayer(Y), i.updateRenderState({ layers: [h] }), f = new wn(
            h.textureWidth,
            h.textureHeight,
            {
              format: 1023,
              type: 1009,
              depthTexture: new Ud(h.textureWidth, h.textureHeight, Q, void 0, void 0, void 0, void 0, void 0, void 0, O),
              stencilBuffer: g.stencil,
              encoding: e.outputEncoding,
              samples: g.antialias ? 4 : 0
            }
          );
          const oe = e.properties.get(f);
          oe.__ignoreDepthValues = h.ignoreDepthValues;
        }
        f.isXRRenderTarget = !0, this.setFoveation(1), l = null, r = await i.requestReferenceSpace(o), H.setContext(i), H.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" });
      }
    };
    function q(N) {
      for (let O = 0; O < N.removed.length; O++) {
        const Q = N.removed[O], Z = T.indexOf(Q);
        Z >= 0 && (T[Z] = null, _[Z].dispatchEvent({ type: "disconnected", data: Q }));
      }
      for (let O = 0; O < N.added.length; O++) {
        const Q = N.added[O];
        let Z = T.indexOf(Q);
        if (Z === -1) {
          for (let oe = 0; oe < _.length; oe++)
            if (oe >= T.length) {
              T.push(Q), Z = oe;
              break;
            } else if (T[oe] === null) {
              T[oe] = Q, Z = oe;
              break;
            }
          if (Z === -1)
            break;
        }
        const Y = _[Z];
        Y && Y.dispatchEvent({ type: "connected", data: Q });
      }
    }
    const ne = new R(), U = new R();
    function P(N, O, Q) {
      ne.setFromMatrixPosition(O.matrixWorld), U.setFromMatrixPosition(Q.matrixWorld);
      const Z = ne.distanceTo(U), Y = O.projectionMatrix.elements, oe = Q.projectionMatrix.elements, ve = Y[14] / (Y[10] - 1), $ = Y[14] / (Y[10] + 1), Ue = (Y[9] + 1) / Y[5], ge = (Y[9] - 1) / Y[5], ye = (Y[8] - 1) / Y[0], ae = (oe[8] + 1) / oe[0], Ge = ve * ye, Ee = ve * ae, pe = Z / (-ye + ae), et = pe * -ye;
      O.matrixWorld.decompose(N.position, N.quaternion, N.scale), N.translateX(et), N.translateZ(pe), N.matrixWorld.compose(N.position, N.quaternion, N.scale), N.matrixWorldInverse.copy(N.matrixWorld).invert();
      const ht = ve + pe, st = $ + pe, Lt = Ge - et, tt = Ee + (Z - et), Oe = Ue * $ / st * ht, Ut = ge * $ / st * ht;
      N.projectionMatrix.makePerspective(Lt, tt, Oe, Ut, ht, st);
    }
    function V(N, O) {
      O === null ? N.matrixWorld.copy(N.matrix) : N.matrixWorld.multiplyMatrices(O.matrixWorld, N.matrix), N.matrixWorldInverse.copy(N.matrixWorld).invert();
    }
    this.updateCamera = function(N) {
      if (i === null)
        return;
      A.near = S.near = M.near = N.near, A.far = S.far = M.far = N.far, (D !== A.near || x !== A.far) && (i.updateRenderState({
        depthNear: A.near,
        depthFar: A.far
      }), D = A.near, x = A.far);
      const O = N.parent, Q = A.cameras;
      V(A, O);
      for (let Y = 0; Y < Q.length; Y++)
        V(Q[Y], O);
      A.matrixWorld.decompose(A.position, A.quaternion, A.scale), N.matrix.copy(A.matrix), N.matrix.decompose(N.position, N.quaternion, N.scale);
      const Z = N.children;
      for (let Y = 0, oe = Z.length; Y < oe; Y++)
        Z[Y].updateMatrixWorld(!0);
      Q.length === 2 ? P(A, M, S) : A.projectionMatrix.copy(M.projectionMatrix);
    }, this.getCamera = function() {
      return A;
    }, this.getFoveation = function() {
      if (h !== null)
        return h.fixedFoveation;
      if (d !== null)
        return d.fixedFoveation;
    }, this.setFoveation = function(N) {
      h !== null && (h.fixedFoveation = N), d !== null && d.fixedFoveation !== void 0 && (d.fixedFoveation = N);
    };
    let X = null;
    function K(N, O) {
      if (c = O.getViewerPose(l || r), p = O, c !== null) {
        const Q = c.views;
        d !== null && (e.setRenderTargetFramebuffer(f, d.framebuffer), e.setRenderTarget(f));
        let Z = !1;
        Q.length !== A.cameras.length && (A.cameras.length = 0, Z = !0);
        for (let Y = 0; Y < Q.length; Y++) {
          const oe = Q[Y];
          let ve = null;
          if (d !== null)
            ve = d.getViewport(oe);
          else {
            const Ue = u.getViewSubImage(h, oe);
            ve = Ue.viewport, Y === 0 && (e.setRenderTargetTextures(
              f,
              Ue.colorTexture,
              h.ignoreDepthValues ? void 0 : Ue.depthStencilTexture
            ), e.setRenderTarget(f));
          }
          let $ = b[Y];
          $ === void 0 && ($ = new ct(), $.layers.enable(Y), $.viewport = new ze(), b[Y] = $), $.matrix.fromArray(oe.transform.matrix), $.projectionMatrix.fromArray(oe.projectionMatrix), $.viewport.set(ve.x, ve.y, ve.width, ve.height), Y === 0 && A.matrix.copy($.matrix), Z === !0 && A.cameras.push($);
        }
      }
      for (let Q = 0; Q < _.length; Q++) {
        const Z = T[Q], Y = _[Q];
        Z !== null && Y !== void 0 && Y.update(Z, O, l || r);
      }
      X && X(N, O), p = null;
    }
    const H = new eo();
    H.setAnimationLoop(K), this.setAnimationLoop = function(N) {
      X = N;
    }, this.dispose = function() {
    };
  }
}
function Bd(a, e) {
  function t(m, f) {
    m.fogColor.value.copy(f.color), f.isFog ? (m.fogNear.value = f.near, m.fogFar.value = f.far) : f.isFogExp2 && (m.fogDensity.value = f.density);
  }
  function n(m, f, _, T, M) {
    f.isMeshBasicMaterial || f.isMeshLambertMaterial ? i(m, f) : f.isMeshToonMaterial ? (i(m, f), u(m, f)) : f.isMeshPhongMaterial ? (i(m, f), c(m, f)) : f.isMeshStandardMaterial ? (i(m, f), h(m, f), f.isMeshPhysicalMaterial && d(m, f, M)) : f.isMeshMatcapMaterial ? (i(m, f), p(m, f)) : f.isMeshDepthMaterial ? i(m, f) : f.isMeshDistanceMaterial ? (i(m, f), g(m, f)) : f.isMeshNormalMaterial ? i(m, f) : f.isLineBasicMaterial ? (s(m, f), f.isLineDashedMaterial && r(m, f)) : f.isPointsMaterial ? o(m, f, _, T) : f.isSpriteMaterial ? l(m, f) : f.isShadowMaterial ? (m.color.value.copy(f.color), m.opacity.value = f.opacity) : f.isShaderMaterial && (f.uniformsNeedUpdate = !1);
  }
  function i(m, f) {
    m.opacity.value = f.opacity, f.color && m.diffuse.value.copy(f.color), f.emissive && m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity), f.map && (m.map.value = f.map), f.alphaMap && (m.alphaMap.value = f.alphaMap), f.bumpMap && (m.bumpMap.value = f.bumpMap, m.bumpScale.value = f.bumpScale, f.side === 1 && (m.bumpScale.value *= -1)), f.displacementMap && (m.displacementMap.value = f.displacementMap, m.displacementScale.value = f.displacementScale, m.displacementBias.value = f.displacementBias), f.emissiveMap && (m.emissiveMap.value = f.emissiveMap), f.normalMap && (m.normalMap.value = f.normalMap, m.normalScale.value.copy(f.normalScale), f.side === 1 && m.normalScale.value.negate()), f.specularMap && (m.specularMap.value = f.specularMap), f.alphaTest > 0 && (m.alphaTest.value = f.alphaTest);
    const _ = e.get(f).envMap;
    if (_ && (m.envMap.value = _, m.flipEnvMap.value = _.isCubeTexture && _.isRenderTargetTexture === !1 ? -1 : 1, m.reflectivity.value = f.reflectivity, m.ior.value = f.ior, m.refractionRatio.value = f.refractionRatio), f.lightMap) {
      m.lightMap.value = f.lightMap;
      const S = a.physicallyCorrectLights !== !0 ? Math.PI : 1;
      m.lightMapIntensity.value = f.lightMapIntensity * S;
    }
    f.aoMap && (m.aoMap.value = f.aoMap, m.aoMapIntensity.value = f.aoMapIntensity);
    let T;
    f.map ? T = f.map : f.specularMap ? T = f.specularMap : f.displacementMap ? T = f.displacementMap : f.normalMap ? T = f.normalMap : f.bumpMap ? T = f.bumpMap : f.roughnessMap ? T = f.roughnessMap : f.metalnessMap ? T = f.metalnessMap : f.alphaMap ? T = f.alphaMap : f.emissiveMap ? T = f.emissiveMap : f.clearcoatMap ? T = f.clearcoatMap : f.clearcoatNormalMap ? T = f.clearcoatNormalMap : f.clearcoatRoughnessMap ? T = f.clearcoatRoughnessMap : f.iridescenceMap ? T = f.iridescenceMap : f.iridescenceThicknessMap ? T = f.iridescenceThicknessMap : f.specularIntensityMap ? T = f.specularIntensityMap : f.specularColorMap ? T = f.specularColorMap : f.transmissionMap ? T = f.transmissionMap : f.thicknessMap ? T = f.thicknessMap : f.sheenColorMap ? T = f.sheenColorMap : f.sheenRoughnessMap && (T = f.sheenRoughnessMap), T !== void 0 && (T.isWebGLRenderTarget && (T = T.texture), T.matrixAutoUpdate === !0 && T.updateMatrix(), m.uvTransform.value.copy(T.matrix));
    let M;
    f.aoMap ? M = f.aoMap : f.lightMap && (M = f.lightMap), M !== void 0 && (M.isWebGLRenderTarget && (M = M.texture), M.matrixAutoUpdate === !0 && M.updateMatrix(), m.uv2Transform.value.copy(M.matrix));
  }
  function s(m, f) {
    m.diffuse.value.copy(f.color), m.opacity.value = f.opacity;
  }
  function r(m, f) {
    m.dashSize.value = f.dashSize, m.totalSize.value = f.dashSize + f.gapSize, m.scale.value = f.scale;
  }
  function o(m, f, _, T) {
    m.diffuse.value.copy(f.color), m.opacity.value = f.opacity, m.size.value = f.size * _, m.scale.value = T * 0.5, f.map && (m.map.value = f.map), f.alphaMap && (m.alphaMap.value = f.alphaMap), f.alphaTest > 0 && (m.alphaTest.value = f.alphaTest);
    let M;
    f.map ? M = f.map : f.alphaMap && (M = f.alphaMap), M !== void 0 && (M.matrixAutoUpdate === !0 && M.updateMatrix(), m.uvTransform.value.copy(M.matrix));
  }
  function l(m, f) {
    m.diffuse.value.copy(f.color), m.opacity.value = f.opacity, m.rotation.value = f.rotation, f.map && (m.map.value = f.map), f.alphaMap && (m.alphaMap.value = f.alphaMap), f.alphaTest > 0 && (m.alphaTest.value = f.alphaTest);
    let _;
    f.map ? _ = f.map : f.alphaMap && (_ = f.alphaMap), _ !== void 0 && (_.matrixAutoUpdate === !0 && _.updateMatrix(), m.uvTransform.value.copy(_.matrix));
  }
  function c(m, f) {
    m.specular.value.copy(f.specular), m.shininess.value = Math.max(f.shininess, 1e-4);
  }
  function u(m, f) {
    f.gradientMap && (m.gradientMap.value = f.gradientMap);
  }
  function h(m, f) {
    m.roughness.value = f.roughness, m.metalness.value = f.metalness, f.roughnessMap && (m.roughnessMap.value = f.roughnessMap), f.metalnessMap && (m.metalnessMap.value = f.metalnessMap), e.get(f).envMap && (m.envMapIntensity.value = f.envMapIntensity);
  }
  function d(m, f, _) {
    m.ior.value = f.ior, f.sheen > 0 && (m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen), m.sheenRoughness.value = f.sheenRoughness, f.sheenColorMap && (m.sheenColorMap.value = f.sheenColorMap), f.sheenRoughnessMap && (m.sheenRoughnessMap.value = f.sheenRoughnessMap)), f.clearcoat > 0 && (m.clearcoat.value = f.clearcoat, m.clearcoatRoughness.value = f.clearcoatRoughness, f.clearcoatMap && (m.clearcoatMap.value = f.clearcoatMap), f.clearcoatRoughnessMap && (m.clearcoatRoughnessMap.value = f.clearcoatRoughnessMap), f.clearcoatNormalMap && (m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale), m.clearcoatNormalMap.value = f.clearcoatNormalMap, f.side === 1 && m.clearcoatNormalScale.value.negate())), f.iridescence > 0 && (m.iridescence.value = f.iridescence, m.iridescenceIOR.value = f.iridescenceIOR, m.iridescenceThicknessMinimum.value = f.iridescenceThicknessRange[0], m.iridescenceThicknessMaximum.value = f.iridescenceThicknessRange[1], f.iridescenceMap && (m.iridescenceMap.value = f.iridescenceMap), f.iridescenceThicknessMap && (m.iridescenceThicknessMap.value = f.iridescenceThicknessMap)), f.transmission > 0 && (m.transmission.value = f.transmission, m.transmissionSamplerMap.value = _.texture, m.transmissionSamplerSize.value.set(_.width, _.height), f.transmissionMap && (m.transmissionMap.value = f.transmissionMap), m.thickness.value = f.thickness, f.thicknessMap && (m.thicknessMap.value = f.thicknessMap), m.attenuationDistance.value = f.attenuationDistance, m.attenuationColor.value.copy(f.attenuationColor)), m.specularIntensity.value = f.specularIntensity, m.specularColor.value.copy(f.specularColor), f.specularIntensityMap && (m.specularIntensityMap.value = f.specularIntensityMap), f.specularColorMap && (m.specularColorMap.value = f.specularColorMap);
  }
  function p(m, f) {
    f.matcap && (m.matcap.value = f.matcap);
  }
  function g(m, f) {
    m.referencePosition.value.copy(f.referencePosition), m.nearDistance.value = f.nearDistance, m.farDistance.value = f.farDistance;
  }
  return {
    refreshFogUniforms: t,
    refreshMaterialUniforms: n
  };
}
function zd(a, e, t, n) {
  let i = {}, s = {}, r = [];
  const o = t.isWebGL2 ? a.getParameter(35375) : 0;
  function l(T, M) {
    const S = M.program;
    n.uniformBlockBinding(T, S);
  }
  function c(T, M) {
    let S = i[T.id];
    S === void 0 && (g(T), S = u(T), i[T.id] = S, T.addEventListener("dispose", f));
    const b = M.program;
    n.updateUBOMapping(T, b);
    const A = e.render.frame;
    s[T.id] !== A && (d(T), s[T.id] = A);
  }
  function u(T) {
    const M = h();
    T.__bindingPointIndex = M;
    const S = a.createBuffer(), b = T.__size, A = T.usage;
    return a.bindBuffer(35345, S), a.bufferData(35345, b, A), a.bindBuffer(35345, null), a.bindBufferBase(35345, M, S), S;
  }
  function h() {
    for (let T = 0; T < o; T++)
      if (r.indexOf(T) === -1)
        return r.push(T), T;
    return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function d(T) {
    const M = i[T.id], S = T.uniforms, b = T.__cache;
    a.bindBuffer(35345, M);
    for (let A = 0, D = S.length; A < D; A++) {
      const x = S[A];
      if (p(x, A, b) === !0) {
        const E = x.value, F = x.__offset;
        typeof E == "number" ? (x.__data[0] = E, a.bufferSubData(35345, F, x.__data)) : (x.value.isMatrix3 ? (x.__data[0] = x.value.elements[0], x.__data[1] = x.value.elements[1], x.__data[2] = x.value.elements[2], x.__data[3] = x.value.elements[0], x.__data[4] = x.value.elements[3], x.__data[5] = x.value.elements[4], x.__data[6] = x.value.elements[5], x.__data[7] = x.value.elements[0], x.__data[8] = x.value.elements[6], x.__data[9] = x.value.elements[7], x.__data[10] = x.value.elements[8], x.__data[11] = x.value.elements[0]) : E.toArray(x.__data), a.bufferSubData(35345, F, x.__data));
      }
    }
    a.bindBuffer(35345, null);
  }
  function p(T, M, S) {
    const b = T.value;
    if (S[M] === void 0)
      return typeof b == "number" ? S[M] = b : S[M] = b.clone(), !0;
    if (typeof b == "number") {
      if (S[M] !== b)
        return S[M] = b, !0;
    } else {
      const A = S[M];
      if (A.equals(b) === !1)
        return A.copy(b), !0;
    }
    return !1;
  }
  function g(T) {
    const M = T.uniforms;
    let S = 0;
    const b = 16;
    let A = 0;
    for (let D = 0, x = M.length; D < x; D++) {
      const E = M[D], F = m(E);
      if (E.__data = new Float32Array(F.storage / Float32Array.BYTES_PER_ELEMENT), E.__offset = S, D > 0) {
        A = S % b;
        const q = b - A;
        A !== 0 && q - F.boundary < 0 && (S += b - A, E.__offset = S);
      }
      S += F.storage;
    }
    return A = S % b, A > 0 && (S += b - A), T.__size = S, T.__cache = {}, this;
  }
  function m(T) {
    const M = T.value, S = {
      boundary: 0,
      storage: 0
    };
    return typeof M == "number" ? (S.boundary = 4, S.storage = 4) : M.isVector2 ? (S.boundary = 8, S.storage = 8) : M.isVector3 || M.isColor ? (S.boundary = 16, S.storage = 12) : M.isVector4 ? (S.boundary = 16, S.storage = 16) : M.isMatrix3 ? (S.boundary = 48, S.storage = 48) : M.isMatrix4 ? (S.boundary = 64, S.storage = 64) : M.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", M), S;
  }
  function f(T) {
    const M = T.target;
    M.removeEventListener("dispose", f);
    const S = r.indexOf(M.__bindingPointIndex);
    r.splice(S, 1), a.deleteBuffer(i[M.id]), delete i[M.id], delete s[M.id];
  }
  function _() {
    for (const T in i)
      a.deleteBuffer(i[T]);
    r = [], i = {}, s = {};
  }
  return {
    bind: l,
    update: c,
    dispose: _
  };
}
function Gd() {
  const a = bi("canvas");
  return a.style.display = "block", a;
}
function ro(a = {}) {
  this.isWebGLRenderer = !0;
  const e = a.canvas !== void 0 ? a.canvas : Gd(), t = a.context !== void 0 ? a.context : null, n = a.depth !== void 0 ? a.depth : !0, i = a.stencil !== void 0 ? a.stencil : !0, s = a.antialias !== void 0 ? a.antialias : !1, r = a.premultipliedAlpha !== void 0 ? a.premultipliedAlpha : !0, o = a.preserveDrawingBuffer !== void 0 ? a.preserveDrawingBuffer : !1, l = a.powerPreference !== void 0 ? a.powerPreference : "default", c = a.failIfMajorPerformanceCaveat !== void 0 ? a.failIfMajorPerformanceCaveat : !1;
  let u;
  t !== null ? u = t.getContextAttributes().alpha : u = a.alpha !== void 0 ? a.alpha : !1;
  let h = null, d = null;
  const p = [], g = [];
  this.domElement = e, this.debug = {
    checkShaderErrors: !0
  }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.outputEncoding = 3e3, this.physicallyCorrectLights = !1, this.toneMapping = 0, this.toneMappingExposure = 1, Object.defineProperties(this, {
    gammaFactor: {
      get: function() {
        return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."), 2;
      },
      set: function() {
        console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.");
      }
    }
  });
  const m = this;
  let f = !1, _ = 0, T = 0, M = null, S = -1, b = null;
  const A = new ze(), D = new ze();
  let x = null, E = e.width, F = e.height, q = 1, ne = null, U = null;
  const P = new ze(0, 0, E, F), V = new ze(0, 0, E, F);
  let X = !1;
  const K = new cr();
  let H = !1, N = !1, O = null;
  const Q = new Ce(), Z = new Le(), Y = new R(), oe = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 };
  function ve() {
    return M === null ? q : 1;
  }
  let $ = t;
  function Ue(y, I) {
    for (let B = 0; B < y.length; B++) {
      const L = y[B], k = e.getContext(L, I);
      if (k !== null)
        return k;
    }
    return null;
  }
  try {
    const y = {
      alpha: !0,
      depth: n,
      stencil: i,
      antialias: s,
      premultipliedAlpha: r,
      preserveDrawingBuffer: o,
      powerPreference: l,
      failIfMajorPerformanceCaveat: c
    };
    if ("setAttribute" in e && e.setAttribute("data-engine", `three.js r${ar}`), e.addEventListener("webglcontextlost", fe, !1), e.addEventListener("webglcontextrestored", ue, !1), e.addEventListener("webglcontextcreationerror", De, !1), $ === null) {
      const I = ["webgl2", "webgl", "experimental-webgl"];
      if (m.isWebGL1Renderer === !0 && I.shift(), $ = Ue(I, y), $ === null)
        throw Ue(I) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
    }
    $.getShaderPrecisionFormat === void 0 && ($.getShaderPrecisionFormat = function() {
      return { rangeMin: 1, rangeMax: 1, precision: 1 };
    });
  } catch (y) {
    throw console.error("THREE.WebGLRenderer: " + y.message), y;
  }
  let ge, ye, ae, Ge, Ee, pe, et, ht, st, Lt, tt, Oe, Ut, Ot, w, v, z, J, ee, ie, _e, se, W, de;
  function me() {
    ge = new Zu($), ye = new $u($, ge, a), ge.init(ye), se = new Id($, ge, ye), ae = new Dd($, ge, ye), Ge = new eh(), Ee = new _d(), pe = new Pd($, ge, ae, Ee, ye, se, Ge), et = new Xu(m), ht = new Yu(m), st = new cl($, ye), W = new Hu($, ge, st, ye), Lt = new Ju($, st, Ge, W), tt = new sh($, Lt, st, Ge), ee = new ih($, ye, pe), v = new qu(Ee), Oe = new gd(m, et, ht, ge, ye, W, v), Ut = new Bd(m, Ee), Ot = new vd(), w = new Td(ge, ye), J = new Vu(m, et, ht, ae, tt, u, r), z = new Ld(m, tt, ye), de = new zd($, Ge, ye, ae), ie = new Wu($, ge, Ge, ye), _e = new Qu($, ge, Ge, ye), Ge.programs = Oe.programs, m.capabilities = ye, m.extensions = ge, m.properties = Ee, m.renderLists = Ot, m.shadowMap = z, m.state = ae, m.info = Ge;
  }
  me();
  const le = new Od(m, $);
  this.xr = le, this.getContext = function() {
    return $;
  }, this.getContextAttributes = function() {
    return $.getContextAttributes();
  }, this.forceContextLoss = function() {
    const y = ge.get("WEBGL_lose_context");
    y && y.loseContext();
  }, this.forceContextRestore = function() {
    const y = ge.get("WEBGL_lose_context");
    y && y.restoreContext();
  }, this.getPixelRatio = function() {
    return q;
  }, this.setPixelRatio = function(y) {
    y !== void 0 && (q = y, this.setSize(E, F, !1));
  }, this.getSize = function(y) {
    return y.set(E, F);
  }, this.setSize = function(y, I, B) {
    if (le.isPresenting) {
      console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
      return;
    }
    E = y, F = I, e.width = Math.floor(y * q), e.height = Math.floor(I * q), B !== !1 && (e.style.width = y + "px", e.style.height = I + "px"), this.setViewport(0, 0, y, I);
  }, this.getDrawingBufferSize = function(y) {
    return y.set(E * q, F * q).floor();
  }, this.setDrawingBufferSize = function(y, I, B) {
    E = y, F = I, q = B, e.width = Math.floor(y * B), e.height = Math.floor(I * B), this.setViewport(0, 0, y, I);
  }, this.getCurrentViewport = function(y) {
    return y.copy(A);
  }, this.getViewport = function(y) {
    return y.copy(P);
  }, this.setViewport = function(y, I, B, L) {
    y.isVector4 ? P.set(y.x, y.y, y.z, y.w) : P.set(y, I, B, L), ae.viewport(A.copy(P).multiplyScalar(q).floor());
  }, this.getScissor = function(y) {
    return y.copy(V);
  }, this.setScissor = function(y, I, B, L) {
    y.isVector4 ? V.set(y.x, y.y, y.z, y.w) : V.set(y, I, B, L), ae.scissor(D.copy(V).multiplyScalar(q).floor());
  }, this.getScissorTest = function() {
    return X;
  }, this.setScissorTest = function(y) {
    ae.setScissorTest(X = y);
  }, this.setOpaqueSort = function(y) {
    ne = y;
  }, this.setTransparentSort = function(y) {
    U = y;
  }, this.getClearColor = function(y) {
    return y.copy(J.getClearColor());
  }, this.setClearColor = function() {
    J.setClearColor.apply(J, arguments);
  }, this.getClearAlpha = function() {
    return J.getClearAlpha();
  }, this.setClearAlpha = function() {
    J.setClearAlpha.apply(J, arguments);
  }, this.clear = function(y = !0, I = !0, B = !0) {
    let L = 0;
    y && (L |= 16384), I && (L |= 256), B && (L |= 1024), $.clear(L);
  }, this.clearColor = function() {
    this.clear(!0, !1, !1);
  }, this.clearDepth = function() {
    this.clear(!1, !0, !1);
  }, this.clearStencil = function() {
    this.clear(!1, !1, !0);
  }, this.dispose = function() {
    e.removeEventListener("webglcontextlost", fe, !1), e.removeEventListener("webglcontextrestored", ue, !1), e.removeEventListener("webglcontextcreationerror", De, !1), Ot.dispose(), w.dispose(), Ee.dispose(), et.dispose(), ht.dispose(), tt.dispose(), W.dispose(), de.dispose(), Oe.dispose(), le.dispose(), le.removeEventListener("sessionstart", re), le.removeEventListener("sessionend", ce), O && (O.dispose(), O = null), Pe.stop();
  };
  function fe(y) {
    y.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), f = !0;
  }
  function ue() {
    console.log("THREE.WebGLRenderer: Context Restored."), f = !1;
    const y = Ge.autoReset, I = z.enabled, B = z.autoUpdate, L = z.needsUpdate, k = z.type;
    me(), Ge.autoReset = y, z.enabled = I, z.autoUpdate = B, z.needsUpdate = L, z.type = k;
  }
  function De(y) {
    console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", y.statusMessage);
  }
  function Ve(y) {
    const I = y.target;
    I.removeEventListener("dispose", Ve), Ye(I);
  }
  function Ye(y) {
    C(y), Ee.remove(y);
  }
  function C(y) {
    const I = Ee.get(y).programs;
    I !== void 0 && (I.forEach(function(B) {
      Oe.releaseProgram(B);
    }), y.isShaderMaterial && Oe.releaseShaderCache(y));
  }
  this.renderBufferDirect = function(y, I, B, L, k, he) {
    I === null && (I = oe);
    const xe = k.isMesh && k.matrixWorld.determinant() < 0, we = To(y, I, B, L, k);
    ae.setMaterial(L, xe);
    let Se = B.index;
    const Ie = B.attributes.position;
    if (Se === null) {
      if (Ie === void 0 || Ie.count === 0)
        return;
    } else if (Se.count === 0)
      return;
    let Ae = 1;
    L.wireframe === !0 && (Se = Lt.getWireframeAttribute(B), Ae = 2), W.setup(k, L, we, B, Se);
    let Re, We = ie;
    Se !== null && (Re = st.get(Se), We = _e, We.setIndex(Re));
    const un = Se !== null ? Se.count : Ie.count, Cn = B.drawRange.start * Ae, Rn = B.drawRange.count * Ae, Dt = he !== null ? he.start * Ae : 0, Ne = he !== null ? he.count * Ae : 1 / 0, Ln = Math.max(Cn, Dt), $e = Math.min(un, Cn + Rn, Dt + Ne) - 1, xt = Math.max(0, $e - Ln + 1);
    if (xt !== 0) {
      if (k.isMesh)
        L.wireframe === !0 ? (ae.setLineWidth(L.wireframeLinewidth * ve()), We.setMode(1)) : We.setMode(4);
      else if (k.isLine) {
        let Kt = L.linewidth;
        Kt === void 0 && (Kt = 1), ae.setLineWidth(Kt * ve()), k.isLineSegments ? We.setMode(1) : k.isLineLoop ? We.setMode(2) : We.setMode(3);
      } else
        k.isPoints ? We.setMode(0) : k.isSprite && We.setMode(4);
      if (k.isInstancedMesh)
        We.renderInstances(Ln, xt, k.count);
      else if (B.isInstancedBufferGeometry) {
        const Kt = Math.min(B.instanceCount, B._maxInstanceCount);
        We.renderInstances(Ln, xt, Kt);
      } else
        We.render(Ln, xt);
    }
  }, this.compile = function(y, I) {
    function B(L, k, he) {
      L.transparent === !0 && L.side === 2 ? (L.side = 1, L.needsUpdate = !0, _t(L, k, he), L.side = 0, L.needsUpdate = !0, _t(L, k, he), L.side = 2) : _t(L, k, he);
    }
    d = w.get(y), d.init(), g.push(d), y.traverseVisible(function(L) {
      L.isLight && L.layers.test(I.layers) && (d.pushLight(L), L.castShadow && d.pushShadow(L));
    }), d.setupLights(m.physicallyCorrectLights), y.traverse(function(L) {
      const k = L.material;
      if (k)
        if (Array.isArray(k))
          for (let he = 0; he < k.length; he++) {
            const xe = k[he];
            B(xe, y, L);
          }
        else
          B(k, y, L);
    }), g.pop(), d = null;
  };
  let G = null;
  function j(y) {
    G && G(y);
  }
  function re() {
    Pe.stop();
  }
  function ce() {
    Pe.start();
  }
  const Pe = new eo();
  Pe.setAnimationLoop(j), typeof self < "u" && Pe.setContext(self), this.setAnimationLoop = function(y) {
    G = y, le.setAnimationLoop(y), y === null ? Pe.stop() : Pe.start();
  }, le.addEventListener("sessionstart", re), le.addEventListener("sessionend", ce), this.render = function(y, I) {
    if (I !== void 0 && I.isCamera !== !0) {
      console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
      return;
    }
    if (f === !0)
      return;
    y.matrixWorldAutoUpdate === !0 && y.updateMatrixWorld(), I.parent === null && I.matrixWorldAutoUpdate === !0 && I.updateMatrixWorld(), le.enabled === !0 && le.isPresenting === !0 && (le.cameraAutoUpdate === !0 && le.updateCamera(I), I = le.getCamera()), y.isScene === !0 && y.onBeforeRender(m, y, I, M), d = w.get(y, g.length), d.init(), g.push(d), Q.multiplyMatrices(I.projectionMatrix, I.matrixWorldInverse), K.setFromProjectionMatrix(Q), N = this.localClippingEnabled, H = v.init(this.clippingPlanes, N, I), h = Ot.get(y, p.length), h.init(), p.push(h), Ze(y, I, 0, m.sortObjects), h.finish(), m.sortObjects === !0 && h.sort(ne, U), H === !0 && v.beginShadows();
    const B = d.state.shadowsArray;
    if (z.render(B, y, I), H === !0 && v.endShadows(), this.info.autoReset === !0 && this.info.reset(), J.render(h, y), d.setupLights(m.physicallyCorrectLights), I.isArrayCamera) {
      const L = I.cameras;
      for (let k = 0, he = L.length; k < he; k++) {
        const xe = L[k];
        nt(h, y, xe, xe.viewport);
      }
    } else
      nt(h, y, I);
    M !== null && (pe.updateMultisampleRenderTarget(M), pe.updateRenderTargetMipmap(M)), y.isScene === !0 && y.onAfterRender(m, y, I), W.resetDefaultState(), S = -1, b = null, g.pop(), g.length > 0 ? d = g[g.length - 1] : d = null, p.pop(), p.length > 0 ? h = p[p.length - 1] : h = null;
  };
  function Ze(y, I, B, L) {
    if (y.visible === !1)
      return;
    if (y.layers.test(I.layers)) {
      if (y.isGroup)
        B = y.renderOrder;
      else if (y.isLOD)
        y.autoUpdate === !0 && y.update(I);
      else if (y.isLight)
        d.pushLight(y), y.castShadow && d.pushShadow(y);
      else if (y.isSprite) {
        if (!y.frustumCulled || K.intersectsSprite(y)) {
          L && Y.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Q);
          const xe = tt.update(y), we = y.material;
          we.visible && h.push(y, xe, we, B, Y.z, null);
        }
      } else if ((y.isMesh || y.isLine || y.isPoints) && (y.isSkinnedMesh && y.skeleton.frame !== Ge.render.frame && (y.skeleton.update(), y.skeleton.frame = Ge.render.frame), !y.frustumCulled || K.intersectsObject(y))) {
        L && Y.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Q);
        const xe = tt.update(y), we = y.material;
        if (Array.isArray(we)) {
          const Se = xe.groups;
          for (let Ie = 0, Ae = Se.length; Ie < Ae; Ie++) {
            const Re = Se[Ie], We = we[Re.materialIndex];
            We && We.visible && h.push(y, xe, We, B, Y.z, Re);
          }
        } else
          we.visible && h.push(y, xe, we, B, Y.z, null);
      }
    }
    const he = y.children;
    for (let xe = 0, we = he.length; xe < we; xe++)
      Ze(he[xe], I, B, L);
  }
  function nt(y, I, B, L) {
    const k = y.opaque, he = y.transmissive, xe = y.transparent;
    d.setupLightsView(B), he.length > 0 && cn(k, I, B), L && ae.viewport(A.copy(L)), k.length > 0 && He(k, I, B), he.length > 0 && He(he, I, B), xe.length > 0 && He(xe, I, B), ae.buffers.depth.setTest(!0), ae.buffers.depth.setMask(!0), ae.buffers.color.setMask(!0), ae.setPolygonOffset(!1);
  }
  function cn(y, I, B) {
    const L = ye.isWebGL2;
    O === null && (O = new wn(1, 1, {
      generateMipmaps: !0,
      type: ge.has("EXT_color_buffer_half_float") ? 1016 : 1009,
      minFilter: 1008,
      samples: L && s === !0 ? 4 : 0
    })), m.getDrawingBufferSize(Z), L ? O.setSize(Z.x, Z.y) : O.setSize(ls(Z.x), ls(Z.y));
    const k = m.getRenderTarget();
    m.setRenderTarget(O), m.clear();
    const he = m.toneMapping;
    m.toneMapping = 0, He(y, I, B), m.toneMapping = he, pe.updateMultisampleRenderTarget(O), pe.updateRenderTargetMipmap(O), m.setRenderTarget(k);
  }
  function He(y, I, B) {
    const L = I.isScene === !0 ? I.overrideMaterial : null;
    for (let k = 0, he = y.length; k < he; k++) {
      const xe = y[k], we = xe.object, Se = xe.geometry, Ie = L === null ? xe.material : L, Ae = xe.group;
      we.layers.test(B.layers) && Bt(we, I, B, Se, Ie, Ae);
    }
  }
  function Bt(y, I, B, L, k, he) {
    y.onBeforeRender(m, I, B, L, k, he), y.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse, y.matrixWorld), y.normalMatrix.getNormalMatrix(y.modelViewMatrix), k.onBeforeRender(m, I, B, L, y, he), k.transparent === !0 && k.side === 2 ? (k.side = 1, k.needsUpdate = !0, m.renderBufferDirect(B, I, L, k, y, he), k.side = 0, k.needsUpdate = !0, m.renderBufferDirect(B, I, L, k, y, he), k.side = 2) : m.renderBufferDirect(B, I, L, k, y, he), y.onAfterRender(m, I, B, L, k, he);
  }
  function _t(y, I, B) {
    I.isScene !== !0 && (I = oe);
    const L = Ee.get(y), k = d.state.lights, he = d.state.shadowsArray, xe = k.state.version, we = Oe.getParameters(y, k.state, he, I, B), Se = Oe.getProgramCacheKey(we);
    let Ie = L.programs;
    L.environment = y.isMeshStandardMaterial ? I.environment : null, L.fog = I.fog, L.envMap = (y.isMeshStandardMaterial ? ht : et).get(y.envMap || L.environment), Ie === void 0 && (y.addEventListener("dispose", Ve), Ie = /* @__PURE__ */ new Map(), L.programs = Ie);
    let Ae = Ie.get(Se);
    if (Ae !== void 0) {
      if (L.currentProgram === Ae && L.lightsStateVersion === xe)
        return Sr(y, we), Ae;
    } else
      we.uniforms = Oe.getUniforms(y), y.onBuild(B, we, m), y.onBeforeCompile(we, m), Ae = Oe.acquireProgram(we, Se), Ie.set(Se, Ae), L.uniforms = we.uniforms;
    const Re = L.uniforms;
    (!y.isShaderMaterial && !y.isRawShaderMaterial || y.clipping === !0) && (Re.clippingPlanes = v.uniform), Sr(y, we), L.needsLights = Ao(y), L.lightsStateVersion = xe, L.needsLights && (Re.ambientLightColor.value = k.state.ambient, Re.lightProbe.value = k.state.probe, Re.directionalLights.value = k.state.directional, Re.directionalLightShadows.value = k.state.directionalShadow, Re.spotLights.value = k.state.spot, Re.spotLightShadows.value = k.state.spotShadow, Re.rectAreaLights.value = k.state.rectArea, Re.ltc_1.value = k.state.rectAreaLTC1, Re.ltc_2.value = k.state.rectAreaLTC2, Re.pointLights.value = k.state.point, Re.pointLightShadows.value = k.state.pointShadow, Re.hemisphereLights.value = k.state.hemi, Re.directionalShadowMap.value = k.state.directionalShadowMap, Re.directionalShadowMatrix.value = k.state.directionalShadowMatrix, Re.spotShadowMap.value = k.state.spotShadowMap, Re.spotLightMatrix.value = k.state.spotLightMatrix, Re.spotLightMap.value = k.state.spotLightMap, Re.pointShadowMap.value = k.state.pointShadowMap, Re.pointShadowMatrix.value = k.state.pointShadowMatrix);
    const We = Ae.getUniforms(), un = as.seqWithValue(We.seq, Re);
    return L.currentProgram = Ae, L.uniformsList = un, Ae;
  }
  function Sr(y, I) {
    const B = Ee.get(y);
    B.outputEncoding = I.outputEncoding, B.instancing = I.instancing, B.skinning = I.skinning, B.morphTargets = I.morphTargets, B.morphNormals = I.morphNormals, B.morphColors = I.morphColors, B.morphTargetsCount = I.morphTargetsCount, B.numClippingPlanes = I.numClippingPlanes, B.numIntersection = I.numClipIntersection, B.vertexAlphas = I.vertexAlphas, B.vertexTangents = I.vertexTangents, B.toneMapping = I.toneMapping;
  }
  function To(y, I, B, L, k) {
    I.isScene !== !0 && (I = oe), pe.resetTextureUnits();
    const he = I.fog, xe = L.isMeshStandardMaterial ? I.environment : null, we = M === null ? m.outputEncoding : M.isXRRenderTarget === !0 ? M.texture.encoding : 3e3, Se = (L.isMeshStandardMaterial ? ht : et).get(L.envMap || xe), Ie = L.vertexColors === !0 && !!B.attributes.color && B.attributes.color.itemSize === 4, Ae = !!L.normalMap && !!B.attributes.tangent, Re = !!B.morphAttributes.position, We = !!B.morphAttributes.normal, un = !!B.morphAttributes.color, Cn = L.toneMapped ? m.toneMapping : 0, Rn = B.morphAttributes.position || B.morphAttributes.normal || B.morphAttributes.color, Dt = Rn !== void 0 ? Rn.length : 0, Ne = Ee.get(L), Ln = d.state.lights;
    if (H === !0 && (N === !0 || y !== b)) {
      const ft = y === b && L.id === S;
      v.setState(L, y, ft);
    }
    let $e = !1;
    L.version === Ne.__version ? (Ne.needsLights && Ne.lightsStateVersion !== Ln.state.version || Ne.outputEncoding !== we || k.isInstancedMesh && Ne.instancing === !1 || !k.isInstancedMesh && Ne.instancing === !0 || k.isSkinnedMesh && Ne.skinning === !1 || !k.isSkinnedMesh && Ne.skinning === !0 || Ne.envMap !== Se || L.fog === !0 && Ne.fog !== he || Ne.numClippingPlanes !== void 0 && (Ne.numClippingPlanes !== v.numPlanes || Ne.numIntersection !== v.numIntersection) || Ne.vertexAlphas !== Ie || Ne.vertexTangents !== Ae || Ne.morphTargets !== Re || Ne.morphNormals !== We || Ne.morphColors !== un || Ne.toneMapping !== Cn || ye.isWebGL2 === !0 && Ne.morphTargetsCount !== Dt) && ($e = !0) : ($e = !0, Ne.__version = L.version);
    let xt = Ne.currentProgram;
    $e === !0 && (xt = _t(L, I, k));
    let Kt = !1, li = !1, ms = !1;
    const rt = xt.getUniforms(), hn = Ne.uniforms;
    if (ae.useProgram(xt.program) && (Kt = !0, li = !0, ms = !0), L.id !== S && (S = L.id, li = !0), Kt || b !== y) {
      if (rt.setValue($, "projectionMatrix", y.projectionMatrix), ye.logarithmicDepthBuffer && rt.setValue(
        $,
        "logDepthBufFC",
        2 / (Math.log(y.far + 1) / Math.LN2)
      ), b !== y && (b = y, li = !0, ms = !0), L.isShaderMaterial || L.isMeshPhongMaterial || L.isMeshToonMaterial || L.isMeshStandardMaterial || L.envMap) {
        const ft = rt.map.cameraPosition;
        ft !== void 0 && ft.setValue(
          $,
          Y.setFromMatrixPosition(y.matrixWorld)
        );
      }
      (L.isMeshPhongMaterial || L.isMeshToonMaterial || L.isMeshLambertMaterial || L.isMeshBasicMaterial || L.isMeshStandardMaterial || L.isShaderMaterial) && rt.setValue($, "isOrthographic", y.isOrthographicCamera === !0), (L.isMeshPhongMaterial || L.isMeshToonMaterial || L.isMeshLambertMaterial || L.isMeshBasicMaterial || L.isMeshStandardMaterial || L.isShaderMaterial || L.isShadowMaterial || k.isSkinnedMesh) && rt.setValue($, "viewMatrix", y.matrixWorldInverse);
    }
    if (k.isSkinnedMesh) {
      rt.setOptional($, k, "bindMatrix"), rt.setOptional($, k, "bindMatrixInverse");
      const ft = k.skeleton;
      ft && (ye.floatVertexTextures ? (ft.boneTexture === null && ft.computeBoneTexture(), rt.setValue($, "boneTexture", ft.boneTexture, pe), rt.setValue($, "boneTextureSize", ft.boneTextureSize)) : console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."));
    }
    const gs = B.morphAttributes;
    if ((gs.position !== void 0 || gs.normal !== void 0 || gs.color !== void 0 && ye.isWebGL2 === !0) && ee.update(k, B, L, xt), (li || Ne.receiveShadow !== k.receiveShadow) && (Ne.receiveShadow = k.receiveShadow, rt.setValue($, "receiveShadow", k.receiveShadow)), L.isMeshGouraudMaterial && L.envMap !== null && (hn.envMap.value = Se, hn.flipEnvMap.value = Se.isCubeTexture && Se.isRenderTargetTexture === !1 ? -1 : 1), li && (rt.setValue($, "toneMappingExposure", m.toneMappingExposure), Ne.needsLights && Eo(hn, ms), he && L.fog === !0 && Ut.refreshFogUniforms(hn, he), Ut.refreshMaterialUniforms(hn, L, q, F, O), as.upload($, Ne.uniformsList, hn, pe)), L.isShaderMaterial && L.uniformsNeedUpdate === !0 && (as.upload($, Ne.uniformsList, hn, pe), L.uniformsNeedUpdate = !1), L.isSpriteMaterial && rt.setValue($, "center", k.center), rt.setValue($, "modelViewMatrix", k.modelViewMatrix), rt.setValue($, "normalMatrix", k.normalMatrix), rt.setValue($, "modelMatrix", k.matrixWorld), L.isShaderMaterial || L.isRawShaderMaterial) {
      const ft = L.uniformsGroups;
      for (let _s = 0, Co = ft.length; _s < Co; _s++)
        if (ye.isWebGL2) {
          const br = ft[_s];
          de.update(br, xt), de.bind(br, xt);
        } else
          console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.");
    }
    return xt;
  }
  function Eo(y, I) {
    y.ambientLightColor.needsUpdate = I, y.lightProbe.needsUpdate = I, y.directionalLights.needsUpdate = I, y.directionalLightShadows.needsUpdate = I, y.pointLights.needsUpdate = I, y.pointLightShadows.needsUpdate = I, y.spotLights.needsUpdate = I, y.spotLightShadows.needsUpdate = I, y.rectAreaLights.needsUpdate = I, y.hemisphereLights.needsUpdate = I;
  }
  function Ao(y) {
    return y.isMeshLambertMaterial || y.isMeshToonMaterial || y.isMeshPhongMaterial || y.isMeshStandardMaterial || y.isShadowMaterial || y.isShaderMaterial && y.lights === !0;
  }
  this.getActiveCubeFace = function() {
    return _;
  }, this.getActiveMipmapLevel = function() {
    return T;
  }, this.getRenderTarget = function() {
    return M;
  }, this.setRenderTargetTextures = function(y, I, B) {
    Ee.get(y.texture).__webglTexture = I, Ee.get(y.depthTexture).__webglTexture = B;
    const L = Ee.get(y);
    L.__hasExternalTextures = !0, L.__hasExternalTextures && (L.__autoAllocateDepthBuffer = B === void 0, L.__autoAllocateDepthBuffer || ge.has("WEBGL_multisampled_render_to_texture") === !0 && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), L.__useRenderToTexture = !1));
  }, this.setRenderTargetFramebuffer = function(y, I) {
    const B = Ee.get(y);
    B.__webglFramebuffer = I, B.__useDefaultFramebuffer = I === void 0;
  }, this.setRenderTarget = function(y, I = 0, B = 0) {
    M = y, _ = I, T = B;
    let L = !0, k = null, he = !1, xe = !1;
    if (y) {
      const Se = Ee.get(y);
      Se.__useDefaultFramebuffer !== void 0 ? (ae.bindFramebuffer(36160, null), L = !1) : Se.__webglFramebuffer === void 0 ? pe.setupRenderTarget(y) : Se.__hasExternalTextures && pe.rebindTextures(y, Ee.get(y.texture).__webglTexture, Ee.get(y.depthTexture).__webglTexture);
      const Ie = y.texture;
      (Ie.isData3DTexture || Ie.isDataArrayTexture || Ie.isCompressedArrayTexture) && (xe = !0);
      const Ae = Ee.get(y).__webglFramebuffer;
      y.isWebGLCubeRenderTarget ? (k = Ae[I], he = !0) : ye.isWebGL2 && y.samples > 0 && pe.useMultisampledRTT(y) === !1 ? k = Ee.get(y).__webglMultisampledFramebuffer : k = Ae, A.copy(y.viewport), D.copy(y.scissor), x = y.scissorTest;
    } else
      A.copy(P).multiplyScalar(q).floor(), D.copy(V).multiplyScalar(q).floor(), x = X;
    if (ae.bindFramebuffer(36160, k) && ye.drawBuffers && L && ae.drawBuffers(y, k), ae.viewport(A), ae.scissor(D), ae.setScissorTest(x), he) {
      const Se = Ee.get(y.texture);
      $.framebufferTexture2D(36160, 36064, 34069 + I, Se.__webglTexture, B);
    } else if (xe) {
      const Se = Ee.get(y.texture), Ie = I || 0;
      $.framebufferTextureLayer(36160, 36064, Se.__webglTexture, B || 0, Ie);
    }
    S = -1;
  }, this.readRenderTargetPixels = function(y, I, B, L, k, he, xe) {
    if (!(y && y.isWebGLRenderTarget)) {
      console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
      return;
    }
    let we = Ee.get(y).__webglFramebuffer;
    if (y.isWebGLCubeRenderTarget && xe !== void 0 && (we = we[xe]), we) {
      ae.bindFramebuffer(36160, we);
      try {
        const Se = y.texture, Ie = Se.format, Ae = Se.type;
        if (Ie !== 1023 && se.convert(Ie) !== $.getParameter(35739)) {
          console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
          return;
        }
        const Re = Ae === 1016 && (ge.has("EXT_color_buffer_half_float") || ye.isWebGL2 && ge.has("EXT_color_buffer_float"));
        if (Ae !== 1009 && se.convert(Ae) !== $.getParameter(35738) && !(Ae === 1015 && (ye.isWebGL2 || ge.has("OES_texture_float") || ge.has("WEBGL_color_buffer_float"))) && !Re) {
          console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
          return;
        }
        I >= 0 && I <= y.width - L && B >= 0 && B <= y.height - k && $.readPixels(I, B, L, k, se.convert(Ie), se.convert(Ae), he);
      } finally {
        const Se = M !== null ? Ee.get(M).__webglFramebuffer : null;
        ae.bindFramebuffer(36160, Se);
      }
    }
  }, this.copyFramebufferToTexture = function(y, I, B = 0) {
    const L = Math.pow(2, -B), k = Math.floor(I.image.width * L), he = Math.floor(I.image.height * L);
    pe.setTexture2D(I, 0), $.copyTexSubImage2D(3553, B, 0, 0, y.x, y.y, k, he), ae.unbindTexture();
  }, this.copyTextureToTexture = function(y, I, B, L = 0) {
    const k = I.image.width, he = I.image.height, xe = se.convert(B.format), we = se.convert(B.type);
    pe.setTexture2D(B, 0), $.pixelStorei(37440, B.flipY), $.pixelStorei(37441, B.premultiplyAlpha), $.pixelStorei(3317, B.unpackAlignment), I.isDataTexture ? $.texSubImage2D(3553, L, y.x, y.y, k, he, xe, we, I.image.data) : I.isCompressedTexture ? $.compressedTexSubImage2D(3553, L, y.x, y.y, I.mipmaps[0].width, I.mipmaps[0].height, xe, I.mipmaps[0].data) : $.texSubImage2D(3553, L, y.x, y.y, xe, we, I.image), L === 0 && B.generateMipmaps && $.generateMipmap(3553), ae.unbindTexture();
  }, this.copyTextureToTexture3D = function(y, I, B, L, k = 0) {
    if (m.isWebGL1Renderer) {
      console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");
      return;
    }
    const he = y.max.x - y.min.x + 1, xe = y.max.y - y.min.y + 1, we = y.max.z - y.min.z + 1, Se = se.convert(L.format), Ie = se.convert(L.type);
    let Ae;
    if (L.isData3DTexture)
      pe.setTexture3D(L, 0), Ae = 32879;
    else if (L.isDataArrayTexture)
      pe.setTexture2DArray(L, 0), Ae = 35866;
    else {
      console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
      return;
    }
    $.pixelStorei(37440, L.flipY), $.pixelStorei(37441, L.premultiplyAlpha), $.pixelStorei(3317, L.unpackAlignment);
    const Re = $.getParameter(3314), We = $.getParameter(32878), un = $.getParameter(3316), Cn = $.getParameter(3315), Rn = $.getParameter(32877), Dt = B.isCompressedTexture ? B.mipmaps[0] : B.image;
    $.pixelStorei(3314, Dt.width), $.pixelStorei(32878, Dt.height), $.pixelStorei(3316, y.min.x), $.pixelStorei(3315, y.min.y), $.pixelStorei(32877, y.min.z), B.isDataTexture || B.isData3DTexture ? $.texSubImage3D(Ae, k, I.x, I.y, I.z, he, xe, we, Se, Ie, Dt.data) : B.isCompressedArrayTexture ? (console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."), $.compressedTexSubImage3D(Ae, k, I.x, I.y, I.z, he, xe, we, Se, Dt.data)) : $.texSubImage3D(Ae, k, I.x, I.y, I.z, he, xe, we, Se, Ie, Dt), $.pixelStorei(3314, Re), $.pixelStorei(32878, We), $.pixelStorei(3316, un), $.pixelStorei(3315, Cn), $.pixelStorei(32877, Rn), k === 0 && L.generateMipmaps && $.generateMipmap(Ae), ae.unbindTexture();
  }, this.initTexture = function(y) {
    y.isCubeTexture ? pe.setTextureCube(y, 0) : y.isData3DTexture ? pe.setTexture3D(y, 0) : y.isDataArrayTexture || y.isCompressedArrayTexture ? pe.setTexture2DArray(y, 0) : pe.setTexture2D(y, 0), ae.unbindTexture();
  }, this.resetState = function() {
    _ = 0, T = 0, M = null, ae.reset(), W.reset();
  }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
}
class kd extends ro {
}
kd.prototype.isWebGL1Renderer = !0;
class Vd extends ke {
  constructor() {
    super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(e, t) {
    return super.copy(e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), this.backgroundBlurriness = e.backgroundBlurriness, e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.matrixAutoUpdate = e.matrixAutoUpdate, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.fog !== null && (t.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (t.backgroundBlurriness = this.backgroundBlurriness), t;
  }
  get autoUpdate() {
    return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."), this.matrixWorldAutoUpdate;
  }
  set autoUpdate(e) {
    console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."), this.matrixWorldAutoUpdate = e;
  }
}
class Hd {
  constructor(e, t) {
    this.isInterleavedBuffer = !0, this.array = e, this.stride = t, this.count = e !== void 0 ? e.length / t : 0, this.usage = 35044, this.updateRange = { offset: 0, count: -1 }, this.version = 0, this.uuid = Ct();
  }
  onUploadCallback() {
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  setUsage(e) {
    return this.usage = e, this;
  }
  copy(e) {
    return this.array = new e.array.constructor(e.array), this.count = e.count, this.stride = e.stride, this.usage = e.usage, this;
  }
  copyAt(e, t, n) {
    e *= this.stride, n *= t.stride;
    for (let i = 0, s = this.stride; i < s; i++)
      this.array[e + i] = t.array[n + i];
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  clone(e) {
    e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = Ct()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
    const t = new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]), n = new this.constructor(t, this.stride);
    return n.setUsage(this.usage), n;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  toJSON(e) {
    return e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = Ct()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = Array.from(new Uint32Array(this.array.buffer))), {
      uuid: this.uuid,
      buffer: this.array.buffer._uuid,
      type: this.array.constructor.name,
      stride: this.stride
    };
  }
}
const at = /* @__PURE__ */ new R();
class fr {
  constructor(e, t, n, i = !1) {
    this.isInterleavedBufferAttribute = !0, this.name = "", this.data = e, this.itemSize = t, this.offset = n, this.normalized = i === !0;
  }
  get count() {
    return this.data.count;
  }
  get array() {
    return this.data.array;
  }
  set needsUpdate(e) {
    this.data.needsUpdate = e;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.data.count; t < n; t++)
      at.fromBufferAttribute(this, t), at.applyMatrix4(e), this.setXYZ(t, at.x, at.y, at.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      at.fromBufferAttribute(this, t), at.applyNormalMatrix(e), this.setXYZ(t, at.x, at.y, at.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      at.fromBufferAttribute(this, t), at.transformDirection(e), this.setXYZ(t, at.x, at.y, at.z);
    return this;
  }
  setX(e, t) {
    return this.normalized && (t = Be(t, this.array)), this.data.array[e * this.data.stride + this.offset] = t, this;
  }
  setY(e, t) {
    return this.normalized && (t = Be(t, this.array)), this.data.array[e * this.data.stride + this.offset + 1] = t, this;
  }
  setZ(e, t) {
    return this.normalized && (t = Be(t, this.array)), this.data.array[e * this.data.stride + this.offset + 2] = t, this;
  }
  setW(e, t) {
    return this.normalized && (t = Be(t, this.array)), this.data.array[e * this.data.stride + this.offset + 3] = t, this;
  }
  getX(e) {
    let t = this.data.array[e * this.data.stride + this.offset];
    return this.normalized && (t = Xt(t, this.array)), t;
  }
  getY(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 1];
    return this.normalized && (t = Xt(t, this.array)), t;
  }
  getZ(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 2];
    return this.normalized && (t = Xt(t, this.array)), t;
  }
  getW(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 3];
    return this.normalized && (t = Xt(t, this.array)), t;
  }
  setXY(e, t, n) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = Be(t, this.array), n = Be(n, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this;
  }
  setXYZ(e, t, n, i) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = Be(t, this.array), n = Be(n, this.array), i = Be(i, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = i, this;
  }
  setXYZW(e, t, n, i, s) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = Be(t, this.array), n = Be(n, this.array), i = Be(i, this.array), s = Be(s, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = i, this.data.array[e + 3] = s, this;
  }
  clone(e) {
    if (e === void 0) {
      console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will deinterleave buffer data.");
      const t = [];
      for (let n = 0; n < this.count; n++) {
        const i = n * this.data.stride + this.offset;
        for (let s = 0; s < this.itemSize; s++)
          t.push(this.data.array[i + s]);
      }
      return new dt(new this.array.constructor(t), this.itemSize, this.normalized);
    } else
      return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.clone(e)), new fr(e.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
  }
  toJSON(e) {
    if (e === void 0) {
      console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will deinterleave buffer data.");
      const t = [];
      for (let n = 0; n < this.count; n++) {
        const i = n * this.data.stride + this.offset;
        for (let s = 0; s < this.itemSize; s++)
          t.push(this.data.array[i + s]);
      }
      return {
        itemSize: this.itemSize,
        type: this.array.constructor.name,
        array: t,
        normalized: this.normalized
      };
    } else
      return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.toJSON(e)), {
        isInterleavedBufferAttribute: !0,
        itemSize: this.itemSize,
        data: this.data.uuid,
        offset: this.offset,
        normalized: this.normalized
      };
  }
}
const sa = /* @__PURE__ */ new R(), ra = /* @__PURE__ */ new ze(), aa = /* @__PURE__ */ new ze(), Wd = /* @__PURE__ */ new R(), oa = /* @__PURE__ */ new Ce();
class $d extends gt {
  constructor(e, t) {
    super(e, t), this.isSkinnedMesh = !0, this.type = "SkinnedMesh", this.bindMode = "attached", this.bindMatrix = new Ce(), this.bindMatrixInverse = new Ce();
  }
  copy(e, t) {
    return super.copy(e, t), this.bindMode = e.bindMode, this.bindMatrix.copy(e.bindMatrix), this.bindMatrixInverse.copy(e.bindMatrixInverse), this.skeleton = e.skeleton, this;
  }
  bind(e, t) {
    this.skeleton = e, t === void 0 && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), t = this.matrixWorld), this.bindMatrix.copy(t), this.bindMatrixInverse.copy(t).invert();
  }
  pose() {
    this.skeleton.pose();
  }
  normalizeSkinWeights() {
    const e = new ze(), t = this.geometry.attributes.skinWeight;
    for (let n = 0, i = t.count; n < i; n++) {
      e.fromBufferAttribute(t, n);
      const s = 1 / e.manhattanLength();
      s !== 1 / 0 ? e.multiplyScalar(s) : e.set(1, 0, 0, 0), t.setXYZW(n, e.x, e.y, e.z, e.w);
    }
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.bindMode === "attached" ? this.bindMatrixInverse.copy(this.matrixWorld).invert() : this.bindMode === "detached" ? this.bindMatrixInverse.copy(this.bindMatrix).invert() : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode);
  }
  boneTransform(e, t) {
    const n = this.skeleton, i = this.geometry;
    ra.fromBufferAttribute(i.attributes.skinIndex, e), aa.fromBufferAttribute(i.attributes.skinWeight, e), sa.copy(t).applyMatrix4(this.bindMatrix), t.set(0, 0, 0);
    for (let s = 0; s < 4; s++) {
      const r = aa.getComponent(s);
      if (r !== 0) {
        const o = ra.getComponent(s);
        oa.multiplyMatrices(n.bones[o].matrixWorld, n.boneInverses[o]), t.addScaledVector(Wd.copy(sa).applyMatrix4(oa), r);
      }
    }
    return t.applyMatrix4(this.bindMatrixInverse);
  }
}
class ao extends ke {
  constructor() {
    super(), this.isBone = !0, this.type = "Bone";
  }
}
class qd extends ut {
  constructor(e = null, t = 1, n = 1, i, s, r, o, l, c = 1003, u = 1003, h, d) {
    super(null, r, o, l, c, u, i, s, h, d), this.isDataTexture = !0, this.image = { data: e, width: t, height: n }, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
const la = /* @__PURE__ */ new Ce(), Xd = /* @__PURE__ */ new Ce();
class pr {
  constructor(e = [], t = []) {
    this.uuid = Ct(), this.bones = e.slice(0), this.boneInverses = t, this.boneMatrices = null, this.boneTexture = null, this.boneTextureSize = 0, this.frame = -1, this.init();
  }
  init() {
    const e = this.bones, t = this.boneInverses;
    if (this.boneMatrices = new Float32Array(e.length * 16), t.length === 0)
      this.calculateInverses();
    else if (e.length !== t.length) {
      console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."), this.boneInverses = [];
      for (let n = 0, i = this.bones.length; n < i; n++)
        this.boneInverses.push(new Ce());
    }
  }
  calculateInverses() {
    this.boneInverses.length = 0;
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = new Ce();
      this.bones[e] && n.copy(this.bones[e].matrixWorld).invert(), this.boneInverses.push(n);
    }
  }
  pose() {
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = this.bones[e];
      n && n.matrixWorld.copy(this.boneInverses[e]).invert();
    }
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = this.bones[e];
      n && (n.parent && n.parent.isBone ? (n.matrix.copy(n.parent.matrixWorld).invert(), n.matrix.multiply(n.matrixWorld)) : n.matrix.copy(n.matrixWorld), n.matrix.decompose(n.position, n.quaternion, n.scale));
    }
  }
  update() {
    const e = this.bones, t = this.boneInverses, n = this.boneMatrices, i = this.boneTexture;
    for (let s = 0, r = e.length; s < r; s++) {
      const o = e[s] ? e[s].matrixWorld : Xd;
      la.multiplyMatrices(o, t[s]), la.toArray(n, s * 16);
    }
    i !== null && (i.needsUpdate = !0);
  }
  clone() {
    return new pr(this.bones, this.boneInverses);
  }
  computeBoneTexture() {
    let e = Math.sqrt(this.bones.length * 4);
    e = Ha(e), e = Math.max(e, 4);
    const t = new Float32Array(e * e * 4);
    t.set(this.boneMatrices);
    const n = new qd(t, e, e, 1023, 1015);
    return n.needsUpdate = !0, this.boneMatrices = t, this.boneTexture = n, this.boneTextureSize = e, this;
  }
  getBoneByName(e) {
    for (let t = 0, n = this.bones.length; t < n; t++) {
      const i = this.bones[t];
      if (i.name === e)
        return i;
    }
  }
  dispose() {
    this.boneTexture !== null && (this.boneTexture.dispose(), this.boneTexture = null);
  }
  fromJSON(e, t) {
    this.uuid = e.uuid;
    for (let n = 0, i = e.bones.length; n < i; n++) {
      const s = e.bones[n];
      let r = t[s];
      r === void 0 && (console.warn("THREE.Skeleton: No bone found with UUID:", s), r = new ao()), this.bones.push(r), this.boneInverses.push(new Ce().fromArray(e.boneInverses[n]));
    }
    return this.init(), this;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.5,
        type: "Skeleton",
        generator: "Skeleton.toJSON"
      },
      bones: [],
      boneInverses: []
    };
    e.uuid = this.uuid;
    const t = this.bones, n = this.boneInverses;
    for (let i = 0, s = t.length; i < s; i++) {
      const r = t[i];
      e.bones.push(r.uuid);
      const o = n[i];
      e.boneInverses.push(o.toArray());
    }
    return e;
  }
}
class ca extends dt {
  constructor(e, t, n, i = 1) {
    super(e, t, n), this.isInstancedBufferAttribute = !0, this.meshPerAttribute = i;
  }
  copy(e) {
    return super.copy(e), this.meshPerAttribute = e.meshPerAttribute, this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.meshPerAttribute = this.meshPerAttribute, e.isInstancedBufferAttribute = !0, e;
  }
}
const ua = /* @__PURE__ */ new Ce(), ha = /* @__PURE__ */ new Ce(), es = [], jd = /* @__PURE__ */ new Ce(), fi = /* @__PURE__ */ new gt();
class Kd extends gt {
  constructor(e, t, n) {
    super(e, t), this.isInstancedMesh = !0, this.instanceMatrix = new ca(new Float32Array(n * 16), 16), this.instanceColor = null, this.count = n, this.frustumCulled = !1;
    for (let i = 0; i < n; i++)
      this.setMatrixAt(i, jd);
  }
  copy(e, t) {
    return super.copy(e, t), this.instanceMatrix.copy(e.instanceMatrix), e.instanceColor !== null && (this.instanceColor = e.instanceColor.clone()), this.count = e.count, this;
  }
  getColorAt(e, t) {
    t.fromArray(this.instanceColor.array, e * 3);
  }
  getMatrixAt(e, t) {
    t.fromArray(this.instanceMatrix.array, e * 16);
  }
  raycast(e, t) {
    const n = this.matrixWorld, i = this.count;
    if (fi.geometry = this.geometry, fi.material = this.material, fi.material !== void 0)
      for (let s = 0; s < i; s++) {
        this.getMatrixAt(s, ua), ha.multiplyMatrices(n, ua), fi.matrixWorld = ha, fi.raycast(e, es);
        for (let r = 0, o = es.length; r < o; r++) {
          const l = es[r];
          l.instanceId = s, l.object = this, t.push(l);
        }
        es.length = 0;
      }
  }
  setColorAt(e, t) {
    this.instanceColor === null && (this.instanceColor = new ca(new Float32Array(this.instanceMatrix.count * 3), 3)), t.toArray(this.instanceColor.array, e * 3);
  }
  setMatrixAt(e, t) {
    t.toArray(this.instanceMatrix.array, e * 16);
  }
  updateMorphTargets() {
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class oo extends It {
  constructor(e) {
    super(), this.isLineBasicMaterial = !0, this.type = "LineBasicMaterial", this.color = new Me(16777215), this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this.fog = e.fog, this;
  }
}
const da = /* @__PURE__ */ new R(), fa = /* @__PURE__ */ new R(), pa = /* @__PURE__ */ new Ce(), Hs = /* @__PURE__ */ new lr(), ts = /* @__PURE__ */ new ii();
class mr extends ke {
  constructor(e = new Nt(), t = new oo()) {
    super(), this.isLine = !0, this.type = "Line", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = e.material, this.geometry = e.geometry, this;
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, n = [0];
      for (let i = 1, s = t.count; i < s; i++)
        da.fromBufferAttribute(t, i - 1), fa.fromBufferAttribute(t, i), n[i] = n[i - 1], n[i] += da.distanceTo(fa);
      e.setAttribute("lineDistance", new jt(n, 1));
    } else
      console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.matrixWorld, s = e.params.Line.threshold, r = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), ts.copy(n.boundingSphere), ts.applyMatrix4(i), ts.radius += s, e.ray.intersectsSphere(ts) === !1)
      return;
    pa.copy(i).invert(), Hs.copy(e.ray).applyMatrix4(pa);
    const o = s / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = o * o, c = new R(), u = new R(), h = new R(), d = new R(), p = this.isLineSegments ? 2 : 1, g = n.index, f = n.attributes.position;
    if (g !== null) {
      const _ = Math.max(0, r.start), T = Math.min(g.count, r.start + r.count);
      for (let M = _, S = T - 1; M < S; M += p) {
        const b = g.getX(M), A = g.getX(M + 1);
        if (c.fromBufferAttribute(f, b), u.fromBufferAttribute(f, A), Hs.distanceSqToSegment(c, u, d, h) > l)
          continue;
        d.applyMatrix4(this.matrixWorld);
        const x = e.ray.origin.distanceTo(d);
        x < e.near || x > e.far || t.push({
          distance: x,
          point: h.clone().applyMatrix4(this.matrixWorld),
          index: M,
          face: null,
          faceIndex: null,
          object: this
        });
      }
    } else {
      const _ = Math.max(0, r.start), T = Math.min(f.count, r.start + r.count);
      for (let M = _, S = T - 1; M < S; M += p) {
        if (c.fromBufferAttribute(f, M), u.fromBufferAttribute(f, M + 1), Hs.distanceSqToSegment(c, u, d, h) > l)
          continue;
        d.applyMatrix4(this.matrixWorld);
        const A = e.ray.origin.distanceTo(d);
        A < e.near || A > e.far || t.push({
          distance: A,
          point: h.clone().applyMatrix4(this.matrixWorld),
          index: M,
          face: null,
          faceIndex: null,
          object: this
        });
      }
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, r = i.length; s < r; s++) {
          const o = i[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = s;
        }
      }
    }
  }
}
const ma = /* @__PURE__ */ new R(), ga = /* @__PURE__ */ new R();
class Yd extends mr {
  constructor(e, t) {
    super(e, t), this.isLineSegments = !0, this.type = "LineSegments";
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, n = [];
      for (let i = 0, s = t.count; i < s; i += 2)
        ma.fromBufferAttribute(t, i), ga.fromBufferAttribute(t, i + 1), n[i] = i === 0 ? 0 : n[i - 1], n[i + 1] = n[i] + ma.distanceTo(ga);
      e.setAttribute("lineDistance", new jt(n, 1));
    } else
      console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
}
class Zd extends mr {
  constructor(e, t) {
    super(e, t), this.isLineLoop = !0, this.type = "LineLoop";
  }
}
class lo extends It {
  constructor(e) {
    super(), this.isPointsMaterial = !0, this.type = "PointsMaterial", this.color = new Me(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.size = e.size, this.sizeAttenuation = e.sizeAttenuation, this.fog = e.fog, this;
  }
}
const _a = /* @__PURE__ */ new Ce(), tr = /* @__PURE__ */ new lr(), ns = /* @__PURE__ */ new ii(), is = /* @__PURE__ */ new R();
class Jd extends ke {
  constructor(e = new Nt(), t = new lo()) {
    super(), this.isPoints = !0, this.type = "Points", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = e.material, this.geometry = e.geometry, this;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.matrixWorld, s = e.params.Points.threshold, r = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), ns.copy(n.boundingSphere), ns.applyMatrix4(i), ns.radius += s, e.ray.intersectsSphere(ns) === !1)
      return;
    _a.copy(i).invert(), tr.copy(e.ray).applyMatrix4(_a);
    const o = s / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = o * o, c = n.index, h = n.attributes.position;
    if (c !== null) {
      const d = Math.max(0, r.start), p = Math.min(c.count, r.start + r.count);
      for (let g = d, m = p; g < m; g++) {
        const f = c.getX(g);
        is.fromBufferAttribute(h, f), xa(is, f, l, i, e, t, this);
      }
    } else {
      const d = Math.max(0, r.start), p = Math.min(h.count, r.start + r.count);
      for (let g = d, m = p; g < m; g++)
        is.fromBufferAttribute(h, g), xa(is, g, l, i, e, t, this);
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, r = i.length; s < r; s++) {
          const o = i[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = s;
        }
      }
    }
  }
}
function xa(a, e, t, n, i, s, r) {
  const o = tr.distanceSqToPoint(a);
  if (o < t) {
    const l = new R();
    tr.closestPointToPoint(a, l), l.applyMatrix4(n);
    const c = i.ray.origin.distanceTo(l);
    if (c < i.near || c > i.far)
      return;
    s.push({
      distance: c,
      distanceToRay: Math.sqrt(o),
      point: l,
      index: e,
      face: null,
      object: r
    });
  }
}
class fs extends It {
  constructor(e) {
    super(), this.isMeshStandardMaterial = !0, this.defines = { STANDARD: "" }, this.type = "MeshStandardMaterial", this.color = new Me(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Me(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new Le(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.defines = { STANDARD: "" }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapIntensity = e.envMapIntensity, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
  }
}
class An extends fs {
  constructor(e) {
    super(), this.isMeshPhysicalMaterial = !0, this.defines = {
      STANDARD: "",
      PHYSICAL: ""
    }, this.type = "MeshPhysicalMaterial", this.clearcoatMap = null, this.clearcoatRoughness = 0, this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new Le(1, 1), this.clearcoatNormalMap = null, this.ior = 1.5, Object.defineProperty(this, "reflectivity", {
      get: function() {
        return lt(2.5 * (this.ior - 1) / (this.ior + 1), 0, 1);
      },
      set: function(t) {
        this.ior = (1 + 0.4 * t) / (1 - 0.4 * t);
      }
    }), this.iridescenceMap = null, this.iridescenceIOR = 1.3, this.iridescenceThicknessRange = [100, 400], this.iridescenceThicknessMap = null, this.sheenColor = new Me(0), this.sheenColorMap = null, this.sheenRoughness = 1, this.sheenRoughnessMap = null, this.transmissionMap = null, this.thickness = 0, this.thicknessMap = null, this.attenuationDistance = 1 / 0, this.attenuationColor = new Me(1, 1, 1), this.specularIntensity = 1, this.specularIntensityMap = null, this.specularColor = new Me(1, 1, 1), this.specularColorMap = null, this._sheen = 0, this._clearcoat = 0, this._iridescence = 0, this._transmission = 0, this.setValues(e);
  }
  get sheen() {
    return this._sheen;
  }
  set sheen(e) {
    this._sheen > 0 != e > 0 && this.version++, this._sheen = e;
  }
  get clearcoat() {
    return this._clearcoat;
  }
  set clearcoat(e) {
    this._clearcoat > 0 != e > 0 && this.version++, this._clearcoat = e;
  }
  get iridescence() {
    return this._iridescence;
  }
  set iridescence(e) {
    this._iridescence > 0 != e > 0 && this.version++, this._iridescence = e;
  }
  get transmission() {
    return this._transmission;
  }
  set transmission(e) {
    this._transmission > 0 != e > 0 && this.version++, this._transmission = e;
  }
  copy(e) {
    return super.copy(e), this.defines = {
      STANDARD: "",
      PHYSICAL: ""
    }, this.clearcoat = e.clearcoat, this.clearcoatMap = e.clearcoatMap, this.clearcoatRoughness = e.clearcoatRoughness, this.clearcoatRoughnessMap = e.clearcoatRoughnessMap, this.clearcoatNormalMap = e.clearcoatNormalMap, this.clearcoatNormalScale.copy(e.clearcoatNormalScale), this.ior = e.ior, this.iridescence = e.iridescence, this.iridescenceMap = e.iridescenceMap, this.iridescenceIOR = e.iridescenceIOR, this.iridescenceThicknessRange = [...e.iridescenceThicknessRange], this.iridescenceThicknessMap = e.iridescenceThicknessMap, this.sheen = e.sheen, this.sheenColor.copy(e.sheenColor), this.sheenColorMap = e.sheenColorMap, this.sheenRoughness = e.sheenRoughness, this.sheenRoughnessMap = e.sheenRoughnessMap, this.transmission = e.transmission, this.transmissionMap = e.transmissionMap, this.thickness = e.thickness, this.thicknessMap = e.thicknessMap, this.attenuationDistance = e.attenuationDistance, this.attenuationColor.copy(e.attenuationColor), this.specularIntensity = e.specularIntensity, this.specularIntensityMap = e.specularIntensityMap, this.specularColor.copy(e.specularColor), this.specularColorMap = e.specularColorMap, this;
  }
}
function sn(a, e, t) {
  return co(a) ? new a.constructor(a.subarray(e, t !== void 0 ? t : a.length)) : a.slice(e, t);
}
function ss(a, e, t) {
  return !a || !t && a.constructor === e ? a : typeof e.BYTES_PER_ELEMENT == "number" ? new e(a) : Array.prototype.slice.call(a);
}
function co(a) {
  return ArrayBuffer.isView(a) && !(a instanceof DataView);
}
function Qd(a) {
  function e(i, s) {
    return a[i] - a[s];
  }
  const t = a.length, n = new Array(t);
  for (let i = 0; i !== t; ++i)
    n[i] = i;
  return n.sort(e), n;
}
function va(a, e, t) {
  const n = a.length, i = new a.constructor(n);
  for (let s = 0, r = 0; r !== n; ++s) {
    const o = t[s] * e;
    for (let l = 0; l !== e; ++l)
      i[r++] = a[o + l];
  }
  return i;
}
function uo(a, e, t, n) {
  let i = 1, s = a[0];
  for (; s !== void 0 && s[n] === void 0; )
    s = a[i++];
  if (s === void 0)
    return;
  let r = s[n];
  if (r !== void 0)
    if (Array.isArray(r))
      do
        r = s[n], r !== void 0 && (e.push(s.time), t.push.apply(t, r)), s = a[i++];
      while (s !== void 0);
    else if (r.toArray !== void 0)
      do
        r = s[n], r !== void 0 && (e.push(s.time), r.toArray(t, t.length)), s = a[i++];
      while (s !== void 0);
    else
      do
        r = s[n], r !== void 0 && (e.push(s.time), t.push(r)), s = a[i++];
      while (s !== void 0);
}
class Di {
  constructor(e, t, n, i) {
    this.parameterPositions = e, this._cachedIndex = 0, this.resultBuffer = i !== void 0 ? i : new t.constructor(n), this.sampleValues = t, this.valueSize = n, this.settings = null, this.DefaultSettings_ = {};
  }
  evaluate(e) {
    const t = this.parameterPositions;
    let n = this._cachedIndex, i = t[n], s = t[n - 1];
    n: {
      e: {
        let r;
        t: {
          i:
            if (!(e < i)) {
              for (let o = n + 2; ; ) {
                if (i === void 0) {
                  if (e < s)
                    break i;
                  return n = t.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
                }
                if (n === o)
                  break;
                if (s = i, i = t[++n], e < i)
                  break e;
              }
              r = t.length;
              break t;
            }
          if (!(e >= s)) {
            const o = t[1];
            e < o && (n = 2, s = o);
            for (let l = n - 2; ; ) {
              if (s === void 0)
                return this._cachedIndex = 0, this.copySampleValue_(0);
              if (n === l)
                break;
              if (i = s, s = t[--n - 1], e >= s)
                break e;
            }
            r = n, n = 0;
            break t;
          }
          break n;
        }
        for (; n < r; ) {
          const o = n + r >>> 1;
          e < t[o] ? r = o : n = o + 1;
        }
        if (i = t[n], s = t[n - 1], s === void 0)
          return this._cachedIndex = 0, this.copySampleValue_(0);
        if (i === void 0)
          return n = t.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
      }
      this._cachedIndex = n, this.intervalChanged_(n, s, i);
    }
    return this.interpolate_(n, s, e, i);
  }
  getSettings_() {
    return this.settings || this.DefaultSettings_;
  }
  copySampleValue_(e) {
    const t = this.resultBuffer, n = this.sampleValues, i = this.valueSize, s = e * i;
    for (let r = 0; r !== i; ++r)
      t[r] = n[s + r];
    return t;
  }
  interpolate_() {
    throw new Error("call to abstract method");
  }
  intervalChanged_() {
  }
}
class ef extends Di {
  constructor(e, t, n, i) {
    super(e, t, n, i), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = {
      endingStart: 2400,
      endingEnd: 2400
    };
  }
  intervalChanged_(e, t, n) {
    const i = this.parameterPositions;
    let s = e - 2, r = e + 1, o = i[s], l = i[r];
    if (o === void 0)
      switch (this.getSettings_().endingStart) {
        case 2401:
          s = e, o = 2 * t - n;
          break;
        case 2402:
          s = i.length - 2, o = t + i[s] - i[s + 1];
          break;
        default:
          s = e, o = n;
      }
    if (l === void 0)
      switch (this.getSettings_().endingEnd) {
        case 2401:
          r = e, l = 2 * n - t;
          break;
        case 2402:
          r = 1, l = n + i[1] - i[0];
          break;
        default:
          r = e - 1, l = t;
      }
    const c = (n - t) * 0.5, u = this.valueSize;
    this._weightPrev = c / (t - o), this._weightNext = c / (l - n), this._offsetPrev = s * u, this._offsetNext = r * u;
  }
  interpolate_(e, t, n, i) {
    const s = this.resultBuffer, r = this.sampleValues, o = this.valueSize, l = e * o, c = l - o, u = this._offsetPrev, h = this._offsetNext, d = this._weightPrev, p = this._weightNext, g = (n - t) / (i - t), m = g * g, f = m * g, _ = -d * f + 2 * d * m - d * g, T = (1 + d) * f + (-1.5 - 2 * d) * m + (-0.5 + d) * g + 1, M = (-1 - p) * f + (1.5 + p) * m + 0.5 * g, S = p * f - p * m;
    for (let b = 0; b !== o; ++b)
      s[b] = _ * r[u + b] + T * r[c + b] + M * r[l + b] + S * r[h + b];
    return s;
  }
}
class tf extends Di {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e, t, n, i) {
    const s = this.resultBuffer, r = this.sampleValues, o = this.valueSize, l = e * o, c = l - o, u = (n - t) / (i - t), h = 1 - u;
    for (let d = 0; d !== o; ++d)
      s[d] = r[c + d] * h + r[l + d] * u;
    return s;
  }
}
class nf extends Di {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e) {
    return this.copySampleValue_(e - 1);
  }
}
class Ft {
  constructor(e, t, n, i) {
    if (e === void 0)
      throw new Error("THREE.KeyframeTrack: track name is undefined");
    if (t === void 0 || t.length === 0)
      throw new Error("THREE.KeyframeTrack: no keyframes in track named " + e);
    this.name = e, this.times = ss(t, this.TimeBufferType), this.values = ss(n, this.ValueBufferType), this.setInterpolation(i || this.DefaultInterpolation);
  }
  static toJSON(e) {
    const t = e.constructor;
    let n;
    if (t.toJSON !== this.toJSON)
      n = t.toJSON(e);
    else {
      n = {
        name: e.name,
        times: ss(e.times, Array),
        values: ss(e.values, Array)
      };
      const i = e.getInterpolation();
      i !== e.DefaultInterpolation && (n.interpolation = i);
    }
    return n.type = e.ValueTypeName, n;
  }
  InterpolantFactoryMethodDiscrete(e) {
    return new nf(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodLinear(e) {
    return new tf(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodSmooth(e) {
    return new ef(this.times, this.values, this.getValueSize(), e);
  }
  setInterpolation(e) {
    let t;
    switch (e) {
      case 2300:
        t = this.InterpolantFactoryMethodDiscrete;
        break;
      case 2301:
        t = this.InterpolantFactoryMethodLinear;
        break;
      case 2302:
        t = this.InterpolantFactoryMethodSmooth;
        break;
    }
    if (t === void 0) {
      const n = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
      if (this.createInterpolant === void 0)
        if (e !== this.DefaultInterpolation)
          this.setInterpolation(this.DefaultInterpolation);
        else
          throw new Error(n);
      return console.warn("THREE.KeyframeTrack:", n), this;
    }
    return this.createInterpolant = t, this;
  }
  getInterpolation() {
    switch (this.createInterpolant) {
      case this.InterpolantFactoryMethodDiscrete:
        return 2300;
      case this.InterpolantFactoryMethodLinear:
        return 2301;
      case this.InterpolantFactoryMethodSmooth:
        return 2302;
    }
  }
  getValueSize() {
    return this.values.length / this.times.length;
  }
  shift(e) {
    if (e !== 0) {
      const t = this.times;
      for (let n = 0, i = t.length; n !== i; ++n)
        t[n] += e;
    }
    return this;
  }
  scale(e) {
    if (e !== 1) {
      const t = this.times;
      for (let n = 0, i = t.length; n !== i; ++n)
        t[n] *= e;
    }
    return this;
  }
  trim(e, t) {
    const n = this.times, i = n.length;
    let s = 0, r = i - 1;
    for (; s !== i && n[s] < e; )
      ++s;
    for (; r !== -1 && n[r] > t; )
      --r;
    if (++r, s !== 0 || r !== i) {
      s >= r && (r = Math.max(r, 1), s = r - 1);
      const o = this.getValueSize();
      this.times = sn(n, s, r), this.values = sn(this.values, s * o, r * o);
    }
    return this;
  }
  validate() {
    let e = !0;
    const t = this.getValueSize();
    t - Math.floor(t) !== 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), e = !1);
    const n = this.times, i = this.values, s = n.length;
    s === 0 && (console.error("THREE.KeyframeTrack: Track is empty.", this), e = !1);
    let r = null;
    for (let o = 0; o !== s; o++) {
      const l = n[o];
      if (typeof l == "number" && isNaN(l)) {
        console.error("THREE.KeyframeTrack: Time is not a valid number.", this, o, l), e = !1;
        break;
      }
      if (r !== null && r > l) {
        console.error("THREE.KeyframeTrack: Out of order keys.", this, o, l, r), e = !1;
        break;
      }
      r = l;
    }
    if (i !== void 0 && co(i))
      for (let o = 0, l = i.length; o !== l; ++o) {
        const c = i[o];
        if (isNaN(c)) {
          console.error("THREE.KeyframeTrack: Value is not a valid number.", this, o, c), e = !1;
          break;
        }
      }
    return e;
  }
  optimize() {
    const e = sn(this.times), t = sn(this.values), n = this.getValueSize(), i = this.getInterpolation() === 2302, s = e.length - 1;
    let r = 1;
    for (let o = 1; o < s; ++o) {
      let l = !1;
      const c = e[o], u = e[o + 1];
      if (c !== u && (o !== 1 || c !== e[0]))
        if (i)
          l = !0;
        else {
          const h = o * n, d = h - n, p = h + n;
          for (let g = 0; g !== n; ++g) {
            const m = t[h + g];
            if (m !== t[d + g] || m !== t[p + g]) {
              l = !0;
              break;
            }
          }
        }
      if (l) {
        if (o !== r) {
          e[r] = e[o];
          const h = o * n, d = r * n;
          for (let p = 0; p !== n; ++p)
            t[d + p] = t[h + p];
        }
        ++r;
      }
    }
    if (s > 0) {
      e[r] = e[s];
      for (let o = s * n, l = r * n, c = 0; c !== n; ++c)
        t[l + c] = t[o + c];
      ++r;
    }
    return r !== e.length ? (this.times = sn(e, 0, r), this.values = sn(t, 0, r * n)) : (this.times = e, this.values = t), this;
  }
  clone() {
    const e = sn(this.times, 0), t = sn(this.values, 0), n = this.constructor, i = new n(this.name, e, t);
    return i.createInterpolant = this.createInterpolant, i;
  }
}
Ft.prototype.TimeBufferType = Float32Array;
Ft.prototype.ValueBufferType = Float32Array;
Ft.prototype.DefaultInterpolation = 2301;
class ai extends Ft {
}
ai.prototype.ValueTypeName = "bool";
ai.prototype.ValueBufferType = Array;
ai.prototype.DefaultInterpolation = 2300;
ai.prototype.InterpolantFactoryMethodLinear = void 0;
ai.prototype.InterpolantFactoryMethodSmooth = void 0;
class ho extends Ft {
}
ho.prototype.ValueTypeName = "color";
class wi extends Ft {
}
wi.prototype.ValueTypeName = "number";
class sf extends Di {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e, t, n, i) {
    const s = this.resultBuffer, r = this.sampleValues, o = this.valueSize, l = (n - t) / (i - t);
    let c = e * o;
    for (let u = c + o; c !== u; c += 4)
      ln.slerpFlat(s, 0, r, c - o, r, c, l);
    return s;
  }
}
class En extends Ft {
  InterpolantFactoryMethodLinear(e) {
    return new sf(this.times, this.values, this.getValueSize(), e);
  }
}
En.prototype.ValueTypeName = "quaternion";
En.prototype.DefaultInterpolation = 2301;
En.prototype.InterpolantFactoryMethodSmooth = void 0;
class oi extends Ft {
}
oi.prototype.ValueTypeName = "string";
oi.prototype.ValueBufferType = Array;
oi.prototype.DefaultInterpolation = 2300;
oi.prototype.InterpolantFactoryMethodLinear = void 0;
oi.prototype.InterpolantFactoryMethodSmooth = void 0;
class Ti extends Ft {
}
Ti.prototype.ValueTypeName = "vector";
class rf {
  constructor(e, t = -1, n, i = 2500) {
    this.name = e, this.tracks = n, this.duration = t, this.blendMode = i, this.uuid = Ct(), this.duration < 0 && this.resetDuration();
  }
  static parse(e) {
    const t = [], n = e.tracks, i = 1 / (e.fps || 1);
    for (let r = 0, o = n.length; r !== o; ++r)
      t.push(of(n[r]).scale(i));
    const s = new this(e.name, e.duration, t, e.blendMode);
    return s.uuid = e.uuid, s;
  }
  static toJSON(e) {
    const t = [], n = e.tracks, i = {
      name: e.name,
      duration: e.duration,
      tracks: t,
      uuid: e.uuid,
      blendMode: e.blendMode
    };
    for (let s = 0, r = n.length; s !== r; ++s)
      t.push(Ft.toJSON(n[s]));
    return i;
  }
  static CreateFromMorphTargetSequence(e, t, n, i) {
    const s = t.length, r = [];
    for (let o = 0; o < s; o++) {
      let l = [], c = [];
      l.push(
        (o + s - 1) % s,
        o,
        (o + 1) % s
      ), c.push(0, 1, 0);
      const u = Qd(l);
      l = va(l, 1, u), c = va(c, 1, u), !i && l[0] === 0 && (l.push(s), c.push(c[0])), r.push(
        new wi(
          ".morphTargetInfluences[" + t[o].name + "]",
          l,
          c
        ).scale(1 / n)
      );
    }
    return new this(e, -1, r);
  }
  static findByName(e, t) {
    let n = e;
    if (!Array.isArray(e)) {
      const i = e;
      n = i.geometry && i.geometry.animations || i.animations;
    }
    for (let i = 0; i < n.length; i++)
      if (n[i].name === t)
        return n[i];
    return null;
  }
  static CreateClipsFromMorphTargetSequences(e, t, n) {
    const i = {}, s = /^([\w-]*?)([\d]+)$/;
    for (let o = 0, l = e.length; o < l; o++) {
      const c = e[o], u = c.name.match(s);
      if (u && u.length > 1) {
        const h = u[1];
        let d = i[h];
        d || (i[h] = d = []), d.push(c);
      }
    }
    const r = [];
    for (const o in i)
      r.push(this.CreateFromMorphTargetSequence(o, i[o], t, n));
    return r;
  }
  static parseAnimation(e, t) {
    if (!e)
      return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null;
    const n = function(h, d, p, g, m) {
      if (p.length !== 0) {
        const f = [], _ = [];
        uo(p, f, _, g), f.length !== 0 && m.push(new h(d, f, _));
      }
    }, i = [], s = e.name || "default", r = e.fps || 30, o = e.blendMode;
    let l = e.length || -1;
    const c = e.hierarchy || [];
    for (let h = 0; h < c.length; h++) {
      const d = c[h].keys;
      if (!(!d || d.length === 0))
        if (d[0].morphTargets) {
          const p = {};
          let g;
          for (g = 0; g < d.length; g++)
            if (d[g].morphTargets)
              for (let m = 0; m < d[g].morphTargets.length; m++)
                p[d[g].morphTargets[m]] = -1;
          for (const m in p) {
            const f = [], _ = [];
            for (let T = 0; T !== d[g].morphTargets.length; ++T) {
              const M = d[g];
              f.push(M.time), _.push(M.morphTarget === m ? 1 : 0);
            }
            i.push(new wi(".morphTargetInfluence[" + m + "]", f, _));
          }
          l = p.length * r;
        } else {
          const p = ".bones[" + t[h].name + "]";
          n(
            Ti,
            p + ".position",
            d,
            "pos",
            i
          ), n(
            En,
            p + ".quaternion",
            d,
            "rot",
            i
          ), n(
            Ti,
            p + ".scale",
            d,
            "scl",
            i
          );
        }
    }
    return i.length === 0 ? null : new this(s, l, i, o);
  }
  resetDuration() {
    const e = this.tracks;
    let t = 0;
    for (let n = 0, i = e.length; n !== i; ++n) {
      const s = this.tracks[n];
      t = Math.max(t, s.times[s.times.length - 1]);
    }
    return this.duration = t, this;
  }
  trim() {
    for (let e = 0; e < this.tracks.length; e++)
      this.tracks[e].trim(0, this.duration);
    return this;
  }
  validate() {
    let e = !0;
    for (let t = 0; t < this.tracks.length; t++)
      e = e && this.tracks[t].validate();
    return e;
  }
  optimize() {
    for (let e = 0; e < this.tracks.length; e++)
      this.tracks[e].optimize();
    return this;
  }
  clone() {
    const e = [];
    for (let t = 0; t < this.tracks.length; t++)
      e.push(this.tracks[t].clone());
    return new this.constructor(this.name, this.duration, e, this.blendMode);
  }
  toJSON() {
    return this.constructor.toJSON(this);
  }
}
function af(a) {
  switch (a.toLowerCase()) {
    case "scalar":
    case "double":
    case "float":
    case "number":
    case "integer":
      return wi;
    case "vector":
    case "vector2":
    case "vector3":
    case "vector4":
      return Ti;
    case "color":
      return ho;
    case "quaternion":
      return En;
    case "bool":
    case "boolean":
      return ai;
    case "string":
      return oi;
  }
  throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + a);
}
function of(a) {
  if (a.type === void 0)
    throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
  const e = af(a.type);
  if (a.times === void 0) {
    const t = [], n = [];
    uo(a.keys, t, n, "value"), a.times = t, a.values = n;
  }
  return e.parse !== void 0 ? e.parse(a) : new e(a.name, a.times, a.values, a.interpolation);
}
const Yn = {
  enabled: !1,
  files: {},
  add: function(a, e) {
    this.enabled !== !1 && (this.files[a] = e);
  },
  get: function(a) {
    if (this.enabled !== !1)
      return this.files[a];
  },
  remove: function(a) {
    delete this.files[a];
  },
  clear: function() {
    this.files = {};
  }
};
class lf {
  constructor(e, t, n) {
    const i = this;
    let s = !1, r = 0, o = 0, l;
    const c = [];
    this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = n, this.itemStart = function(u) {
      o++, s === !1 && i.onStart !== void 0 && i.onStart(u, r, o), s = !0;
    }, this.itemEnd = function(u) {
      r++, i.onProgress !== void 0 && i.onProgress(u, r, o), r === o && (s = !1, i.onLoad !== void 0 && i.onLoad());
    }, this.itemError = function(u) {
      i.onError !== void 0 && i.onError(u);
    }, this.resolveURL = function(u) {
      return l ? l(u) : u;
    }, this.setURLModifier = function(u) {
      return l = u, this;
    }, this.addHandler = function(u, h) {
      return c.push(u, h), this;
    }, this.removeHandler = function(u) {
      const h = c.indexOf(u);
      return h !== -1 && c.splice(h, 2), this;
    }, this.getHandler = function(u) {
      for (let h = 0, d = c.length; h < d; h += 2) {
        const p = c[h], g = c[h + 1];
        if (p.global && (p.lastIndex = 0), p.test(u))
          return g;
      }
      return null;
    };
  }
}
const cf = /* @__PURE__ */ new lf();
class Pi {
  constructor(e) {
    this.manager = e !== void 0 ? e : cf, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {};
  }
  load() {
  }
  loadAsync(e, t) {
    const n = this;
    return new Promise(function(i, s) {
      n.load(e, i, t, s);
    });
  }
  parse() {
  }
  setCrossOrigin(e) {
    return this.crossOrigin = e, this;
  }
  setWithCredentials(e) {
    return this.withCredentials = e, this;
  }
  setPath(e) {
    return this.path = e, this;
  }
  setResourcePath(e) {
    return this.resourcePath = e, this;
  }
  setRequestHeader(e) {
    return this.requestHeader = e, this;
  }
}
const Wt = {};
class uf extends Error {
  constructor(e, t) {
    super(e), this.response = t;
  }
}
class fo extends Pi {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const s = Yn.get(e);
    if (s !== void 0)
      return this.manager.itemStart(e), setTimeout(() => {
        t && t(s), this.manager.itemEnd(e);
      }, 0), s;
    if (Wt[e] !== void 0) {
      Wt[e].push({
        onLoad: t,
        onProgress: n,
        onError: i
      });
      return;
    }
    Wt[e] = [], Wt[e].push({
      onLoad: t,
      onProgress: n,
      onError: i
    });
    const r = new Request(e, {
      headers: new Headers(this.requestHeader),
      credentials: this.withCredentials ? "include" : "same-origin"
    }), o = this.mimeType, l = this.responseType;
    fetch(r).then((c) => {
      if (c.status === 200 || c.status === 0) {
        if (c.status === 0 && console.warn("THREE.FileLoader: HTTP Status 0 received."), typeof ReadableStream > "u" || c.body === void 0 || c.body.getReader === void 0)
          return c;
        const u = Wt[e], h = c.body.getReader(), d = c.headers.get("Content-Length"), p = d ? parseInt(d) : 0, g = p !== 0;
        let m = 0;
        const f = new ReadableStream({
          start(_) {
            T();
            function T() {
              h.read().then(({ done: M, value: S }) => {
                if (M)
                  _.close();
                else {
                  m += S.byteLength;
                  const b = new ProgressEvent("progress", { lengthComputable: g, loaded: m, total: p });
                  for (let A = 0, D = u.length; A < D; A++) {
                    const x = u[A];
                    x.onProgress && x.onProgress(b);
                  }
                  _.enqueue(S), T();
                }
              });
            }
          }
        });
        return new Response(f);
      } else
        throw new uf(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`, c);
    }).then((c) => {
      switch (l) {
        case "arraybuffer":
          return c.arrayBuffer();
        case "blob":
          return c.blob();
        case "document":
          return c.text().then((u) => new DOMParser().parseFromString(u, o));
        case "json":
          return c.json();
        default:
          if (o === void 0)
            return c.text();
          {
            const h = /charset="?([^;"\s]*)"?/i.exec(o), d = h && h[1] ? h[1].toLowerCase() : void 0, p = new TextDecoder(d);
            return c.arrayBuffer().then((g) => p.decode(g));
          }
      }
    }).then((c) => {
      Yn.add(e, c);
      const u = Wt[e];
      delete Wt[e];
      for (let h = 0, d = u.length; h < d; h++) {
        const p = u[h];
        p.onLoad && p.onLoad(c);
      }
    }).catch((c) => {
      const u = Wt[e];
      if (u === void 0)
        throw this.manager.itemError(e), c;
      delete Wt[e];
      for (let h = 0, d = u.length; h < d; h++) {
        const p = u[h];
        p.onError && p.onError(c);
      }
      this.manager.itemError(e);
    }).finally(() => {
      this.manager.itemEnd(e);
    }), this.manager.itemStart(e);
  }
  setResponseType(e) {
    return this.responseType = e, this;
  }
  setMimeType(e) {
    return this.mimeType = e, this;
  }
}
class hf extends Pi {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const s = this, r = Yn.get(e);
    if (r !== void 0)
      return s.manager.itemStart(e), setTimeout(function() {
        t && t(r), s.manager.itemEnd(e);
      }, 0), r;
    const o = bi("img");
    function l() {
      u(), Yn.add(e, this), t && t(this), s.manager.itemEnd(e);
    }
    function c(h) {
      u(), i && i(h), s.manager.itemError(e), s.manager.itemEnd(e);
    }
    function u() {
      o.removeEventListener("load", l, !1), o.removeEventListener("error", c, !1);
    }
    return o.addEventListener("load", l, !1), o.addEventListener("error", c, !1), e.slice(0, 5) !== "data:" && this.crossOrigin !== void 0 && (o.crossOrigin = this.crossOrigin), s.manager.itemStart(e), o.src = e, o;
  }
}
class df extends Pi {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const s = new ut(), r = new hf(this.manager);
    return r.setCrossOrigin(this.crossOrigin), r.setPath(this.path), r.load(e, function(o) {
      s.image = o, s.needsUpdate = !0, t !== void 0 && t(s);
    }, n, i), s;
  }
}
class gr extends ke {
  constructor(e, t = 1) {
    super(), this.isLight = !0, this.type = "Light", this.color = new Me(e), this.intensity = t;
  }
  dispose() {
  }
  copy(e, t) {
    return super.copy(e, t), this.color.copy(e.color), this.intensity = e.intensity, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.color = this.color.getHex(), t.object.intensity = this.intensity, this.groundColor !== void 0 && (t.object.groundColor = this.groundColor.getHex()), this.distance !== void 0 && (t.object.distance = this.distance), this.angle !== void 0 && (t.object.angle = this.angle), this.decay !== void 0 && (t.object.decay = this.decay), this.penumbra !== void 0 && (t.object.penumbra = this.penumbra), this.shadow !== void 0 && (t.object.shadow = this.shadow.toJSON()), t;
  }
}
const Ws = /* @__PURE__ */ new Ce(), ya = /* @__PURE__ */ new R(), Ma = /* @__PURE__ */ new R();
class _r {
  constructor(e) {
    this.camera = e, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new Le(512, 512), this.map = null, this.mapPass = null, this.matrix = new Ce(), this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new cr(), this._frameExtents = new Le(1, 1), this._viewportCount = 1, this._viewports = [
      new ze(0, 0, 1, 1)
    ];
  }
  getViewportCount() {
    return this._viewportCount;
  }
  getFrustum() {
    return this._frustum;
  }
  updateMatrices(e) {
    const t = this.camera, n = this.matrix;
    ya.setFromMatrixPosition(e.matrixWorld), t.position.copy(ya), Ma.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(Ma), t.updateMatrixWorld(), Ws.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), this._frustum.setFromProjectionMatrix(Ws), n.set(
      0.5,
      0,
      0,
      0.5,
      0,
      0.5,
      0,
      0.5,
      0,
      0,
      0.5,
      0.5,
      0,
      0,
      0,
      1
    ), n.multiply(Ws);
  }
  getViewport(e) {
    return this._viewports[e];
  }
  getFrameExtents() {
    return this._frameExtents;
  }
  dispose() {
    this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
  }
  copy(e) {
    return this.camera = e.camera.clone(), this.bias = e.bias, this.radius = e.radius, this.mapSize.copy(e.mapSize), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    const e = {};
    return this.bias !== 0 && (e.bias = this.bias), this.normalBias !== 0 && (e.normalBias = this.normalBias), this.radius !== 1 && (e.radius = this.radius), (this.mapSize.x !== 512 || this.mapSize.y !== 512) && (e.mapSize = this.mapSize.toArray()), e.camera = this.camera.toJSON(!1).object, delete e.camera.matrix, e;
  }
}
class ff extends _r {
  constructor() {
    super(new ct(50, 1, 0.5, 500)), this.isSpotLightShadow = !0, this.focus = 1;
  }
  updateMatrices(e) {
    const t = this.camera, n = Si * 2 * e.angle * this.focus, i = this.mapSize.width / this.mapSize.height, s = e.distance || t.far;
    (n !== t.fov || i !== t.aspect || s !== t.far) && (t.fov = n, t.aspect = i, t.far = s, t.updateProjectionMatrix()), super.updateMatrices(e);
  }
  copy(e) {
    return super.copy(e), this.focus = e.focus, this;
  }
}
class pf extends gr {
  constructor(e, t, n = 0, i = Math.PI / 3, s = 0, r = 1) {
    super(e, t), this.isSpotLight = !0, this.type = "SpotLight", this.position.copy(ke.DefaultUp), this.updateMatrix(), this.target = new ke(), this.distance = n, this.angle = i, this.penumbra = s, this.decay = r, this.map = null, this.shadow = new ff();
  }
  get power() {
    return this.intensity * Math.PI;
  }
  set power(e) {
    this.intensity = e / Math.PI;
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e, t) {
    return super.copy(e, t), this.distance = e.distance, this.angle = e.angle, this.penumbra = e.penumbra, this.decay = e.decay, this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
  }
}
const Sa = /* @__PURE__ */ new Ce(), pi = /* @__PURE__ */ new R(), $s = /* @__PURE__ */ new R();
class mf extends _r {
  constructor() {
    super(new ct(90, 1, 0.5, 500)), this.isPointLightShadow = !0, this._frameExtents = new Le(4, 2), this._viewportCount = 6, this._viewports = [
      new ze(2, 1, 1, 1),
      new ze(0, 1, 1, 1),
      new ze(3, 1, 1, 1),
      new ze(1, 1, 1, 1),
      new ze(3, 0, 1, 1),
      new ze(1, 0, 1, 1)
    ], this._cubeDirections = [
      new R(1, 0, 0),
      new R(-1, 0, 0),
      new R(0, 0, 1),
      new R(0, 0, -1),
      new R(0, 1, 0),
      new R(0, -1, 0)
    ], this._cubeUps = [
      new R(0, 1, 0),
      new R(0, 1, 0),
      new R(0, 1, 0),
      new R(0, 1, 0),
      new R(0, 0, 1),
      new R(0, 0, -1)
    ];
  }
  updateMatrices(e, t = 0) {
    const n = this.camera, i = this.matrix, s = e.distance || n.far;
    s !== n.far && (n.far = s, n.updateProjectionMatrix()), pi.setFromMatrixPosition(e.matrixWorld), n.position.copy(pi), $s.copy(n.position), $s.add(this._cubeDirections[t]), n.up.copy(this._cubeUps[t]), n.lookAt($s), n.updateMatrixWorld(), i.makeTranslation(-pi.x, -pi.y, -pi.z), Sa.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse), this._frustum.setFromProjectionMatrix(Sa);
  }
}
class gf extends gr {
  constructor(e, t, n = 0, i = 1) {
    super(e, t), this.isPointLight = !0, this.type = "PointLight", this.distance = n, this.decay = i, this.shadow = new mf();
  }
  get power() {
    return this.intensity * 4 * Math.PI;
  }
  set power(e) {
    this.intensity = e / (4 * Math.PI);
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e, t) {
    return super.copy(e, t), this.distance = e.distance, this.decay = e.decay, this.shadow = e.shadow.clone(), this;
  }
}
class _f extends _r {
  constructor() {
    super(new hr(-5, 5, 5, -5, 0.5, 500)), this.isDirectionalLightShadow = !0;
  }
}
class po extends gr {
  constructor(e, t) {
    super(e, t), this.isDirectionalLight = !0, this.type = "DirectionalLight", this.position.copy(ke.DefaultUp), this.updateMatrix(), this.target = new ke(), this.shadow = new _f();
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e) {
    return super.copy(e), this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
  }
}
class bn {
  static decodeText(e) {
    if (typeof TextDecoder < "u")
      return new TextDecoder().decode(e);
    let t = "";
    for (let n = 0, i = e.length; n < i; n++)
      t += String.fromCharCode(e[n]);
    try {
      return decodeURIComponent(escape(t));
    } catch {
      return t;
    }
  }
  static extractUrlBase(e) {
    const t = e.lastIndexOf("/");
    return t === -1 ? "./" : e.slice(0, t + 1);
  }
  static resolveURL(e, t) {
    return typeof e != "string" || e === "" ? "" : (/^https?:\/\//i.test(t) && /^\//.test(e) && (t = t.replace(/(^https?:\/\/[^\/]+).*/i, "$1")), /^(https?:)?\/\//i.test(e) || /^data:.*,.*$/i.test(e) || /^blob:.*$/i.test(e) ? e : t + e);
  }
}
class xf extends Pi {
  constructor(e) {
    super(e), this.isImageBitmapLoader = !0, typeof createImageBitmap > "u" && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."), typeof fetch > "u" && console.warn("THREE.ImageBitmapLoader: fetch() not supported."), this.options = { premultiplyAlpha: "none" };
  }
  setOptions(e) {
    return this.options = e, this;
  }
  load(e, t, n, i) {
    e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const s = this, r = Yn.get(e);
    if (r !== void 0)
      return s.manager.itemStart(e), setTimeout(function() {
        t && t(r), s.manager.itemEnd(e);
      }, 0), r;
    const o = {};
    o.credentials = this.crossOrigin === "anonymous" ? "same-origin" : "include", o.headers = this.requestHeader, fetch(e, o).then(function(l) {
      return l.blob();
    }).then(function(l) {
      return createImageBitmap(l, Object.assign(s.options, { colorSpaceConversion: "none" }));
    }).then(function(l) {
      Yn.add(e, l), t && t(l), s.manager.itemEnd(e);
    }).catch(function(l) {
      i && i(l), s.manager.itemError(e), s.manager.itemEnd(e);
    }), s.manager.itemStart(e);
  }
}
const xr = "\\[\\]\\.:\\/", vf = new RegExp("[" + xr + "]", "g"), vr = "[^" + xr + "]", yf = "[^" + xr.replace("\\.", "") + "]", Mf = /* @__PURE__ */ /((?:WC+[\/:])*)/.source.replace("WC", vr), Sf = /* @__PURE__ */ /(WCOD+)?/.source.replace("WCOD", yf), bf = /* @__PURE__ */ /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", vr), wf = /* @__PURE__ */ /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", vr), Tf = new RegExp(
  "^" + Mf + Sf + bf + wf + "$"
), Ef = ["material", "materials", "bones", "map"];
class Af {
  constructor(e, t, n) {
    const i = n || Fe.parseTrackName(t);
    this._targetGroup = e, this._bindings = e.subscribe_(t, i);
  }
  getValue(e, t) {
    this.bind();
    const n = this._targetGroup.nCachedObjects_, i = this._bindings[n];
    i !== void 0 && i.getValue(e, t);
  }
  setValue(e, t) {
    const n = this._bindings;
    for (let i = this._targetGroup.nCachedObjects_, s = n.length; i !== s; ++i)
      n[i].setValue(e, t);
  }
  bind() {
    const e = this._bindings;
    for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t)
      e[t].bind();
  }
  unbind() {
    const e = this._bindings;
    for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t)
      e[t].unbind();
  }
}
class Fe {
  constructor(e, t, n) {
    this.path = t, this.parsedPath = n || Fe.parseTrackName(t), this.node = Fe.findNode(e, this.parsedPath.nodeName) || e, this.rootNode = e, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
  }
  static create(e, t, n) {
    return e && e.isAnimationObjectGroup ? new Fe.Composite(e, t, n) : new Fe(e, t, n);
  }
  static sanitizeNodeName(e) {
    return e.replace(/\s/g, "_").replace(vf, "");
  }
  static parseTrackName(e) {
    const t = Tf.exec(e);
    if (t === null)
      throw new Error("PropertyBinding: Cannot parse trackName: " + e);
    const n = {
      nodeName: t[2],
      objectName: t[3],
      objectIndex: t[4],
      propertyName: t[5],
      propertyIndex: t[6]
    }, i = n.nodeName && n.nodeName.lastIndexOf(".");
    if (i !== void 0 && i !== -1) {
      const s = n.nodeName.substring(i + 1);
      Ef.indexOf(s) !== -1 && (n.nodeName = n.nodeName.substring(0, i), n.objectName = s);
    }
    if (n.propertyName === null || n.propertyName.length === 0)
      throw new Error("PropertyBinding: can not parse propertyName from trackName: " + e);
    return n;
  }
  static findNode(e, t) {
    if (t === void 0 || t === "" || t === "." || t === -1 || t === e.name || t === e.uuid)
      return e;
    if (e.skeleton) {
      const n = e.skeleton.getBoneByName(t);
      if (n !== void 0)
        return n;
    }
    if (e.children) {
      const n = function(s) {
        for (let r = 0; r < s.length; r++) {
          const o = s[r];
          if (o.name === t || o.uuid === t)
            return o;
          const l = n(o.children);
          if (l)
            return l;
        }
        return null;
      }, i = n(e.children);
      if (i)
        return i;
    }
    return null;
  }
  _getValue_unavailable() {
  }
  _setValue_unavailable() {
  }
  _getValue_direct(e, t) {
    e[t] = this.targetObject[this.propertyName];
  }
  _getValue_array(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, s = n.length; i !== s; ++i)
      e[t++] = n[i];
  }
  _getValue_arrayElement(e, t) {
    e[t] = this.resolvedProperty[this.propertyIndex];
  }
  _getValue_toArray(e, t) {
    this.resolvedProperty.toArray(e, t);
  }
  _setValue_direct(e, t) {
    this.targetObject[this.propertyName] = e[t];
  }
  _setValue_direct_setNeedsUpdate(e, t) {
    this.targetObject[this.propertyName] = e[t], this.targetObject.needsUpdate = !0;
  }
  _setValue_direct_setMatrixWorldNeedsUpdate(e, t) {
    this.targetObject[this.propertyName] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  _setValue_array(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, s = n.length; i !== s; ++i)
      n[i] = e[t++];
  }
  _setValue_array_setNeedsUpdate(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, s = n.length; i !== s; ++i)
      n[i] = e[t++];
    this.targetObject.needsUpdate = !0;
  }
  _setValue_array_setMatrixWorldNeedsUpdate(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, s = n.length; i !== s; ++i)
      n[i] = e[t++];
    this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  _setValue_arrayElement(e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t];
  }
  _setValue_arrayElement_setNeedsUpdate(e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.needsUpdate = !0;
  }
  _setValue_arrayElement_setMatrixWorldNeedsUpdate(e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  _setValue_fromArray(e, t) {
    this.resolvedProperty.fromArray(e, t);
  }
  _setValue_fromArray_setNeedsUpdate(e, t) {
    this.resolvedProperty.fromArray(e, t), this.targetObject.needsUpdate = !0;
  }
  _setValue_fromArray_setMatrixWorldNeedsUpdate(e, t) {
    this.resolvedProperty.fromArray(e, t), this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  _getValue_unbound(e, t) {
    this.bind(), this.getValue(e, t);
  }
  _setValue_unbound(e, t) {
    this.bind(), this.setValue(e, t);
  }
  bind() {
    let e = this.node;
    const t = this.parsedPath, n = t.objectName, i = t.propertyName;
    let s = t.propertyIndex;
    if (e || (e = Fe.findNode(this.rootNode, t.nodeName) || this.rootNode, this.node = e), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !e) {
      console.error("THREE.PropertyBinding: Trying to update node for track: " + this.path + " but it wasn't found.");
      return;
    }
    if (n) {
      let c = t.objectIndex;
      switch (n) {
        case "materials":
          if (!e.material) {
            console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
            return;
          }
          if (!e.material.materials) {
            console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
            return;
          }
          e = e.material.materials;
          break;
        case "bones":
          if (!e.skeleton) {
            console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
            return;
          }
          e = e.skeleton.bones;
          for (let u = 0; u < e.length; u++)
            if (e[u].name === c) {
              c = u;
              break;
            }
          break;
        case "map":
          if ("map" in e) {
            e = e.map;
            break;
          }
          if (!e.material) {
            console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
            return;
          }
          if (!e.material.map) {
            console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.", this);
            return;
          }
          e = e.material.map;
          break;
        default:
          if (e[n] === void 0) {
            console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
            return;
          }
          e = e[n];
      }
      if (c !== void 0) {
        if (e[c] === void 0) {
          console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, e);
          return;
        }
        e = e[c];
      }
    }
    const r = e[i];
    if (r === void 0) {
      const c = t.nodeName;
      console.error("THREE.PropertyBinding: Trying to update property for track: " + c + "." + i + " but it wasn't found.", e);
      return;
    }
    let o = this.Versioning.None;
    this.targetObject = e, e.needsUpdate !== void 0 ? o = this.Versioning.NeedsUpdate : e.matrixWorldNeedsUpdate !== void 0 && (o = this.Versioning.MatrixWorldNeedsUpdate);
    let l = this.BindingType.Direct;
    if (s !== void 0) {
      if (i === "morphTargetInfluences") {
        if (!e.geometry) {
          console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
          return;
        }
        if (!e.geometry.morphAttributes) {
          console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
          return;
        }
        e.morphTargetDictionary[s] !== void 0 && (s = e.morphTargetDictionary[s]);
      }
      l = this.BindingType.ArrayElement, this.resolvedProperty = r, this.propertyIndex = s;
    } else
      r.fromArray !== void 0 && r.toArray !== void 0 ? (l = this.BindingType.HasFromToArray, this.resolvedProperty = r) : Array.isArray(r) ? (l = this.BindingType.EntireArray, this.resolvedProperty = r) : this.propertyName = i;
    this.getValue = this.GetterByBindingType[l], this.setValue = this.SetterByBindingTypeAndVersioning[l][o];
  }
  unbind() {
    this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
  }
}
Fe.Composite = Af;
Fe.prototype.BindingType = {
  Direct: 0,
  EntireArray: 1,
  ArrayElement: 2,
  HasFromToArray: 3
};
Fe.prototype.Versioning = {
  None: 0,
  NeedsUpdate: 1,
  MatrixWorldNeedsUpdate: 2
};
Fe.prototype.GetterByBindingType = [
  Fe.prototype._getValue_direct,
  Fe.prototype._getValue_array,
  Fe.prototype._getValue_arrayElement,
  Fe.prototype._getValue_toArray
];
Fe.prototype.SetterByBindingTypeAndVersioning = [
  [
    Fe.prototype._setValue_direct,
    Fe.prototype._setValue_direct_setNeedsUpdate,
    Fe.prototype._setValue_direct_setMatrixWorldNeedsUpdate
  ],
  [
    Fe.prototype._setValue_array,
    Fe.prototype._setValue_array_setNeedsUpdate,
    Fe.prototype._setValue_array_setMatrixWorldNeedsUpdate
  ],
  [
    Fe.prototype._setValue_arrayElement,
    Fe.prototype._setValue_arrayElement_setNeedsUpdate,
    Fe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate
  ],
  [
    Fe.prototype._setValue_fromArray,
    Fe.prototype._setValue_fromArray_setNeedsUpdate,
    Fe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate
  ]
];
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: {
  revision: ar
} }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = ar);
let mi;
const Ii = document.createElement("canvas");
Ii.id = "canvas";
Ii.width = window.innerWidth;
Ii.height = window.innerHeight;
document.body.appendChild(Ii);
document.body.style.margin = "0";
document.body.style.overflow = "hidden";
document.body.style.backgroundColor = "#000000";
function ba() {
  if (mi === void 0) {
    const a = new ro({ canvas: Ii });
    a.physicallyCorrectLights = !0, a.outputEncoding = 3001, a.toneMapping = 4, a.toneMappingExposure = 1, a.shadowMap.enabled = !0, a.shadowMap.type = 2, mi = new Vd();
    const e = new po(16777215, 10);
    e.position.set(0, 1, 0), e.castShadow = !0, e.shadow.mapSize.width = 2048, e.shadow.mapSize.height = 2048, e.shadow.camera.near = 0.5, e.shadow.camera.far = 500, mi.add(e);
    const t = new ct(75, window.innerWidth / window.innerHeight, 0.1, 1e3);
    t.position.z = 5;
    const n = function() {
      requestAnimationFrame(n), a.render(mi, t);
    };
    n();
  }
  return mi;
}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const os = window, yr = os.ShadowRoot && (os.ShadyCSS === void 0 || os.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, mo = Symbol(), wa = /* @__PURE__ */ new WeakMap();
class Cf {
  constructor(e, t, n) {
    if (this._$cssResult$ = !0, n !== mo)
      throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (yr && e === void 0) {
      const n = t !== void 0 && t.length === 1;
      n && (e = wa.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), n && wa.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
}
const Rf = (a) => new Cf(typeof a == "string" ? a : a + "", void 0, mo), Lf = (a, e) => {
  yr ? a.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet) : e.forEach((t) => {
    const n = document.createElement("style"), i = os.litNonce;
    i !== void 0 && n.setAttribute("nonce", i), n.textContent = t.cssText, a.appendChild(n);
  });
}, Ta = yr ? (a) => a : (a) => a instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const n of e.cssRules)
    t += n.cssText;
  return Rf(t);
})(a) : a;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var qs;
const cs = window, Ea = cs.trustedTypes, Df = Ea ? Ea.emptyScript : "", Aa = cs.reactiveElementPolyfillSupport, nr = { toAttribute(a, e) {
  switch (e) {
    case Boolean:
      a = a ? Df : null;
      break;
    case Object:
    case Array:
      a = a == null ? a : JSON.stringify(a);
  }
  return a;
}, fromAttribute(a, e) {
  let t = a;
  switch (e) {
    case Boolean:
      t = a !== null;
      break;
    case Number:
      t = a === null ? null : Number(a);
      break;
    case Object:
    case Array:
      try {
        t = JSON.parse(a);
      } catch {
        t = null;
      }
  }
  return t;
} }, go = (a, e) => e !== a && (e == e || a == a), Xs = { attribute: !0, type: String, converter: nr, reflect: !1, hasChanged: go };
class $n extends HTMLElement {
  constructor() {
    super(), this._$Ei = /* @__PURE__ */ new Map(), this.isUpdatePending = !1, this.hasUpdated = !1, this._$El = null, this.u();
  }
  static addInitializer(e) {
    var t;
    (t = this.h) !== null && t !== void 0 || (this.h = []), this.h.push(e);
  }
  static get observedAttributes() {
    this.finalize();
    const e = [];
    return this.elementProperties.forEach((t, n) => {
      const i = this._$Ep(n, t);
      i !== void 0 && (this._$Ev.set(i, n), e.push(i));
    }), e;
  }
  static createProperty(e, t = Xs) {
    if (t.state && (t.attribute = !1), this.finalize(), this.elementProperties.set(e, t), !t.noAccessor && !this.prototype.hasOwnProperty(e)) {
      const n = typeof e == "symbol" ? Symbol() : "__" + e, i = this.getPropertyDescriptor(e, n, t);
      i !== void 0 && Object.defineProperty(this.prototype, e, i);
    }
  }
  static getPropertyDescriptor(e, t, n) {
    return { get() {
      return this[t];
    }, set(i) {
      const s = this[e];
      this[t] = i, this.requestUpdate(e, s, n);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) || Xs;
  }
  static finalize() {
    if (this.hasOwnProperty("finalized"))
      return !1;
    this.finalized = !0;
    const e = Object.getPrototypeOf(this);
    if (e.finalize(), this.elementProperties = new Map(e.elementProperties), this._$Ev = /* @__PURE__ */ new Map(), this.hasOwnProperty("properties")) {
      const t = this.properties, n = [...Object.getOwnPropertyNames(t), ...Object.getOwnPropertySymbols(t)];
      for (const i of n)
        this.createProperty(i, t[i]);
    }
    return this.elementStyles = this.finalizeStyles(this.styles), !0;
  }
  static finalizeStyles(e) {
    const t = [];
    if (Array.isArray(e)) {
      const n = new Set(e.flat(1 / 0).reverse());
      for (const i of n)
        t.unshift(Ta(i));
    } else
      e !== void 0 && t.push(Ta(e));
    return t;
  }
  static _$Ep(e, t) {
    const n = t.attribute;
    return n === !1 ? void 0 : typeof n == "string" ? n : typeof e == "string" ? e.toLowerCase() : void 0;
  }
  u() {
    var e;
    this._$E_ = new Promise((t) => this.enableUpdating = t), this._$AL = /* @__PURE__ */ new Map(), this._$Eg(), this.requestUpdate(), (e = this.constructor.h) === null || e === void 0 || e.forEach((t) => t(this));
  }
  addController(e) {
    var t, n;
    ((t = this._$ES) !== null && t !== void 0 ? t : this._$ES = []).push(e), this.renderRoot !== void 0 && this.isConnected && ((n = e.hostConnected) === null || n === void 0 || n.call(e));
  }
  removeController(e) {
    var t;
    (t = this._$ES) === null || t === void 0 || t.splice(this._$ES.indexOf(e) >>> 0, 1);
  }
  _$Eg() {
    this.constructor.elementProperties.forEach((e, t) => {
      this.hasOwnProperty(t) && (this._$Ei.set(t, this[t]), delete this[t]);
    });
  }
  createRenderRoot() {
    var e;
    const t = (e = this.shadowRoot) !== null && e !== void 0 ? e : this.attachShadow(this.constructor.shadowRootOptions);
    return Lf(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    var e;
    this.renderRoot === void 0 && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (e = this._$ES) === null || e === void 0 || e.forEach((t) => {
      var n;
      return (n = t.hostConnected) === null || n === void 0 ? void 0 : n.call(t);
    });
  }
  enableUpdating(e) {
  }
  disconnectedCallback() {
    var e;
    (e = this._$ES) === null || e === void 0 || e.forEach((t) => {
      var n;
      return (n = t.hostDisconnected) === null || n === void 0 ? void 0 : n.call(t);
    });
  }
  attributeChangedCallback(e, t, n) {
    this._$AK(e, n);
  }
  _$EO(e, t, n = Xs) {
    var i;
    const s = this.constructor._$Ep(e, n);
    if (s !== void 0 && n.reflect === !0) {
      const r = (((i = n.converter) === null || i === void 0 ? void 0 : i.toAttribute) !== void 0 ? n.converter : nr).toAttribute(t, n.type);
      this._$El = e, r == null ? this.removeAttribute(s) : this.setAttribute(s, r), this._$El = null;
    }
  }
  _$AK(e, t) {
    var n;
    const i = this.constructor, s = i._$Ev.get(e);
    if (s !== void 0 && this._$El !== s) {
      const r = i.getPropertyOptions(s), o = typeof r.converter == "function" ? { fromAttribute: r.converter } : ((n = r.converter) === null || n === void 0 ? void 0 : n.fromAttribute) !== void 0 ? r.converter : nr;
      this._$El = s, this[s] = o.fromAttribute(t, r.type), this._$El = null;
    }
  }
  requestUpdate(e, t, n) {
    let i = !0;
    e !== void 0 && (((n = n || this.constructor.getPropertyOptions(e)).hasChanged || go)(this[e], t) ? (this._$AL.has(e) || this._$AL.set(e, t), n.reflect === !0 && this._$El !== e && (this._$EC === void 0 && (this._$EC = /* @__PURE__ */ new Map()), this._$EC.set(e, n))) : i = !1), !this.isUpdatePending && i && (this._$E_ = this._$Ej());
  }
  async _$Ej() {
    this.isUpdatePending = !0;
    try {
      await this._$E_;
    } catch (t) {
      Promise.reject(t);
    }
    const e = this.scheduleUpdate();
    return e != null && await e, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var e;
    if (!this.isUpdatePending)
      return;
    this.hasUpdated, this._$Ei && (this._$Ei.forEach((i, s) => this[s] = i), this._$Ei = void 0);
    let t = !1;
    const n = this._$AL;
    try {
      t = this.shouldUpdate(n), t ? (this.willUpdate(n), (e = this._$ES) === null || e === void 0 || e.forEach((i) => {
        var s;
        return (s = i.hostUpdate) === null || s === void 0 ? void 0 : s.call(i);
      }), this.update(n)) : this._$Ek();
    } catch (i) {
      throw t = !1, this._$Ek(), i;
    }
    t && this._$AE(n);
  }
  willUpdate(e) {
  }
  _$AE(e) {
    var t;
    (t = this._$ES) === null || t === void 0 || t.forEach((n) => {
      var i;
      return (i = n.hostUpdated) === null || i === void 0 ? void 0 : i.call(n);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(e)), this.updated(e);
  }
  _$Ek() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$E_;
  }
  shouldUpdate(e) {
    return !0;
  }
  update(e) {
    this._$EC !== void 0 && (this._$EC.forEach((t, n) => this._$EO(n, this[n], t)), this._$EC = void 0), this._$Ek();
  }
  updated(e) {
  }
  firstUpdated(e) {
  }
}
$n.finalized = !0, $n.elementProperties = /* @__PURE__ */ new Map(), $n.elementStyles = [], $n.shadowRootOptions = { mode: "open" }, Aa == null || Aa({ ReactiveElement: $n }), ((qs = cs.reactiveElementVersions) !== null && qs !== void 0 ? qs : cs.reactiveElementVersions = []).push("1.4.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var js;
const us = window, Zn = us.trustedTypes, Ca = Zn ? Zn.createPolicy("lit-html", { createHTML: (a) => a }) : void 0, an = `lit$${(Math.random() + "").slice(9)}$`, _o = "?" + an, Pf = `<${_o}>`, Jn = document, Ei = (a = "") => Jn.createComment(a), Ai = (a) => a === null || typeof a != "object" && typeof a != "function", xo = Array.isArray, If = (a) => xo(a) || typeof (a == null ? void 0 : a[Symbol.iterator]) == "function", gi = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Ra = /-->/g, La = />/g, mn = RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Da = /'/g, Pa = /"/g, vo = /^(?:script|style|textarea|title)$/i, Nf = (a) => (e, ...t) => ({ _$litType$: a, strings: e, values: t }), yo = Nf(1), Qn = Symbol.for("lit-noChange"), Qe = Symbol.for("lit-nothing"), Ia = /* @__PURE__ */ new WeakMap(), Xn = Jn.createTreeWalker(Jn, 129, null, !1), Ff = (a, e) => {
  const t = a.length - 1, n = [];
  let i, s = e === 2 ? "<svg>" : "", r = gi;
  for (let l = 0; l < t; l++) {
    const c = a[l];
    let u, h, d = -1, p = 0;
    for (; p < c.length && (r.lastIndex = p, h = r.exec(c), h !== null); )
      p = r.lastIndex, r === gi ? h[1] === "!--" ? r = Ra : h[1] !== void 0 ? r = La : h[2] !== void 0 ? (vo.test(h[2]) && (i = RegExp("</" + h[2], "g")), r = mn) : h[3] !== void 0 && (r = mn) : r === mn ? h[0] === ">" ? (r = i != null ? i : gi, d = -1) : h[1] === void 0 ? d = -2 : (d = r.lastIndex - h[2].length, u = h[1], r = h[3] === void 0 ? mn : h[3] === '"' ? Pa : Da) : r === Pa || r === Da ? r = mn : r === Ra || r === La ? r = gi : (r = mn, i = void 0);
    const g = r === mn && a[l + 1].startsWith("/>") ? " " : "";
    s += r === gi ? c + Pf : d >= 0 ? (n.push(u), c.slice(0, d) + "$lit$" + c.slice(d) + an + g) : c + an + (d === -2 ? (n.push(void 0), l) : g);
  }
  const o = s + (a[t] || "<?>") + (e === 2 ? "</svg>" : "");
  if (!Array.isArray(a) || !a.hasOwnProperty("raw"))
    throw Error("invalid template strings array");
  return [Ca !== void 0 ? Ca.createHTML(o) : o, n];
};
class Ci {
  constructor({ strings: e, _$litType$: t }, n) {
    let i;
    this.parts = [];
    let s = 0, r = 0;
    const o = e.length - 1, l = this.parts, [c, u] = Ff(e, t);
    if (this.el = Ci.createElement(c, n), Xn.currentNode = this.el.content, t === 2) {
      const h = this.el.content, d = h.firstChild;
      d.remove(), h.append(...d.childNodes);
    }
    for (; (i = Xn.nextNode()) !== null && l.length < o; ) {
      if (i.nodeType === 1) {
        if (i.hasAttributes()) {
          const h = [];
          for (const d of i.getAttributeNames())
            if (d.endsWith("$lit$") || d.startsWith(an)) {
              const p = u[r++];
              if (h.push(d), p !== void 0) {
                const g = i.getAttribute(p.toLowerCase() + "$lit$").split(an), m = /([.?@])?(.*)/.exec(p);
                l.push({ type: 1, index: s, name: m[2], strings: g, ctor: m[1] === "." ? Of : m[1] === "?" ? zf : m[1] === "@" ? Gf : ps });
              } else
                l.push({ type: 6, index: s });
            }
          for (const d of h)
            i.removeAttribute(d);
        }
        if (vo.test(i.tagName)) {
          const h = i.textContent.split(an), d = h.length - 1;
          if (d > 0) {
            i.textContent = Zn ? Zn.emptyScript : "";
            for (let p = 0; p < d; p++)
              i.append(h[p], Ei()), Xn.nextNode(), l.push({ type: 2, index: ++s });
            i.append(h[d], Ei());
          }
        }
      } else if (i.nodeType === 8)
        if (i.data === _o)
          l.push({ type: 2, index: s });
        else {
          let h = -1;
          for (; (h = i.data.indexOf(an, h + 1)) !== -1; )
            l.push({ type: 7, index: s }), h += an.length - 1;
        }
      s++;
    }
  }
  static createElement(e, t) {
    const n = Jn.createElement("template");
    return n.innerHTML = e, n;
  }
}
function ei(a, e, t = a, n) {
  var i, s, r, o;
  if (e === Qn)
    return e;
  let l = n !== void 0 ? (i = t._$Co) === null || i === void 0 ? void 0 : i[n] : t._$Cl;
  const c = Ai(e) ? void 0 : e._$litDirective$;
  return (l == null ? void 0 : l.constructor) !== c && ((s = l == null ? void 0 : l._$AO) === null || s === void 0 || s.call(l, !1), c === void 0 ? l = void 0 : (l = new c(a), l._$AT(a, t, n)), n !== void 0 ? ((r = (o = t)._$Co) !== null && r !== void 0 ? r : o._$Co = [])[n] = l : t._$Cl = l), l !== void 0 && (e = ei(a, l._$AS(a, e.values), l, n)), e;
}
class Uf {
  constructor(e, t) {
    this.u = [], this._$AN = void 0, this._$AD = e, this._$AM = t;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  v(e) {
    var t;
    const { el: { content: n }, parts: i } = this._$AD, s = ((t = e == null ? void 0 : e.creationScope) !== null && t !== void 0 ? t : Jn).importNode(n, !0);
    Xn.currentNode = s;
    let r = Xn.nextNode(), o = 0, l = 0, c = i[0];
    for (; c !== void 0; ) {
      if (o === c.index) {
        let u;
        c.type === 2 ? u = new Ni(r, r.nextSibling, this, e) : c.type === 1 ? u = new c.ctor(r, c.name, c.strings, this, e) : c.type === 6 && (u = new kf(r, this, e)), this.u.push(u), c = i[++l];
      }
      o !== (c == null ? void 0 : c.index) && (r = Xn.nextNode(), o++);
    }
    return s;
  }
  p(e) {
    let t = 0;
    for (const n of this.u)
      n !== void 0 && (n.strings !== void 0 ? (n._$AI(e, n, t), t += n.strings.length - 2) : n._$AI(e[t])), t++;
  }
}
class Ni {
  constructor(e, t, n, i) {
    var s;
    this.type = 2, this._$AH = Qe, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = n, this.options = i, this._$Cm = (s = i == null ? void 0 : i.isConnected) === null || s === void 0 || s;
  }
  get _$AU() {
    var e, t;
    return (t = (e = this._$AM) === null || e === void 0 ? void 0 : e._$AU) !== null && t !== void 0 ? t : this._$Cm;
  }
  get parentNode() {
    let e = this._$AA.parentNode;
    const t = this._$AM;
    return t !== void 0 && e.nodeType === 11 && (e = t.parentNode), e;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(e, t = this) {
    e = ei(this, e, t), Ai(e) ? e === Qe || e == null || e === "" ? (this._$AH !== Qe && this._$AR(), this._$AH = Qe) : e !== this._$AH && e !== Qn && this.g(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : If(e) ? this.k(e) : this.g(e);
  }
  O(e, t = this._$AB) {
    return this._$AA.parentNode.insertBefore(e, t);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  g(e) {
    this._$AH !== Qe && Ai(this._$AH) ? this._$AA.nextSibling.data = e : this.T(Jn.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var t;
    const { values: n, _$litType$: i } = e, s = typeof i == "number" ? this._$AC(e) : (i.el === void 0 && (i.el = Ci.createElement(i.h, this.options)), i);
    if (((t = this._$AH) === null || t === void 0 ? void 0 : t._$AD) === s)
      this._$AH.p(n);
    else {
      const r = new Uf(s, this), o = r.v(this.options);
      r.p(n), this.T(o), this._$AH = r;
    }
  }
  _$AC(e) {
    let t = Ia.get(e.strings);
    return t === void 0 && Ia.set(e.strings, t = new Ci(e)), t;
  }
  k(e) {
    xo(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let n, i = 0;
    for (const s of e)
      i === t.length ? t.push(n = new Ni(this.O(Ei()), this.O(Ei()), this, this.options)) : n = t[i], n._$AI(s), i++;
    i < t.length && (this._$AR(n && n._$AB.nextSibling, i), t.length = i);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    var n;
    for ((n = this._$AP) === null || n === void 0 || n.call(this, !1, !0, t); e && e !== this._$AB; ) {
      const i = e.nextSibling;
      e.remove(), e = i;
    }
  }
  setConnected(e) {
    var t;
    this._$AM === void 0 && (this._$Cm = e, (t = this._$AP) === null || t === void 0 || t.call(this, e));
  }
}
class ps {
  constructor(e, t, n, i, s) {
    this.type = 1, this._$AH = Qe, this._$AN = void 0, this.element = e, this.name = t, this._$AM = i, this.options = s, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = Qe;
  }
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e, t = this, n, i) {
    const s = this.strings;
    let r = !1;
    if (s === void 0)
      e = ei(this, e, t, 0), r = !Ai(e) || e !== this._$AH && e !== Qn, r && (this._$AH = e);
    else {
      const o = e;
      let l, c;
      for (e = s[0], l = 0; l < s.length - 1; l++)
        c = ei(this, o[n + l], t, l), c === Qn && (c = this._$AH[l]), r || (r = !Ai(c) || c !== this._$AH[l]), c === Qe ? e = Qe : e !== Qe && (e += (c != null ? c : "") + s[l + 1]), this._$AH[l] = c;
    }
    r && !i && this.j(e);
  }
  j(e) {
    e === Qe ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e != null ? e : "");
  }
}
class Of extends ps {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === Qe ? void 0 : e;
  }
}
const Bf = Zn ? Zn.emptyScript : "";
class zf extends ps {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    e && e !== Qe ? this.element.setAttribute(this.name, Bf) : this.element.removeAttribute(this.name);
  }
}
class Gf extends ps {
  constructor(e, t, n, i, s) {
    super(e, t, n, i, s), this.type = 5;
  }
  _$AI(e, t = this) {
    var n;
    if ((e = (n = ei(this, e, t, 0)) !== null && n !== void 0 ? n : Qe) === Qn)
      return;
    const i = this._$AH, s = e === Qe && i !== Qe || e.capture !== i.capture || e.once !== i.once || e.passive !== i.passive, r = e !== Qe && (i === Qe || s);
    s && this.element.removeEventListener(this.name, this, i), r && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var t, n;
    typeof this._$AH == "function" ? this._$AH.call((n = (t = this.options) === null || t === void 0 ? void 0 : t.host) !== null && n !== void 0 ? n : this.element, e) : this._$AH.handleEvent(e);
  }
}
class kf {
  constructor(e, t, n) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = n;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    ei(this, e);
  }
}
const Na = us.litHtmlPolyfillSupport;
Na == null || Na(Ci, Ni), ((js = us.litHtmlVersions) !== null && js !== void 0 ? js : us.litHtmlVersions = []).push("2.4.0");
const Vf = (a, e, t) => {
  var n, i;
  const s = (n = t == null ? void 0 : t.renderBefore) !== null && n !== void 0 ? n : e;
  let r = s._$litPart$;
  if (r === void 0) {
    const o = (i = t == null ? void 0 : t.renderBefore) !== null && i !== void 0 ? i : null;
    s._$litPart$ = r = new Ni(e.insertBefore(Ei(), o), o, void 0, t != null ? t : {});
  }
  return r._$AI(a), r;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var Ks, Ys;
class jn extends $n {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var e, t;
    const n = super.createRenderRoot();
    return (e = (t = this.renderOptions).renderBefore) !== null && e !== void 0 || (t.renderBefore = n.firstChild), n;
  }
  update(e) {
    const t = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = Vf(t, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var e;
    super.connectedCallback(), (e = this._$Do) === null || e === void 0 || e.setConnected(!0);
  }
  disconnectedCallback() {
    var e;
    super.disconnectedCallback(), (e = this._$Do) === null || e === void 0 || e.setConnected(!1);
  }
  render() {
    return Qn;
  }
}
jn.finalized = !0, jn._$litElement$ = !0, (Ks = globalThis.litElementHydrateSupport) === null || Ks === void 0 || Ks.call(globalThis, { LitElement: jn });
const Fa = globalThis.litElementPolyfillSupport;
Fa == null || Fa({ LitElement: jn });
((Ys = globalThis.litElementVersions) !== null && Ys !== void 0 ? Ys : globalThis.litElementVersions = []).push("3.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Mo = (a) => (e) => typeof e == "function" ? ((t, n) => (customElements.define(t, n), n))(a, e) : ((t, n) => {
  const { kind: i, elements: s } = n;
  return { kind: i, elements: s, finisher(r) {
    customElements.define(t, r);
  } };
})(a, e);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Hf = (a, e) => e.kind === "method" && e.descriptor && !("value" in e.descriptor) ? { ...e, finisher(t) {
  t.createProperty(e.key, a);
} } : { kind: "field", key: Symbol(), placement: "own", descriptor: {}, originalKey: e.key, initializer() {
  typeof e.initializer == "function" && (this[e.key] = e.initializer.call(this));
}, finisher(t) {
  t.createProperty(e.key, a);
} };
function bt(a) {
  return (e, t) => t !== void 0 ? ((n, i, s) => {
    i.constructor.createProperty(s, n);
  })(a, e, t) : Hf(a, e);
}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var Zs;
((Zs = window.HTMLSlotElement) === null || Zs === void 0 ? void 0 : Zs.prototype.assignedElements) != null;
var Wf = Object.defineProperty, $f = Object.getOwnPropertyDescriptor, Mr = (a, e, t, n) => {
  for (var i = n > 1 ? void 0 : n ? $f(e, t) : e, s = a.length - 1, r; s >= 0; s--)
    (r = a[s]) && (i = (n ? r(e, t, i) : r(i)) || i);
  return n && i && Wf(e, t, i), i;
};
let hs = class extends jn {
  constructor() {
    super(...arguments), this.docsHint = "Click on the Vite and Lit logos to learn more", this.space = new ke();
  }
  connectedCallback() {
    super.connectedCallback(), ba().add(this.space);
  }
  render() {
    return console.log("space"), ba(), yo`
    `;
  }
};
Mr([
  bt()
], hs.prototype, "docsHint", 2);
Mr([
  bt({ type: ke })
], hs.prototype, "space", 2);
hs = Mr([
  Mo("mv-space")
], hs);
class qf extends Pi {
  constructor(e) {
    super(e), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function(t) {
      return new Zf(t);
    }), this.register(function(t) {
      return new sp(t);
    }), this.register(function(t) {
      return new rp(t);
    }), this.register(function(t) {
      return new Qf(t);
    }), this.register(function(t) {
      return new ep(t);
    }), this.register(function(t) {
      return new tp(t);
    }), this.register(function(t) {
      return new np(t);
    }), this.register(function(t) {
      return new Yf(t);
    }), this.register(function(t) {
      return new ip(t);
    }), this.register(function(t) {
      return new Jf(t);
    }), this.register(function(t) {
      return new jf(t);
    }), this.register(function(t) {
      return new ap(t);
    }), this.register(function(t) {
      return new op(t);
    });
  }
  load(e, t, n, i) {
    const s = this;
    let r;
    this.resourcePath !== "" ? r = this.resourcePath : this.path !== "" ? r = this.path : r = bn.extractUrlBase(e), this.manager.itemStart(e);
    const o = function(c) {
      i ? i(c) : console.error(c), s.manager.itemError(e), s.manager.itemEnd(e);
    }, l = new fo(this.manager);
    l.setPath(this.path), l.setResponseType("arraybuffer"), l.setRequestHeader(this.requestHeader), l.setWithCredentials(this.withCredentials), l.load(e, function(c) {
      try {
        s.parse(c, r, function(u) {
          t(u), s.manager.itemEnd(e);
        }, o);
      } catch (u) {
        o(u);
      }
    }, n, o);
  }
  setDRACOLoader(e) {
    return this.dracoLoader = e, this;
  }
  setDDSLoader() {
    throw new Error(
      'THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".'
    );
  }
  setKTX2Loader(e) {
    return this.ktx2Loader = e, this;
  }
  setMeshoptDecoder(e) {
    return this.meshoptDecoder = e, this;
  }
  register(e) {
    return this.pluginCallbacks.indexOf(e) === -1 && this.pluginCallbacks.push(e), this;
  }
  unregister(e) {
    return this.pluginCallbacks.indexOf(e) !== -1 && this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e), 1), this;
  }
  parse(e, t, n, i) {
    let s;
    const r = {}, o = {};
    if (typeof e == "string")
      s = JSON.parse(e);
    else if (e instanceof ArrayBuffer)
      if (bn.decodeText(new Uint8Array(e, 0, 4)) === So) {
        try {
          r[Te.KHR_BINARY_GLTF] = new lp(e);
        } catch (u) {
          i && i(u);
          return;
        }
        s = JSON.parse(r[Te.KHR_BINARY_GLTF].content);
      } else
        s = JSON.parse(bn.decodeText(new Uint8Array(e)));
    else
      s = e;
    if (s.asset === void 0 || s.asset.version[0] < 2) {
      i && i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
      return;
    }
    const l = new Mp(s, {
      path: t || this.resourcePath || "",
      crossOrigin: this.crossOrigin,
      requestHeader: this.requestHeader,
      manager: this.manager,
      ktx2Loader: this.ktx2Loader,
      meshoptDecoder: this.meshoptDecoder
    });
    l.fileLoader.setRequestHeader(this.requestHeader);
    for (let c = 0; c < this.pluginCallbacks.length; c++) {
      const u = this.pluginCallbacks[c](l);
      o[u.name] = u, r[u.name] = !0;
    }
    if (s.extensionsUsed)
      for (let c = 0; c < s.extensionsUsed.length; ++c) {
        const u = s.extensionsUsed[c], h = s.extensionsRequired || [];
        switch (u) {
          case Te.KHR_MATERIALS_UNLIT:
            r[u] = new Kf();
            break;
          case Te.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:
            r[u] = new hp();
            break;
          case Te.KHR_DRACO_MESH_COMPRESSION:
            r[u] = new cp(s, this.dracoLoader);
            break;
          case Te.KHR_TEXTURE_TRANSFORM:
            r[u] = new up();
            break;
          case Te.KHR_MESH_QUANTIZATION:
            r[u] = new dp();
            break;
          default:
            h.indexOf(u) >= 0 && o[u] === void 0 && console.warn('THREE.GLTFLoader: Unknown extension "' + u + '".');
        }
      }
    l.setExtensions(r), l.setPlugins(o), l.parse(n, i);
  }
  parseAsync(e, t) {
    const n = this;
    return new Promise(function(i, s) {
      n.parse(e, t, i, s);
    });
  }
}
function Xf() {
  let a = {};
  return {
    get: function(e) {
      return a[e];
    },
    add: function(e, t) {
      a[e] = t;
    },
    remove: function(e) {
      delete a[e];
    },
    removeAll: function() {
      a = {};
    }
  };
}
const Te = {
  KHR_BINARY_GLTF: "KHR_binary_glTF",
  KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
  KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
  KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
  KHR_MATERIALS_IOR: "KHR_materials_ior",
  KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS: "KHR_materials_pbrSpecularGlossiness",
  KHR_MATERIALS_SHEEN: "KHR_materials_sheen",
  KHR_MATERIALS_SPECULAR: "KHR_materials_specular",
  KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
  KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence",
  KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
  KHR_MATERIALS_VOLUME: "KHR_materials_volume",
  KHR_TEXTURE_BASISU: "KHR_texture_basisu",
  KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
  KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
  KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength",
  EXT_TEXTURE_WEBP: "EXT_texture_webp",
  EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression",
  EXT_MESH_GPU_INSTANCING: "EXT_mesh_gpu_instancing"
};
class jf {
  constructor(e) {
    this.parser = e, this.name = Te.KHR_LIGHTS_PUNCTUAL, this.cache = { refs: {}, uses: {} };
  }
  _markDefs() {
    const e = this.parser, t = this.parser.json.nodes || [];
    for (let n = 0, i = t.length; n < i; n++) {
      const s = t[n];
      s.extensions && s.extensions[this.name] && s.extensions[this.name].light !== void 0 && e._addNodeRef(this.cache, s.extensions[this.name].light);
    }
  }
  _loadLight(e) {
    const t = this.parser, n = "light:" + e;
    let i = t.cache.get(n);
    if (i)
      return i;
    const s = t.json, l = ((s.extensions && s.extensions[this.name] || {}).lights || [])[e];
    let c;
    const u = new Me(16777215);
    l.color !== void 0 && u.fromArray(l.color);
    const h = l.range !== void 0 ? l.range : 0;
    switch (l.type) {
      case "directional":
        c = new po(u), c.target.position.set(0, 0, -1), c.add(c.target);
        break;
      case "point":
        c = new gf(u), c.distance = h;
        break;
      case "spot":
        c = new pf(u), c.distance = h, l.spot = l.spot || {}, l.spot.innerConeAngle = l.spot.innerConeAngle !== void 0 ? l.spot.innerConeAngle : 0, l.spot.outerConeAngle = l.spot.outerConeAngle !== void 0 ? l.spot.outerConeAngle : Math.PI / 4, c.angle = l.spot.outerConeAngle, c.penumbra = 1 - l.spot.innerConeAngle / l.spot.outerConeAngle, c.target.position.set(0, 0, -1), c.add(c.target);
        break;
      default:
        throw new Error("THREE.GLTFLoader: Unexpected light type: " + l.type);
    }
    return c.position.set(0, 0, 0), c.decay = 2, l.intensity !== void 0 && (c.intensity = l.intensity), c.name = t.createUniqueName(l.name || "light_" + e), i = Promise.resolve(c), t.cache.add(n, i), i;
  }
  createNodeAttachment(e) {
    const t = this, n = this.parser, s = n.json.nodes[e], o = (s.extensions && s.extensions[this.name] || {}).light;
    return o === void 0 ? null : this._loadLight(o).then(function(l) {
      return n._getNodeRef(t.cache, o, l);
    });
  }
}
class Kf {
  constructor() {
    this.name = Te.KHR_MATERIALS_UNLIT;
  }
  getMaterialType() {
    return on;
  }
  extendParams(e, t, n) {
    const i = [];
    e.color = new Me(1, 1, 1), e.opacity = 1;
    const s = t.pbrMetallicRoughness;
    if (s) {
      if (Array.isArray(s.baseColorFactor)) {
        const r = s.baseColorFactor;
        e.color.fromArray(r), e.opacity = r[3];
      }
      s.baseColorTexture !== void 0 && i.push(n.assignTexture(e, "map", s.baseColorTexture, 3001));
    }
    return Promise.all(i);
  }
}
class Yf {
  constructor(e) {
    this.parser = e, this.name = Te.KHR_MATERIALS_EMISSIVE_STRENGTH;
  }
  extendMaterialParams(e, t) {
    const i = this.parser.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = i.extensions[this.name].emissiveStrength;
    return s !== void 0 && (t.emissiveIntensity = s), Promise.resolve();
  }
}
class Zf {
  constructor(e) {
    this.parser = e, this.name = Te.KHR_MATERIALS_CLEARCOAT;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : An;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [], r = i.extensions[this.name];
    if (r.clearcoatFactor !== void 0 && (t.clearcoat = r.clearcoatFactor), r.clearcoatTexture !== void 0 && s.push(n.assignTexture(t, "clearcoatMap", r.clearcoatTexture)), r.clearcoatRoughnessFactor !== void 0 && (t.clearcoatRoughness = r.clearcoatRoughnessFactor), r.clearcoatRoughnessTexture !== void 0 && s.push(n.assignTexture(t, "clearcoatRoughnessMap", r.clearcoatRoughnessTexture)), r.clearcoatNormalTexture !== void 0 && (s.push(n.assignTexture(t, "clearcoatNormalMap", r.clearcoatNormalTexture)), r.clearcoatNormalTexture.scale !== void 0)) {
      const o = r.clearcoatNormalTexture.scale;
      t.clearcoatNormalScale = new Le(o, o);
    }
    return Promise.all(s);
  }
}
class Jf {
  constructor(e) {
    this.parser = e, this.name = Te.KHR_MATERIALS_IRIDESCENCE;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : An;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [], r = i.extensions[this.name];
    return r.iridescenceFactor !== void 0 && (t.iridescence = r.iridescenceFactor), r.iridescenceTexture !== void 0 && s.push(n.assignTexture(t, "iridescenceMap", r.iridescenceTexture)), r.iridescenceIor !== void 0 && (t.iridescenceIOR = r.iridescenceIor), t.iridescenceThicknessRange === void 0 && (t.iridescenceThicknessRange = [100, 400]), r.iridescenceThicknessMinimum !== void 0 && (t.iridescenceThicknessRange[0] = r.iridescenceThicknessMinimum), r.iridescenceThicknessMaximum !== void 0 && (t.iridescenceThicknessRange[1] = r.iridescenceThicknessMaximum), r.iridescenceThicknessTexture !== void 0 && s.push(n.assignTexture(t, "iridescenceThicknessMap", r.iridescenceThicknessTexture)), Promise.all(s);
  }
}
class Qf {
  constructor(e) {
    this.parser = e, this.name = Te.KHR_MATERIALS_SHEEN;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : An;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [];
    t.sheenColor = new Me(0, 0, 0), t.sheenRoughness = 0, t.sheen = 1;
    const r = i.extensions[this.name];
    return r.sheenColorFactor !== void 0 && t.sheenColor.fromArray(r.sheenColorFactor), r.sheenRoughnessFactor !== void 0 && (t.sheenRoughness = r.sheenRoughnessFactor), r.sheenColorTexture !== void 0 && s.push(n.assignTexture(t, "sheenColorMap", r.sheenColorTexture, 3001)), r.sheenRoughnessTexture !== void 0 && s.push(n.assignTexture(t, "sheenRoughnessMap", r.sheenRoughnessTexture)), Promise.all(s);
  }
}
class ep {
  constructor(e) {
    this.parser = e, this.name = Te.KHR_MATERIALS_TRANSMISSION;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : An;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [], r = i.extensions[this.name];
    return r.transmissionFactor !== void 0 && (t.transmission = r.transmissionFactor), r.transmissionTexture !== void 0 && s.push(n.assignTexture(t, "transmissionMap", r.transmissionTexture)), Promise.all(s);
  }
}
class tp {
  constructor(e) {
    this.parser = e, this.name = Te.KHR_MATERIALS_VOLUME;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : An;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [], r = i.extensions[this.name];
    t.thickness = r.thicknessFactor !== void 0 ? r.thicknessFactor : 0, r.thicknessTexture !== void 0 && s.push(n.assignTexture(t, "thicknessMap", r.thicknessTexture)), t.attenuationDistance = r.attenuationDistance || 1 / 0;
    const o = r.attenuationColor || [1, 1, 1];
    return t.attenuationColor = new Me(o[0], o[1], o[2]), Promise.all(s);
  }
}
class np {
  constructor(e) {
    this.parser = e, this.name = Te.KHR_MATERIALS_IOR;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : An;
  }
  extendMaterialParams(e, t) {
    const i = this.parser.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = i.extensions[this.name];
    return t.ior = s.ior !== void 0 ? s.ior : 1.5, Promise.resolve();
  }
}
class ip {
  constructor(e) {
    this.parser = e, this.name = Te.KHR_MATERIALS_SPECULAR;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : An;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const s = [], r = i.extensions[this.name];
    t.specularIntensity = r.specularFactor !== void 0 ? r.specularFactor : 1, r.specularTexture !== void 0 && s.push(n.assignTexture(t, "specularIntensityMap", r.specularTexture));
    const o = r.specularColorFactor || [1, 1, 1];
    return t.specularColor = new Me(o[0], o[1], o[2]), r.specularColorTexture !== void 0 && s.push(n.assignTexture(t, "specularColorMap", r.specularColorTexture, 3001)), Promise.all(s);
  }
}
class sp {
  constructor(e) {
    this.parser = e, this.name = Te.KHR_TEXTURE_BASISU;
  }
  loadTexture(e) {
    const t = this.parser, n = t.json, i = n.textures[e];
    if (!i.extensions || !i.extensions[this.name])
      return null;
    const s = i.extensions[this.name], r = t.options.ktx2Loader;
    if (!r) {
      if (n.extensionsRequired && n.extensionsRequired.indexOf(this.name) >= 0)
        throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");
      return null;
    }
    return t.loadTextureImage(e, s.source, r);
  }
}
class rp {
  constructor(e) {
    this.parser = e, this.name = Te.EXT_TEXTURE_WEBP, this.isSupported = null;
  }
  loadTexture(e) {
    const t = this.name, n = this.parser, i = n.json, s = i.textures[e];
    if (!s.extensions || !s.extensions[t])
      return null;
    const r = s.extensions[t], o = i.images[r.source];
    let l = n.textureLoader;
    if (o.uri) {
      const c = n.options.manager.getHandler(o.uri);
      c !== null && (l = c);
    }
    return this.detectSupport().then(function(c) {
      if (c)
        return n.loadTextureImage(e, r.source, l);
      if (i.extensionsRequired && i.extensionsRequired.indexOf(t) >= 0)
        throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");
      return n.loadTexture(e);
    });
  }
  detectSupport() {
    return this.isSupported || (this.isSupported = new Promise(function(e) {
      const t = new Image();
      t.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA", t.onload = t.onerror = function() {
        e(t.height === 1);
      };
    })), this.isSupported;
  }
}
class ap {
  constructor(e) {
    this.name = Te.EXT_MESHOPT_COMPRESSION, this.parser = e;
  }
  loadBufferView(e) {
    const t = this.parser.json, n = t.bufferViews[e];
    if (n.extensions && n.extensions[this.name]) {
      const i = n.extensions[this.name], s = this.parser.getDependency("buffer", i.buffer), r = this.parser.options.meshoptDecoder;
      if (!r || !r.supported) {
        if (t.extensionsRequired && t.extensionsRequired.indexOf(this.name) >= 0)
          throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");
        return null;
      }
      return s.then(function(o) {
        const l = i.byteOffset || 0, c = i.byteLength || 0, u = i.count, h = i.byteStride, d = new Uint8Array(o, l, c);
        return r.decodeGltfBufferAsync ? r.decodeGltfBufferAsync(u, h, d, i.mode, i.filter).then(function(p) {
          return p.buffer;
        }) : r.ready.then(function() {
          const p = new ArrayBuffer(u * h);
          return r.decodeGltfBuffer(new Uint8Array(p), u, h, d, i.mode, i.filter), p;
        });
      });
    } else
      return null;
  }
}
class op {
  constructor(e) {
    this.name = Te.EXT_MESH_GPU_INSTANCING, this.parser = e;
  }
  createNodeMesh(e) {
    const t = this.parser.json, n = t.nodes[e];
    if (!n.extensions || !n.extensions[this.name] || n.mesh === void 0)
      return null;
    const i = t.meshes[n.mesh];
    for (const c of i.primitives)
      if (c.mode !== yt.TRIANGLES && c.mode !== yt.TRIANGLE_STRIP && c.mode !== yt.TRIANGLE_FAN && c.mode !== void 0)
        return null;
    const r = n.extensions[this.name].attributes, o = [], l = {};
    for (const c in r)
      o.push(this.parser.getDependency("accessor", r[c]).then((u) => (l[c] = u, l[c])));
    return o.length < 1 ? null : (o.push(this.parser.createNodeMesh(e)), Promise.all(o).then((c) => {
      const u = c.pop(), h = u.isGroup ? u.children : [u], d = c[0].count, p = [];
      for (const g of h) {
        const m = new Ce(), f = new R(), _ = new ln(), T = new R(1, 1, 1), M = new Kd(g.geometry, g.material, d);
        for (let S = 0; S < d; S++)
          l.TRANSLATION && f.fromBufferAttribute(l.TRANSLATION, S), l.ROTATION && _.fromBufferAttribute(l.ROTATION, S), l.SCALE && T.fromBufferAttribute(l.SCALE, S), M.setMatrixAt(S, m.compose(f, _, T));
        for (const S in l)
          S !== "TRANSLATION" && S !== "ROTATION" && S !== "SCALE" && g.geometry.setAttribute(S, l[S]);
        ke.prototype.copy.call(M, g), M.frustumCulled = !1, this.parser.assignFinalMaterial(M), p.push(M);
      }
      return u.isGroup ? (u.clear(), u.add(...p), u) : p[0];
    }));
  }
}
const So = "glTF", _i = 12, Ua = { JSON: 1313821514, BIN: 5130562 };
class lp {
  constructor(e) {
    this.name = Te.KHR_BINARY_GLTF, this.content = null, this.body = null;
    const t = new DataView(e, 0, _i);
    if (this.header = {
      magic: bn.decodeText(new Uint8Array(e.slice(0, 4))),
      version: t.getUint32(4, !0),
      length: t.getUint32(8, !0)
    }, this.header.magic !== So)
      throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
    if (this.header.version < 2)
      throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
    const n = this.header.length - _i, i = new DataView(e, _i);
    let s = 0;
    for (; s < n; ) {
      const r = i.getUint32(s, !0);
      s += 4;
      const o = i.getUint32(s, !0);
      if (s += 4, o === Ua.JSON) {
        const l = new Uint8Array(e, _i + s, r);
        this.content = bn.decodeText(l);
      } else if (o === Ua.BIN) {
        const l = _i + s;
        this.body = e.slice(l, l + r);
      }
      s += r;
    }
    if (this.content === null)
      throw new Error("THREE.GLTFLoader: JSON content not found.");
  }
}
class cp {
  constructor(e, t) {
    if (!t)
      throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
    this.name = Te.KHR_DRACO_MESH_COMPRESSION, this.json = e, this.dracoLoader = t, this.dracoLoader.preload();
  }
  decodePrimitive(e, t) {
    const n = this.json, i = this.dracoLoader, s = e.extensions[this.name].bufferView, r = e.extensions[this.name].attributes, o = {}, l = {}, c = {};
    for (const u in r) {
      const h = sr[u] || u.toLowerCase();
      o[h] = r[u];
    }
    for (const u in e.attributes) {
      const h = sr[u] || u.toLowerCase();
      if (r[u] !== void 0) {
        const d = n.accessors[e.attributes[u]], p = Ri[d.componentType];
        c[h] = p.name, l[h] = d.normalized === !0;
      }
    }
    return t.getDependency("bufferView", s).then(function(u) {
      return new Promise(function(h) {
        i.decodeDracoFile(u, function(d) {
          for (const p in d.attributes) {
            const g = d.attributes[p], m = l[p];
            m !== void 0 && (g.normalized = m);
          }
          h(d);
        }, o, c);
      });
    });
  }
}
class up {
  constructor() {
    this.name = Te.KHR_TEXTURE_TRANSFORM;
  }
  extendTexture(e, t) {
    return t.texCoord !== void 0 && console.warn('THREE.GLTFLoader: Custom UV sets in "' + this.name + '" extension not yet supported.'), t.offset === void 0 && t.rotation === void 0 && t.scale === void 0 || (e = e.clone(), t.offset !== void 0 && e.offset.fromArray(t.offset), t.rotation !== void 0 && (e.rotation = t.rotation), t.scale !== void 0 && e.repeat.fromArray(t.scale), e.needsUpdate = !0), e;
  }
}
class ir extends fs {
  constructor(e) {
    super(), this.isGLTFSpecularGlossinessMaterial = !0;
    const t = [
      "#ifdef USE_SPECULARMAP",
      "	uniform sampler2D specularMap;",
      "#endif"
    ].join(`
`), n = [
      "#ifdef USE_GLOSSINESSMAP",
      "	uniform sampler2D glossinessMap;",
      "#endif"
    ].join(`
`), i = [
      "vec3 specularFactor = specular;",
      "#ifdef USE_SPECULARMAP",
      "	vec4 texelSpecular = texture2D( specularMap, vUv );",
      "	// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture",
      "	specularFactor *= texelSpecular.rgb;",
      "#endif"
    ].join(`
`), s = [
      "float glossinessFactor = glossiness;",
      "#ifdef USE_GLOSSINESSMAP",
      "	vec4 texelGlossiness = texture2D( glossinessMap, vUv );",
      "	// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture",
      "	glossinessFactor *= texelGlossiness.a;",
      "#endif"
    ].join(`
`), r = [
      "PhysicalMaterial material;",
      "material.diffuseColor = diffuseColor.rgb * ( 1. - max( specularFactor.r, max( specularFactor.g, specularFactor.b ) ) );",
      "vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );",
      "float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );",
      "material.roughness = max( 1.0 - glossinessFactor, 0.0525 ); // 0.0525 corresponds to the base mip of a 256 cubemap.",
      "material.roughness += geometryRoughness;",
      "material.roughness = min( material.roughness, 1.0 );",
      "material.specularColor = specularFactor;"
    ].join(`
`), o = {
      specular: { value: new Me().setHex(16777215) },
      glossiness: { value: 1 },
      specularMap: { value: null },
      glossinessMap: { value: null }
    };
    this._extraUniforms = o, this.onBeforeCompile = function(l) {
      for (const c in o)
        l.uniforms[c] = o[c];
      l.fragmentShader = l.fragmentShader.replace("uniform float roughness;", "uniform vec3 specular;").replace("uniform float metalness;", "uniform float glossiness;").replace("#include <roughnessmap_pars_fragment>", t).replace("#include <metalnessmap_pars_fragment>", n).replace("#include <roughnessmap_fragment>", i).replace("#include <metalnessmap_fragment>", s).replace("#include <lights_physical_fragment>", r);
    }, Object.defineProperties(this, {
      specular: {
        get: function() {
          return o.specular.value;
        },
        set: function(l) {
          o.specular.value = l;
        }
      },
      specularMap: {
        get: function() {
          return o.specularMap.value;
        },
        set: function(l) {
          o.specularMap.value = l, l ? this.defines.USE_SPECULARMAP = "" : delete this.defines.USE_SPECULARMAP;
        }
      },
      glossiness: {
        get: function() {
          return o.glossiness.value;
        },
        set: function(l) {
          o.glossiness.value = l;
        }
      },
      glossinessMap: {
        get: function() {
          return o.glossinessMap.value;
        },
        set: function(l) {
          o.glossinessMap.value = l, l ? (this.defines.USE_GLOSSINESSMAP = "", this.defines.USE_UV = "") : (delete this.defines.USE_GLOSSINESSMAP, delete this.defines.USE_UV);
        }
      }
    }), delete this.metalness, delete this.roughness, delete this.metalnessMap, delete this.roughnessMap, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.specularMap = e.specularMap, this.specular.copy(e.specular), this.glossinessMap = e.glossinessMap, this.glossiness = e.glossiness, delete this.metalness, delete this.roughness, delete this.metalnessMap, delete this.roughnessMap, this;
  }
}
class hp {
  constructor() {
    this.name = Te.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS, this.specularGlossinessParams = [
      "color",
      "map",
      "lightMap",
      "lightMapIntensity",
      "aoMap",
      "aoMapIntensity",
      "emissive",
      "emissiveIntensity",
      "emissiveMap",
      "bumpMap",
      "bumpScale",
      "normalMap",
      "normalMapType",
      "displacementMap",
      "displacementScale",
      "displacementBias",
      "specularMap",
      "specular",
      "glossinessMap",
      "glossiness",
      "alphaMap",
      "envMap",
      "envMapIntensity"
    ];
  }
  getMaterialType() {
    return ir;
  }
  extendParams(e, t, n) {
    const i = t.extensions[this.name];
    e.color = new Me(1, 1, 1), e.opacity = 1;
    const s = [];
    if (Array.isArray(i.diffuseFactor)) {
      const r = i.diffuseFactor;
      e.color.fromArray(r), e.opacity = r[3];
    }
    if (i.diffuseTexture !== void 0 && s.push(n.assignTexture(e, "map", i.diffuseTexture, 3001)), e.emissive = new Me(0, 0, 0), e.glossiness = i.glossinessFactor !== void 0 ? i.glossinessFactor : 1, e.specular = new Me(1, 1, 1), Array.isArray(i.specularFactor) && e.specular.fromArray(i.specularFactor), i.specularGlossinessTexture !== void 0) {
      const r = i.specularGlossinessTexture;
      s.push(n.assignTexture(e, "glossinessMap", r)), s.push(n.assignTexture(e, "specularMap", r, 3001));
    }
    return Promise.all(s);
  }
  createMaterial(e) {
    const t = new ir(e);
    return t.fog = !0, t.color = e.color, t.map = e.map === void 0 ? null : e.map, t.lightMap = null, t.lightMapIntensity = 1, t.aoMap = e.aoMap === void 0 ? null : e.aoMap, t.aoMapIntensity = 1, t.emissive = e.emissive, t.emissiveIntensity = e.emissiveIntensity === void 0 ? 1 : e.emissiveIntensity, t.emissiveMap = e.emissiveMap === void 0 ? null : e.emissiveMap, t.bumpMap = e.bumpMap === void 0 ? null : e.bumpMap, t.bumpScale = 1, t.normalMap = e.normalMap === void 0 ? null : e.normalMap, t.normalMapType = 0, e.normalScale && (t.normalScale = e.normalScale), t.displacementMap = null, t.displacementScale = 1, t.displacementBias = 0, t.specularMap = e.specularMap === void 0 ? null : e.specularMap, t.specular = e.specular, t.glossinessMap = e.glossinessMap === void 0 ? null : e.glossinessMap, t.glossiness = e.glossiness, t.alphaMap = null, t.envMap = e.envMap === void 0 ? null : e.envMap, t.envMapIntensity = 1, t;
  }
}
class dp {
  constructor() {
    this.name = Te.KHR_MESH_QUANTIZATION;
  }
}
class bo extends Di {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  copySampleValue_(e) {
    const t = this.resultBuffer, n = this.sampleValues, i = this.valueSize, s = e * i * 3 + i;
    for (let r = 0; r !== i; r++)
      t[r] = n[s + r];
    return t;
  }
  interpolate_(e, t, n, i) {
    const s = this.resultBuffer, r = this.sampleValues, o = this.valueSize, l = o * 2, c = o * 3, u = i - t, h = (n - t) / u, d = h * h, p = d * h, g = e * c, m = g - c, f = -2 * p + 3 * d, _ = p - d, T = 1 - f, M = _ - d + h;
    for (let S = 0; S !== o; S++) {
      const b = r[m + S + o], A = r[m + S + l] * u, D = r[g + S + o], x = r[g + S] * u;
      s[S] = T * b + M * A + f * D + _ * x;
    }
    return s;
  }
}
const fp = new ln();
class pp extends bo {
  interpolate_(e, t, n, i) {
    const s = super.interpolate_(e, t, n, i);
    return fp.fromArray(s).normalize().toArray(s), s;
  }
}
const yt = {
  FLOAT: 5126,
  FLOAT_MAT3: 35675,
  FLOAT_MAT4: 35676,
  FLOAT_VEC2: 35664,
  FLOAT_VEC3: 35665,
  FLOAT_VEC4: 35666,
  LINEAR: 9729,
  REPEAT: 10497,
  SAMPLER_2D: 35678,
  POINTS: 0,
  LINES: 1,
  LINE_LOOP: 2,
  LINE_STRIP: 3,
  TRIANGLES: 4,
  TRIANGLE_STRIP: 5,
  TRIANGLE_FAN: 6,
  UNSIGNED_BYTE: 5121,
  UNSIGNED_SHORT: 5123
}, Ri = {
  5120: Int8Array,
  5121: Uint8Array,
  5122: Int16Array,
  5123: Uint16Array,
  5125: Uint32Array,
  5126: Float32Array
}, Oa = {
  9728: 1003,
  9729: 1006,
  9984: 1004,
  9985: 1007,
  9986: 1005,
  9987: 1008
}, Ba = {
  33071: 1001,
  33648: 1002,
  10497: 1e3
}, za = {
  SCALAR: 1,
  VEC2: 2,
  VEC3: 3,
  VEC4: 4,
  MAT2: 4,
  MAT3: 9,
  MAT4: 16
}, sr = {
  POSITION: "position",
  NORMAL: "normal",
  TANGENT: "tangent",
  TEXCOORD_0: "uv",
  TEXCOORD_1: "uv2",
  COLOR_0: "color",
  WEIGHTS_0: "skinWeight",
  JOINTS_0: "skinIndex"
}, rn = {
  scale: "scale",
  translation: "position",
  rotation: "quaternion",
  weights: "morphTargetInfluences"
}, mp = {
  CUBICSPLINE: void 0,
  LINEAR: 2301,
  STEP: 2300
}, Js = {
  OPAQUE: "OPAQUE",
  MASK: "MASK",
  BLEND: "BLEND"
};
function gp(a) {
  return a.DefaultMaterial === void 0 && (a.DefaultMaterial = new fs({
    color: 16777215,
    emissive: 0,
    metalness: 1,
    roughness: 1,
    transparent: !1,
    depthTest: !0,
    side: 0
  })), a.DefaultMaterial;
}
function xi(a, e, t) {
  for (const n in t.extensions)
    a[n] === void 0 && (e.userData.gltfExtensions = e.userData.gltfExtensions || {}, e.userData.gltfExtensions[n] = t.extensions[n]);
}
function xn(a, e) {
  e.extras !== void 0 && (typeof e.extras == "object" ? Object.assign(a.userData, e.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + e.extras));
}
function _p(a, e, t) {
  let n = !1, i = !1, s = !1;
  for (let c = 0, u = e.length; c < u; c++) {
    const h = e[c];
    if (h.POSITION !== void 0 && (n = !0), h.NORMAL !== void 0 && (i = !0), h.COLOR_0 !== void 0 && (s = !0), n && i && s)
      break;
  }
  if (!n && !i && !s)
    return Promise.resolve(a);
  const r = [], o = [], l = [];
  for (let c = 0, u = e.length; c < u; c++) {
    const h = e[c];
    if (n) {
      const d = h.POSITION !== void 0 ? t.getDependency("accessor", h.POSITION) : a.attributes.position;
      r.push(d);
    }
    if (i) {
      const d = h.NORMAL !== void 0 ? t.getDependency("accessor", h.NORMAL) : a.attributes.normal;
      o.push(d);
    }
    if (s) {
      const d = h.COLOR_0 !== void 0 ? t.getDependency("accessor", h.COLOR_0) : a.attributes.color;
      l.push(d);
    }
  }
  return Promise.all([
    Promise.all(r),
    Promise.all(o),
    Promise.all(l)
  ]).then(function(c) {
    const u = c[0], h = c[1], d = c[2];
    return n && (a.morphAttributes.position = u), i && (a.morphAttributes.normal = h), s && (a.morphAttributes.color = d), a.morphTargetsRelative = !0, a;
  });
}
function xp(a, e) {
  if (a.updateMorphTargets(), e.weights !== void 0)
    for (let t = 0, n = e.weights.length; t < n; t++)
      a.morphTargetInfluences[t] = e.weights[t];
  if (e.extras && Array.isArray(e.extras.targetNames)) {
    const t = e.extras.targetNames;
    if (a.morphTargetInfluences.length === t.length) {
      a.morphTargetDictionary = {};
      for (let n = 0, i = t.length; n < i; n++)
        a.morphTargetDictionary[t[n]] = n;
    } else
      console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.");
  }
}
function vp(a) {
  const e = a.extensions && a.extensions[Te.KHR_DRACO_MESH_COMPRESSION];
  let t;
  return e ? t = "draco:" + e.bufferView + ":" + e.indices + ":" + Ga(e.attributes) : t = a.indices + ":" + Ga(a.attributes) + ":" + a.mode, t;
}
function Ga(a) {
  let e = "";
  const t = Object.keys(a).sort();
  for (let n = 0, i = t.length; n < i; n++)
    e += t[n] + ":" + a[t[n]] + ";";
  return e;
}
function rr(a) {
  switch (a) {
    case Int8Array:
      return 1 / 127;
    case Uint8Array:
      return 1 / 255;
    case Int16Array:
      return 1 / 32767;
    case Uint16Array:
      return 1 / 65535;
    default:
      throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.");
  }
}
function yp(a) {
  return a.search(/\.jpe?g($|\?)/i) > 0 || a.search(/^data\:image\/jpeg/) === 0 ? "image/jpeg" : a.search(/\.webp($|\?)/i) > 0 || a.search(/^data\:image\/webp/) === 0 ? "image/webp" : "image/png";
}
class Mp {
  constructor(e = {}, t = {}) {
    this.json = e, this.extensions = {}, this.plugins = {}, this.options = t, this.cache = new Xf(), this.associations = /* @__PURE__ */ new Map(), this.primitiveCache = {}, this.meshCache = { refs: {}, uses: {} }, this.cameraCache = { refs: {}, uses: {} }, this.lightCache = { refs: {}, uses: {} }, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {};
    const n = /^((?!chrome|android).)*safari/i.test(navigator.userAgent) === !0, i = navigator.userAgent.indexOf("Firefox") > -1, s = i ? navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1] : -1;
    typeof createImageBitmap > "u" || n || i && s < 98 ? this.textureLoader = new df(this.options.manager) : this.textureLoader = new xf(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new fo(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), this.options.crossOrigin === "use-credentials" && this.fileLoader.setWithCredentials(!0);
  }
  setExtensions(e) {
    this.extensions = e;
  }
  setPlugins(e) {
    this.plugins = e;
  }
  parse(e, t) {
    const n = this, i = this.json, s = this.extensions;
    this.cache.removeAll(), this._invokeAll(function(r) {
      return r._markDefs && r._markDefs();
    }), Promise.all(this._invokeAll(function(r) {
      return r.beforeRoot && r.beforeRoot();
    })).then(function() {
      return Promise.all([
        n.getDependencies("scene"),
        n.getDependencies("animation"),
        n.getDependencies("camera")
      ]);
    }).then(function(r) {
      const o = {
        scene: r[0][i.scene || 0],
        scenes: r[0],
        animations: r[1],
        cameras: r[2],
        asset: i.asset,
        parser: n,
        userData: {}
      };
      xi(s, o, i), xn(o, i), Promise.all(n._invokeAll(function(l) {
        return l.afterRoot && l.afterRoot(o);
      })).then(function() {
        e(o);
      });
    }).catch(t);
  }
  _markDefs() {
    const e = this.json.nodes || [], t = this.json.skins || [], n = this.json.meshes || [];
    for (let i = 0, s = t.length; i < s; i++) {
      const r = t[i].joints;
      for (let o = 0, l = r.length; o < l; o++)
        e[r[o]].isBone = !0;
    }
    for (let i = 0, s = e.length; i < s; i++) {
      const r = e[i];
      r.mesh !== void 0 && (this._addNodeRef(this.meshCache, r.mesh), r.skin !== void 0 && (n[r.mesh].isSkinnedMesh = !0)), r.camera !== void 0 && this._addNodeRef(this.cameraCache, r.camera);
    }
  }
  _addNodeRef(e, t) {
    t !== void 0 && (e.refs[t] === void 0 && (e.refs[t] = e.uses[t] = 0), e.refs[t]++);
  }
  _getNodeRef(e, t, n) {
    if (e.refs[t] <= 1)
      return n;
    const i = n.clone(), s = (r, o) => {
      const l = this.associations.get(r);
      l != null && this.associations.set(o, l);
      for (const [c, u] of r.children.entries())
        s(u, o.children[c]);
    };
    return s(n, i), i.name += "_instance_" + e.uses[t]++, i;
  }
  _invokeOne(e) {
    const t = Object.values(this.plugins);
    t.push(this);
    for (let n = 0; n < t.length; n++) {
      const i = e(t[n]);
      if (i)
        return i;
    }
    return null;
  }
  _invokeAll(e) {
    const t = Object.values(this.plugins);
    t.unshift(this);
    const n = [];
    for (let i = 0; i < t.length; i++) {
      const s = e(t[i]);
      s && n.push(s);
    }
    return n;
  }
  getDependency(e, t) {
    const n = e + ":" + t;
    let i = this.cache.get(n);
    if (!i) {
      switch (e) {
        case "scene":
          i = this.loadScene(t);
          break;
        case "node":
          i = this.loadNode(t);
          break;
        case "mesh":
          i = this._invokeOne(function(s) {
            return s.loadMesh && s.loadMesh(t);
          });
          break;
        case "accessor":
          i = this.loadAccessor(t);
          break;
        case "bufferView":
          i = this._invokeOne(function(s) {
            return s.loadBufferView && s.loadBufferView(t);
          });
          break;
        case "buffer":
          i = this.loadBuffer(t);
          break;
        case "material":
          i = this._invokeOne(function(s) {
            return s.loadMaterial && s.loadMaterial(t);
          });
          break;
        case "texture":
          i = this._invokeOne(function(s) {
            return s.loadTexture && s.loadTexture(t);
          });
          break;
        case "skin":
          i = this.loadSkin(t);
          break;
        case "animation":
          i = this._invokeOne(function(s) {
            return s.loadAnimation && s.loadAnimation(t);
          });
          break;
        case "camera":
          i = this.loadCamera(t);
          break;
        default:
          throw new Error("Unknown type: " + e);
      }
      this.cache.add(n, i);
    }
    return i;
  }
  getDependencies(e) {
    let t = this.cache.get(e);
    if (!t) {
      const n = this, i = this.json[e + (e === "mesh" ? "es" : "s")] || [];
      t = Promise.all(i.map(function(s, r) {
        return n.getDependency(e, r);
      })), this.cache.add(e, t);
    }
    return t;
  }
  loadBuffer(e) {
    const t = this.json.buffers[e], n = this.fileLoader;
    if (t.type && t.type !== "arraybuffer")
      throw new Error("THREE.GLTFLoader: " + t.type + " buffer type is not supported.");
    if (t.uri === void 0 && e === 0)
      return Promise.resolve(this.extensions[Te.KHR_BINARY_GLTF].body);
    const i = this.options;
    return new Promise(function(s, r) {
      n.load(bn.resolveURL(t.uri, i.path), s, void 0, function() {
        r(new Error('THREE.GLTFLoader: Failed to load buffer "' + t.uri + '".'));
      });
    });
  }
  loadBufferView(e) {
    const t = this.json.bufferViews[e];
    return this.getDependency("buffer", t.buffer).then(function(n) {
      const i = t.byteLength || 0, s = t.byteOffset || 0;
      return n.slice(s, s + i);
    });
  }
  loadAccessor(e) {
    const t = this, n = this.json, i = this.json.accessors[e];
    if (i.bufferView === void 0 && i.sparse === void 0)
      return Promise.resolve(null);
    const s = [];
    return i.bufferView !== void 0 ? s.push(this.getDependency("bufferView", i.bufferView)) : s.push(null), i.sparse !== void 0 && (s.push(this.getDependency("bufferView", i.sparse.indices.bufferView)), s.push(this.getDependency("bufferView", i.sparse.values.bufferView))), Promise.all(s).then(function(r) {
      const o = r[0], l = za[i.type], c = Ri[i.componentType], u = c.BYTES_PER_ELEMENT, h = u * l, d = i.byteOffset || 0, p = i.bufferView !== void 0 ? n.bufferViews[i.bufferView].byteStride : void 0, g = i.normalized === !0;
      let m, f;
      if (p && p !== h) {
        const _ = Math.floor(d / p), T = "InterleavedBuffer:" + i.bufferView + ":" + i.componentType + ":" + _ + ":" + i.count;
        let M = t.cache.get(T);
        M || (m = new c(o, _ * p, i.count * p / u), M = new Hd(m, p / u), t.cache.add(T, M)), f = new fr(M, l, d % p / u, g);
      } else
        o === null ? m = new c(i.count * l) : m = new c(o, d, i.count * l), f = new dt(m, l, g);
      if (i.sparse !== void 0) {
        const _ = za.SCALAR, T = Ri[i.sparse.indices.componentType], M = i.sparse.indices.byteOffset || 0, S = i.sparse.values.byteOffset || 0, b = new T(r[1], M, i.sparse.count * _), A = new c(r[2], S, i.sparse.count * l);
        o !== null && (f = new dt(f.array.slice(), f.itemSize, f.normalized));
        for (let D = 0, x = b.length; D < x; D++) {
          const E = b[D];
          if (f.setX(E, A[D * l]), l >= 2 && f.setY(E, A[D * l + 1]), l >= 3 && f.setZ(E, A[D * l + 2]), l >= 4 && f.setW(E, A[D * l + 3]), l >= 5)
            throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.");
        }
      }
      return f;
    });
  }
  loadTexture(e) {
    const t = this.json, n = this.options, s = t.textures[e].source, r = t.images[s];
    let o = this.textureLoader;
    if (r.uri) {
      const l = n.manager.getHandler(r.uri);
      l !== null && (o = l);
    }
    return this.loadTextureImage(e, s, o);
  }
  loadTextureImage(e, t, n) {
    const i = this, s = this.json, r = s.textures[e], o = s.images[t], l = (o.uri || o.bufferView) + ":" + r.sampler;
    if (this.textureCache[l])
      return this.textureCache[l];
    const c = this.loadImageSource(t, n).then(function(u) {
      u.flipY = !1, u.name = r.name || o.name || "";
      const d = (s.samplers || {})[r.sampler] || {};
      return u.magFilter = Oa[d.magFilter] || 1006, u.minFilter = Oa[d.minFilter] || 1008, u.wrapS = Ba[d.wrapS] || 1e3, u.wrapT = Ba[d.wrapT] || 1e3, i.associations.set(u, { textures: e }), u;
    }).catch(function() {
      return null;
    });
    return this.textureCache[l] = c, c;
  }
  loadImageSource(e, t) {
    const n = this, i = this.json, s = this.options;
    if (this.sourceCache[e] !== void 0)
      return this.sourceCache[e].then((h) => h.clone());
    const r = i.images[e], o = self.URL || self.webkitURL;
    let l = r.uri || "", c = !1;
    if (r.bufferView !== void 0)
      l = n.getDependency("bufferView", r.bufferView).then(function(h) {
        c = !0;
        const d = new Blob([h], { type: r.mimeType });
        return l = o.createObjectURL(d), l;
      });
    else if (r.uri === void 0)
      throw new Error("THREE.GLTFLoader: Image " + e + " is missing URI and bufferView");
    const u = Promise.resolve(l).then(function(h) {
      return new Promise(function(d, p) {
        let g = d;
        t.isImageBitmapLoader === !0 && (g = function(m) {
          const f = new ut(m);
          f.needsUpdate = !0, d(f);
        }), t.load(bn.resolveURL(h, s.path), g, void 0, p);
      });
    }).then(function(h) {
      return c === !0 && o.revokeObjectURL(l), h.userData.mimeType = r.mimeType || yp(r.uri), h;
    }).catch(function(h) {
      throw console.error("THREE.GLTFLoader: Couldn't load texture", l), h;
    });
    return this.sourceCache[e] = u, u;
  }
  assignTexture(e, t, n, i) {
    const s = this;
    return this.getDependency("texture", n.index).then(function(r) {
      if (n.texCoord !== void 0 && n.texCoord != 0 && !(t === "aoMap" && n.texCoord == 1) && console.warn("THREE.GLTFLoader: Custom UV set " + n.texCoord + " for texture " + t + " not yet supported."), s.extensions[Te.KHR_TEXTURE_TRANSFORM]) {
        const o = n.extensions !== void 0 ? n.extensions[Te.KHR_TEXTURE_TRANSFORM] : void 0;
        if (o) {
          const l = s.associations.get(r);
          r = s.extensions[Te.KHR_TEXTURE_TRANSFORM].extendTexture(r, o), s.associations.set(r, l);
        }
      }
      return i !== void 0 && (r.encoding = i), e[t] = r, r;
    });
  }
  assignFinalMaterial(e) {
    const t = e.geometry;
    let n = e.material;
    const i = t.attributes.tangent === void 0, s = t.attributes.color !== void 0, r = t.attributes.normal === void 0;
    if (e.isPoints) {
      const o = "PointsMaterial:" + n.uuid;
      let l = this.cache.get(o);
      l || (l = new lo(), It.prototype.copy.call(l, n), l.color.copy(n.color), l.map = n.map, l.sizeAttenuation = !1, this.cache.add(o, l)), n = l;
    } else if (e.isLine) {
      const o = "LineBasicMaterial:" + n.uuid;
      let l = this.cache.get(o);
      l || (l = new oo(), It.prototype.copy.call(l, n), l.color.copy(n.color), this.cache.add(o, l)), n = l;
    }
    if (i || s || r) {
      let o = "ClonedMaterial:" + n.uuid + ":";
      n.isGLTFSpecularGlossinessMaterial && (o += "specular-glossiness:"), i && (o += "derivative-tangents:"), s && (o += "vertex-colors:"), r && (o += "flat-shading:");
      let l = this.cache.get(o);
      l || (l = n.clone(), s && (l.vertexColors = !0), r && (l.flatShading = !0), i && (l.normalScale && (l.normalScale.y *= -1), l.clearcoatNormalScale && (l.clearcoatNormalScale.y *= -1)), this.cache.add(o, l), this.associations.set(l, this.associations.get(n))), n = l;
    }
    n.aoMap && t.attributes.uv2 === void 0 && t.attributes.uv !== void 0 && t.setAttribute("uv2", t.attributes.uv), e.material = n;
  }
  getMaterialType() {
    return fs;
  }
  loadMaterial(e) {
    const t = this, n = this.json, i = this.extensions, s = n.materials[e];
    let r;
    const o = {}, l = s.extensions || {}, c = [];
    if (l[Te.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]) {
      const h = i[Te.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];
      r = h.getMaterialType(), c.push(h.extendParams(o, s, t));
    } else if (l[Te.KHR_MATERIALS_UNLIT]) {
      const h = i[Te.KHR_MATERIALS_UNLIT];
      r = h.getMaterialType(), c.push(h.extendParams(o, s, t));
    } else {
      const h = s.pbrMetallicRoughness || {};
      if (o.color = new Me(1, 1, 1), o.opacity = 1, Array.isArray(h.baseColorFactor)) {
        const d = h.baseColorFactor;
        o.color.fromArray(d), o.opacity = d[3];
      }
      h.baseColorTexture !== void 0 && c.push(t.assignTexture(o, "map", h.baseColorTexture, 3001)), o.metalness = h.metallicFactor !== void 0 ? h.metallicFactor : 1, o.roughness = h.roughnessFactor !== void 0 ? h.roughnessFactor : 1, h.metallicRoughnessTexture !== void 0 && (c.push(t.assignTexture(o, "metalnessMap", h.metallicRoughnessTexture)), c.push(t.assignTexture(o, "roughnessMap", h.metallicRoughnessTexture))), r = this._invokeOne(function(d) {
        return d.getMaterialType && d.getMaterialType(e);
      }), c.push(Promise.all(this._invokeAll(function(d) {
        return d.extendMaterialParams && d.extendMaterialParams(e, o);
      })));
    }
    s.doubleSided === !0 && (o.side = 2);
    const u = s.alphaMode || Js.OPAQUE;
    if (u === Js.BLEND ? (o.transparent = !0, o.depthWrite = !1) : (o.transparent = !1, u === Js.MASK && (o.alphaTest = s.alphaCutoff !== void 0 ? s.alphaCutoff : 0.5)), s.normalTexture !== void 0 && r !== on && (c.push(t.assignTexture(o, "normalMap", s.normalTexture)), o.normalScale = new Le(1, 1), s.normalTexture.scale !== void 0)) {
      const h = s.normalTexture.scale;
      o.normalScale.set(h, h);
    }
    return s.occlusionTexture !== void 0 && r !== on && (c.push(t.assignTexture(o, "aoMap", s.occlusionTexture)), s.occlusionTexture.strength !== void 0 && (o.aoMapIntensity = s.occlusionTexture.strength)), s.emissiveFactor !== void 0 && r !== on && (o.emissive = new Me().fromArray(s.emissiveFactor)), s.emissiveTexture !== void 0 && r !== on && c.push(t.assignTexture(o, "emissiveMap", s.emissiveTexture, 3001)), Promise.all(c).then(function() {
      let h;
      return r === ir ? h = i[Te.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(o) : h = new r(o), s.name && (h.name = s.name), xn(h, s), t.associations.set(h, { materials: e }), s.extensions && xi(i, h, s), h;
    });
  }
  createUniqueName(e) {
    const t = Fe.sanitizeNodeName(e || "");
    let n = t;
    for (let i = 1; this.nodeNamesUsed[n]; ++i)
      n = t + "_" + i;
    return this.nodeNamesUsed[n] = !0, n;
  }
  loadGeometries(e) {
    const t = this, n = this.extensions, i = this.primitiveCache;
    function s(o) {
      return n[Te.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o, t).then(function(l) {
        return ka(l, o, t);
      });
    }
    const r = [];
    for (let o = 0, l = e.length; o < l; o++) {
      const c = e[o], u = vp(c), h = i[u];
      if (h)
        r.push(h.promise);
      else {
        let d;
        c.extensions && c.extensions[Te.KHR_DRACO_MESH_COMPRESSION] ? d = s(c) : d = ka(new Nt(), c, t), i[u] = { primitive: c, promise: d }, r.push(d);
      }
    }
    return Promise.all(r);
  }
  loadMesh(e) {
    const t = this, n = this.json, i = this.extensions, s = n.meshes[e], r = s.primitives, o = [];
    for (let l = 0, c = r.length; l < c; l++) {
      const u = r[l].material === void 0 ? gp(this.cache) : this.getDependency("material", r[l].material);
      o.push(u);
    }
    return o.push(t.loadGeometries(r)), Promise.all(o).then(function(l) {
      const c = l.slice(0, l.length - 1), u = l[l.length - 1], h = [];
      for (let p = 0, g = u.length; p < g; p++) {
        const m = u[p], f = r[p];
        let _;
        const T = c[p];
        if (f.mode === yt.TRIANGLES || f.mode === yt.TRIANGLE_STRIP || f.mode === yt.TRIANGLE_FAN || f.mode === void 0)
          _ = s.isSkinnedMesh === !0 ? new $d(m, T) : new gt(m, T), _.isSkinnedMesh === !0 && !_.geometry.attributes.skinWeight.normalized && _.normalizeSkinWeights(), f.mode === yt.TRIANGLE_STRIP ? _.geometry = Va(_.geometry, 1) : f.mode === yt.TRIANGLE_FAN && (_.geometry = Va(_.geometry, 2));
        else if (f.mode === yt.LINES)
          _ = new Yd(m, T);
        else if (f.mode === yt.LINE_STRIP)
          _ = new mr(m, T);
        else if (f.mode === yt.LINE_LOOP)
          _ = new Zd(m, T);
        else if (f.mode === yt.POINTS)
          _ = new Jd(m, T);
        else
          throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + f.mode);
        Object.keys(_.geometry.morphAttributes).length > 0 && xp(_, s), _.name = t.createUniqueName(s.name || "mesh_" + e), xn(_, s), f.extensions && xi(i, _, f), t.assignFinalMaterial(_), h.push(_);
      }
      for (let p = 0, g = h.length; p < g; p++)
        t.associations.set(h[p], {
          meshes: e,
          primitives: p
        });
      if (h.length === 1)
        return h[0];
      const d = new Mn();
      t.associations.set(d, { meshes: e });
      for (let p = 0, g = h.length; p < g; p++)
        d.add(h[p]);
      return d;
    });
  }
  loadCamera(e) {
    let t;
    const n = this.json.cameras[e], i = n[n.type];
    if (!i) {
      console.warn("THREE.GLTFLoader: Missing camera parameters.");
      return;
    }
    return n.type === "perspective" ? t = new ct(Vo.radToDeg(i.yfov), i.aspectRatio || 1, i.znear || 1, i.zfar || 2e6) : n.type === "orthographic" && (t = new hr(-i.xmag, i.xmag, i.ymag, -i.ymag, i.znear, i.zfar)), n.name && (t.name = this.createUniqueName(n.name)), xn(t, n), Promise.resolve(t);
  }
  loadSkin(e) {
    const t = this.json.skins[e], n = { joints: t.joints };
    return t.inverseBindMatrices === void 0 ? Promise.resolve(n) : this.getDependency("accessor", t.inverseBindMatrices).then(function(i) {
      return n.inverseBindMatrices = i, n;
    });
  }
  loadAnimation(e) {
    const n = this.json.animations[e], i = [], s = [], r = [], o = [], l = [];
    for (let c = 0, u = n.channels.length; c < u; c++) {
      const h = n.channels[c], d = n.samplers[h.sampler], p = h.target, g = p.node, m = n.parameters !== void 0 ? n.parameters[d.input] : d.input, f = n.parameters !== void 0 ? n.parameters[d.output] : d.output;
      i.push(this.getDependency("node", g)), s.push(this.getDependency("accessor", m)), r.push(this.getDependency("accessor", f)), o.push(d), l.push(p);
    }
    return Promise.all([
      Promise.all(i),
      Promise.all(s),
      Promise.all(r),
      Promise.all(o),
      Promise.all(l)
    ]).then(function(c) {
      const u = c[0], h = c[1], d = c[2], p = c[3], g = c[4], m = [];
      for (let _ = 0, T = u.length; _ < T; _++) {
        const M = u[_], S = h[_], b = d[_], A = p[_], D = g[_];
        if (M === void 0)
          continue;
        M.updateMatrix();
        let x;
        switch (rn[D.path]) {
          case rn.weights:
            x = wi;
            break;
          case rn.rotation:
            x = En;
            break;
          case rn.position:
          case rn.scale:
          default:
            x = Ti;
            break;
        }
        const E = M.name ? M.name : M.uuid, F = A.interpolation !== void 0 ? mp[A.interpolation] : 2301, q = [];
        rn[D.path] === rn.weights ? M.traverse(function(U) {
          U.morphTargetInfluences && q.push(U.name ? U.name : U.uuid);
        }) : q.push(E);
        let ne = b.array;
        if (b.normalized) {
          const U = rr(ne.constructor), P = new Float32Array(ne.length);
          for (let V = 0, X = ne.length; V < X; V++)
            P[V] = ne[V] * U;
          ne = P;
        }
        for (let U = 0, P = q.length; U < P; U++) {
          const V = new x(
            q[U] + "." + rn[D.path],
            S.array,
            ne,
            F
          );
          A.interpolation === "CUBICSPLINE" && (V.createInterpolant = function(K) {
            const H = this instanceof En ? pp : bo;
            return new H(this.times, this.values, this.getValueSize() / 3, K);
          }, V.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0), m.push(V);
        }
      }
      const f = n.name ? n.name : "animation_" + e;
      return new rf(f, void 0, m);
    });
  }
  createNodeMesh(e) {
    const t = this.json, n = this, i = t.nodes[e];
    return i.mesh === void 0 ? null : n.getDependency("mesh", i.mesh).then(function(s) {
      const r = n._getNodeRef(n.meshCache, i.mesh, s);
      return i.weights !== void 0 && r.traverse(function(o) {
        if (!!o.isMesh)
          for (let l = 0, c = i.weights.length; l < c; l++)
            o.morphTargetInfluences[l] = i.weights[l];
      }), r;
    });
  }
  loadNode(e) {
    const t = this.json, n = this.extensions, i = this, s = t.nodes[e], r = s.name ? i.createUniqueName(s.name) : "";
    return function() {
      const o = [], l = i._invokeOne(function(c) {
        return c.createNodeMesh && c.createNodeMesh(e);
      });
      return l && o.push(l), s.camera !== void 0 && o.push(i.getDependency("camera", s.camera).then(function(c) {
        return i._getNodeRef(i.cameraCache, s.camera, c);
      })), i._invokeAll(function(c) {
        return c.createNodeAttachment && c.createNodeAttachment(e);
      }).forEach(function(c) {
        o.push(c);
      }), Promise.all(o);
    }().then(function(o) {
      let l;
      if (s.isBone === !0 ? l = new ao() : o.length > 1 ? l = new Mn() : o.length === 1 ? l = o[0] : l = new ke(), l !== o[0])
        for (let c = 0, u = o.length; c < u; c++)
          l.add(o[c]);
      if (s.name && (l.userData.name = s.name, l.name = r), xn(l, s), s.extensions && xi(n, l, s), s.matrix !== void 0) {
        const c = new Ce();
        c.fromArray(s.matrix), l.applyMatrix4(c);
      } else
        s.translation !== void 0 && l.position.fromArray(s.translation), s.rotation !== void 0 && l.quaternion.fromArray(s.rotation), s.scale !== void 0 && l.scale.fromArray(s.scale);
      return i.associations.has(l) || i.associations.set(l, {}), i.associations.get(l).nodes = e, l;
    });
  }
  loadScene(e) {
    const t = this.json, n = this.extensions, i = this.json.scenes[e], s = this, r = new Mn();
    i.name && (r.name = s.createUniqueName(i.name)), xn(r, i), i.extensions && xi(n, r, i);
    const o = i.nodes || [], l = [];
    for (let c = 0, u = o.length; c < u; c++)
      l.push(wo(o[c], r, t, s));
    return Promise.all(l).then(function() {
      const c = (u) => {
        const h = /* @__PURE__ */ new Map();
        for (const [d, p] of s.associations)
          (d instanceof It || d instanceof ut) && h.set(d, p);
        return u.traverse((d) => {
          const p = s.associations.get(d);
          p != null && h.set(d, p);
        }), h;
      };
      return s.associations = c(r), r;
    });
  }
}
function wo(a, e, t, n) {
  const i = t.nodes[a];
  return n.getDependency("node", a).then(function(s) {
    if (i.skin === void 0)
      return s;
    let r;
    return n.getDependency("skin", i.skin).then(function(o) {
      r = o;
      const l = [];
      for (let c = 0, u = r.joints.length; c < u; c++)
        l.push(n.getDependency("node", r.joints[c]));
      return Promise.all(l);
    }).then(function(o) {
      return s.traverse(function(l) {
        if (!l.isMesh)
          return;
        const c = [], u = [];
        for (let h = 0, d = o.length; h < d; h++) {
          const p = o[h];
          if (p) {
            c.push(p);
            const g = new Ce();
            r.inverseBindMatrices !== void 0 && g.fromArray(r.inverseBindMatrices.array, h * 16), u.push(g);
          } else
            console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', r.joints[h]);
        }
        l.bind(new pr(c, u), l.matrixWorld);
      }), s;
    });
  }).then(function(s) {
    e.add(s);
    const r = [];
    if (i.children) {
      const o = i.children;
      for (let l = 0, c = o.length; l < c; l++) {
        const u = o[l];
        r.push(wo(u, s, t, n));
      }
    }
    return Promise.all(r);
  });
}
function Sp(a, e, t) {
  const n = e.attributes, i = new ni();
  if (n.POSITION !== void 0) {
    const o = t.json.accessors[n.POSITION], l = o.min, c = o.max;
    if (l !== void 0 && c !== void 0) {
      if (i.set(
        new R(l[0], l[1], l[2]),
        new R(c[0], c[1], c[2])
      ), o.normalized) {
        const u = rr(Ri[o.componentType]);
        i.min.multiplyScalar(u), i.max.multiplyScalar(u);
      }
    } else {
      console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      return;
    }
  } else
    return;
  const s = e.targets;
  if (s !== void 0) {
    const o = new R(), l = new R();
    for (let c = 0, u = s.length; c < u; c++) {
      const h = s[c];
      if (h.POSITION !== void 0) {
        const d = t.json.accessors[h.POSITION], p = d.min, g = d.max;
        if (p !== void 0 && g !== void 0) {
          if (l.setX(Math.max(Math.abs(p[0]), Math.abs(g[0]))), l.setY(Math.max(Math.abs(p[1]), Math.abs(g[1]))), l.setZ(Math.max(Math.abs(p[2]), Math.abs(g[2]))), d.normalized) {
            const m = rr(Ri[d.componentType]);
            l.multiplyScalar(m);
          }
          o.max(l);
        } else
          console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      }
    }
    i.expandByVector(o);
  }
  a.boundingBox = i;
  const r = new ii();
  i.getCenter(r.center), r.radius = i.min.distanceTo(i.max) / 2, a.boundingSphere = r;
}
function ka(a, e, t) {
  const n = e.attributes, i = [];
  function s(r, o) {
    return t.getDependency("accessor", r).then(function(l) {
      a.setAttribute(o, l);
    });
  }
  for (const r in n) {
    const o = sr[r] || r.toLowerCase();
    o in a.attributes || i.push(s(n[r], o));
  }
  if (e.indices !== void 0 && !a.index) {
    const r = t.getDependency("accessor", e.indices).then(function(o) {
      a.setIndex(o);
    });
    i.push(r);
  }
  return xn(a, e), Sp(a, e, t), Promise.all(i).then(function() {
    return e.targets !== void 0 ? _p(a, e.targets, t) : a;
  });
}
function Va(a, e) {
  let t = a.getIndex();
  if (t === null) {
    const r = [], o = a.getAttribute("position");
    if (o !== void 0) {
      for (let l = 0; l < o.count; l++)
        r.push(l);
      a.setIndex(r), t = a.getIndex();
    } else
      return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."), a;
  }
  const n = t.count - 2, i = [];
  if (e === 2)
    for (let r = 1; r <= n; r++)
      i.push(t.getX(0)), i.push(t.getX(r)), i.push(t.getX(r + 1));
  else
    for (let r = 0; r < n; r++)
      r % 2 === 0 ? (i.push(t.getX(r)), i.push(t.getX(r + 1)), i.push(t.getX(r + 2))) : (i.push(t.getX(r + 2)), i.push(t.getX(r + 1)), i.push(t.getX(r)));
  i.length / 3 !== n && console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
  const s = a.clone();
  return s.setIndex(i), s;
}
var bp = Object.defineProperty, wp = Object.getOwnPropertyDescriptor, Rt = (a, e, t, n) => {
  for (var i = n > 1 ? void 0 : n ? wp(e, t) : e, s = a.length - 1, r; s >= 0; s--)
    (r = a[s]) && (i = (n ? r(e, t, i) : r(i)) || i);
  return n && i && bp(e, t, i), i;
};
let St = class extends jn {
  constructor() {
    super(...arguments), this.src = "", this.x = 0, this.y = 0, this.z = 0, this.rx = 0, this.ry = 0, this.rz = 0, this.sx = 1, this.sy = 1, this.sz = 1;
  }
  connectedCallback() {
    super.connectedCallback();
    const a = this.parentElement;
    if (a === null) {
      console.error("mv-object must be a child of mv-space");
      return;
    }
    if (a.tagName !== "MV-SPACE") {
      console.error("mv-object must be a child of mv-space");
      return;
    }
    const e = a.space;
    if (e === void 0) {
      console.error("mv-space must be defined");
      return;
    }
    const t = new ke(), n = new on({ color: Math.random() * 16777215 });
    if (this.src === "") {
      const i = new si(), s = new gt(i, n);
      t.add(s);
    } else
      new qf().load(this.src, (s) => {
        t.add(s.scene);
      });
    t.position.x = this.x, t.position.y = this.y, t.position.z = this.z, t.rotation.x = this.rx, t.rotation.y = this.ry, t.rotation.z = this.rz, t.scale.x = this.sx, t.scale.y = this.sy, t.scale.z = this.sz, e.add(t);
  }
  render() {
    return console.log("object"), yo``;
  }
};
Rt([
  bt({ type: String, attribute: "src" })
], St.prototype, "src", 2);
Rt([
  bt({ type: Number, attribute: "x" })
], St.prototype, "x", 2);
Rt([
  bt({ type: Number, attribute: "y" })
], St.prototype, "y", 2);
Rt([
  bt({ type: Number, attribute: "z" })
], St.prototype, "z", 2);
Rt([
  bt({ type: Number, attribute: "rx" })
], St.prototype, "rx", 2);
Rt([
  bt({ type: Number, attribute: "ry" })
], St.prototype, "ry", 2);
Rt([
  bt({ type: Number, attribute: "rz" })
], St.prototype, "rz", 2);
Rt([
  bt({ type: Number, attribute: "sx" })
], St.prototype, "sx", 2);
Rt([
  bt({ type: Number, attribute: "sy" })
], St.prototype, "sy", 2);
Rt([
  bt({ type: Number, attribute: "sz" })
], St.prototype, "sz", 2);
St = Rt([
  Mo("mv-object")
], St);
