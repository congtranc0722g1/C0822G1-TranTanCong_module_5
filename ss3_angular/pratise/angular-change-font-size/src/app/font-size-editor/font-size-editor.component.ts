import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-font-size-editor',
  templateUrl: './font-size-editor.component.html',
  styleUrls: ['./font-size-editor.component.css']
})
export class FontSizeEditorComponent implements OnInit {
  changeFontSizeValue(fontSize) {
    this.fontSize = fontSize;
  }
  fontSize = 14;
  constructor() { }

  ngOnInit() {
  }
}

