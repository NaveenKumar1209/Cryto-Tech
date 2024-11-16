import React from 'react';
import '../styles/TransactionItem.scss';

interface Transaction {
    name: string;
    date: string;
    time: string;
    amount: number;
    type: string;
    imageUrl: string;
}

interface TransactionItemProps {
    transaction: Transaction;
}

const TransactionItem: React.FC<TransactionItemProps> = ({ transaction }) => {
    const { name, date, time, amount, type, imageUrl } = transaction;
    const amountColor = amount > 0 ? 'green' : 'red';

    return (
        <div className="transaction-item">
            <img src={imageUrl} alt={name} className="transaction-item__image" />
            <div className="transaction-item__details">
                <h3 className="transaction-item__name">{name}</h3>
                <p className="transaction-item__date">{date} • {time}</p>
            </div>
            <div className="transaction-item__amount" style={{ color: amountColor }}>
                {amount > 0 ? `+${amount}` : `${amount}`}
                <span className="transaction-item__type">{type}</span>
            </div>
        </div>
    );
};

export default TransactionItem;
