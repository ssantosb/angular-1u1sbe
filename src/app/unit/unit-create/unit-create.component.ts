import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {Unit} from '../unit';
import {UnitDetail} from '../unit-detail';
import { UnitService } from '../unit.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-unit-create',
  templateUrl: './unit-create.component.html',
  styleUrls: ['./unit-create.component.css']
})
export class UnitCreateComponent implements OnInit {

  unitForm: FormGroup;
  units: Unit[];

  constructor(private unitService: UnitService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) {
    this.unitForm = this.formBuilder.group({name: ["", [Validators.required, Validators.minLength(1)]]});
   }

   createUnit(newUnit: Unit) {
     console.warn("el unit fue creado", newUnit);

     this.unitService.createUnit(newUnit).subscribe(unit => {this.units.push(unit);this.showSuccess();});
     this.unitForm.reset();
   }

   showSuccess() {

     for (let i = 0; i < this.units.length; i++){
       console.log(this.units[i].id+' '+this.units[i].name);
     }
     this.toastr.success("Unit", "Creado exitosamente!", {"progressBar": true,timeOut:3000});
   }
   ngOnInit() {

     this.unitService.getUnits().subscribe(units => (this.units = units));
   }

}
