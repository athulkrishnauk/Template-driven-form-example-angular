import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'templateDriven';

  public username;
  public password;

  onSubmit() {
    console.log(this.username);
    console.log(this.password);
  }
}
