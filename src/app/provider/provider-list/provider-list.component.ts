import { Component, OnInit } from '@angular/core';
import {Provider} from '../provider';
import {ProviderDetail} from '../provider-detail';
import { ProviderService } from '../provider.service';

@Component({
  selector: 'app-provider-list',
  templateUrl: './provider-list.component.html',
  styleUrls: ['./provider-list.component.css']
})
export class ProviderListComponent implements OnInit {

  constructor(private providerService: ProviderService) { }

  ngOnInit() {
    this.getProviders();
  }

providers: Provider[];

getProviders(): void {
        this.providerService.getProviders().subscribe(providers => this.providers = providers);
    }
}
