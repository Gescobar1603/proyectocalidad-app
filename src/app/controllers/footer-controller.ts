import {Component} from '@angular/core'

@Component({
  selector: 'app-footer',
  templateUrl:'../views/footer.html',
  styleUrls: ['../styles/footer.css']
})
export class FooterController{
  public autor: any ={nombre: 'Proyecto',apellido: 'Calidad'};
}
