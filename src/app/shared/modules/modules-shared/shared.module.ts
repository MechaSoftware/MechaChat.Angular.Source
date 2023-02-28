<<<<<<< HEAD
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { MatBadgeModule } from '@angular/material/badge';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';

import { DashboardLayout } from '../../../app/layouts/dashboard/dashboard.layout';

import { PurchaseMechachatPlusDialog } from '../../../app/dialogs/purchase-mechachat-plus-dialog/purchase-mechachat-plus-dialog';
=======
import { NgModule } from "@angular/core";

import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgHttpLoaderModule } from "ng-http-loader";
import { MatBadgeModule } from "@angular/material/badge";
import { MatNativeDateModule } from "@angular/material/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatRadioModule } from "@angular/material/radio";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { MatMenuModule } from "@angular/material/menu";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatSelectModule } from "@angular/material/select";
import { MatDialogModule } from "@angular/material/dialog";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatTabsModule } from "@angular/material/tabs";

import { DashboardLayout } from "../../../app/layouts/dashboard/dashboard.layout";

import { PurchaseMechachatPlusDialog } from "../../../app/dialogs/purchase-mechachat-plus-dialog/purchase-mechachat-plus-dialog";
>>>>>>> 651e671 (Update design + Start of communties)

@NgModule({
  declarations: [DashboardLayout, PurchaseMechachatPlusDialog],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    NgHttpLoaderModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatMenuModule,
    MatTooltipModule,
    MatInputModule,
<<<<<<< HEAD
=======
    MatSlideToggleModule,
    MatRadioModule,
>>>>>>> 651e671 (Update design + Start of communties)
    MatButtonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatDialogModule,
    MatDatepickerModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    MatTabsModule,
    MatBadgeModule,
  ],
  exports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    NgHttpLoaderModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatMenuModule,
    MatTooltipModule,
    MatInputModule,
<<<<<<< HEAD
=======
    MatSlideToggleModule,
    MatRadioModule,
>>>>>>> 651e671 (Update design + Start of communties)
    MatButtonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatDialogModule,
    MatDatepickerModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    MatTabsModule,
    MatBadgeModule,
    DashboardLayout,
<<<<<<< HEAD
    PurchaseMechachatPlusDialog
  ]
})
export class SharedModules { }
=======
    PurchaseMechachatPlusDialog,
  ],
})
export class SharedModules {}
>>>>>>> 651e671 (Update design + Start of communties)
