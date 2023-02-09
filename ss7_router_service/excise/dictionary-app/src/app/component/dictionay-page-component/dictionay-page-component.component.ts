import {Component, OnInit} from '@angular/core';
import {Word} from '../../model/word';
import {FormControl, FormGroup} from '@angular/forms';
import {DictionayService} from '../../service/dictionay.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-dictionay-page-component',
  templateUrl: './dictionay-page-component.component.html',
  styleUrls: ['./dictionay-page-component.component.css']
})
export class DictionayPageComponentComponent implements OnInit {

  dictionaryList: Word[] = [];

  form: FormGroup;
  id: number;
  word: Word;

  constructor(private dictionary: DictionayService) {

  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.dictionaryList = this.dictionary.getAll();
  }

  submit() {

  }
}
