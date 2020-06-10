import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bang',
  templateUrl: './bang.component.html',
  styleUrls: ['./bang.component.css']
})
export class BangComponent implements OnInit {
  running = false;
  runningx = false;
  constructor() { }

  ngOnInit(): void {
  }

  runProgram() {
    this.runningx = true;
    setTimeout(() => {
      this.running = true;
      this.runningx = false;
    }, 2000);
  }

}
