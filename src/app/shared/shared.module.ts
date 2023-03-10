import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReplaceSpacePipe } from './pipes/replace-space.pipe';
import { ImgBrokenDirective } from './directives/img-broken.directive';



@NgModule({
  declarations: [
    ReplaceSpacePipe,
    ImgBrokenDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ReplaceSpacePipe, //para que los pipes puedan ser utlizados en los modulos
    ImgBrokenDirective
  ],
  providers: [ // para poder usar el pipe en el componente
    ReplaceSpacePipe
  ]
})
export class SharedModule { }
