import { Component } from '@angular/core';
import { Pregunta3 } from './pregunta-3';
import { Pregunta3Service } from './pregunta-3.service';
import { MaterialModule } from '../../../angular-material/material/material.module';

@Component({
  selector: 'app-pregunta-3',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './pregunta-3.component.html',
  styleUrl: './pregunta-3.component.css'
})
export class Pregunta3Component {
  displayedColumns: string[] = ['userId', 'id', 'title', 'completed'];
  pregunta3: Pregunta3[] = []
  result: any[] = [];

  constructor(private pregunta2Service: Pregunta3Service){
  }

  ngOnInit(): void {
    this.pregunta2Service.getAllTodos().subscribe((data) => {

        data.forEach(element => {
          if((element.id >= 25 && element.id <=90) && element.completed == true ) {
            this.result.push(element)
          }
        });

        this.pregunta3 = this.result

    })
  }
}
