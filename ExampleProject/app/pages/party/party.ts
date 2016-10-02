import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {NavParams} from 'ionic-angular';

/*
  Generated class for the PartyPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/party/party.html',
})
export class PartyPage {
  private getToto;

  constructor(private navCtrl: NavController, navParams: NavParams) {
    this.getToto =navParams.data;
  }

}
