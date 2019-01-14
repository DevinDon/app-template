import { Sprite } from 'pixi.js';
import { Area } from './type';

export namespace Util {

  export function contain(sprite: Sprite, area: Area): boolean {
    return sprite.x > area.left && sprite.x < area.right && sprite.y < area.bottom && sprite.y > area.top;
  }

  export function isHit(a: Sprite, b: Sprite): boolean {
    const hitA = {
      x: a.x + a.width / 2,
      y: a.y + a.height / 2
    };
    const hitB = {
      x: b.x + b.width / 2,
      y: b.y + b.height / 2
    };
    if (Math.abs(hitA.x - hitB.x) < (a.width + b.width) / 2 && Math.abs(hitA.y - hitB.y) < (a.height + b.height) / 2) {
      return true;
    } else {
      return false;
    }
  }

  export function outOfX(sprite: Sprite, area: Area): 'left' | 'right' | '' {
    if (sprite.x + sprite.width > area.right) {
      sprite.x = area.right - sprite.width;
      return 'right';
    } else if (sprite.x < area.left) {
      sprite.x = area.left;
      return 'left';
    } else {
      return '';
    }
  }

  export function outOfY(sprite: Sprite, area: Area): 'top' | 'bottom' | '' {
    if (sprite.y + sprite.height > area.bottom) {
      sprite.y = area.bottom - sprite.height;
      return 'bottom';
    } else if (sprite.y < area.top) {
      sprite.y = area.top;
      return 'top';
    } else {
      return '';
    }
  }

  /**
   * Generate a random number in (min, max].
   * @param min Min number, not include.
   * @param max Max number, include.
   * @returns {number} The random number in (min, max].
   */
  export function random(min: number, max: number): number {
    return Math.ceil(Math.random() * (max - min) + min);
  }

}

export default Util;
