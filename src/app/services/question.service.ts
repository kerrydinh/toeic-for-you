import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Question } from '../shared/models/question.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class QuestionService {
  public questions: Question[] = [];
  constructor(private fireBaseDb: AngularFireDatabase) {
  }

  public fetchQuestion() {
    this.fireBaseDb.list<Question>('questions').valueChanges().subscribe(res => {
      this.questions = res;
    });
  }

  public getQuestion(): Question[] {
    return this.questions;
  }

}
