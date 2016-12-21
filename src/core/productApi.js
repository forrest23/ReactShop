import { Product } from '../data/models';


export async function createProduct(title, costPrice) {
  Product.create({
    title,
    tg_url: 'https://ant.design/',
    yhq_url: 'https://ant.design/',
    sale_price: '0.99',
    fl_scale: '0.35',
    fl_amount: '12',
    cost_price: costPrice,
    expiry_date: '2016-12-25',
  });
}

