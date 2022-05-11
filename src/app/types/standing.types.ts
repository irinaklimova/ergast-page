import { Constructor, Driver} from "./common.types";

export interface StandingsLists {
    DriverStandings: DriverStandings[],
    round: string,
    season: string
}

export interface DriverStandings {
    Constructors: Constructor[]
    Driver: Driver,
    points: string,
    position: string,
    positionText: string,
    wins: string
}

export interface StandingsTable {
    StandingsLists: StandingsLists[],
    driverStandings: string
}
