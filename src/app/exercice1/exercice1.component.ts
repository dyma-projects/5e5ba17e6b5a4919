import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-exercice1",
  templateUrl: "./exercice1.component.html",
  styleUrls: ["./exercice1.component.css"],
})
export class Exercice1Component implements OnInit {
  public nombre: number = 42;
  public colorStyle: string;
  public changeColor() {
    this.colorStyle = "color: blue; background-color: red;";
  };
  colorStyle = "color: red; background-color: blue;";


  constructor() {}

  ngOnInit(): void {}
}
