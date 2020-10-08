import { Component, OnInit } from '@angular/core';
import { Cliente } from '../clientes/cliente';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponentClientes implements OnInit {

  constructor() { }

  cliente: Cliente;

  ngOnInit(): void {
      
  }

}
