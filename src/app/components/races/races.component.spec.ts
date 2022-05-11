import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RacesComponent } from './races.component';
import {StandingsService} from "../../services/standings.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {StandingsServiceMock} from "../../services/standings.service.mock";
import {races, ResultsServiceMock} from "../../services/results.service.mock";
import {ResultsService} from "../../services/results.service";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {By} from "@angular/platform-browser";


describe('RacesComponent', () => {
    beforeEach(async () => {
        TestBed.overrideComponent(
            RacesComponent,
            {set: {providers: [
                {provide: StandingsService, useClass: StandingsServiceMock},
                {provide: ResultsService, useClass: ResultsServiceMock}
                ]}})
        await TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                HttpClientTestingModule,
                MatCardModule,
                MatIconModule
            ],
            declarations: [
                RacesComponent
            ]
        }).compileComponents();
    });

    it('should display list of winners of given length', () => {
        const fixture = TestBed.createComponent(RacesComponent);
        fixture.detectChanges();
        const cardCount = fixture.debugElement.queryAll(By.css('.mat-card')).length;
        expect(cardCount).toBe(3);
    });

    it('should display list of winners for selected year with race and name', () => {
        const fixture = TestBed.createComponent(RacesComponent);
        fixture.detectChanges();
        const card = fixture.nativeElement.querySelector('mat-card');
        expect(card).toBeDefined();
        expect(card.innerText).toContain('givenName familyName');
        expect(card.innerText).toContain('raceName');
    });

    it('should display icon for winner who is also a world champion', () => {
        const fixture = TestBed.createComponent(RacesComponent);
        fixture.detectChanges();
        const icon = fixture.nativeElement.querySelector('mat-icon');
        const iconCount = fixture.debugElement.queryAll(By.css('.mat-icon')).length;
        expect(iconCount).toBe(1);
        expect(icon).toBeDefined();
    });

    it(`'getDriverName' method should return full name of driver`, () => {
        const fixture = TestBed.createComponent(RacesComponent);
        const component = fixture.componentInstance;
        let name =component.getDriverName(races[0]);
        expect(name).toEqual('givenName familyName')
    })
});
