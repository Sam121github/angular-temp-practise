import { Component, OnInit } from '@angular/core';
import { RentalService } from '../shared/rental.service';
import {Rental} from '../shared/rental.model';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'bwn-rental-detail',
  templateUrl: './rental-detail.component.html',
  styleUrls: ['./rental-detail.component.css']
})
export class RentalDetailComponent implements OnInit {


rental :Rental;

  constructor(private route: ActivatedRoute, 
    private rentalService : RentalService
    ) { }

  ngOnInit() {
    
    this.route.params.subscribe(
      (params)=>{
        console.log(params); 
        this.getRental(params['rentalId']);


      }

    )
  }

getRental(rentalId: string )
{
  this.rentalService.getRentalById(rentalId).subscribe(
    (rental: Rental)=>{
      this.rental=rental; 
    }

  );

}

}
