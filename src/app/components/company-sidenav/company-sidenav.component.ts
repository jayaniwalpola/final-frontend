import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-sidenav',
  templateUrl: './company-sidenav.component.html',
  styleUrls: ['./company-sidenav.component.css']
})
export class CompanySidenavComponent implements OnInit {

  setActive: any;
  activeButton: any;
  isActive: any;
  constructor(private router:Router) { }

  ngOnInit(): void {
    // this.id  = this.route.snapshot.params.id;
    this.setActive = function (buttonName: any){
      this.activeButton = buttonName;
    }
    this.isActive = function (buttonName: any){
      return this.activeButton === buttonName;
    }
  }


  onButtonGroupClick($event: { target: any; srcElement: any; }){
    let clickedElement = $event.target || $event.srcElement;

    if( clickedElement.nodeName === "BUTTON" ) {

      let isCertainButtonAlreadyActive = clickedElement.parentElement.querySelector(".active");
      // if a Button already has Class: .active
      if( isCertainButtonAlreadyActive ) {
        isCertainButtonAlreadyActive.classList.remove("active");
      }

      clickedElement.className += " active";
    }

  }
  logOut() {

    sessionStorage.removeItem('id');
    sessionStorage.removeItem('company_name');
    sessionStorage.removeItem('profile_image');
    sessionStorage.clear()
    this.router.navigate(['']);


  }

}
