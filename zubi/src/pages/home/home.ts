import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AboutPage } from '../about/about';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  password : string;
  name : string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }
  sign(){
   console.log(NavParams); 
   console.log(this.navParams.data)
  }
  register(){
   
      this.navCtrl.push(AboutPage);
    
    
  }
}
