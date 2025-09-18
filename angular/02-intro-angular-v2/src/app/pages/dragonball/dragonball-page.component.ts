import { Component, computed, signal } from "@angular/core";

interface Character {
    id: number;
    name: string;
    power: number;
}


@Component({
    standalone: true,
    templateUrl: './dragonball-page.component.html',
    imports: [],
    //styleUrl: './dragonball-page.component.css'
})
export class DragonballPageComponent{

    name = signal('');
    power = signal(0);

    characters = signal<Character[]>([
        { id: 1, name: 'Goku', power: 15000 },
        // { id: 2, name: 'Vegeta', power: 7500 },
        // { id: 3, name: 'Piccolo', power: 5000 },
        // { id: 4, name: 'Yamcha', power: 500}
    ]);

    addCharacter() {

        if (!this.name() || !this.power() || this.power() <= 0) {
            return;
        }

        const newCharacter: Character = {
            id: this.characters().length + 1,
            name: this.name(),
            power: this.power()
        };

        //this.characters().push(newCharacters);

        this.characters.update(characters => [...characters, newCharacter]);
        this.resetFields();
    }

    resetFields() {
        this.name.set('');
        this.power.set(0);
    }
}