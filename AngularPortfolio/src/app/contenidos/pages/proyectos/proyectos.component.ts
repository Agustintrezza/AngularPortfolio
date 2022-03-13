import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  function() {
    window.location.replace("http://agustintrezza.netlify.app"), '_blank';
    // window.location.href = 'http://agustintrezza.netlify.app', '_blank';
    console.log('Open');
  }

}
