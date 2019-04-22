import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import { RentalListComponent } from '../rentals/rental-list/rental-list.component';

import { RentalListItemComponent } from '../rentals/rental-list-item/rental-list-item.component';

import { RentalsComponent } from '../rentals/rentals.component';

import {RentalService} from './shared/rental.service';

import { Routes, RouterModule } from '@angular/router';
import { RentalDetailComponent } from './rental-detail/rental-detail.component';


const routes: Routes =  [
    {path: 'rentals',
    component: RentalsComponent,
    children : [
        {path : '', component: RentalListComponent},
        {path: ':rentalId', component: RentalDetailComponent   }

    ]
}
    ]

@NgModule({
    declarations : [

        RentalListComponent,
        RentalListItemComponent,
        RentalsComponent,
        RentalDetailComponent
    ],
    imports:[
        CommonModule,
        RouterModule.forChild(routes)
    ],
    providers: [RentalService]


})


export class RentalModule{}