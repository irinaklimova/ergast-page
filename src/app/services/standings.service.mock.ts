import { Injectable } from '@angular/core';
import {StandingsLists} from "../types/standing.types";
import {Observable, of} from "rxjs";

export const standingsLists: StandingsLists[] = [
    {
        DriverStandings: [{
            Constructors: [],
            Driver: {
                dateOfBirth: 'string',
                familyName: 'familyName',
                driverId: 'string',
                givenName: 'givenName',
                nationality: 'string',
                url: 'string'
            },
            points: 'string',
            position: 'string',
            positionText: 'string',
            wins: 'string'
        }],
        round: '3',
        season: '2005'
    },
    {
        DriverStandings: [{
            Constructors: [],
            Driver: {
                dateOfBirth: 'string',
                familyName: 'familyName',
                driverId: 'string',
                givenName: 'givenName',
                nationality: 'string',
                url: 'string'
            },
            points: 'string',
            position: 'string',
            positionText: 'string',
            wins: 'string'
        }],
        round: '3',
        season: '2006'
    },
    {
        DriverStandings: [{
            Constructors: [],
            Driver: {
                dateOfBirth: 'string',
                familyName: 'familyName',
                driverId: 'string',
                givenName: 'givenName',
                nationality: 'string',
                url: 'string'
            },
            points: 'string',
            position: 'string',
            positionText: 'string',
            wins: 'string'
        }],
        round: '3',
        season: '2007'
    }
];

@Injectable()
export class StandingsServiceMock {
    constructor() { }
    getList(): Observable<StandingsLists[]> {
        return of(standingsLists);
    }

    getByYear(year: string): Observable<StandingsLists[]> {

        return of(standingsLists);
    }
}