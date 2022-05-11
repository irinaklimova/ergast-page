import { Injectable } from "@angular/core";
import { ClientService } from "./client.service";
import {map, Observable} from "rxjs";
import {Race} from "../types/race.types";
import {RaceResponse} from "../types/response.types";

@Injectable()
export class ResultsService {
    private path = 'results/'
    constructor(
        private clientService: ClientService
    ) {
    }

    getByYear(year: string): Observable<Race[]> {
        return this.clientService.get<RaceResponse>(`${year}/${this.path}1.json`)
            .pipe(map(result => {
                return result.MRData.RaceTable.Races;
            }));
    }
}
