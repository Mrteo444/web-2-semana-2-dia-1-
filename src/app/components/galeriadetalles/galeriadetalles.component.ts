import { Component, inject } from '@angular/core';
import { PersonalService } from '../../services/personal.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-galeriadetalles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './galeriadetalles.component.html',
  styleUrl: './galeriadetalles.component.css'
})
export class GaleriadetallesComponent {

  service = inject(PersonalService)

  ruta=inject(ActivatedRoute)

  id:any
  persona:any

  ngOnInit(){
    this.ruta.params.subscribe(p=>{
      this.id = p['idGaleria']
      this.service.getPersonalUnico(this.id).subscribe(personal =>{
        this.persona=personal
      })

    })
   
    
  }

}
