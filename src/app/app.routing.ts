// içi je veux gérer mes routes
import {Routes} from "@angular/router"
import { SigninComponent } from "./components/auth/signin/signin.component";
import { SignupComponent } from "./components/auth/signup/signup.component";
import { MainComponent } from "./components/main/main.component";
import { ProductAdditionalInfoComponent } from "./components/product-tabs/product-additional-info/product-additional-info.component";
import { ProductDescriptionComponent } from "./components/product-tabs/product-description/product-description.component";
import { ProductReviewsComponent } from "./components/product-tabs/product-reviews/product-reviews.component";
import { ProductVendorComponent } from "./components/product-tabs/product-vendor/product-vendor.component";
import { ProductComponent } from "./components/product/product.component";

export const ROUTES : Routes =[
  {
    // racine
    path: '',
    // ce que je veux faire lorsque je met ce chemin: afficher ce component
    component: MainComponent,
    // pour dire ce que je faire ds cette partie c exactement pour ce chemin
    pathMatch: 'full',

  },
  {
    path: 'product/:slug',
    component: ProductComponent,
   // pathMatch: 'full'
    children:[
      {
        path: "",
        redirectTo: "description",
        pathMatch: "prefix"
      },
      {
        path: "description",
        component: ProductDescriptionComponent
      },
      {
        path: "additional-info",
        component: ProductAdditionalInfoComponent
      },
      {
        path: "vendor-info",
        component: ProductVendorComponent

      },
      {
        path: "reviews",
        component: ProductReviewsComponent
      },
    ],
  },
  {

    path: 'signin',
    component: SigninComponent,
    pathMatch: 'full',
  },
  {

    path: 'signup',
    component: SignupComponent,
    pathMatch: 'full',
  }

]
