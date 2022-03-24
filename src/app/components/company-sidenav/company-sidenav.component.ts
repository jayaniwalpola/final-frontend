import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-sidenav',
  templateUrl: './company-sidenav.component.html',
  styleUrls: ['./company-sidenav.component.css']
})
export class CompanySidenavComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    // this.id  = this.route.snapshot.params.id;
  }
  logOut() {

    sessionStorage.removeItem('id');
    sessionStorage.removeItem('company_name');
    sessionStorage.removeItem('profile_image');
    sessionStorage.clear()
    this.router.navigate(['']);


  }

}
