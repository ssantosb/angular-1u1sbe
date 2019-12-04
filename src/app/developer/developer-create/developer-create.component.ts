import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
import { DeveloperService } from '../developer.service';
import { Developer } from '../developer';

@Component({
  selector: 'app-developer-create',
  templateUrl: './developer-create.component.html',
  styleUrls: ['./developer-create.component.css'],
})
export class DeveloperCreateComponent implements OnInit {

  /**
  * Constructor for the component
  * @param developerService The developer's services provider
  * @param toastrService The toastr to show messages to the user
  */
  constructor(private developerService: DeveloperService, private formBuilder: FormBuilder, private toastr: ToastrService) {
    this.developerForm = this.formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(2)]],
      login: ["", [Validators.required, Validators.minLength(2)]],
      email: ["", [Validators.required, Validators.minLength(2)]],
      phone: ["", [Validators.required, Validators.minLength(2)]],
      image: ["", [Validators.nullValidator]],
      leader: [" ", Validators.required],
      password: ["", [Validators.required, Validators.minLength(2)]]
    });
  }

  /**
  * The new developer
  */
  developer: Developer;

  /**
  * The developers
  */
  developers: Developer[];

  /**
   * Form to create the developer
   */
  developerForm: FormGroup;

  /**
  * Creates an developer
  */
  createDeveloper(newDeveloper: Developer) {
    console.warn("el desarrollador fue creado", newDeveloper);
    this.developerService.createDeveloper(newDeveloper).subscribe(p => {
      this.developers.push(p);
      this.showSuccess();
    }, err => {
      this.toastr.error(err, 'Error')
    });
    this.developerService.signUp(newDeveloper.login);
    this.toastr.success('Successfully signed up');
    this.developerForm.reset();
  }

  /**
   * Show developer's creation success
   */
  showSuccess() {
    for (let i = 0; i < this.developers.length; i++) {
      console.log(this.developers[i].id + ' ' + this.developers[i].name);
    }
    this.toastr.success("Developer", "Creado exitosamente!", { "progressBar": true, timeOut: 4000 });
  }

  /**
  * This function will initialize the component
  */
  ngOnInit() {
    this.developer = new Developer();
    this.developerService
      .getDevelopers()
      .subscribe(p => (this.developers = p));
  }


}
