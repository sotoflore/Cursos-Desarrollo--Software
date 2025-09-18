import { Component, inject} from "@angular/core";
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";
import { CharacterAddComponent } from "../../components/dragonball/character-add/character-add.component";
import { DragonballService } from "../../services/dragonball.service";

@Component({
    standalone: true,
    templateUrl: './dragonball-super-page.component.html',
    imports: [CharacterListComponent, CharacterAddComponent],
    //styleUrl: './dragonball-page.component.css'
})
export class DragonballSuperPageComponent{

    // constructor(
    //     private dragonballService: DragonballService
    // ){ }

    public dragonballService = inject(DragonballService);

}