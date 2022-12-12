import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  @ViewChild("desplegable") desplegable:ElementRef
  @ViewChild("cabecera") cabecera:ElementRef

  constructor(private renderer:Renderer2) { }

  ngOnInit(): void {
    
  }

  mostrarDesplegable(){
    this.renderer.addClass(this.desplegable.nativeElement,'mostrar')
  }

  cerrarDesplegable(){
    this.renderer.removeClass(this.desplegable.nativeElement,'mostrar')
  }

  @HostListener('window:scroll', ['$event'])
  movimientoHeader(event){
    if (window.pageYOffset < 40 && window.pageYOffset > 0) {
      this.renderer.removeClass(this.cabecera.nativeElement,'agregar-color-fondo')
    }
    if (window.pageYOffset >= 40 && window.pageYOffset < 80) {
        this.renderer.addClass(this.cabecera.nativeElement,'agregar-color-fondo')
    }
  }

}
