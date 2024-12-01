import { Component } from '@angular/core';
import { TestApiService } from '../service/test-api.service'; 
import { FormGroup, FormControl } from '@angular/forms'; 


@Component({
  selector: 'app-pokematerial',
  templateUrl: './pokematerial.component.html',
  styleUrl: './pokematerial.component.css'
})

export class PokematerialComponent {

  myForm: FormGroup = new FormGroup({}); 
  name: string = ""; 
  showImage: boolean = false; 
  
  data: any = {};

  constructor(private apiService:TestApiService){ 
    this.myForm = new FormGroup({ 
      name: new FormControl(''), 
    });

}
ngOnInit(): void {   
} 

onSubmit(){ 
  const formValue = this.myForm.value; 
  this.name= formValue.name; 
  this.consultPokemon(this.name); 
  this.myForm.reset(); 
} 

consultPokemon(pokemon:string){ 
this.apiService.consultapokemon(pokemon).subscribe({ 
    next: this.handleSuccessMethod.bind(this), 
    error:this.handleErrorMethod.bind(this), 
}) 
} 

handleSuccessMethod(data:any){ 
this.showImage = true; 
this.data = data; 
} 

handleErrorMethod(){ 
this.showImage = false; 
this.data.name = "Pokemon no encontrado"  
} 


}

