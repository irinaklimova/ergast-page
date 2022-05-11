import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StandingsComponent } from './standings.component';
import {StandingsService} from "../../services/standings.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {standingsLists, StandingsServiceMock} from "../../services/standings.service.mock";
import {MatListModule} from "@angular/material/list";
import {By} from "@angular/platform-browser";


describe('StandingsComponent', () => {
    beforeEach(async () => {
        TestBed.overrideComponent(
            StandingsComponent,
            {set: {providers: [{provide: StandingsService, useClass: StandingsServiceMock}]}})
        await TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                HttpClientTestingModule,
                MatListModule
            ],
            declarations: [
                StandingsComponent
            ]
        }).compileComponents();
    });

    it('should display list of champions of given length', () => {
        const fixture = TestBed.createComponent(StandingsComponent);
        fixture.detectChanges();
        const listItemsCount = fixture.debugElement.queryAll(By.css('.mat-list-item-content')).length;
        expect(listItemsCount).toBe(3);
    });

    it('should display list of champions with year and name', () => {
        const fixture = TestBed.createComponent(StandingsComponent);
        fixture.detectChanges();
        const listContent = fixture.nativeElement.querySelector('.mat-list-item-content');
        expect(listContent.textContent).toContain('2005');
        expect(listContent.textContent).toContain('givenName familyName');
    });

    it(`'getDriverName' method should return full name of driver`, () => {
        const fixture = TestBed.createComponent(StandingsComponent);
        const component = fixture.componentInstance;
        let name =component.getDriverName(standingsLists[0]);
        expect(name).toEqual('givenName familyName')
    });
});
