import React from 'react';

function Collapsible ({faq, index, togglePanel}) {
    return (
        <div 
            className={"faq " + (faq.open ? 'open' : '')}
            key = {index}
            onClick={() => togglePanel(index)}
        >
            <div className="faq-question">
                {faq.question}
            </div>
            <div className="faq-answer">
                {faq.answer}
            </div>
        </div>
    )
}

export default Collapsible