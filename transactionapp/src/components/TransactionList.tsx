import React from 'react';
import '../styles/TransactionList.scss';
import TransactionItem from './TransactionItem';

interface Transaction {
    id: number;
    name: string;
    date: string;
    time: string;
    amount: number;
    type: string;
    imageUrl: string;
}

interface TransactionListProps {
    transactions: Transaction[];
}

const TransactionList: React.FC<TransactionListProps> = ({ transactions }) => {
    return (
        <div className="transaction-list">
            {transactions.map((transaction) => (
                <TransactionItem key={transaction.id} transaction={transaction} />
            ))}
        </div>
    );
};

export default TransactionList;
