import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import './PayPal.scss';
function PayPal(props) {
    const listCarts = useSelector(state => state.GetCarts);
    const paypal = useRef();
    let history = useHistory();
    useEffect(() => {
        window.paypal.Buttons({
            createOrder: (data, actions, err) => {
                return actions.order.create({
                    intent: "CAPTURE",
                    purchase_units: [
                        {
                            description: "Thanh toán",
                            amount: {
                                value: parseFloat(listCarts.totalPrice / 2300000).toFixed(2)
                            }
                        }
                    ]
                })
            },
            onSuccess: (payment) => {
                // Congratulation, it came here means everything's fine!
                console.log("The payment was succeeded!", payment);
                // You can bind the "payment" object's value to your state or props or whatever here, please see below for sample returned data
                props.onSuccess(payment);

            },
            onApprove: async (data, actions) => {
                const order = await actions.order.capture();
                console.log(order);
                console.log(data);
                alert('Transaction completed by ' + order.payer.name.given_name);
                // return actions.order.capture().then(function (details) {
                //     // This function shows a transaction success message to your buyer.
                //     alert('Transaction completed by ' + details.payer.name.given_name);
                // });
                 history.push("/history");
            },
            onError: (err) => {
                console.log(err);
            }
           
        }).render(paypal.current)
    }, [])
    
    return (
        <div className="paypal-av" style={{margin: "100px auto"}}>
            <div ref={paypal}></div>

        </div>
    );
}

export default PayPal;