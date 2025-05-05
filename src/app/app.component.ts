import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TabelaBibleComponent } from "./components/tabela-bible/tabela-bible.component";
import { SectionComponent } from "./components/section/section.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TabelaBibleComponent, SectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  tittle = 'Tabela Periódica Bíblica';
}
