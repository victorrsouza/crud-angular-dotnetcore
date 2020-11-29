import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { Product } from 'src/app/core/models';
import { ProductService } from 'src/app/core/services/product.service';
import { ProductFormComponent } from './form/product.form.component';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { NotifierService } from 'src/app/shared/services/notifier.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {

  readonly products$ = new BehaviorSubject<Product[]>([]);

  readonly hasMore$ = new Subject<boolean>();
  readonly destroy$ = new Subject<boolean>();

  readonly searchText$ = new BehaviorSubject<string>('');

  private currentPage = 0;

  constructor(public router: Router,
              private dialog: MatDialog,
              private service: ProductService,
              private notifier: NotifierService) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  fetchProducts(textSearch = '', debonceTime = 0, page = 0, concat = false): void {
    this.service.get(textSearch, page)
      .pipe(
        takeUntil(this.destroy$),
        debounceTime(debonceTime)
      )
      .subscribe((result) => {
        if (concat) {
          this.products$.next(this.products$.value.concat(result.data));
        } else {
          this.products$.next(result.data);
          this.currentPage = 0;
        }
        this.hasMore$.next(result.hasMore);
      });
  }

  onLogoff(): void {
    localStorage.removeItem('ifood.islogged');
    this.router.navigateByUrl('/');
  }

  onOpenForm(product: Product | null): void {
    this.dialog.open(ProductFormComponent,
      {
        width: '100%',
        panelClass: 'fullscreen',
        data: product
      })
      .afterClosed()
      .subscribe(result => {
        if (result.success) {
          this.fetchProducts();
          this.notifier.success(result.message);
        }
      });
  }

  onPaginate(): void {
    this.currentPage += 1;
    this.fetchProducts(this.searchText$.value, 0, this.currentPage, true);
  }

  onSearch(evt: any): void {
    this.searchText$.next(evt.target.value);
    this.fetchProducts(this.searchText$.value, 1000);
  }
}
