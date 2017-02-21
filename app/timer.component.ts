import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'my-timer',
  template: `
              <div>
                TimerComponent: {{duration}}
              </div>
          `
})

export class TimerComponent {
   @Input() duration: number;
   @Output() onFinish = new EventEmitter();

   constructor() {
        setInterval(()=>{
            this.duration--
            if (this.duration == 0){
                this.onFinish.emit();
            }

        },1000); 
   }

}
