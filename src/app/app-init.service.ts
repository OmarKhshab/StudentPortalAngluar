import { Injectable, OnInit } from '@angular/core';
import { rejects } from 'assert';
import { RouterModule, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AppInitService{

  constructor(private router : Router) { }
 

  init(){
    return new Promise<void>((reslove,reject)=>{
        this.router.navigate(['/landing']);
        reslove();
    })
  }
}
