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
      tg_url: '',
      yhq_url: '',
      sale_price: '0',
      fl_scale: '0',
      fl_amount: '0',
      cost_price: '0',
      expiry_date: '',
      status: '0',
    };
    this.add = this.add.bind(this);
    this.reload = this.reload.bind(this);
    this.handleOk = this.handleOk.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.setInputTitle = this.setInputTitle.bind(this);
    this.setInputTgUrl = this.setInputTgUrl.bind(this);
    this.setInputYhqUrl = this.setInputYhqUrl.bind(this);
    this.setInputSalePrice = this.setInputSalePrice.bind(this);
    this.setInputFlScale = this.setInputFlScale.bind(this);
    this.setInputFlAmount = this.setInputFlAmount.bind(this);
    this.setInputCostPrice = this.setInputCostPrice.bind(this);
    this.setInputExpiryDate = this.setInputExpiryDate.bind(this);
    this.setInputStatus = this.setInputStatus.bind(this);
  }

  add() {
    this.setState({
      visible: true,
    });
  }

  handleOk() {
    const { actions } = this.props;
    const newProduct = {
      title: this.state.title,
      tg_url: this.state.tg_url,
      yhq_url: this.state.yhq_url,
      sale_price: this.state.sale_price,
      fl_scale: this.state.fl_scale,
      fl_amount: this.state.fl_amount,
      cost_price: this.state.cost_price,
      expiry_date: this.state.expiry_date,
      status: this.state.status,
    };
    actions.createProduct(
      newProduct,
    );
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
  setInputTgUrl(event) {
    this.setState({
      tg_url: event.target.value,
    });
  }
  setInputYhqUrl(event) {
    this.setState({
      yhq_url: event.target.value,
    });
  }
  setInputSalePrice(event) {
    this.setState({
      sale_price: event.target.value,
    });
  }
  setInputFlScale(event) {
    this.setState({
      fl_scale: event.target.value,
    });
  }

  setInputFlAmount(event) {
    this.setState({
      fl_amount: event.target.value,
    });
  }

  setInputCostPrice(event) {
    this.setState({
      cost_price: event.target.value,
    });
  }

  setInputExpiryDate(date, dateString) {
    this.setState({
      expiry_date: dateString,
    });
  }

  setInputStatus(checked) {
    this.setState({
      status: checked,
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
              title="名称"
              dataIndex="title"
              key="title"
              />
            <Column
              title="推广链接"
              dataIndex="tg_url"
              key="tg_url"
              />
            <Column
              title="优惠券链接"
              dataIndex="yhq_url"
              key="yhq_url"
              />
            <Column
              title="售价"
              dataIndex="sale_price"
              key="sale_price"
              />
            <Column
              title="成本价"
              dataIndex="cost_price"
              key="cost_price"
              />
            <Column
              title="到期日期"
              dataIndex="expiry_date"
              key="expiry_date"
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
            <Input placeholder="推广链接" onChange={this.setInputTgUrl} />
            <div style={{ margin: '15px 0' }} />
            <Input placeholder="优惠券链接" onChange={this.setInputYhqUrl} />
            <div style={{ margin: '15px 0' }} />
            <Input placeholder="售价" onChange={this.setInputSalePrice} />
            <div style={{ margin: '15px 0' }} />
            <Input placeholder="返利比率" onChange={this.setInputFlScale} />
            <div style={{ margin: '15px 0' }} />
            <Input placeholder="返利金额" onChange={this.setInputFlAmount} />
            <div style={{ margin: '15px 0' }} />
            <Input placeholder="成本价" onChange={this.setInputCostPrice} />
            <div style={{ margin: '15px 0' }} />
            到期日期：<DatePicker defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} onChange={this.setInputExpiryDate} />
            上线：<Switch defaultChecked onChange={this.setInputStatus} />
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
