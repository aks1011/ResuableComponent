import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ReusableComponentDemo';

  loader = true;
  userList = [{ name: 'Alok', age: 27 }, { name: 'Aditi', age: 27 }, ];

}
