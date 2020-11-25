import {Component} from '@angular/core'

@Component({
  selector:'app-header',
  templateUrl:`../views/header.html`,
  styleUrls: ['../styles/header.css']

})
export class HeaderController{
title: string ='Sistema de Encomiendas'
}
