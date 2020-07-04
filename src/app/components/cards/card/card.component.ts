import { ModalComponent } from './../modal/modal.component';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Task, TaskInterface } from 'src/app/models/task.model';
import { TaskType } from 'src/app/models/taskEnum';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig} from '@angular/material/dialog';

export interface DialogData {
  mes: string;
  ano: number;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit, OnDestroy {
  @Input() nombreDelMes: string;
  totalDelMes: number;
  ano = 2020;


  taskList: TaskInterface[] = [
    { name: 'Aluguel', cost: 580, taskType: TaskType.Casa, mes: 'Maio' },
    { name: 'Mastercard', cost: 320, taskType: TaskType.Banco, mes: 'Maio' },
    { name: 'Gasoil', cost: 120, taskType: TaskType.Carro, mes: 'Maio' },
    { name: 'Restaurante', cost: 70, taskType: TaskType.Restaurante, mes: 'Maio' }];

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {

    this.totalDelMes = this.taskList.map(a => a.cost).reduce((a, b) => a + b);
    console.log(this.totalDelMes);

  }

  abrirModal(index?: number) {


    const dialogRef = this.dialog.open(ModalComponent, {
      height: '425px',
      width: '400px',
      hasBackdrop: false,
      data: {mes: this.nombreDelMes, ano: this.ano}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);

    });

  }

  ngOnDestroy(): void {
    // Destruir lça subscription del Modal
  }

}

