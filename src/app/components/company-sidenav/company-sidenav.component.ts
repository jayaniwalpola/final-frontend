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

    localStorage.removeItem('id');
    localStorage.removeItem('company_name');
    localStorage.removeItem('profile_image');
    localStorage.clear()
    this.router.navigate(['']);


  }

}
