import { Container, Sprite } from 'pixi.js';

export interface ArrayWith<T> {
  [index: string]: T;
}

export interface ContainerExt {
  container: Container;
  area: Area;
}

export interface SpriteExt {
  sprite: Sprite;
  vx: number;
  vy: number;
}

export interface Area {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

export type Direction = 'x' | 'y' | 'xy' | '';
