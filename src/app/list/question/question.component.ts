import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../../shared/models/question.model';
import { QuestionService } from '../../services/question.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  public questions: Question[] = [];

  public currentQuestionIndex: number;
  public currentQuestion: Question;

  public currentAnswer: number;
  public currentAnswers: number[] = [];


  constructor(private questionService: QuestionService) {
    this.questions = questionService.getQuestion();
    this.currentQuestionIndex = 0;
    this.currentQuestion = this.questions[0];
  }

  ngOnInit() {
  }

  public getQuestion() {
    return `${this.currentQuestionIndex + 1}. ${this.currentQuestion.content}`;
  }

  public moveToNextQuestion() {
    this.currentQuestionIndex++;
    this.currentQuestion = this.questions[this.currentQuestionIndex];
  }

  public moveToPreviousQuestion() {
    this.currentQuestionIndex--;
    this.currentQuestion = this.questions[this.currentQuestionIndex];
    if (!this.currentAnswers[this.currentQuestionIndex]) {
      this.currentAnswers.push(-1);
    }
  }

  public onCheck(index: number) {
    this.currentAnswer = index;
    if (this.currentAnswers.length > this.currentQuestionIndex) {
      this.currentAnswers[this.currentQuestionIndex] = index;
    } else {
      this.currentAnswers.push(index);
    }
    console.log(this.currentAnswers);
  }

  public onFinish() {
    const differ = _.intersection(this.questions.map(p => p.correctAnswer), this.currentAnswers);
    alert(`Số đáp án đúng: ${differ.length}`);
  }
}
