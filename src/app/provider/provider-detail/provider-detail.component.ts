import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {Provider} from '../provider';
import {ProviderDetail} from '../provider-detail';
import { ProviderService } from '../provider.service';


@Component({
  selector: 'app-provider-detail',
  templateUrl: './provider-detail.component.html',
  styleUrls: ['./provider-detail.component.css']
})
export class ProviderDetailComponent implements OnInit {

  constructor(private providerService: ProviderService, private route: ActivatedRoute) { }

  providerDetail: ProviderDetail;

  provider_id: number;

  loader: any;

  getProviderDetail(): void {
      this.providerService.getProvider(this.provider_id).subscribe(providerDetail => {this.providerDetail = providerDetail});
    }
/*
  ngOnInit() {
    this.provider_id = +this.route.snapshot.paramMap.get('id');
    this.providerDetail = new ProviderDetail();
    this.getProviderDetail();
  }
*/

onLoad(params) {
  this.provider_id = parseInt(params['id']);
  this.providerDetail = new ProviderDetail();
  this.getProviderDetail();
}
ngOnInit() {
  this.loader = this.route.params.subscribe((params: Params) => this.onLoad(params));
}

ngOnDestroy() {
  this.loader.unsubscribe();
}

}
