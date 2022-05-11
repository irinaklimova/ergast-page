import { Constructor, Driver} from "./common.types";

export interface RaceTable {
    Races: Race[]
    position: string,
    season: string
}

export interface Race {
    Circuit: {},
    Results: RaceResult[],
    date: string,
    raceName: string,
    round: string,
    season: string,
    url: string
}

export interface RaceResult {
    Constructor: Constructor
    Driver: Driver,
    FastestLap: object,
    Time: object,
    grid: string,
    laps: string,
    number: string,
    points: string,
    position: string,
    positionText: string,
    status: string
}
