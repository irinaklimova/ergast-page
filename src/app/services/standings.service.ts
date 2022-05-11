import { Injectable } from "@angular/core";
import { ClientService } from "./client.service";
import {map, Observable} from "rxjs";
import {StandingsLists} from "../types/standing.types";
import {StandingResponse} from "../types/response.types";


@Injectable()
export class StandingsService {
    private path = 'driverStandings/1.json'
    constructor(
        private clientService: ClientService
    ) {
    }

    getList(): Observable<StandingsLists[]> {
        return this.clientService.get<StandingResponse>(`${this.path}?limit=17&offset=55`)
            .pipe(map(result => {
                return result.MRData.StandingsTable.StandingsLists;
            }));
    }

    getByYear(year: string): Observable<StandingsLists[]> {
        return this.clientService.get<StandingResponse>(`${year}/${this.path}`)
            .pipe(map(result => {
                return result.MRData.StandingsTable.StandingsLists;
            }));
    }
}
