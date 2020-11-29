import { CurrencyPipe } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, ValidatorFn, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UUID } from 'angular2-uuid';
import { BehaviorSubject, Subject } from 'rxjs';
import { Product } from 'src/app/core/models';
import { ProductService } from 'src/app/core/services/product.service';
import { NotifierService } from 'src/app/shared/services/notifier.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product.form.component.html',
  styleUrls: ['./product.form.component.scss']
})
export class ProductFormComponent implements OnInit {

  public $updateMode = new BehaviorSubject<boolean>(false);

  constructor(private formBuilder: FormBuilder,
              public currencyPipe: CurrencyPipe,
              private service: ProductService,
              private notifier: NotifierService,
              private dialogRef: MatDialogRef<ProductFormComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  public form = this.formBuilder.group({
    name: [null, Validators.required],
    value: [null, Validators.required],
    image: null,
  });

  ngOnInit(): void {
    if (this.data) {
      this.$updateMode.next(true);
      this.form.setValue({
        name: this.data.name,
        value: this.data.value,
        image: this.data.image
      });
    }
  }

  onClose(): void {
    this.dialogRef.close(false);
  }

  onSave(): void {

    if (this.$updateMode.value){

      const updateCommand = {
        id: this.data.id,
        name: this.form.controls.name.value,
        value: this.form.controls.value.value,
        image: this.form.controls.image.value,
      } as Product;

      this.service
        .put(updateCommand)
        .subscribe(
          () => this.dialogRef.close({success: true, message: 'Produto atualizado com sucesso'}),
          (err) => this.notifier.error(err.error)
        );

    } else {
      const createCommand = {
        id: UUID.UUID(),
        name: this.form.controls.name.value,
        value: this.form.controls.value.value,
        image: this.form.controls.image.value,
      } as Product;

      this.service
        .post(createCommand)
        .subscribe(
          () => this.dialogRef.close({success: true, message: 'Produto criado com sucesso'}),
          (err) => this.notifier.error(err.error)
        );
    }
  }

  onDelete(): void {
    this.service
      .delete(this.data.id)
      .subscribe(
        () => this.dialogRef.close({success: true, message: 'Produto excluído com sucesso'}),
        (err) => this.notifier.error(err.error)
      );
  }

  onSelectFile(files: any): void {
    if (files.length === 0){
      return;
    }
    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(files[0]);

    reader.onload = () => {
      this.form.controls.image.setValue(reader.result);
    };
  }
}
