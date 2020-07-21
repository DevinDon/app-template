import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { concatAll, map, scan, takeUntil, tap, throttleTime } from 'rxjs/operators';

@Component({
  selector: 'app-drag',
  templateUrl: './drag.component.html',
  styleUrls: ['./drag.component.scss']
})
export class DragComponent implements OnInit, AfterViewInit {

  @ViewChild('back') refBack: ElementRef<HTMLDivElement>;
  @ViewChild('drag') refDrag: ElementRef<HTMLDivElement>;

  constructor() { }

  validValue(value: number, max: number, min: number) {
    return Math.min(max, Math.max(min, value))
  }

  ngOnInit() { }

  ngAfterViewInit() {
    const back = this.refBack.nativeElement;
    const drag = this.refDrag.nativeElement;

    const MIN_HEIGHT = 0;
    const MIN_WIDTH = 0;
    const MAX_HEIGHT = window.innerHeight - 24 * 2 - drag.clientHeight;
    const MAX_WIDTH = window.innerWidth - 24 * 2 - drag.clientWidth;

    const observableMouseDown = fromEvent(drag, 'mousedown');
    const observableMouseMove = fromEvent(back, 'mousemove');
    const observableMouseUp = fromEvent(window, 'mouseup');

    // 1. 通过 mouseDownEvent 触发拖拽
    // 2. 将其映射为 mouseMoveEvent
    // 3. 直到 mouseUpEvent 发生
    // 4. 组合（串流）所有 observable
    // 5. 计算出需要的属性，包括鼠标变动量与元素新坐标
    // 6. 可选，日志查看结果
    // 7. 订阅事件，并修改元素属性
    observableMouseDown.pipe(
      map(() => observableMouseMove.pipe(takeUntil(observableMouseUp))),
      concatAll(),
      map((event: MouseEvent) => ({ event, x: drag.clientLeft, y: drag.clientLeft })),
      scan(
        (previous, current) => ({
          event: current.event,
          x: this.validValue(current.event.clientX - previous.event.clientX + previous.x, MAX_WIDTH, MIN_WIDTH),
          y: this.validValue(current.event.clientY - previous.event.clientY + previous.y, MAX_HEIGHT, MIN_HEIGHT)
        })
      )
    ).subscribe(position => {
      drag.style.left = position.x + 'px';
      drag.style.top = position.y + 'px';
    });
  }

}
