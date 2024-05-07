import { Component, inject } from '@angular/core';
import { NosotrsService } from '../../services/nosotrs.service';

@Component({
  selector: 'app-tabla1',
  standalone: true,
  imports: [],
  templateUrl: './tabla1.component.html',
  styleUrl: './tabla1.component.css'
})
export class Tabla1Component {
  servicio = inject(NosotrsService)
  personas : any

  ngOnInit(){
    this.servicio.getNosotros().subscribe( p => {
      this.personas= p
    })
    
  }

}
