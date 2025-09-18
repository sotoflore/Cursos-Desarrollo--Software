import { ChangeDetectionStrategy, Component, input} from '@angular/core';
import { Character } from '../../../interfaces/character';

@Component({
  selector: 'dragonball-character-list',
  standalone: true,
  //imports: [],
  templateUrl: './character-list.component.html',
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterListComponent {
    characters = input.required<Character[]>();
    listName = input.required<string>();
}
