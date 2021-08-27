import { Component } from '@angular/core';

@Component({
  selector: 'app-comunes',
  templateUrl: './comunes.component.html',
  styles: [
  ]
})
export class ComunesComponent {

  nombreLower:    string = 'felipe';
  nombreUpper:    string = 'FELIPE';
  nombreCompleto: string = 'fElIpE MEDINabeiTia gOIKoeTXea';

  fecha:  Date = new Date();

}
