import { Component, OnInit } from '@angular/core';

import { RentalService } from '../shared/rental.service';

import { Rental } from '../shared/rental.model';


@Component({
  selector: 'bwn-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.scss']
})
export class RentalListComponent implements OnInit {

  array1: Rental [] = [];


  constructor(private  rentalService: RentalService) { }

  ngOnInit() {
    const rentalObservable = this.rentalService.getRentals();


    rentalObservable.subscribe(
      (rental : Rental[])=>{this.array1= rental;},



      (err)=>{


      },
      ()=>{}
 
    );
  }

}
