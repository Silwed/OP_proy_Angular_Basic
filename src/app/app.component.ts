import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngrouting';

  token : string | null = null;

constructor(private route : Router){}

  ngOnInit(): void {
    this.token = sessionStorage.getItem('token');
  }

  logOut(){
    sessionStorage.removeItem('token');
    this.route.navigate(['login']);
  }
}
