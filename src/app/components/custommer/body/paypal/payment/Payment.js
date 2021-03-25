// Note: This is example code. Each server platform and programming language has a different way of handling requests, making HTTP API calls, and serving responses to the browser.

// 1. Set up your server to make calls to PayPal

// 1a. Add your client ID and secret
PAYPAL_CLIENT = 'PAYPAL_SANDBOX_CLIENT';
PAYPAL_SECRET = 'PAYPAL_SANDBOX_SECRET';

// 1b. Point your server to the PayPal API
PAYPAL_OAUTH_API = 'https://api-m.sandbox.paypal.com/v1/oauth2/token/';
PAYPAL_ORDER_API = 'https://api-m.sandbox.paypal.com/v2/checkout/orders/';

// 1c. Get an access token from the PayPal API
basicAuth = base64encode(`${PAYPAL_CLIENT}:${PAYPAL_SECRET}`);
auth = http.post(PAYPAL_OAUTH_API {
    headers: {
        Accept: `application/json`,
        Authorization: `Basic ${basicAuth}`
    },
    data: `grant_type=client_credentials`
});

// 2. Set up your server to receive a call from the client
function handleRequest(request, response) {

    // 2a. Get the order ID from the request body
    orderID = request.body.orderID;

    // 3. Call PayPal to patch the order
    patch = http.post(PAYPAL_ORDER_API + orderID, {
        method: 'PATCH',
        headers: {
            Accept: `application/json`,
            Authorization: `Bearer ${auth.access_token}`
        },
        data: {
            op: 'replace',
            path: '/purchase_units/@reference_id==\'default\'/amount',
            value: {
                currency_code: 'USD',
                value: '500.00'
            }
        }
    });

    // 4. Handle any errors from the call
    if (patch.error) {
        return response.send(500);
    }

    // 5. Return a successful response to the client
    response.send(200);
}