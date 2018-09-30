import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Question } from '../shared/models/question.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class QuestionService {

  constructor(private fireBaseDb: AngularFireDatabase) {
  }

  public getAllQuestion(): Observable<Question[]> {
    return this.fireBaseDb.list<Question>('questions').valueChanges();
  }
}
