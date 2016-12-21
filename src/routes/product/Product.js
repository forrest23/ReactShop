/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Table, Button, Icon, Modal, Input, DatePicker, Switch } from 'antd';
import moment from 'moment';
import _ from 'lodash';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import * as productActions from '../../actions/product';
import s from './Product.css';


const { Column } = Table;
const dateFormat = 'YYYY-MM-DD';

class Product extends React.Component {
  static propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      loading: false,
      title: '',
      costprice: '',
    };
    this.add = this.add.bind(this);
    this.reload = this.reload.bind(this);
    this.handleOk = this.handleOk.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.setInputTitle = this.setInputTitle.bind(this);
    this.setInputCostPrice = this.setInputCostPrice.bind(this);
  }

  add() {
    this.setState({
      visible: true,
    });
  }

  handleOk() {
    const { product, actions } = this.props;
    actions.createProduct(
      this.state.title,
      this.state.costprice);
  }

  handleCancel() {
    this.setState({ visible: false });
  }

  reload() {
    this.setState({ visible: false });
  }

  setInputTitle(event) {
    this.setState({
      title: event.target.value,
    });
  }
  setInputCostPrice(event) {
    this.setState({
      costprice: event.target.value,
    });
  }

  render() {
    const { product, actions } = this.props;

    return (
      <div className={s.root}>
        <div className={s.container}>
          <div className={s.btnContainer}>
            <Button.Group size="large">
              <Button type="primary" onClick={this.add}>
                <Icon type="plus" />新增
          </Button>
              <Button type="primary" onClick={this.reload}>
                刷新<Icon type="reload" />
              </Button>
            </Button.Group>
          </div>
          <Table dataSource={this.props.products} bordered pagination={false}>
            <Column
              title="title"
              dataIndex="title"
              key="title"
            />
            <Column
              title="sale_price"
              dataIndex="sale_price"
              key="sale_price"
            />
            <Column
              title="cost_price"
              dataIndex="cost_price"
              key="cost_price"
            />
          </Table>

          <Modal
            visible={this.state.visible}
            title="产品"
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            footer={[
              <Button key="back" type="ghost" size="large" onClick={this.handleCancel}>返回</Button>,
              <Button key="add" type="ghost" size="large" onClick={this.handleCancel}>继续添加</Button>,
              <Button key="submit" type="primary" size="large" loading={_.get(product, 'isFetching')} onClick={this.handleOk}>提交</Button>,
            ]}
          >
            <Input placeholder="名称" onChange={this.setInputTitle} />
            <div style={{ margin: '15px 0' }} />
            <Input placeholder="推广链接" />
            <div style={{ margin: '15px 0' }} />
            <Input placeholder="优惠券链接" />
            <div style={{ margin: '15px 0' }} />
            <Input placeholder="售价" />
            <div style={{ margin: '15px 0' }} />
            <Input placeholder="返利比率" />
            <div style={{ margin: '15px 0' }} />
            <Input placeholder="返利金额" />
            <div style={{ margin: '15px 0' }} />
            <Input placeholder="成本价" onChange={this.setInputCostPrice} />
            <div style={{ margin: '15px 0' }} />
            到期日期：<DatePicker defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} />
            上线：<Switch defaultChecked />
            <div style={{ margin: '15px 0' }} />
            <Input type="textarea" placeholder="备注" autosize />
          </Modal>
        </div>
      </div>
    );
  }
}


function mapStateToProps(state, ownProps) {
  return { product: _.get(state, 'product', {}) };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    actions: bindActionCreators(Object.assign({}, productActions), dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(s)(Product));
