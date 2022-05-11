import { Component } from '@angular/core';
import { StandingsService } from "../../services/standings.service";
import {Observable} from "rxjs";
import {combineLatest} from "rxjs";
import {ResultsService} from "../../services/results.service";
import {ActivatedRoute} from "@angular/router";
import {StandingsLists} from "../../types/standing.types";
import {Race} from "../../types/race.types";
import {getDriverName} from "../../helper";

@Component({
    providers: [ResultsService, StandingsService],
    templateUrl: './races.component.html',
    styleUrls: ['./races.component.css']
})
export class RacesComponent {
    public results$: Observable<Race[]>;
    public data$: Observable<[StandingsLists[], Race[]]>;
    public year: string;
    constructor(
        private activatedRoute: ActivatedRoute,
        private resultsService: ResultsService,
        private standingsService: StandingsService
    ) {
    }

    ngOnInit(){
        this.year = this.activatedRoute.snapshot.paramMap.get('year') as string;
        this.data$ = combineLatest([this.standingsService.getByYear(this.year), this.resultsService.getByYear(this.year)])
    }

    getDriverName(standing: Race): string {
        return getDriverName(standing.Results[0].Driver);
    }

    isChampion(standing: Race, championsResult: StandingsLists) {
        return standing.Results[0].Driver.driverId === championsResult.DriverStandings[0].Driver.driverId;
    }
}
