import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {

  //propriétés
 /* title : string = "My Shop";

  age: number = 45;

  date: Date = new Date();

  isVerify : boolean = false;

  names : string[] = ["Gildas", "Jules"];

  ages : number[] = [25,85,45,63];*/

  product : object = {
    name : "Robes pour femmes",
    description : "joli robe pour femme",
    sold_price : 1299,
    regular_price : 1899
  }

  /*product_table : object[] = [{
    name : "Robes pour femmes",
    description : "joli robe pour femme",
    sold_price : 1299,
    regular_price : 1899
  },
  {
    name : "Robes pour femmes",
    description : "joli robe pour femme",
    sold_price : 1299,
    regular_price : 1899
  },
  {
    name : "Robes pour femmes",
    description : "joli robe pour femme",
    sold_price : 1299,
    regular_price : 1899
  }]*/



  products : Product[] = []

  isDisplayModal: boolean = false
  isLoading: boolean = true
  modalProduct: Product | undefined

  productsSub: Subscription | undefined

  constructor(private productService: ProductService) {

  }

  //lorsque ce composant sera initié
  ngOnInit(): void {
    this.productsSub = this.productService.getProducts()
  .subscribe({
    next: (products: Product[])=>{
      this.products = products
      this.isLoading=false
    },
    error: (error: any)=>{
      console.log("Error: ", error);
       this.isLoading = true
    },
    complete: ()=>{
      console.log("Complete !");

    },
  })

  }


  ngOnDestroy(): void {
    this.productsSub?.unsubscribe()
  }

  // méthodes

  getNumber() : number{
    return 3
  }
  handleDeleteProduct(product: Product){
    this.products = this.products.filter(p => p._id !== product._id)
  }

  handleDisplayProductViewModal(product: Product)
{
  console.log("---------------handleDisplayProductViewModal-----------------")
  if(product){
    this.isDisplayModal = true
    this.modalProduct = product
  }
    //console.log(product)
}

handleCloseModal(){
  this.isDisplayModal = false
  this.modalProduct = undefined
}
}
