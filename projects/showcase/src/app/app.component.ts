import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { IconComponent } from 'shy-ui';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, IconComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  navItems = [
    { path: 'colors', label: 'Colors', icon: 'palette' },
    { path: 'typography', label: 'Typography', icon: 'type' },
    { path: 'spacing', label: 'Spacing', icon: 'grid' },
    { path: 'icons', label: 'Icons', icon: 'star' },
    { path: 'components', label: 'Components', icon: 'layers' },
    { path: 'examples', label: 'Examples', icon: 'zap' },
  ];
}
