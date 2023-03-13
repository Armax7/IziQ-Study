import { loadStripe } from "@stripe/stripe-js";

export async function checkout({lineItems}){
    let stripePromise = null
    const getStripe = ()=>{
        if(!stripePromise){
            stripePromise=loadStripe("pk_test_51MjAqcFcHuX0pfzL7Dat6soXYdapD91yCdaXhVx7lHc6k0HBtje3Nb4Nrvgkzif3nrKqjMoN6ru4dIJYhFHdXOXx00uqOe0UN4")
        }
        return stripePromise
    }

    const stripe = await getStripe()

    await stripe.redirectToCheckout({
        mode:"subscription",
        lineItems,
        successUrl: `${window.location.origin}/thank-you`,
        cancelUrl: window.location.origin
    })
}
