import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Point } from '../model/point';
import { PointService } from '../shared/point.service';

@Component({
  selector: 'pe-point-list',
  templateUrl: './point-list.component.html',
  styleUrls: ['./point-list.component.css'],
})
export class PointListComponent implements OnInit {
  points$: Observable<Point[]> = of();

  constructor(private readonly service: PointService) {}

  ngOnInit(): void {
    this.points$ = this.service.readPoints().pipe(
      tap({
        next: (point) => console.log(point),
      })
    );
  }
}
