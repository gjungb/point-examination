import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Point } from '../model/point';

@Injectable({
  providedIn: 'root',
})
export class PointService {
  private readonly points$: Observable<Point[]> = of(
    Array.from(Array(8), (_v, id) => ({ id, value: Math.pow(2, id) }))
  );

  constructor() {}

  readPoints(): Observable<Point[]> {
    return this.points$;
  }
}
