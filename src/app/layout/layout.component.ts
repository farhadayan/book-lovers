import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LAYOUT_CONFIG, LayoutConfig } from './layout.config';
import { BehaviorSubject } from 'rxjs';
import { MatDrawer } from '@angular/material/sidenav';

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
