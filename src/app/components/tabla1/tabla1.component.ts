import { Component, inject } from '@angular/core';
import { NosotrsService } from '../../services/nosotrs.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tabla1',
  standalone: true,
  imports: [RouterLink],
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
  
  eliminar(id:any){
    this.servicio.deleteNosotrosID(id).subscribe()
    window.location.reload()
  }

}
