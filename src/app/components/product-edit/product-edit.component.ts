import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PlatziApiService } from '../../services/platzi-api.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrl: './product-edit.component.css'
})
export class ProductEditComponent implements OnInit {
  productForm: FormGroup;
  categories: any[]=[];
  id:number|undefined;

  constructor(private fb:FormBuilder, private service:PlatziApiService, 
    private router:Router, private route:ActivatedRoute){
      this.productForm=this.fb.group({
        title: '',
        price: 0 ,
        description: '',
        categoryId: '',
        id:''
      })
  }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    this.service.getProduct(this.id).subscribe(x=>{
      this.productForm.patchValue(x);
    });

    this.service.getCategories().subscribe(x=>{
      this.categories=x;
    })
  }

  onSubmit():void{
    if (this.productForm.valid) {
      this.service.put(this.productForm.value).subscribe(response => {

        console.log('Product updated successfully', response);
        this.router.navigate(['/']);
      }, error => {
        console.error('Error updating product', error);
      });
    }
  }
}
