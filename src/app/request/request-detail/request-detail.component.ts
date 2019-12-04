import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {Request} from '../request';
import {RequestDetail} from '../request-detail';
import { RequestService } from '../request.service';


@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent implements OnInit {


  /**
   * Constructor for the component
   * @param requestService service to access HTTP methods
   * @param route route to navigate
   */
  constructor(private requestService: RequestService, private route: ActivatedRoute) { }
  
  /**
   * Attribute that represents the detail object of request
   */
  requestDetail: RequestDetail;

  /**
   * ID of the current detail
   */
  request_id: number;

  /**
   * loader for the component
   */
  loader: any;

  getRequestDetail(): void {
      this.requestService.getRequest(this.request_id).subscribe(requestDetail => {this.requestDetail = requestDetail});
    }

  /**
   * Method to be executed once this component is loads
   * @param params default parameter of method
   */
  
  onLoad(params) {

    this.request_id = parseInt(params['id']);
    console.log(" en detail " + this.request_id);
    this.requestDetail = new RequestDetail();
    this.getRequestDetail();
  }
  
  /**
   * Method to be executed automatically once this component is initialized.
   */
  ngOnInit() {

    this.loader = this.route.params.subscribe((params: Params) => this.onLoad(params));
  }

  /**
   * Method to be execuuted automatically once this component is destroyed.
   */
  
  ngOnDestroy() {
    this.loader.unsubscribe();
  }

}
