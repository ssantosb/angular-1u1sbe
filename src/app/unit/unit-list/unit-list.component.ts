import { Component, OnInit } from '@angular/core';
import {Unit} from '../unit';
import {UnitDetail} from '../unit-detail';
import { UnitService } from '../unit.service';

@Component({
  selector: 'app-unit-list',
  templateUrl: './unit-list.component.html',
  styleUrls: ['./unit-list.component.css']
})
export class UnitListComponent implements OnInit {

  constructor(private unitService: UnitService) { }

  ngOnInit() {
    this.getUnits();
  }

units: Unit[];

getUnits(): void {
        this.unitService.getUnits().subscribe(units => this.units = units);
    }
}
