/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Product from './Product';
import fetch from '../../core/fetch';
import Layout from '../../components/Layout';


export default {

  path: '/product',

  async action() {
    const resp = await fetch('/graphql', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: '{products{id,title,tg_url,yhq_url,sale_price,fl_scale,fl_amount,cost_price,expiry_date,status}}',
      }),
      credentials: 'include',
    });
    const { data } = await resp.json();
    if (!data || !data.products) throw new Error('Failed to load the movies data.');

    return {
      title: '代办',
      component: <Layout><Product products={data.products} />
      </Layout>,
    };
  },

};
