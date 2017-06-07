import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectEditorComponent } from './project-editor.component';
import { ProjectService } from '../project.service';
import { FormsModule } from '@angular/forms';


describe('ProjectEditorComponent', () => {
  let component: ProjectEditorComponent;
  let fixture: ComponentFixture<ProjectEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ ProjectEditorComponent ],
      providers: [ProjectService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
