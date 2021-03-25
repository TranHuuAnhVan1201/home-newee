import axios from 'axios';
import React from 'react';

function Order(props) {
    const api = axios.create({
        baseURL: `https://api-m.sandbox.paypal.com/v2/invoicing/generate-next-invoice-number`

    });
    console.log(api);
    return (
        <div>
            <h1>Order</h1>

        </div>
    );
}

export default Order;