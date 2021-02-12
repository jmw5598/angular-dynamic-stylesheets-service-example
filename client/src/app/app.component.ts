import { Component, OnInit } from '@angular/core';
import { DynamicStylesService } from './services/dynamic-styles.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'client';

  constructor(
    private _styleService: DynamicStylesService
  ) {}

  ngOnInit(): void {
    this._styleService.loadStyle('styles-b.css');
    setTimeout(() => {
      this._styleService.loadStyle('styles-a.css');
    }, 2000);
  }
}
