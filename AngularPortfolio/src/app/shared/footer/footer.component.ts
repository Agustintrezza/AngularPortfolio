import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }


  direccionarLinkedin() {
    window.open ('https://www.linkedin.com/in/agustin-trezza-920a5358/.com', '_blank');
  }
  
  direccionarInstagram() {
    window.open ('https://www.instagram.com/agustintrezza/?hl=es-la', '_blank');
  }

  ngOnInit(): void {
  }

}
