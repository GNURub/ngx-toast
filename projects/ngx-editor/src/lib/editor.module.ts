import { NgModule } from '@angular/core';
import { EditorComponent } from './editor.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EditorComponent],
  exports: [EditorComponent]
})
export class EditorModule { }
