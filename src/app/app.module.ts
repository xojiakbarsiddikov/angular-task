import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestInputComponent } from './components/test-input/test-input.component';
import { TestSelectComponent } from './components/test-select/test-select.component';
import { TestNumberComponent } from './components/test-number/test-number.component';
import { TestCheckboxComponent } from './components/test-checkbox/test-checkbox.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ErrorStateMatcher, MatOptionModule, ShowOnDirtyErrorStateMatcher} from "@angular/material/core";
import { CreateComponent } from './components/create/create.component';
import { TestSelectListComponent } from './components/test-select-list/test-select-list.component';
import {MatSelectModule} from "@angular/material/select";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    TestInputComponent,
    TestSelectComponent,
    TestNumberComponent,
    TestCheckboxComponent,
    CreateComponent,
    TestSelectListComponent
  ],
  imports: [
    BrowserModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    HttpClientModule,
    MatSelectModule
  ],
  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
