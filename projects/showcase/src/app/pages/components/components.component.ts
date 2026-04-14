import { Component } from '@angular/core';
import { ButtonComponent, CardComponent, BadgeComponent, InputComponent, ModalComponent, SpinnerComponent, EmptyStateComponent } from 'shy-ui';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-components',
  standalone: true,
  imports: [ButtonComponent, CardComponent, BadgeComponent, InputComponent, ModalComponent, SpinnerComponent, EmptyStateComponent, FormsModule],
  templateUrl: './components.component.html',
  styleUrl: './components.component.scss'
})
export class ComponentsComponent {
  modalOpen = false;
  inputValue = '';
}
