import { Component, OnInit } from '@angular/core';
import { Requester } from '../requester';
import { RequesterService } from '../requester.service';

@Component({
  selector: 'app-requester-list',
  templateUrl: './requester-list.component.html',
  styleUrls: ['./requester-list.component.css']
})
export class RequesterListComponent implements OnInit {

  constructor(private requesterService: RequesterService) { 
    this.requesters=[];
  }

  requesters: Requester[];
  getRequesters(): void {
    this.requesterService.getRequesters().subscribe(requesters => (this.requesters = requesters));
  }

  ngOnInit() {
    this.getRequesters();
  }

}