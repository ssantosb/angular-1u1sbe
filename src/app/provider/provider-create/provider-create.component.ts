import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {Provider} from '../provider';
import {ProviderDetail} from '../provider-detail';
import { ProviderService } from '../provider.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-provider-create',
  templateUrl: './provider-create.component.html',
  styleUrls: ['./provider-create.component.css']
})
export class ProviderCreateComponent implements OnInit {

  providerForm: FormGroup;
  providers: Provider[];

  constructor(private providerService: ProviderService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) {
    this.providerForm = this.formBuilder.group({name: ["", [Validators.required, Validators.minLength(1)]]});
   }

   createProvider(newProvider: Provider) {
     console.warn("el provider fue creado", newProvider);

     this.providerService.createProvider(newProvider).subscribe(provider => {this.providers.push(provider);this.showSuccess();});
     this.providerForm.reset();
   }

   showSuccess() {

     for (let i = 0; i < this.providers.length; i++){
       console.log(this.providers[i].id+' '+this.providers[i].name);
     }
     this.toastr.success("Provider", "Creado exitosamente!", {"progressBar": true,timeOut:3000});
   }
   ngOnInit() {

     this.providerService.getProviders().subscribe(providers => (this.providers = providers));
   }

}
