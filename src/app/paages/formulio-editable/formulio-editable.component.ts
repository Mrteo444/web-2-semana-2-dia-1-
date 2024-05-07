import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NosotrsService } from '../../services/nosotrs.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formulio-editable',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulio-editable.component.html',
  styleUrl: './formulio-editable.component.css'
})
export class FormulioEditableComponent {
  id: any;
  nombre: any;
  edad: any;
  genero: any;
  ruta=inject(Router)
  router=inject(ActivatedRoute)

  ngOnInit() {
    this.router.params.subscribe(r =>{
      this.servicio.getNosotrosId(r['idNosotros']).subscribe(p =>{
        this.id = p.id,
        this.nombre=p.nombre,
        this.edad=p.edad,
        this.genero=p.edad
      })
    })
   
  }

  servicio=inject(NosotrsService)

  editar(datos:any){
    this.servicio.putNosotros(datos.value).subscribe()

    this.ruta.navigateByUrl("nostros")
  }


}
