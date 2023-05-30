import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CalculationService } from '../service/calculation.service';


@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.scss'],
  standalone:true,
  imports:[ ReactiveFormsModule]
})
export class DataFormComponent {
  dataForm: FormGroup;

  @Output() formData: EventEmitter<any> = new EventEmitter();

  constructor(private formBuilder: FormBuilder) {
    this.dataForm = this.formBuilder.group({
      matrixSize: ['', [Validators.required, Validators.min(1)]],
    });
  }

  onSubmit() {
    if (this.dataForm.invalid) {
      return;
    }

    const formData = {
      matrixSize: this.dataForm.value.matrixSize,
    };

    this.formData.emit(formData);
  }
}
