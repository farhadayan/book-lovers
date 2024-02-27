import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LAYOUT_CONFIG, LayoutConfig } from './layout.config';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export default class LayoutComponent {
  private layoutConfig = new BehaviorSubject<LayoutConfig[]>(LAYOUT_CONFIG);
  layoutConfig$ = this.layoutConfig.asObservable();
}
