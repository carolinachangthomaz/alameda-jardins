import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss']
})
export class SobreComponent implements OnInit {

  cards = [{title:"Quartos", texto: "até 2" , icon: "fa fa-bed fa-2x "},
           {title:"Suítes", texto: "até 1" , icon: "fa fa-bath fa-2x "},
           {title:"Banheiros", texto: "1" , icon: "fa fa-shower fa-2x"},
           {title:"Vagas", texto: "até 1" , icon: "fa fa-car fa-2x"},
           {title:"Área", texto: "26 a 67 m²" , icon: "fa fa-arrows fa-2x"}];
           //{title:"Área (m<sup _ngcontent-c8="">2</sup>)", texto: "26 a 67 m²"}
           //https://fontawesome.com/v4.7.0/icons/
           //https://www.npmjs.com/package/font-awesome

  constructor() { }

  ngOnInit() {
  }

}
