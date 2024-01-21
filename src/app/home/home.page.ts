import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {
  constructor(private barcodeScanner: BarcodeScanner, private navCtrl: NavController) {}

  async scanQRCode() {
    const barcodeData = await this.barcodeScanner.scan();

    if (!barcodeData.cancelled) {
      // Redirige a la página del mapa sin procesar la información escaneada
      this.navCtrl.navigateForward(['/map']);
    }
  }
}
