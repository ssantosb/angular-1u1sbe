import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Request } from '../request';
import {RequestService} from '../request.service';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})

export class RequestListComponent implements OnInit {

  /**
   * Attribute to show list of requests
   */
  requests: Request[];

  /**
   * Construcor of the component
   * @param requestService HTTP service in charge of this component
   * @param router Router to manage component navigation
   * @param route Route to navigate
   */
  constructor(private requestService: RequestService, private router:Router ,private route:ActivatedRoute) { }

  /**
   * Method that retrieves list of requests
   */
  getRequests(): void {
    this.requestService.getRequests().subscribe(requests => this.requests = requests);
  }
  /**
   * Default method to be executed once the component is initialized
   */
  ngOnInit() {
    this.getRequests();
  }



}