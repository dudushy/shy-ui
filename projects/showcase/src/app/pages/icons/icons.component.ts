import { Component, OnDestroy, OnInit } from '@angular/core';
import { IconComponent, ICONS } from '@shy/ui';
import { DebugService } from '@shy/utils';

@Component({
  selector: 'app-icons',
  imports: [IconComponent],
  templateUrl: './icons.component.html',
  styleUrl: './icons.component.scss',
})
export class IconsComponent implements OnInit, OnDestroy {
  iconNames = Object.keys(ICONS).filter((name) => !name.endsWith('-filled'));

  constructor(private debugService: DebugService) {
    this.debugService.log(this);
  }

  ngOnInit(): void {
    this.debugService.log(this);
  }

  ngOnDestroy(): void {
    this.debugService.log(this);
  }
}
