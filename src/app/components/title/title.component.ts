import { query } from '@angular/animations';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit{

  appRoot: any = document.querySelector("app-root")

  moveToHome(){
    this.appRoot?.querySelector("app-sobre .container").scrollIntoView({behavior: 'smooth', block: 'center'})
    let divMenu = this.appRoot.querySelector(".menu")
    divMenu.classList.toggle("active")
  }

  moveToProjetos(){
    this.appRoot?.querySelector("app-projetos .container").scrollIntoView({behavior: 'smooth', block: 'center'})
    let divMenu = this.appRoot.querySelector(".menu")
    divMenu.classList.toggle("active")
  }

  moveToContatos(){
    this.appRoot?.querySelector("app-contatos .container").scrollIntoView({behavior: 'smooth', block: 'end'})
    let divMenu = this.appRoot.querySelector(".menu")
    divMenu.classList.toggle("active")
  }

  btnMobile(){
    let divMenu = this.appRoot.querySelector(".menu")
    divMenu.classList.toggle("active")
  }

  constructor(){}

  ngOnInit(): void {

  }

}
