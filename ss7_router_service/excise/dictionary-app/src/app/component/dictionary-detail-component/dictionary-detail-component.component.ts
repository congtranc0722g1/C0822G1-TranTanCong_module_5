import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DictionayService} from '../../service/dictionay.service';
import {Word} from '../../model/word';

@Component({
  selector: 'app-dictionary-detail-component',
  templateUrl: './dictionary-detail-component.component.html',
  styleUrls: ['./dictionary-detail-component.component.css']
})
export class DictionaryDetailComponentComponent implements OnInit {
  id: number;
  word: Word;

  constructor(private activatedRoute: ActivatedRoute, private dictionary: DictionayService) {
    this.activatedRoute.paramMap.subscribe(next => {
      this.id = +next.get('id');
    });
  }

  ngOnInit() {
    this.getWord();
  }

  getWord() {
    this.word = this.dictionary.findById(this.id);
  }

}
