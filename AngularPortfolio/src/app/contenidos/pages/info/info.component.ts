import { hostViewClassName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  panelOpenState = false;
  opacity = false;
  id= false;
  aid= false;
  element: any;

  constructor() { }

  addClass() {
    this.id = true;
    console.log(this.id)

    if (this.id === true) {
      console.log('Agus');
    } else {
      console.log('Trezza');
    }

      // this.id = true
      // this.id.classList.add('imageopacity');
    }
  
    addClass1() {
      console.log('true')
        this.aid = true
      }


//  removeClass(){
//    console.log('false');
//   this.id = false
//  }
  abrirCv() {
    window.open('../../../../assets/img/pdf-1.pdf', '_blank');
  }
  abrirCertificado() {
      window.open('../../../../assets/img/React.pdf', '_blank');
    }
    abrirCertificado1() {
      window.open('../../../../assets/img/certjsmoderno.pdf', '_blank');
    }
    abrirCertificado2() {
      window.open('../../../../assets/img/cssgridflex.pdf', '_blank');
    }
    abrirCertificado3() {
      window.open('../../../../assets/img/webcompleto1.pdf', '_blank');
    }
    abrirCertificado4() {
      window.open('../../../../assets/img/webcompleto2.pdf', '_blank');
    }
    abrirCertificado5() {
      window.open('../../../../assets/img/certwordpress.pdf', '_blank');
    }
    abrirCertificado6() {
      window.open('../../../../assets/img/certjsfherrera.pdf', '_blank');
    }
    
  
  ngOnInit(): void {
    
  }}

export class ExpansionOverviewExample {
  panelOpenState = false;
}






