import { Component, OnDestroy, OnInit } from '@angular/core';
import { log } from 'console';
import { Subscriber, Subscription } from 'rxjs';
import { auth_items, nav_items } from 'src/app/api/nav';
import { Item } from 'src/app/models/item';
import { ProductService } from 'src/app/services/product.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  data: Number | undefined
  second: Number | undefined
  // variable de type Subscription car on va stocker l'observale avec subscribe ds cette variable
  secondSub: Subscription | undefined
  siteName: string = environment.siteName
  navs_data: Item[] = nav_items
  auths_data: Item[] = auth_items
  isDisplayMobileNav: boolean = false

  // injection dans le constructeur pour utiliser le service et ses fonctionalités
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
   /* this.productService.getNumber()
    .subscribe(
    (value)=>{
      this.data = value

    })*/

   this.secondSub = this.productService.getSecond()
    // subscribe pour dire que je m'abone sur mon observale et j'écoute
    .subscribe({
      // next quand on a une information, on indique le traitement de l'info
      next: (value: Number)=>{
        this.second = value
      },
      error: (error: any)=>{
        console.log(error)
      },
      complete: ()=>{
        console.log("Complete");
      },
    })


    /*this.productService.getSecond()
    // subscribe pour dire que je m'abone sur mon observale et j'écoute
    .subscribe(
      // je reçoit des données emises par notre observable = value
      (value)=>{
        // je stocke les données "value" dans la variable de classe second
        this.second = value
      } */


    }

  // detruire l'observable pour éviter la perte de mémoire
  ngOnDestroy(): void {
    this.secondSub?.unsubscribe();
  }

  handleDisplayMobileNav(){
    this.isDisplayMobileNav = !this.isDisplayMobileNav
  }


  handleCloseMobileNav(){
    this.isDisplayMobileNav = false
  }

}
