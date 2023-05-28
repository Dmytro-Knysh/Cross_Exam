import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.scss'],
  standalone:true,
  imports: [ReactiveFormsModule],
})
export class DataFormComponent implements OnInit {
  dataForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.dataForm = this.formBuilder.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }
  @Output() formData: EventEmitter<any> = new EventEmitter<any>();

  onSubmit() {
    // Отримання даних з форми
    const data = this.dataForm.value;
    
    // Відправка даних до головного компонента
    this.formData.emit(data);
  }
  
}
