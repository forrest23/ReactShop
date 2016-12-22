import { Product } from '../data/models';


export async function createProduct(newProduct) {
  Product.create(newProduct);
}

