import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { Routes } from "@angular/router";

import { GridModule } from "@progress/kendo-angular-grid";
import { DateInputsModule } from "@progress/kendo-angular-dateinputs";
import { LabelModule } from "@progress/kendo-angular-label";
import { InputsModule } from "@progress/kendo-angular-inputs";
import { ChartsModule } from "@progress/kendo-angular-charts";
import { DropDownsModule } from "@progress/kendo-angular-dropdowns";
import { MenuModule } from "@progress/kendo-angular-menu";
import { PopupModule } from "@progress/kendo-angular-popup";
import { TooltipModule } from '@progress/kendo-angular-tooltip';

import { AppComponent } from "./app.component";
import { GridComponent } from "./components/grid/grid.component";
import { ChartComponent } from "./components/chart/chart.component";
import { FormsComponent } from "./components/forms/forms.component";
import { HomeComponent } from "./components/home/home.component";
import { HeaderComponent } from "./components/common/header.component";
import { FooterComponent } from "./components/common/footer.component";
import { ThemeChooserComponent } from "./components/common/theme-chooser.component";
import { SVGComponent } from "./components/common/svg-renderer.component";
import { ProductsService } from "./components/grid/products.service";
import { PopupAnchorDirective } from "./components/grid/popup.anchor-target.directive";

import "hammerjs";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "grid", component: GridComponent },
  { path: "chart", component: ChartComponent },
  { path: "forms", component: FormsComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    GridModule,
    DateInputsModule,
    LabelModule,
    InputsModule,
    RouterModule,
    MenuModule,
    DropDownsModule,
    ChartsModule,
    TooltipModule,
    PopupModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent,
    GridComponent,
    ChartComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SVGComponent,
    ThemeChooserComponent,
    FormsComponent,
    PopupAnchorDirective
  ],
  bootstrap: [AppComponent],
  providers: [ProductsService]
})
export class AppModule {}
