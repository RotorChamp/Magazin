import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FaTrash } from 'react-icons/fa';

export class Order extends Component {
  render() {
    const { img, title, price } = this.props.item;

    return (
      <div className='item'>
        <img src={`./img/${img}`} alt={title} />
        <div className='details'>
          <h2>{title}</h2>
          <b>{price}₽</b>
        </div>
        <FaTrash className='delete-icon' onClick={() => this.props.onDelete(this.props.item.id)} />
      </div>
    );
  }
}

Order.propTypes = {
  item: PropTypes.shape({
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  }).isRequired,
  onDelete: PropTypes.func.isRequired
};

export default Order;
