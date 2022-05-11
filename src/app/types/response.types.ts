import {StandingsTable} from "./standing.types";
import {RaceTable} from "./race.types";

interface ResponseBase {
    limit: string,
    offset: string,
    series: string,
    total: string,
    url: string,
    xmlns: string
}

export interface Response<T> {
    MRData: T
}

export interface StandingResponse extends ResponseBase {
    StandingsTable: StandingsTable
}

export interface RaceResponse extends ResponseBase {
    RaceTable: RaceTable
}
