import { Component } from '@angular/core';
import { IconComponent, ICONS } from '@shy/ui';

@Component({
  selector: 'app-icons',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './icons.component.html',
  styleUrl: './icons.component.scss'
})
export class IconsComponent {
  iconNames = Object.keys(ICONS);
}
