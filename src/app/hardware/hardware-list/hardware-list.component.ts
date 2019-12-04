import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Hardware} from '../hardware';
import {HardwareService} from '../hardware.service';

@Component({
  selector: 'app-hardware-list',
  templateUrl: './hardware-list.component.html',
  styleUrls: ['./hardware-list.component.css']
})
export class HardwareListComponent implements OnInit {

  constructor(private hardwareService: HardwareService, private router: Router, private route:ActivatedRoute) { }

hardwares: Hardware[];

getHardwares(): void {
        this.hardwareService.getHardwares().subscribe(hardwaresN => this.hardwares = hardwaresN);
}

  onSelectCreate(): void {
    console.log("navigating ", this.route.toString());
    this.router.navigate(['/hardwares', { outlets: { create: ['agregar'] } }], {
      relativeTo: this.route.parent
    });
  }


ngOnInit() {
        this.getHardwares();
}


}