import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/model/user';
import { FilterPipe } from 'src/app/pipe/filter.pipe';
import { UserService } from 'src/app/service/user.service';

import { UserComponent } from './user.component';

const mockUsers = [{ 
  "id": 1, "name": "Páhy Zoárd Zsolt", "email": "pzedzoard@gmail.com", "category": "Admin", "bio": "dfghjchgjnchvm" 
}, { 
  "id": 2, "name": "Amanda Wintlelq", "email": "hwintle1@ow.ly", "category": "User" 
},];

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        UserComponent,
        FilterPipe,
      ],
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        {
          provide: UserService,
          useValue: {
            getAll(): Observable<User[]> {
              return of(mockUsers);
            },
          },
        }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('table should create', () => {
    const table = fixture.debugElement.nativeElement.querySelector(
      'table.table'
    );
    expect(table).toBeTruthy();
  });

  it('table should contain two rows', () => {
    const tableRows = fixture.debugElement.nativeElement.querySelectorAll(
      'table.table tbody tr'
    );
    expect(tableRows.length).toEqual(2);
  });

  it('data of second cell should correct', () => {
    const cell = fixture.debugElement.nativeElement.querySelector(
      'table.table tbody tr:first-child td:nth-child(2)'
    );
    expect((cell as HTMLTableCellElement).textContent).toMatch(/Páhy Zoárd Zsolt/);
  });
});
