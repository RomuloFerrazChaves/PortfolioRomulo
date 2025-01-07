import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-layout-login-default',
  templateUrl: './layout-login-default.component.html',
  styleUrls: ['./layout-login-default.component.scss']
})
export class LayoutLoginDefaultComponent implements OnInit {
  public formLogin: FormGroup;

  @Input() title: string = "";
  @Input() primaryBtnText: string = "";
  @Input() secondaryBtnText: string = "";
  @Output("submit") onSubmit = new EventEmitter();
  @Output("navigate") onNavigate = new EventEmitter();




  constructor(
    private FormBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.initFormLogin();
  }

  submit() {
    this.onSubmit.emit();
  }

  navigate() {
    this.onNavigate.emit();
  }

  initFormLogin() {
    this.formLogin =   this.FormBuilder.group({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

}
