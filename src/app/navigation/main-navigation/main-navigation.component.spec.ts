import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MainNavigationComponent } from './main-navigation.component';
import {RouterTestingModule} from '@angular/router/testing';

describe('MainNavigationComponent', () => {
  let component: MainNavigationComponent;
  let fixture: ComponentFixture<MainNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:
        [
          RouterTestingModule
        ],
      declarations:
        [
          MainNavigationComponent
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
