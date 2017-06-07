import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ProjectViewerComponent } from './project-viewer.component';
import {ProjectService} from '../project.service';

describe('ProjectViewerComponent', () => {
  let component: ProjectViewerComponent;
  let fixture: ComponentFixture<ProjectViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ ProjectViewerComponent ],
      providers: [ProjectService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
