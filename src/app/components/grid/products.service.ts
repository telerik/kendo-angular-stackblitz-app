import { Injectable } from '@angular/core';
import { products } from './products';

@Injectable()
export class ProductsService {
    private data: any[] = products;
    private counter: number = products.length;

    public products(): any[] {
        return this.data;
    }

    public remove(product: any): void {
        const index = this.data.findIndex(({ ProductID }) => ProductID === product.ProductID);
        this.data.splice(index, 1);
    }

    public save(product: any, isNew: boolean): void {
        if (isNew) {
            product.ProductID = this.counter++;
            this.data.splice(0, 0, product);
        } else {
            Object.assign(
                this.data.find(({ ProductID }) => ProductID === product.ProductID),
                product
            );
        }
    }
}
