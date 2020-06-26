import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppState } from './store/reducers/app.reducer';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { TodoFilterComponent } from './components/todo-filter/todo-filter.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodosEffect } from './store/effects/todos.effects';
import { TodosServiceService } from './services/todos.service';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemComponent,
    TodoFilterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot(AppState),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: false,
      features: {
        pause: false,
        lock: true,
        persist: true
      }
    }),
    EffectsModule.forRoot([TodosEffect])
  ],
  providers: [
    TodosServiceService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
