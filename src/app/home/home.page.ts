import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from '../header/header.component';
import { DataFormComponent } from '../data-form/data-form.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, HeaderComponent, DataFormComponent],
})
export class HomePage {
  constructor() {}
  formData: any;

  onFormDataReceived(data: any) {
    this.formData = data;
    // Ви можете виконати додаткові дії з отриманими даними тут
  }
}

