import { Component } from '@angular/core';
import { GifListItem } from './gif-list-item/gif-list-item.component';

@Component({
  selector: 'gif-list',
  imports: [GifListItem],
  templateUrl: './gif-list.component.html',
})
export class GifList { }
