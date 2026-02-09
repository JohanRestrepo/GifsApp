import { Component } from '@angular/core';
import { environment } from '@environments/environment';//Esto lo cree con un alias en tsconfig.json

@Component({
  selector: 'gifs-side-menu-header',
  imports: [],
  templateUrl: './gifs-side-menu-header.component.html',
})
export class GifsSideMenuHeader { 

  envs = environment
}
