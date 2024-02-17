import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-modal-product-view',
  templateUrl: './modal-product-view.component.html',
  styleUrls: ['./modal-product-view.component.css']
})
export class ModalProductViewComponent implements OnInit {

  @Input() product: Product | undefined
  @Output() close : EventEmitter<string>= new EventEmitter<string>()
  constructor() { }

  ngOnInit(): void {
  }

  CloseModal() {
 this.close.emit()
  }
}
