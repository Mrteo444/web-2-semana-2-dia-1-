import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { NosotrosComponent } from '../../page/nosotros/nosotros.component';
import { NosotrsService } from '../../services/nosotrs.service';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  id: any;
  nombre: any;
  edad: any;
  genero: any;

  servicio = inject(NosotrsService)


  guardar(datos: NgForm) {
    if (this.nombre != "") {
      this.servicio.postNosotros(datos.value).subscribe()

      window.location.reload()

    }



  }



}
