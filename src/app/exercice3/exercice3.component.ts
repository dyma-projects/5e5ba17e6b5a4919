import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice3',
  templateUrl: './exercice3.component.html',
  styleUrls: ['./exercice3.component.css']
})
export class Exercice3Component implements OnInit {
  public status:boolean = true;

  constructor() { }

  public reversStatus($event){
    this.status = !this.status;
  }

  ngOnInit(): void {
  }

}
