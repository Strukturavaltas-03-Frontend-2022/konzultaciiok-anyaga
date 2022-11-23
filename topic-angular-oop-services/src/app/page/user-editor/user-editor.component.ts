import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { User } from 'src/app/model/user';
import { ConfigService, FormField } from 'src/app/service/config.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-editor',
  templateUrl: './user-editor.component.html',
  styleUrls: ['./user-editor.component.scss']
})
export class UserEditorComponent implements OnInit {

  user$: Observable<User> = this.ar.params.pipe(
    switchMap( params => this.userService.get( params['id'] ) ),
  );

  user: User | null = null;

  fields: FormField[] = this.config.userEditorFormFields;

  userFormGroup: FormGroup = new FormGroup({});

  constructor(
    private ar: ActivatedRoute,
    private userService: UserService,
    private router: Router,
    private config: ConfigService,
  ) { }

  ngOnInit(): void {
    this.user$.subscribe(
      user => {
        this.createControls(user);
        this.user = user;
      },
    );
  }

  createControls(user: User): void {
    this.fields.forEach( field => {
      const control = new FormControl(user[field.key], field.validators);
      this.userFormGroup.addControl(field.key, control);
    });
  }

  onUpdate(): void {
    const user = this.userFormGroup.value;
    user.id = this.user?.id;
    this.userService.update(user).subscribe(
      user => this.router.navigate(['/', 'user']),
    );
  }

}
