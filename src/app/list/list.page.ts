import { Component, OnInit, OnDestroy } from '@angular/core';
import { Question } from '../shared/models/question.model';
import { QuestionService } from '../services/question.service';
import { Subscription } from 'rxjs';
import { Option } from '../shared/models/option.model';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit, OnDestroy {
  public questions: Question[] = [];
  public options: Option[] = [];

  constructor(private questionService: QuestionService) {
    this.options.push(new Option({
      id: '1',
      name: 'Tổng hợp câu hỏi 1'
    }));
  }

  ngOnInit() {
    this.questionService.fetchQuestion();
    this.questionService.getQuestion();
  }

  ngOnDestroy() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
