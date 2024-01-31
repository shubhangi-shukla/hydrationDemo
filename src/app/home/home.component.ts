import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HomeApiService } from '../api/home.api';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import {MatButtonModule} from '@angular/material/button'

@Component({
  selector: 'app-home',
  standalone:true,
  imports:[
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  message!:string
  form!:FormGroup
  isLoading!:boolean;
  info!:any

  constructor(private api:HomeApiService,private fb:FormBuilder){}

  ngOnInit():void{
    this.isLoading=true;
    this.buildForm();
  }

      buildForm(): void {
        this.form = this.fb.group({
          name: ['',Validators.required]
        });
        this.isLoading=false;
      }

      getDetails(){
        this.isLoading=true;
        this.api.getDetails(this.form.value.name).subscribe({
          next: (res: any) => {
            console.log(res)
            this.info=res;
            this.isLoading=false
          },
          error:(err:any)=>{
            console.log("Error:"+err)
            this.isLoading=false
            this.info=err
          }
        })
      }
}
