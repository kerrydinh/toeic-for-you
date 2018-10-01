import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { ListPage } from './list.page';
import { QuestionService } from '../services/question.service';
import { QuestionComponent } from './question/question.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: ListPage
      },
      {
        path: 'question',
        component: QuestionComponent,
        pathMatch: 'full'
      }
    ])
  ],
  declarations: [ListPage, QuestionComponent],
  providers: [QuestionService]
})
export class ListPageModule {}
