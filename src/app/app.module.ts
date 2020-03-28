import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';

import { PdfViewerModule } from 'ng2-pdf-viewer';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    NgbModule, PdfViewerModule //ng2 pdf viewer
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
