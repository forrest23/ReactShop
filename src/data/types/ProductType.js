/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import {
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
  GraphQLBoolean as BooleanType,
} from 'graphql';

const ProductType = new ObjectType({
  name: 'Product',
  fields: {
    id: { type: StringType },
    title: { type: StringType },
    create_at: { type: StringType },
    tg_url: { type: StringType },
    yhq_url: { type: StringType },
    sale_price: { type: StringType },
    fl_scale: { type: StringType },
    fl_amount: { type: StringType },
    cost_price: { type: StringType },
    expiry_date: { type: StringType },
    status: { type: BooleanType },
    remark: { type: StringType },
  },
});

export default ProductType;
