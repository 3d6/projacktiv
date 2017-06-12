import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectOverviewComponent } from './project-overview.component';
import { ProjectService } from '../project.service';
import {RouterTestingModule} from '@angular/router/testing';

describe('ProjectOverviewComponent', () => {
  let component: ProjectOverviewComponent;
  let fixture: ComponentFixture<ProjectOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:
        [
          RouterTestingModule
        ],
      declarations:
        [
          ProjectOverviewComponent
        ],
      providers: [ ProjectService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
