import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { concatAll, map, scan, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-drag',
  templateUrl: './drag.component.html',
  styleUrls: ['./drag.component.scss']
})
export class DragComponent implements OnInit, AfterViewInit {

  @ViewChild('back') refBack: ElementRef<HTMLDivElement>;
  @ViewChild('drag') refDrag: ElementRef<HTMLDivElement>;

  constructor() { }

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
      map((event: MouseEvent) => ({ event, offset: { x: 0, y: 0 }, result: { x: drag.clientLeft, y: drag.clientLeft } })),
      scan(
        (previous, current) => ({
          event: current.event,
          offset: {
            x: current.event.clientX - previous.event.clientX,
            y: current.event.clientY - previous.event.clientY
          },
          result: {
            x: current.event.clientX - previous.event.clientX + previous.result.x,
            y: current.event.clientY - previous.event.clientY + previous.result.y
          }
        })
      )
    ).subscribe(position => {
      drag.style.left = Math.min(MAX_WIDTH, Math.max(MIN_WIDTH, position.result.x)) + 'px';
      drag.style.top = Math.min(MAX_HEIGHT, Math.max(MIN_HEIGHT, position.result.y)) + 'px';
    });
  }

}
