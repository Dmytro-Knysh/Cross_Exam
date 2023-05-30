import { Component } from '@angular/core';
import { CalculationService } from '../service/calculation.service';
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
  formData: any;
  matrix!: number[][];
  modifiedElements!: number[];

  onFormDataReceived(data: any) {
    this.formData = data;
  }

  calculateMatrix() {
    const N = this.formData.matrixSize;

    this.matrix = [];
    this.modifiedElements = [];

    if (N > 0) {
      for (let i = 0; i < N; i++) {
        this.matrix[i] = [];
        for (let j = 0; j < N; j++) {
          const element = i * j;
          if (element % 3 === 0 && element % 7 === 0) {
            this.matrix[i][j] = 11;
            this.modifiedElements.push(element);
          } else if (element % 3 === 0) {
            this.matrix[i][j] = 43;
            this.modifiedElements.push(element);
          } else if (element % 7 === 0) {
            this.matrix[i][j] = 47;
            this.modifiedElements.push(element);
          } else {
            this.matrix[i][j] = element;
          }
        }
      }
    } else {
      this.modifiedElements = [];
    }
  }

  isModified(element: number) {
    return this.modifiedElements.includes(element);
  }
}
