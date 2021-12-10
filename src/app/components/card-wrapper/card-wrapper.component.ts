import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-wrapper',
  templateUrl: './card-wrapper.component.html',
  styleUrls: ['./card-wrapper.component.scss']
})
export class CardWrapperComponent implements OnInit {

  tarjetas = [
    {
      imagen: "assets/images/sami.npg",
      categoria: "Vuelo",
      titulo: "Viajá a París",
      ofertaInfalible: false,
      precio: 654299,
    },
    {
      imagen: "assets/images/sami.npg",
      categoria: "Hotel",
      titulo: "Visita Medellín",
      ofertaInfalible: true,
      precio: 6542,
    },
    {
      imagen: "assets/images/sami.npg",
      categoria: "Hotel",
      titulo: "Conoce la playa",
      ofertaInfalible: false,
      precio: 3682,
    },
    {
      imagen: "assets/images/sami.npg",
      categoria: "Paquete",
      titulo: "Visita Colombia",
      ofertaInfalible: false,
      precio: 823985,
    }
  ];

  //preparo los datos a enviar

  /*imagen = "assets/images/sami.npg";
  categoria = "vuelo";
  titulo = "viaje a Paris";
  ofertaInfalible = true;
  precio = 556448;*/

  constructor() { }

  ngOnInit(): void {
  }

}
