import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { ViewTaskComponent } from './view-task/view-task.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MenuComponent,
        AddTaskComponent,
        ViewTaskComponent
      ],
      imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        RouterTestingModule,
        RouterModule,
      ],

    }).compileComponents();
  }));

  //it('should create the app', () => {
  //  const fixture = TestBed.createComponent(AppComponent);
  //  const app = fixture.debugElement.componentInstance;
  //  expect(app).toBeTruthy();
  //});

  //it(`should have as title 'ClientApp'`, () => {
  //  const fixture = TestBed.createComponent(AppComponent);
  //  const app = fixture.debugElement.componentInstance;
  //  expect(app.title).toEqual('ClientApp');
  //});

  //it('should render title in a h1 tag', () => {
  //  const fixture = TestBed.createComponent(AppComponent);
  //  fixture.detectChanges();
  //  const compiled = fixture.debugElement.nativeElement;
  //  expect(compiled.querySelector('h1').textContent).toContain('Welcome to ClientApp!');
  //});
});
