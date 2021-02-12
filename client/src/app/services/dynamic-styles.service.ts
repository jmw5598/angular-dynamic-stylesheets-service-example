import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DynamicStylesService {
  constructor(
    @Inject(DOCUMENT)
    private _document: Document
  ) {}

  loadStyle(styleName: string) {
    const head = this._document.getElementsByTagName('head')[0];
    let themeLink: HTMLLinkElement = this._document.getElementById('client-theme') as HTMLLinkElement;
    
    if (themeLink) {
      themeLink.href = styleName;
    } else {
      const style = this._document.createElement('link');
      style.id = 'client-theme';
      style.rel = 'stylesheet';
      style.href = `${styleName}`;

      head.appendChild(style);
    }
  }
}
