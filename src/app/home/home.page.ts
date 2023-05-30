import { Component } from '@angular/core';
import { CalculationService } from '../service/calculation.service';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from '../header/header.component';
import { DataFormComponent } from '../data-form/data-form.component';
import { NgFor, NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, HeaderComponent, DataFormComponent, NgFor,NgIf, CommonModule ],
})
export class HomePage {
  matrix: number[][] = [];
  modifiedElements: number[] = [];

  constructor(private calculationService: CalculationService) {}

  onMatrixDataReceived(matrix: number[][]) {
    this.matrix = matrix;
    this.modifiedElements = this.calculationService.getModifiedElements(matrix);
  }

  isModified(element: number): boolean {
    return this.modifiedElements.includes(element);
  }
}
