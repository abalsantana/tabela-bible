import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TabelaBibleComponent } from "./components/tabela-bible/tabela-bible.component";
import { CardComponent } from "./components/card/card.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TabelaBibleComponent, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-blog';
}
