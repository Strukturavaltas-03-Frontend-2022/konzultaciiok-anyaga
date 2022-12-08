import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

import { UserEditorComponent } from './user-editor.component';

const mockUsers = [{ 
  "id": 1, "name": "Páhy Zoárd Zsolt", "email": "pzedzoard@gmail.com", "category": "Admin", "bio": "dfghjchgjnchvm" 
}, { 
  "id": 2, "name": "Amanda Wintlelq", "email": "hwintle1@ow.ly", "category": "User" 
},];

describe('UserEditorComponent', () => {
  let component: UserEditorComponent;
  let fixture: ComponentFixture<UserEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserEditorComponent ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        FormsModule,
      ],
      providers: [
        {
          provide: UserService,
          useValue: {
            get(id: number): Observable<User> {
              return of( mockUsers[1] );
            }
          }
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form should exist', () => {
    const form = fixture.debugElement.nativeElement.querySelector(
      'form.mx-auto'
    );
    expect(form).toBeTruthy();
  });

  it('email address should be correct', () => {
    const emailInput: HTMLInputElement = fixture.debugElement.nativeElement.querySelector(
      'form.mx-auto input[name="email"]'
    );
    expect(emailInput.value).toMatch(/hwintle1\@ow\.ly/);
  });
});
