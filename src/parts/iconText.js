import React from 'react'
import Button from 'elements/Button'
// import IconBrand from "assets/images/icons/icon-brand.svg"

export default function iconText() {
    return (
        <Button className="brand-text-icon" href = "" type="link">
           <img  
                            width ="96" 
                            height="96"
                            src="/images/icon-brand.svg"
                            alt = "ComfortZone"
                            />
                            
            {/* <Button className="brand-text-icon" href = "" type="link">
            Comfort<span className="text-yellow">Zone</span>
            
        </Button> */}
        </Button>
    );
}
