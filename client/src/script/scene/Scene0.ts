import { Container, Text } from 'pixi.js';
import { Area } from '../type';
import BaseScene from './BaseScene';

export class Scene0 extends BaseScene {

  public area: Area;

  public container: Container;

  constructor() {
    super();
    this.area = { top: 0, right: 0, bottom: 0, left: 0 };
    this.container = new Container();
  }

  public async init(text: string = 'The end!'): Promise<Scene0> {
    return new Promise<Scene0>((res, rej) => {
      const message = new Text(text, {
        fontFamily: 'Consolas',
        fontSize: 64,
        fill: 'white',
        // fontWeight: 'blod'
      });
      message.x = (512 - message.width) / 2;
      message.y = (512 - message.height) / 2;
      this.container.addChild(message);
      res(this);
    });
  }

  public anime(delta: number) { }

}

export default Scene0;
