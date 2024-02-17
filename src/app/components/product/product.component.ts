import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  slug: string| undefined
  currentImage: string | undefined
  product: Product |undefined

  productSub: Subscription | undefined
  isLoading: boolean = true

  constructor(private route: ActivatedRoute,
       private productService: ProductService) { }

  ngOnInit(): void {
    window.scrollTo(0,0)
    // recuperer les données d'un produit à partir d'un slug
    this.slug = this.route.snapshot.params["slug"]
    this.productSub = this.productService.getProducts()
    .subscribe({
      next: (products: Product[])=>{
        this.product = products.filter(p => p.slug === this.slug)[0]
        this.currentImage=this.product.imageUrl[0]
        this.isLoading = false
        console.log(this.product)
      },
      error: (error: any)=>{
        console.log("Error:", error);
        this.isLoading = true
      }
    })
    //console.log(this.route);

  }
  ngOnDestroy(): void{
    this.productSub?.unsubscribe()
  }

  handleChangeCurrentImage(url: string){
    this.currentImage = url
  }

}
