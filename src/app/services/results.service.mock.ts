import { Injectable } from '@angular/core';
import {Race} from "../types/race.types";
import {Observable, of} from "rxjs";

export const races: Race[] = [
    {
        Circuit: {},
        Results: [{
            Constructor: {
                constructorId: 'string',
                name: 'string',
                nationality: 'string',
                url: 'string'
            },
            Driver: {
                dateOfBirth: 'string',
                familyName: 'familyName',
                driverId: 'string',
                givenName: 'givenName',
                nationality: 'string',
                url: 'string'
            },
            FastestLap: {},
            Time: {},
            grid: 'string',
            laps: 'string',
            number: 'string',
            points: 'string',
            position: 'string',
            positionText: 'string',
            status: 'string'
        }
        ],
        date: 'string',
        raceName: 'raceName',
        round: 'string',
        season: 'string',
        url: 'string'
    },
    {
        Circuit: {},
        Results: [{
            Constructor: {
                constructorId: 'string',
                name: 'string',
                nationality: 'string',
                url: 'string'
            },
            Driver: {
                dateOfBirth: 'string',
                familyName: 'familyName',
                driverId: 'string1',
                givenName: 'givenName',
                nationality: 'string',
                url: 'string'
            },
            FastestLap: {},
            Time: {},
            grid: 'string',
            laps: 'string',
            number: 'string',
            points: 'string',
            position: 'string',
            positionText: 'string',
            status: 'string'
        }
        ],
        date: 'string',
        raceName: 'raceName',
        round: 'string',
        season: 'string',
        url: 'string'
    },
    {
        Circuit: {},
        Results: [{
            Constructor: {
                constructorId: 'string',
                name: 'string',
                nationality: 'string',
                url: 'string'
            },
            Driver: {
                dateOfBirth: 'string',
                familyName: 'familyName',
                driverId: 'string1',
                givenName: 'givenName',
                nationality: 'string',
                url: 'string'
            },
            FastestLap: {},
            Time: {},
            grid: 'string',
            laps: 'string',
            number: 'string',
            points: 'string',
            position: 'string',
            positionText: 'string',
            status: 'string'
        }
        ],
        date: 'string',
        raceName: 'raceName',
        round: 'string',
        season: 'string',
        url: 'string'
    }
]

@Injectable()
export class ResultsServiceMock {
    constructor() { }
    getByYear(year: string): Observable<Race[]> {
        return of(races);
    }
}