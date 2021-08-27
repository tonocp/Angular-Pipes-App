import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  // i18nSelect Pipe
  nombre: string = 'Felipe';
  genero: string = 'masculino';
  invitacionMap = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }
  
  // i18nPlural Pipe
  clientes: string[] = ['María','Pedro','Felipe','Jose Luis','Lucía'];
  clientesMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  cambiaPersona(persona: string) {
    this.nombre = 'María';
    this.genero = 'femenino';
    if(persona === 'María'){
      this.nombre = 'Felipe';
      this.genero = 'masculino';
    }
  }

  // Slice Pipe
  arrayPersonas: string[] = ['María','Pedro','Felipe','Jose Luis','Lucía'];

  // KeyValue Pipe
  persona = {
    nombre: 'Felipe',
    edad: 35,
    direccion: 'Ottawa, Canadá'
  }

  // JSON Pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ]

  // Async Pipe
  miObservable = interval(1000); // Intervalo que emite un número cada segundo.

  valorPromesa = new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve('Hola, soy un Promise!');
    }, 5000 );
  });
}
