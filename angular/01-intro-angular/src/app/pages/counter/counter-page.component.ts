import { ChangeDetectionStrategy, Component, signal } from "@angular/core";

@Component({
    //selector: 'counter-page',
    // template: `
    //     <h1>Counter {{counter}}</h1>
    //     <button (click)="increaseBy(1)">+1</button>
    //     <button (click)="increaseBy(-1)">-1</button>
    //     <button (click)="resetCounter()">Reset</button>
    //     `,
    //styles: [],
    standalone: true,
    templateUrl: './counter-page.component.html',
    styleUrls: ['./counter-page.component.css'],

    // Zoneless
    //changeDetection: ChangeDetectionStrategy.OnPush
})
    
export class CounterPageComponent {
    counter: number = 10;

    // Signals
    counterSignal = signal(10);

    constructor() {
        // setInterval(() =>{
        //     this.counterSignal.update((current) => current + 1);
        // }, 1000)
    }

    increaseBy(value: number): void {
        this.counter += value;
        //this.counterSignal.set(this.counterSignal() + value);
        this.counterSignal.update((current) => current + value);
    }

    resetCounter(): void {
        this.counter = 0;
        this.counterSignal.set(0)
    }

}