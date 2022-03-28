import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../Services/movies.service';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {
Movies:any[]=[];
  constructor(private MoviesService:MoviesService) { }

  ngOnInit() {
    this.MoviesService.GetMovieData().subscribe(
      (data)=>{
        this.Movies = data.Search;
        console.log(this.Movies);
      }
    );

  
  
  }

}
