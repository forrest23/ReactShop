/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { Tag } from 'antd';
import s from './Home.css';

class Home extends React.Component {
  static propTypes = {
    movices: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      year: PropTypes.string,
    })).isRequired,
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>正在热映</h1>
          <ul className={s.news}>
            {this.props.movices.map((item, index) => (
              <li key={index} className={s.newsItem}>
                <a href={item.alt} className={s.newsTitle}>{item.title}<Tag color="#87d068">New</Tag></a>
                <span
                  className={s.newsDesc}
                  dangerouslySetInnerHTML={{ __html: item.year }}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);
