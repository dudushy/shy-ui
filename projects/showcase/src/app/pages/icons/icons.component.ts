import { Component, OnDestroy, OnInit } from '@angular/core';
import { IconComponent } from '@shy/ui';
import { DebugService } from '@shy/utils';

@Component({
  selector: 'app-icons',
  imports: [IconComponent],
  templateUrl: './icons.component.html',
  styleUrl: './icons.component.scss',
})
export class IconsComponent implements OnInit, OnDestroy {
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
