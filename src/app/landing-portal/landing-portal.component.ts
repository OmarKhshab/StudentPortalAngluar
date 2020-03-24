import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-portal',
  templateUrl: './landing-portal.component.html',
  styleUrls: ['./landing-portal.component.css']
})
export class LandingPortalComponent implements OnInit {

  constructor(private router :Router) { }

  ngOnInit(): void {
    setTimeout(()=>{
      this.router.navigate(['/login'])
    },4000)
  }

}
