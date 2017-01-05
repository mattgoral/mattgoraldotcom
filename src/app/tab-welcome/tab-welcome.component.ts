import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-welcome',
  templateUrl: './tab-welcome.component.html',
  styleUrls: ['./tab-welcome.component.scss']
})
export class TabWelcomeComponent implements OnInit {
	helloAnimation = '';
	taglineAnimation = '';

  ngOnInit() {
  	this.helloAnimation = "animated tada";
  	this.taglineAnimation = "animated fadeInUp";
  }

}
