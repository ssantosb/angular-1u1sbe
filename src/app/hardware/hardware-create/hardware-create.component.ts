import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { ifStmt } from '@angular/compiler/src/output/output_ast';



import {HardwareService} from '../hardware.service';

import {Hardware} from '../hardware';

@Component({
    selector: 'app-hardware-create',
    templateUrl: './hardware-create.component.html',
    styleUrls: ['./hardware-create.component.css']
})
export class HardwareCreateComponent implements OnInit {

/**
  Form to create project
  */
  hardwareForm: FormGroup;

  hardware:Hardware;

  hardwares:Hardware[];


  constructor(private hardwareService:HardwareService ,private toastr:ToastrService, private formBuilder:FormBuilder) {
    this.hardwareForm  = this.formBuilder.group({
      ip:["",[Validators.required]],
      cores:["", Validators.required],
      ram:[" ",Validators.required],
      cpu:[" ", Validators.required],
      plataforma:[" ", Validators.required]});
   }

   onSelectShow():void{
    console.log(this.hardware.id);
   }

   createProject(newHardware: Hardware) {
    // Process checkout data here
    newHardware.ip = this.hardware.ip;
    newHardware.cores = this.hardware.cores;
    newHardware.ram = this.hardware.ram;
    newHardware.cpu = this.hardware.cpu;
    newHardware.plataforma = this.hardware.plataforma;

    console.warn("el hardware fue creado", newHardware);
    this.hardwareService.createHardware(newHardware).subscribe(p => {
      this.hardwares.push(p);
      this.showSuccess();
    }, err => {
                this.toastr.error(err, 'Error')});

    this.hardwareForm.reset();
  }

  showSuccess() {
    for (let i = 0; i < this.hardwares.length; i++){
      console.log(this.hardwares[i].id+' '+this.hardwares[i].ip);
    }
    this.toastr.success("Hardware", "Creado exitosamente!", {"progressBar": true,timeOut:4000});

  }
  ngOnInit() {
    this.hardware = new Hardware();
    this.hardwareService
      .getHardwares()
      .subscribe(p => (this.hardwares = p));
  }}
