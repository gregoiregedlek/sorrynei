import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Ausrede } from './model/ausrede';
import { ausreden } from './data/ausreden';

@Component({
  selector: 'app-ausrede',
  templateUrl: './ausrede.component.html',
  styleUrls: ['./ausrede.component.less']
})
export class AusredeComponent {

  ausrede!: Ausrede;

  nextAusrede() {
    this.ausrede = ausreden[Math.floor(Math.random() * ausreden.length)];
  }

  constructor() {
    this.nextAusrede();
  }
}