import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {

  selectedProduct: any;
  products: any;

  constructor(
    private router: ActivatedRoute,
    private _globalService: GlobalService
  ) { 
    this.products = this._globalService.products;
    // console.log(this.router);
  }

  ngOnInit(): void {
    this.router.params.subscribe(
      (params: Params) => {
        const id = params.id;

        // console.log(id);
        const selected = this.products.filter(
          (product) => {
            return +product.id === +id;
          }
        );

        if (selected.length > 0) {
          this.selectedProduct = selected[0];
          this._globalService.subjectName.next(this.selectedProduct.name);
        }

      }
    );
  }

  ngOnDestroy(): void {
    this._globalService.subjectName.next('');
  }

}
