import React from 'react';
import TransactionList from './TransactionList';


const TransactionApp: React.FC = () => {
    const transactions = [
        { id: 1, name: "Sam", date: "28 Feb 2023", time: "06:23 PM", amount: 13, type: "Received", imageUrl: "/image/img1.jpeg" },
        { id: 2, name: "venkat", date: "28 Feb 2023", time: "06:23 PM", amount: -9, type: "Outgoing", imageUrl: "/image/img2.jpeg" },
        { id: 3, name: "Ravi", date: "28 Feb 2023", time: "06:23 PM", amount: 20, type: "Received", imageUrl: "/image/img3.jpeg" }
    ];

    return (
        <div className="app">
            <h1>Last Transactions</h1>
            <TransactionList transactions={transactions} />
        </div>
    );
};

export default TransactionApp;

