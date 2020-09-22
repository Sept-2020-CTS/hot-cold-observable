import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'hot-cold-observable';

  coldObs: Observable<any>;
  hotObs: Observable<any>;

  ngOnInit() {
    this.coldObs = new Observable(obs => {
      let count: number = 0;
      setInterval(() => {
        if (count < 7) {
          obs.next(count);
          //obs.next("Subhro");
          count++;
        } else {
          obs.error("Cannot Process data");
        }

      }, 1000);

      setTimeout(() => {
        obs.complete();
      }, 10000);
    });

    this.hotObs = new Observable(obs => {
      let count: number = 0;
      setInterval(() => {
        if (count < 7) {
          obs.next(count);
          //obs.next("Subhro");
          count++;
        } else {
          obs.error("Cannot Process data");
        }

      }, 1000);

      setTimeout(() => {
        obs.complete();
      }, 10000);
    }).pipe(share());

  }

}
