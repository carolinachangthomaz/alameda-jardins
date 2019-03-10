import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  imagens = [{src:"https://multimidia.lopes.com.br/240/15891/lancamento-alameda-jardins-lobby-residencial-6.png", texto: "Imagem 1"},
            {src:"https://multimidia.lopes.com.br/240/15891/lancamento-alameda-jardins-salao-de-jogos-9.png", texto: "Imagem 2"},
            {src:"https://multimidia.lopes.com.br/240/15891/lancamento-alameda-jardins-playground-10.png", texto: "Imagem 3"},
            {src:"https://multimidia.lopes.com.br/240/15891/lancamento-alameda-jardins-piscina-11.png", texto: "Imagem 4"},
            {src:"https://multimidia.lopes.com.br/240/15891/lancamento-alameda-jardins-lounge-12.png", texto: "Imagem 5"}];

  projeto = "Alameda Jardins";
  
  constructor() { }

  ngOnInit() {
    
    this.imagens;
 
  }

}
