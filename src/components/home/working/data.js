
// images
import location from '../../../assets/working/find-ic.png';
import box from '../../../assets/working/ser-pro-ic.png'
import cart from '../../../assets/working/cart-ic.png'
import checkout from '../../../assets/working/checkout-ic.png'
import order from '../../../assets/working/order-ic.png'



export const workingItems = [
    {
        id: 1,
        img: location,
        completed: false,
        title: 'Use the Gorex App to Find Services Providers Nearby',
        text: 'With the Gorex app, customers can easily locate service providers near their location using a map.'
    },
    {
        id: 2,
        img: box,
        completed: false,
        title: 'Choose Services and Products',
        text: 'Once customers have found the service provider they want, they can browse the available services and products offered by the provider.'
    },
    {
        id: 3,
        img: cart,
        completed: false,
        title: 'Add Services and Products to the Cart',
        text: 'customers can add the services and products they want to their cart with a few clicks. The app will calculate the total cost, including any applicable taxes and fees.'
    },
    {
        id: 4,
        img: checkout,
        completed: false,
        title: 'Follow the Checkout Process',
        text: 'After adding services and products to the cart, customers can follow the checkout process, which includes entering payment and contact information.'
    },
    {
        id: 5,
        img: order,
        completed: true,
        title: 'Order Confirmed',
        text: 'Once the customer has completed the checkout process, they will receive a confirmation of their order. The service provider will also receive the order details and will be ready to provide the requested services at the scheduled time.'
    },

]