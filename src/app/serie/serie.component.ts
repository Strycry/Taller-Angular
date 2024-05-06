import { Component, OnInit } from '@angular/core';
import { Serie } from './serie';
import { SerieService } from './serie.service';
@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {
  
  constructor(private SerieService:SerieService) { }
  series: Array<Serie > =[] ;
  averageSeasons: number =0
  getSeries() {
    this.SerieService.getSeries().subscribe(series => {
      this.series = series;
      this.getAverageSeasons()
    });
  }
  getAverageSeasons(){
    if (this.series.length === 0) {
      this.averageSeasons = 0;
      return;
    }

    const totalSeasons = this.series.reduce((total, s) => total + s.seasons, 0);

    
    this.averageSeasons = totalSeasons / this.series.length;
  }
  ngOnInit() {
    this.getSeries();
  }

  

}
