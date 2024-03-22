import { Component } from '@angular/core';
import * as coursedata from 'assets/course.json';
interface course {
  id:number;
  name:string;
  desc:string;

}
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
courses: course[]=coursedata;
}
