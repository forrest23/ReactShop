/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import DataType from 'sequelize';
import Model from '../sequelize';

const Product = Model.define('Product', {

  id: {
    type: DataType.UUID,
    defaultValue: DataType.UUIDV1,
    primaryKey: true,
  },

  title: {
    type: DataType.STRING(1000),
  },

  create_at: {
    type: DataType.DATE,
    defaultValue: DataType.NOW,
  },


  tg_url: {
    type: DataType.STRING(2000),
  },

  yhq_url: {
    type: DataType.STRING(2000),
  },

  sale_price: {
    type: DataType.FLOAT,
  },

  fl_scale: {
    type: DataType.FLOAT,
  },

  fl_amount: {
    type: DataType.FLOAT,
  },

  cost_price: {
    type: DataType.FLOAT,
  },

  expiry_date: {
    type: DataType.DATE,
  },

  status: {
    type: DataType.BOOLEAN,
    defaultValue: false,
  },
}, {
  tableName: 'product',
  timestamps: false,
});

export default Product;
