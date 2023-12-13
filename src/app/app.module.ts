import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { GameComponent } from './game/game.component';
import { ElementsServices } from './services/elements.service';
import { RightElementsComponent } from './right-elements/right-elements.component';
import { elementsArray } from './elementsarray/elements.array';
import { LeftElementsComponent } from './left-elements/left-elements.component';
import { CenterElementsComponent } from './center-elements/center-elements.component';

@NgModule({
  declarations: [AppComponent, GameComponent, RightElementsComponent, LeftElementsComponent, CenterElementsComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, ElementsServices, elementsArray],
  bootstrap: [AppComponent],
})
export class AppModule {}
