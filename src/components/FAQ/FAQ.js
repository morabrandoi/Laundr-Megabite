import React, { useState } from 'react';
import Collapsible from './Collapsible';
import styles from './styles.module.css'

function FAQ(props) {
    
    const [faqsGS, setfaqsGS] = useState([
        {
            question: 'How do I sign up?',
            answer: 'Simply download the app from goo.gl/he39e4. \n\nOpen the app and click “Sign up” on the homepage. \n\nEnter the requested information and either click the “next” button or swipe through the pages. When you are done, click “sign up.” You will then be redirected back to the login page where you will enter your Email and Password. Upon logging in, you will need to enter the confirmation code that was texted to the phone number you used to sign up.\n\nOnce your account is verified, you will have complete access to Laundr!',
            open: false
        },
        {
            question: 'How do I place an order?',
            answer: 'First make sure you have given the app location permission (requested on the homescreen) and entered your payment info (accessible through the sidebar or at the bottom of the homepage). \n\nOnce complete, tap the “new order” button on the homescreen and select your preferences by either tapping “next” or swiping through the order process screens.\n\nOn the review page, make sure all of the information is correct and then tap “Place order.”',
            open: false
        },
        {
            question: 'How will my first order go?',
            answer: 'You can place an order easily between 10 am – 7 pm! Launch the app and click ‘New Order’. Select a pick-up time that works with your schedule and choose your preferences on the next page. You will then indicate your pick-up location, include any directions or apartment numbers that may be helpful to the driver. You can place your items in a canvas bag or we will provide a Laundr bag to transport your order in! The final page will review your order process and give you a chance to enter the size of your load. We accept loads of any size as long as they are over our 10lbs minimum! The price reflected on the checkout page is an estimate. You will receive an accurate price once the driver weighs your order upon pick up. Once the order is with our processing team and the weight is entered, you will be able to choose a drop-off time. Your order will then be delivered back to you at your chosen time in our Laundr boxes for safe transport!',
            open: false
        },
        {
            question: 'How do I see the status of my order?',
            answer: 'On the homepage once you have placed an order, the button at the bottom of the page will now read “Order Status.”\n\nTap the “Order Status” button, and you will find a page outlining your order’s details as well as a selector for setting your delivery time.',
            open: false
        },
        {
            question: 'How do I change my account details?',
            answer: 'You can change your settings such as email and address in the app! Launch Laundr and click on your name on the menu and you can edit the fields to the correct information. If you signed up with an email that has a typo, reach out to customer support to assist with those changes. A forgotten password can be changed by clicking send OTP on the sign-up page. We will send you an email to your account with further instructions. \n\nPayment methods can be changed on the ‘Payments’ page in the app. The app requires a payment method on file to use the app and it cannot be removed. We accept VISA, Mastercard, American Express, and pre-paid cards.',
            open: false
        }
    ]);

    const [faqsMO,setfaqsMO] = useState([
        {
            question: 'I am missing items. What do I do?',
            answer: 'If you have checked in between each item and are unable to find an item you placed in your order, reach out to our customer support team at (352) 363-5211. They will contact the processing team to help you locate your missing item.',
            open: false
        },
        {
            question: 'What can I send?',
            answer: 'You can submit any sort of item that can be put through a washing machine. We accept items such as bedding and towels to doggy beds and baby bibs! Make sure to include any special instructions for processing and include hangers, if you prefer to hang your items. Laundr is happy to take the chore off your hands and give you back your time!',
            open: false
        },
        {
            question: 'What is included in the price?',
            answer: 'Your order includes washing and folding. The detergent is provided by Laundr, but if you have a preferred brand you can hand it to your driver upon pick-up. Your payment also includes the pick-up and drop-off at no extra charge!',
            open: false
        },
        {
            question: 'How do I tip my driver?',
            answer: 'Drivers are instructed not to accept tips. If you would like to help out your driver, leave a review at https://g.page/laundr-gainesville?share to let us know that they did a great job!',
            open: false
        },
        {
            question: 'What is the turnaround time?',
            answer: 'Turnaround time is dependent on weight and whether or not you are a subscriber. Subscribers may schedule orders for the same day, and on-demand users may schedule any time next-day. Your driver can provide better detail upon pickup!',
            open: false
        },
        {
            question: 'Do I have to be home during delivery?',
            answer: 'Being home for the delivery isn’t completely necessary! The driver will notify you once they are on their way to deliver, at that moment you can leave any instructions. You can have someone at the residence accept the order for you, but we cannot leave packages at your doorstep. If nobody answers, you will be able to reschedule your delivery for a different time.',
            open: false
        },
        {
            question: 'What happens if I miss a pickup or delivery?',
            answer: 'If you are not home and have not authorized unattended pickup, there will be a $5 fee charged to your payment method. Our drivers are paid for every attempt to pick-up or drop-off. You are able to cancel or reschedule up an hour before your allotted time free of charge! To reschedule, reach out to our support team at (352) 363-5211.',
            open: false
        }
    ]);

    const [faqsSub,setfaqsSub] = useState([
        {
            question: 'How do monthly subscriptions work?',
            answer: 'Subscriptions help you save the most money when placing orders! The plans will drop the price from $1.50 per pound to $1.20! Each tier has an allotted amount of weight and is billed monthly. \n\nThere are four different subscription plans. The Student plan is 40lbs for $40(requires valid .edu email), the Standard plan is 48 lbs for $60, the Plus plan is 66 lbs for $80, and the Family is 88lbs for $100. \n\nThe Family plan has the added benefit of giving you subscription pricing regardless of how many pounds you use. It will charge $1.20/lb instead of $1.50/lb for each pound after the initial 88lbs are used. \n\nOnce your laundry is picked up, the driver will weigh your order. The weight provided will be subtracted from your monthly allotted pounds. Each pound of the weight limit will be charged as on-demand pricing.',
            open: false
        },
        {
            question: 'What is included in my monthly subscription?',
            answer: 'Aside from saving money, subscribers get other benefits such as same-day delivery and personal Laundr bags. Family plan subscribers get the added benefit of subscription pricing on any number of pounds they choose to use beyond their initial 88lbs.',
            open: false
        },
        {
            question: 'How do I cancel my monthly subscription?',
            answer: 'Although we believe you’ll love the service, you can cancel your subscription at any point. If it renews and none of the allotted pounds have been used, you will receive a full refund within the first 10 days. Otherwise, you can cancel the subscription and use your allotted lbs until the end of the current billing cycle.',
            open: false
        }
    ]);

    const [faqsCI,setfaqsCI] = useState([
        {
            question: 'Where do you operate?',
            answer: 'We currently operate in Gainesville, FL and parts of Orlando, FL!',
            open: false
        },
        {
            question: 'What are your hours?',
            answer: 'We operate between the hours of 10 am – 7 pm!',
            open: false
        },
        {
            question: 'Do you check the care instructions for my order?',
            answer: 'While we would love to make sure every item is cared for properly, we do not sort through each item individually and adhere to care instructions. Clothing is cold washed and low temperature dried to provide a gentle wash and dry cycle! In the order process, you will be able to indicate any special instructions for specific items in your order and we will make sure it gets taken care of. Airdrying, delicates, dryer settings, or folding methods are just a few examples!',
            open: false
        }
    ]);

    const togglePanelGS = index => {
        setfaqsGS(faqsGS.map((faq, i) => {
            if (i === index) {
                faq.open = !faq.open
            }
            else {
                faq.open = false;
            }
            return faq;
        }))
    }

    const togglePanelMO = index => {
        setfaqsMO(faqsMO.map((faq, i) => {
            if (i === index) {
                faq.open = !faq.open
            }
            else {
                faq.open = false;
            }
            return faq;
        }))
    }

    const togglePanelSub = index => {
        setfaqsSub(faqsSub.map((faq, i) => {
            if (i === index) {
                faq.open = !faq.open
            }
            else {
                faq.open = false;
            }
            return faq;
        }))
    }

    const togglePanelCI = index => {
        setfaqsCI(faqsCI.map((faq, i) => {
            if (i === index) {
                faq.open = !faq.open
            }
            else {
                faq.open = false;
            }
            return faq;
        }))
    }
    
    return (
        <>
            <h1 className={styles.headerText}>Frequently Asked Questions</h1>
            <h2 className={styles.FAQCategory}>Getting Started</h2>

            <div className="faqs">
                {faqsGS.map((faq, i) => (
                    <div>
                        <Collapsible faq={faq} index={i} togglePanel={togglePanelGS} />
                    </div>
                ))}
            </div>

            <h2 className={styles.FAQCategory}>My Order</h2>

            <div className="faqs">
                {faqsMO.map((faq, i) => (
                    <div>
                        <Collapsible faq={faq} index={i} togglePanel={togglePanelMO} />
                    </div>
                ))}
            </div>

            <h2 className={styles.FAQCategory}>Subscriptions</h2>
            
            <div className="faqs">
                {faqsSub.map((faq, i) => (
                    <div>
                        <Collapsible faq={faq} index={i} togglePanel={togglePanelSub} />
                    </div>
                ))}
            </div>

            <h2 className={styles.FAQCategory}>Company Info</h2>

            <div className="faqs">
                {faqsCI.map((faq, i) => (
                    <div>
                        <Collapsible faq={faq} index={i} togglePanel={togglePanelCI} />
                    </div>
                ))}
            </div>
        </>
    );
}


export default FAQ;