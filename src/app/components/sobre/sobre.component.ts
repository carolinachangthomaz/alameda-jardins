import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
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
  plantas = [{torre:"Residencial",tipo:"apartamento",area:"175,86",elevadores:"2",dormitorios:"3", suites:"3",salas:"0",cozinha:"1",vagas:"2"},
             {torre:"Residencial",tipo:"apartamento",area:"178,89",elevadores:"2",dormitorios:"3", suites:"3",salas:"0",cozinha:"1",vagas:"2"},
             {torre:"Residencial",tipo:"apartamento",area:"196,76",elevadores:"2",dormitorios:"3", suites:"3",salas:"0",cozinha:"1",vagas:"2"},
             {torre:"Residencial",tipo:"apartamento",area:"265,00",elevadores:"2",dormitorios:"4", suites:"4",salas:"0",cozinha:"1",vagas:"2"},
             {torre:"Residencial",tipo:"apartamento",area:"266,27",elevadores:"2",dormitorios:"4", suites:"4",salas:"0",cozinha:"1",vagas:"2"},
             {torre:"Residencial",tipo:"apartamento",area:"268,74",elevadores:"2",dormitorios:"4", suites:"4",salas:"0",cozinha:"1",vagas:"2"},
             {torre:"Residencial",tipo:"apartamento",area:"91,82",elevadores:"2",dormitorios:"2", suites:"2",salas:"0",cozinha:"1",vagas:"1"},
             {torre:"Residencial",tipo:"apartamento",area:"97,33",elevadores:"2",dormitorios:"2", suites:"2",salas:"0",cozinha:"1",vagas:"1"},]

  constructor() { }

  ngOnInit() {
  }

}
