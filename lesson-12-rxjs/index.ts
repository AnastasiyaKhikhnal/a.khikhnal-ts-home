import { fromEvent } from 'rxjs';
import { map, tap, switchMap, takeUntil } from 'rxjs/operators';

const canvas  = document.querySelector('canvas');
const context = canvas.getContext('2d');

context.lineWidth = 3;
context.strokeStyle = 'blue';

const mousedown = fromEvent(canvas, 'mousedown');
const mouseup = fromEvent(canvas, 'mouseup');
const mousemove = fromEvent(canvas, 'mousemove');
 
 
mousedown.pipe(
  tap(console.log),
  switchMap((ev) =>
      mousemove.pipe(
        tap(console.log),
        map(ev => {
          context.beginPath();
          context.moveTo(ev.offsetX,ev.offsetY);
          context.lineTo(ev.offsetX - ev.movementX, ev.offsetY - ev.movementY);
          context.stroke();
        }),
        takeUntil(mouseup)
      )
    )
  ).subscribe(ev => {
    console.log(ev);
  }); 