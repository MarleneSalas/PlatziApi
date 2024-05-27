import { Component, OnInit } from '@angular/core';
import { PlatziApiService } from '../../services/platzi-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  products: any[]=[];

  constructor(private service: PlatziApiService, private router:Router){
  }

  ngOnInit(): void {
    this.service.getProducts().subscribe((data:any)=>{
      this.products = data;
    });
  }

  showDetails(id:number){
    this.router.navigate(['/products', id]);
  }

  navigateToAddProduct(): void{
    this.router.navigate(['/add-product']);
  }

  deleteProduct(id:number):void{
    this.service.delete(id).subscribe(()=>
    {
      window.location.reload();
    })
  }

  editProduct(id:number):void{
    this.router.navigate(['/edit-product', id]);
  }

}
