import { Task, TaskInterface } from 'src/app/models/task.model';
import { DialogData } from './../card/card.component';
import { Component, OnInit, OnDestroy, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TaskType } from 'src/app/models/taskEnum';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;
  taskAdicionada: TaskInterface;
  categorias = [
    { value: TaskType.Alimentos, viewValue: 'Alimentos' },
    { value: TaskType.Animais, viewValue: 'Animais' },
    { value: TaskType.Banco, viewValue: 'Banco' },
    { value: TaskType.Carro, viewValue: 'Carro' },
    { value: TaskType.Casa, viewValue: 'Casa' },
    { value: TaskType.Otros, viewValue: 'Outros' },
    { value: TaskType.Restaurante, viewValue: 'Restaurante' },
    { value: TaskType.Transporte, viewValue: 'Transporte' },
  ];
  checked = false;

  constructor(public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }


  onNoClick(): void {
    this.dialogRef.close();
  }

  addNewItem(form: NgForm) {
    const value = form.value;
    this.taskAdicionada = new Task(value.nomGasto, value.valorGasto, value.optSelect, new Date(),
      this.data.mes, this.data.ano, value.gastoRecorrenteTog ? true : false, value.jaPagoTog ? true : false);
    // this._ingredientesService.addIngredients(newIngredient);
    console.log(this.taskAdicionada);


    this.dialogRef.close();

  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    console.log('Destroy del Modal');
  }
}
