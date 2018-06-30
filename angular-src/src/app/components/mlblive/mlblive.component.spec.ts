/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MlbliveComponent } from './mlblive.component';

describe('MlbliveComponent', () => {
  let component: MlbliveComponent;
  let fixture: ComponentFixture<MlbliveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MlbliveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MlbliveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
