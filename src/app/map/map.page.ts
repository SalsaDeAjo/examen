import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class MapPage {
  locationInfo: string= '';

  constructor(private activatedRoute: ActivatedRoute) {}

  ionViewWillEnter() {
    // Obtén la información de la ubicación desde la URL
    this.locationInfo = this.activatedRoute.snapshot.queryParams['locationInfo'];

    // Inicializa el mapa de MapBox con la información de la ubicación
    this.initMap(this.locationInfo);
  }

  private initMap(locationInfo: string) {
    mapboxgl.accessToken = 'pk.eyJ1IjoiYnlyb25hcnRpZ2FzIiwiYSI6ImNscXhlcXVhMDBjbXMya28yY3M3ZDZraDMifQ.x_clK9pGGTVxxD4WlmcvdQ'; // Reemplaza con tu propio token de MapBox

    const map = new mapboxgl.Map({
      container: 'map', // ID del elemento HTML donde se mostrará el mapa
      style: 'mapbox://styles/mapbox/streets-v11', // Estilo del mapa (puedes cambiarlo según tus necesidades)
      center: [0, 0], // Centro inicial del mapa
      zoom: 1, // Nivel de zoom inicial
    });

    // Agrega marcador con la ubicación obtenida
    const marker = new mapboxgl.Marker()
      .setLngLat([0, 0]) // Reemplaza con las coordenadas reales de la ubicación
      .addTo(map);
  }
}