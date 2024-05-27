import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PlatziApiService } from '../../services/platzi-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css'
})

export class ProductAddComponent implements OnInit {
  productForm: FormGroup;
  categories: any[]=[];

  constructor(private fb:FormBuilder, private service:PlatziApiService, 
    private router:Router, private route:ActivatedRoute){
      this.productForm=this.fb.group({
        title: '',
        price: 0 ,
        description: '',
        categoryId: '',
        images: []
      })
  }

  ngOnInit(): void {
    this.service.getCategories().subscribe(x=>{
      this.categories = x
    });

    throw new Error('Method not implemented.');
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      const imageUrl = this.productForm.value.images;
      const imagesArray = [imageUrl, imageUrl, imageUrl]; // Duplicate the URL three times
     this.productForm.value.images=imagesArray
      
        this.service.post(this.productForm.value).subscribe(response => {
          console.log('Product added successfully', response);
          this.router.navigate(['/']);
          
        }, error => {
       
        console.error('Error adding product', error);
      });
    }
  }

  

}
