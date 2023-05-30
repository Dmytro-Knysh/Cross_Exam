import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CalculationService } from '../service/calculation.service';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.scss'],
  standalone:true,
  imports:[ ReactiveFormsModule, NgIf,]
})
export class DataFormComponent {
  @Output() matrixData = new EventEmitter<number[][]>();

  dataForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private calculationService: CalculationService
  ) {
    this.dataForm = this.formBuilder.group({
      matrixSize: ['', [Validators.required, Validators.min(1)]],
    });
  }

  onSubmit() {
    if (this.dataForm.invalid) {
      return;
    }

    const N = this.dataForm.value.matrixSize;
    const matrix = this.calculationService.calculateMatrix(N);
    this.matrixData.emit(matrix);
  }
}
