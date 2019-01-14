import { Application, Container, Sprite } from 'pixi.js';
import BaseScene from './scene/BaseScene';
import Scene1 from './scene/Scene1';
import { Area, ArrayWith, Direction } from './type';
import Scene0 from './scene/Scene0';

export class Game {

  /** Pixi application. */
  private app: Application;
  /** Pixi stage. */
  private stage: Container;
  /** All scenes. */
  private scenes: ArrayWith<BaseScene>;

  constructor() {
    console.log(`Loading game...`);
    this.app = new Application({
      width: 512,
      height: 512,
      antialias: true
    });
    this.stage = this.app.stage;
    this.scenes = {
      '0': new Scene0(),
      '1': new Scene1()
    };
    this.clearBind();
    this.load('0', 'The begin!');
    this.load('1');
    this.start('0');
    setTimeout(() => {
      this.end('0');
      this.start('1');
    }, 1500);
    document.body.appendChild(this.app.view);
    console.log(`Game loaded.`);
  }

  private clearBind() {
    onkeydown = e => { };
    onkeypress = e => { };
    onkeyup = e => { };
  }

  private async load(index: string, ...args: any) {
    const scene = this.scenes[index];
    if (!scene) {
      console.error(`No such scene: ${index}`);
      return false;
    }
    await scene.init(args);
    scene.container.visible = false;
    this.stage.addChild(scene.container);
    this.app.ticker.add(scene.anime.bind(scene));
  }

  private start(index: string) {
    const scene = this.scenes[index];
    if (!scene) {
      console.error(`No such scene: ${index}`);
      return false;
    }
    scene.container.visible = true;
  }

  private end(index: string) {
    const scene = this.scenes[index];
    if (!scene) {
      console.error(`No such scene: ${index}`);
      return false;
    }
    scene.container.visible = false;
  }

}

export default Game;
