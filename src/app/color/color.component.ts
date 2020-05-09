import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  color = 'red';

  ChangeColor(input){
    this.color = input.value;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
