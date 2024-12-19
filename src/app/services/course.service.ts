import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
  })
  export class CourseService {
    private apiUrl = `${environment.apiUrl}/courses`;
  
    constructor(private http: HttpClient) {}
  
    getCourses(skills: string): Observable<any[]> {
      return this.http.get<any[]>(`${this.apiUrl}?skills=${skills}`);
    }
  }
