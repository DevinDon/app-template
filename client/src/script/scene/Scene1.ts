import { Container, loader, Sprite, utils } from 'pixi.js';
import { ArrayWith, Area, SpriteExt } from '../type';
import BaseScene from './BaseScene';
import Util from '../Util';

export class Scene1 extends BaseScene {

  public area: Area;

  public container: Container;

  private blobs: SpriteExt[];
  private explorer: SpriteExt;

  constructor() {
    super();
    this.area = { top: 32, right: 512 - 32, bottom: 512 - 32, left: 32 };
    this.container = new Container();
    this.blobs = [];
  }

  public async init(): Promise<Scene1> {
    return new Promise((res, rej) => {
      loader.add('assets/image/treasureHunter.json')
        .load(() => {
          /** Dungeon background. */
          const dungeon = new Sprite(utils.TextureCache['dungeon.png']);
          /** Generate scene. */
          this.container.addChild(dungeon);
          const door = new Sprite(utils.TextureCache['door.png']);
          door.position.set(32, 0);
          const explorer = new Sprite(utils.TextureCache['explorer.png']);
          explorer.position.set(64, this.container.height / 2);
          this.explorer = {
            sprite: explorer,
            vx: 0,
            vy: 0
          };
          const treasure = new Sprite(utils.TextureCache['treasure.png']);
          treasure.position.set(this.container.width - treasure.width - 64, this.container.height / 2);
          this.container.addChild(door, explorer, treasure);
          // Generate blob
          for (let i = 0; i < 5; i++) {
            const blob = new Sprite(utils.TextureCache['blob.png']);
            blob.position.set(96 + i * 64, Util.random(64, 400));
            this.blobs.push({
              sprite: blob,
              vx: Math.random(),
              vy: Math.random()
            });
            this.container.addChild(blob);
          }
          // Bind controller
          this.bindController();
          // All done
          res(this);
        });
    });
  }

  public anime(delta: number) {
    this.blobs.forEach((v, i) => {
      v.vx *= Util.outOfX(v.sprite, this.area) ? -1 : 1;
      v.vy *= Util.outOfY(v.sprite, this.area) ? -1 : 1;
      v.sprite.x += v.vx;
      v.sprite.y += v.vy;
      if (Util.isHit(v.sprite, this.explorer.sprite)) {
        console.log(`Hit!`);
      }
    });
    this.explorer.sprite.x += this.explorer.vx;
    this.explorer.sprite.y += this.explorer.vy;
    Util.outOfX(this.explorer.sprite, this.area);
    Util.outOfY(this.explorer.sprite, this.area);
  }

  private bindController() {
    addEventListener('keydown', e => {
      if (e.keyCode === 37) { // left
        this.explorer.vx = -1;
      } else if (e.keyCode === 38) { // up
        this.explorer.vy = -1;
      } else if (e.keyCode === 39) { // right
        this.explorer.vx = 1;
      } else if (e.keyCode === 40) { // down
        this.explorer.vy = 1;
      }
    });
    addEventListener('keyup', e => {
      if (e.keyCode === 37) { // left
        this.explorer.vx = 0;
      } else if (e.keyCode === 38) { // up
        this.explorer.vy = 0;
      } else if (e.keyCode === 39) { // right
        this.explorer.vx = 0;
      } else if (e.keyCode === 40) { // down
        this.explorer.vy = 0;
      }
    });
  }

}

export default Scene1;
