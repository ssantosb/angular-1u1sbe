import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { DeveloperService } from '../developer.service';
import { DeveloperDetail } from '../developer-detail';

@Component({
    selector: 'app-developer-detail',
    templateUrl: './developer-detail.component.html',
    styleUrls: ['./developer-detail.component.css']
})
export class DeveloperDetailComponent implements OnInit {

    /**
    * The developer
    */
    developerDetail: DeveloperDetail;

    /**
    * Class loader
    */
    loader: any;

    /**
    * Constructor for the component
    * @param route The route which helps to retrieves the id of the book to be shown
    * @param developerService The developer's services provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private route: ActivatedRoute,
        private developerService: DeveloperService
    ) { }

    /**
    * El id del developer que viene en el path get .../developers/developer_id
    */
    developer_id: number;

    /**
    * The method which obtains the developer whose details we want to show
    */
    getDeveloperDetail(): void {
        this.developerService.getDeveloperDetail(this.developer_id)
            .subscribe(developerDetail => {
                this.developerDetail = developerDetail
            });
    }

    /**
     * Method to be executed once this component is loads
     * @param params default parameter of method
     */
    onLoad(params) {
        this.developer_id = parseInt(params['id']);
        this.developerDetail = new DeveloperDetail();
        this.getDeveloperDetail();
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
