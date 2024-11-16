import React, { useEffect, useState } from 'react';
import '../styles/WidgetOrderStats.scss';
import OrderStat from './OrderStat';
import { OrderStatData } from '../setupTests';

const WidgetOrderStats: React.FC = () => {
  const [stats, setStats] = useState<OrderStatData[]>([]);

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => setStats(data.stats));
  }, []);

  return (
    <div className="widget-order-stats">
      {stats.map((stat, index) => (
        <OrderStat key={index} data={stat} />
      ))}
    </div>
  );
};

export default WidgetOrderStats;
