
import { UpperCasePipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
    standalone: true,
    templateUrl: './hero-page.component.html',
    styleUrl: './hero-page.component.css',
    imports:[UpperCasePipe]
})
export class HeroPageComponent {

    name = signal('IronMan');
    age = signal(45);
    
    //heroDescription = computed(() => `${this.name()} - ${this.age()}`);
    heroDescription = computed(() => {
        const description = `${this.name()} - ${this.age()}`;
        return description;
    });

    capitalizedName = computed(() => this.name().toUpperCase());

    getHeroDescription():string {
        return `${this.name()} - ${this.age()}`;
    }

    changeHero() {
        this.name.set('Spiderman');
        this.age.set(22);
    }

    changeAge() {
        this.age.set(60);
    }

    resetForm() {
        this.name.set('IronMan');
        this.age.set(45);
    }

}