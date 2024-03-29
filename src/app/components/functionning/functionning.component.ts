import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faList,
  faMobileScreenButton,
  faStore,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-functionning',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './functionning.component.html',
  styleUrl: './functionning.component.scss',
})
export class FunctionningComponent {
  faMobileScreenButton = faMobileScreenButton;
  faList = faList;
  faStore = faStore;
}
