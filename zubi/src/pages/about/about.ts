import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {
  fname : string;
  lname : string;
  email : string;
  password : string;
  gender : string;
  student : Array<any> = [
    // {name:"AbdulAhad",Email:"email",Password:"12345",Gender:'male'}
  ];

  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  register(){
    this.student.push(this.email,this.password,this.gender);
    console.log(this.student)
    this.navCtrl.push(HomePage,{student:this.student});
  
  
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

}
