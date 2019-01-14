import { Container, Sprite } from 'pixi.js';
import { ArrayWith, Area } from '../type';

export abstract class BaseScene {

  /** Area. */
  public abstract area: Area;
  /** Scene. */
  public abstract container: Container;

  public abstract async init(...args: any): Promise<any>;

  public abstract anime(delta: number): any;

}

export default BaseScene;
