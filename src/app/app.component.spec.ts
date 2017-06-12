import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MainNavigationComponent } from './navigation/main-navigation/main-navigation.component';
import {ProjectEditorComponent} from './project/project-editor/project-editor.component';
import {ProjectViewerComponent} from './project/project-viewer/project-viewer.component';
import {ProjectService} from './project/project.service';
import {FormsModule} from '@angular/forms';
import {ProjectOverviewComponent} from './project/project-overview/project-overview.component';
import {BreadcrumbComponent} from './navigation/breadcrumb/breadcrumb.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        MainNavigationComponent,
        ProjectEditorComponent,
        ProjectViewerComponent,
        ProjectOverviewComponent,
        BreadcrumbComponent
      ],
      providers: [ProjectService]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should render title in a navigation brand tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.navbar-brand').textContent).toContain('ProfiSle');
  }));
});
