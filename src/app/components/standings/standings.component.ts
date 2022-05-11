import { Component } from '@angular/core';
import { StandingsService } from "../../services/standings.service";
import { Observable } from "rxjs";
import {StandingsLists} from "../../types/standing.types";
import {getDriverName} from "../../helper";

@Component({
    providers: [StandingsService],
    templateUrl: './standings.component.html'
})
export class StandingsComponent {
    public standings$: Observable<StandingsLists[]>;
    constructor(
        private standingsService: StandingsService
    ) {
    }

    ngOnInit() {
        this.standings$ = this.standingsService.getList();
    }

    getDriverName(standing: StandingsLists): string {
        return getDriverName(standing.DriverStandings[0].Driver);
    }
}
