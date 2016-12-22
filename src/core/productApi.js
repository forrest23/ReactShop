import { Product } from '../data/models';


export async function createProduct(newProduct) {
  Product.create(newProduct);
}

export async function getProduct() {
  return Product.findAll();
}

