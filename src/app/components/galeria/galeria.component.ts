import { ApplicationModule, Component } from '@angular/core';
import { PersonalService } from '../../services/personal.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [CommonModule,RouterLink,ApplicationModule,FormsModule],
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.css'
})
export class GaleriaComponent {
  constructor(private servicios: PersonalService){}

  personal: any

    ngOnInit(){
      this.servicios.getPersonal().subscribe( p =>{
        this.personal= p
      })
     
      
    }

    idBusqueda: string = ''; 
    personalSeleccionado: any;



  
 
   

}

