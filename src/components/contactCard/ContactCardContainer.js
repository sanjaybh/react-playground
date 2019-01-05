import React from "react"
import ContactCard from "./ContactCard.js"

function ContactCardContainer(){
    return (
        <div>
            <h1>Contact Card Container</h1>
            <div className="contacts">
                <ContactCard contact = {
                    {
                        name: "Mr. Whiskerson", 
                        imgUrl: "http://placekitten.com/200/200", 
                        phone: "(212) 555-1234", 
                        email: "mr.whiskaz@catnap.meow"
                    }
                }
                />
                <ContactCard contact = {
                    {
                        name: "Fluffykins", 
                        imgUrl: "http://placekitten.com/400/200", 
                        phone: "(212) 555-2345", 
                        email: "fluff@me.com"
                    }
                }
                />
                
                <ContactCard contact = {
                    {
                        name: "Destroyer", 
                        imgUrl: "http://placekitten.com/400/300", 
                        phone: "(212) 555-3456", 
                        email: "ofworlds@yahoo.com"
                    }
                }
                />
                
                <ContactCard contact = {
                    {
                        name: "Felix", 
                        imgUrl: "http://placekitten.com/200/100", 
                        phone: "(212) 555-4567", 
                        email: "thecat@hotmail.com"
                    }
                }
                />
            </div>
        </div>
    )
}

export default ContactCardContainer