import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  constructor(private router:Router) { };

  ngOnInit(): void {

  }

  detailed(): void {
    this.router.navigate(["/details"])
  }

}
