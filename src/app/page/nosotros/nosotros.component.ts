import { Component, inject } from '@angular/core';
import { NosotrsService } from '../../services/nosotrs.service';
import { CommonModule } from '@angular/common';
import { FormularioComponent } from "../../components/formulario/formulario.component";
import { Tabla1Component } from "../../components/tabla1/tabla1.component";

@Component({
    selector: 'app-nosotros',
    standalone: true,
    templateUrl: './nosotros.component.html',
    styleUrl: './nosotros.component.css',
    imports: [CommonModule, FormularioComponent, Tabla1Component]
})
export class NosotrosComponent {

  servicios = inject(NosotrsService)

  nosotros: any 

  ngOnInit(){
    this.servicios.getNosotros().subscribe( n =>{
      this.nosotros= n 
    })
   
    
  }

}
