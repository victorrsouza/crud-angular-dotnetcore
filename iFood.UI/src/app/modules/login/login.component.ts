import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { LoginService } from 'src/app/core/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public loginService: LoginService,
              public router: Router,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder) { }

  readonly form = this.formBuilder.group({
    user: [null, Validators.required],
    password: [null, Validators.required]
  });

  public $invalidMessage = new Subject<string>();
  public $loading = new Subject<boolean>();

  ngOnInit(): void {
    if (localStorage.getItem('ifood.islogged') === 'true') {
      this.redirectToProducts();
    }
  }

  onSubmit(): void {
    this.$loading.next(true);
    this.loginService
      .login(this.form.controls.user.value, this.form.controls.password.value)
      .subscribe((res: any) => {
        if (!res.success) {
          this.$invalidMessage.next(res.error);
        } else {
          localStorage.setItem('ifood.islogged', 'true');
          this.redirectToProducts();
        }
        this.$loading.next(false);
      }, () => this.$loading.next(false));
  }

  private redirectToProducts(): void {
    this.router.navigate(['product'], {
      relativeTo: this.route
    });
  }

}
