import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.scss']
})
export class TarjetaComponent implements OnInit {

  contador : number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  anadirCarrito(){
    console.log("asd");
    this.contador++;

    console.log(this.contador);

  }
}
