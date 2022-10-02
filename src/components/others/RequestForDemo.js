import React from 'react';
import ReviewTwo from '../tabs/ReviewTabTwo';
import ContactsForm from '../contact/ContactsForm';

const RequestForDemo = () => {
    return (
        <>
            <section className="sign-up-in-section bg-dark ptb-120 position-relative overflow-hidden">
                <div className="container">
                    <div className="row align-items-center justify-content-between"> 
                        <ReviewTwo/>
                        <ContactsForm/>
                     </div>  
                </div> 
            </section>
        </>
    )
}

export default RequestForDemo
