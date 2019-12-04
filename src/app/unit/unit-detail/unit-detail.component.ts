import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {Unit} from '../unit';
import {UnitDetail} from '../unit-detail';
import { UnitService } from '../unit.service';


@Component({
  selector: 'app-unit-detail',
  templateUrl: './unit-detail.component.html',
  styleUrls: ['./unit-detail.component.css']
})
export class UnitDetailComponent implements OnInit {

  constructor(private unitService: UnitService, private route: ActivatedRoute) { }

  unitDetail: UnitDetail;

  unit_id: number;

  loader: any;

  getUnitDetail(): void {
      this.unitService.getUnit(this.unit_id).subscribe(unitDetail => {this.unitDetail = unitDetail});
    }
/*
  ngOnInit() {
    this.unit_id = +this.route.snapshot.paramMap.get('id');
    this.unitDetail = new UnitDetail();
    this.getUnitDetail();
  }
*/

onLoad(params) {
  this.unit_id = parseInt(params['id']);
  this.unitDetail = new UnitDetail();
  this.getUnitDetail();
}
ngOnInit() {
  this.loader = this.route.params.subscribe((params: Params) => this.onLoad(params));
}

ngOnDestroy() {
  this.loader.unsubscribe();
}

}
