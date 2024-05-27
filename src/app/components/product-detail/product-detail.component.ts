import { Component, OnInit } from '@angular/core';
import { PlatziApiService } from '../../services/platzi-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {
  product:any;

  constructor(private service:PlatziApiService, private route:ActivatedRoute){

  }

  ngOnInit(): void {
    this.route.params.subscribe(p =>{
      const id = +p['id'];
      this.service.getProduct(id).subscribe(c=>
       this.product = c
      )
    })

    throw new Error('Method not implemented.');
  }
  
}
