import { Injectable } from '@angular/core';
import { interval, Observable, of } from 'rxjs';
import { Product } from '../models/product';
import {HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = []

  // nom du fichier statique pour que je puisse l'accéder
  private urlApi: string = environment.serverUrl

  constructor(private http: HttpClient) { }

  /*getProducts(): Promise<Product[]>{
    //return this.products
    return new Promise((resolve, reject)=>{
      if(this.products.length){
        resolve(this.products)
      }else{
        reject([])
      }
    })
  }*/


  //methode qui retourne un observable ds lequel on trouve un tableau de product
  getProducts(): Observable<Product[]>{
    /*
    GET => récupérer les données
    POST =>Envoi des données au serveur
    PUT et PATCH => Modification des données existantes sur le serveur
    DELETE => Supprimer des données existantes sue le serveur  */
    //  retourne un observable à l'interieur de lui on trouve un tableau de produit
   return this.http.get<Product[]>(this.urlApi)
  }

  /* methode qui retourne un nombre tout simplement mais sous
   forme d'un observable c a d un objet qu'on pourra écouter et essayer de détecter
   les modifications qui peuvent y avoir sur ce nombre la
    afin de mettre à jour l'affichage qu'on a au sein de notre page  */


 // un observable retourne des données: içi retourne des nombres
  // of provient de RXJS et retourne un observable
  getNumber(): Observable<Number>{
    return of(60)
  }

  getSecond():Observable<Number>{
    return interval(1000)
  }

  addProduct(product: Product){}
  editProduct(_id:string, product:Product){}
  deleteProduct(_id:string){}
}
