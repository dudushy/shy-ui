import { Component, OnDestroy, OnInit } from '@angular/core';
import { IconComponent, ICONS } from '@shy/ui';

@Component({
  selector: 'app-icons',
  imports: [IconComponent],
  templateUrl: './icons.component.html',
  styleUrl: './icons.component.scss',
})
export class IconsComponent implements OnInit, OnDestroy {
  constructor() {}

  ngOnInit(): void {}

  ngOnDestroy(): void {}
}
