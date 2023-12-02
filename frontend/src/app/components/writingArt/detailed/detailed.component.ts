import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WritingArt } from '../writingArt.model';
import { WritingArtService } from '../writing-art.service';

@Component({
  selector: 'app-detailed',
  templateUrl: './detailed.component.html',
  styleUrls: ['./detailed.component.css']
})
export class DetailedComponent implements OnInit {

  writingArt$!: Observable<WritingArt[]>;

  constructor( private writingArtService: WritingArtService) {};

  ngOnInit(): void {
    this.writingArt$ = this.fetchAll();
  }

  fetchAll(): Observable<WritingArt[]> {
    return this.writingArtService.fetchAll();
  }

}
