import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GifList } from '../../components/gif-list/gif-list.component';

@Component({
  selector: 'app-trending-page',
  imports: [GifList],
  templateUrl: './trending-page.component.html',
})
export default class TrendingPage { }
