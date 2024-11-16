import React from 'react';
import '../styles/OrderStat.scss';
import { OrderStatData } from '../setupTests';

interface OrderStatProps {
  data: OrderStatData;
}

const OrderStat: React.FC<OrderStatProps> = ({ data }) => {
  return (
    <div className="order-stat">
      <div className="icon">
        <img src={data.image} alt={data.label} />
      </div>
      <div className="details">
        <h4>{data.label}</h4>
        <p>{data.value}</p>
      </div>
      <div className={`percentage ${data.percentage >= 0 ? 'positive' : 'negative'}`}>
        {data.percentage >= 0 ? '↑' : '↓'} {Math.abs(data.percentage)}%
      </div>
    </div>
  );
};

export default OrderStat;
