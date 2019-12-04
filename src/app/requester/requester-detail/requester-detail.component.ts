import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { RequesterService } from '../requester.service';
import { RequesterDetail } from '../requester-detail';

@Component({
    selector: 'app-requester-detail',
    templateUrl: './requester-detail.component.html',
    styleUrls: ['./requester-detail.component.css']
})
export class RequesterDetailComponent implements OnInit {

    /**
    * The requester
    */
    requesterDetail: RequesterDetail;

    /**
    * Class loader
    */
    loader: any;

    /**
    * Constructor for the component
    * @param route The route which helps to retrieves the id of the book to be shown
    * @param requesterService The requester's services provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private route: ActivatedRoute,
        private requesterService: RequesterService
    ) { }

    /**
    * El id del requester que viene en el path get .../requesters/requester_id
    */
    requester_id: number;

    /**
    * The method which obtains the requester whose details we want to show
    */
    getRequesterDetail(): void {
        this.requesterService.getRequesterDetail(this.requester_id)
            .subscribe(requesterDetail => {
                this.requesterDetail = requesterDetail
            });
    }

    /**
     * Method to be executed once this component is loads
     * @param params default parameter of method
     */
    onLoad(params) {
        this.requester_id = parseInt(params['id']);
        this.requesterDetail = new RequesterDetail();
        this.getRequesterDetail();
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
