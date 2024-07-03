import { Component } from '@angular/core';
import { MaterialModule } from '../../../angular-material/material/material.module';
import { Pregunta2 } from './pregunta-2';
import { Pregunta2Service } from './pregunta-2.service';

@Component({
  selector: 'app-pregunta-2',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './pregunta-2.component.html',
  styleUrl: './pregunta-2.component.css'
})
export class Pregunta2Component {
  displayedColumns: string[] = ['id', 'type', 'dimension', 'residents', 'url', 'created'];
  pregunta2: Pregunta2[] = []
  result: any[] = [];

  constructor(private pregunta2Service: Pregunta2Service){
  }

  ngOnInit(): void {
    this.pregunta2Service.getAllLocations().subscribe((data) => {

        data.results.forEach(element => {
          if(element.type == "Planet") {
            console.log(element)
            this.result.push(element)
          }
        });

        this.pregunta2 = this.result

    })
  }

}
