import { Component, inject } from '@angular/core';
import { NosotrsService } from '../../services/nosotrs.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.css'
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
