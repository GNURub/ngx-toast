import { Component, OnInit, ViewEncapsulation, Input, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

import { EditorService } from './editor.service';
import * as TuiEditor from 'tui-editor';

@Component({
  selector: 'ngx-editor',
  encapsulation: ViewEncapsulation.None,
  template: `
    <div class="toast-editor" #editor></div>
  `,
  styleUrls: [
    '../../../../node_modules/codemirror/lib/codemirror.css',
    '../../../../node_modules/tui-editor/dist/tui-editor.css',
    '../../../../node_modules/tui-editor/dist/tui-editor-contents.css',
    '../../../../node_modules/highlight.js/styles/github.css',
  ],
})
export class EditorComponent implements AfterViewInit {
  @ViewChild('editor') editorElement: ElementRef;
  @Input() options: object;
  editor: TuiEditor;
  constructor(private editorService: EditorService) { }

  ngAfterViewInit() {
    this.getEditor(this.editorElement.nativeElement);
  }

  async getEditor(el) {
    this.editor = await this.editorService.createEditor(el, this.options);
  }
}
