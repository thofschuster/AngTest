import {Component, Input, Output, EventEmitter} from '@angular/core';


/*
var e = new EventEmitter();

e.subscribe(function(param: any){
    console.log("Ereignis ist auggetreten!: " + param);
});

e.subscribe(function(param: any){
    console.log("Ereignis ist nochmal auggetreten!: " + param);
});


setTimeout(function(){
    e.emit("6,6 Sekunden");    
},6666);

setTimeout(function(){
    e.emit("4,4 Sekunden");    
},4444);

setTimeout(function(){
    e.emit("2,2 Sekunden");    
},2222);
*/






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
