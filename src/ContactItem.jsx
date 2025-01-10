import React from "react"


function ContactItem ({imageUrl, name, tag}) {
    return(
        <div className="contact-item">
            <ContactItemImage urlImage={imageUrl} />
            <ContactItemText name={name} tag={tag} />
        </div>
    )
}

function ContactItemImage ({imageUrl}) {
    return(
        <div className="contact-item__image">
            <img
            src={imageUrl}
            alt="Contact Avatar" />
        </div>
    )
}

function ContactItemText ({name, tag}) {
    return(
        <div className="contact-item__text">
            <h3 className="contact-item__name">{name}</h3>
            <p className="contact-item__tag">@{tag}</p>
        </div>
    )
}

export default ContactItem;
