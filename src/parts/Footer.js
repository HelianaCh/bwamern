import React from 'react'
import Button from 'elements/Button'
import IconText from 'parts/iconText'

export default function Footer() {
    return (
        <footer>
            <div className = "container">
                <div className = "row">
                    <div className = "col-auto" style={{width: 350}}>
                        <IconText />
                        <p className = "brand-tagline">
                        Comfort holiday, make your day beautiful and memorable.
                        </p>
                    </div>

                    <div className = "col-auto mr-5">
                        <h6 className = "mt-2">For Beginners</h6>
                        <ul className = "list-group list-group-flush">
                            <li className = "list-group-item">
                                <Button type = "link" href="/register">
                                    New Account
                                    </Button>
                            </li>
                            <li className = "list-group-item">
                                <Button type = "link" href="/properties">
                                    Start Booking a Room
                                    </Button>
                            </li>
                            <li className = "list-group-item">
                                <Button type = "link" href="/use-payments">
                                    Use Payments
                                    </Button>
                            </li>
                        </ul>
                    </div>

                    <div className = "col-auto mr-5">
                    <h6 className = "mt-2">Explore Us</h6>
                        <ul className = "list-group list-group-flush">
                            <li className = "list-group-item">
                                <Button type = "link" href="/career">
                                    Our Careers
                                    </Button>
                            </li>
                            <li className = "list-group-item">
                                <Button type = "link" href="/privacy">
                                    Privacy
                                    </Button>
                            </li>
                            <li className = "list-group-item">
                                <Button type = "link" href="/terms">
                                    Terms & Conditions
                                    </Button>
                            </li>
                        </ul>
                    </div>

                    <div className = "col-3">
                    <h6 className = "mt-2">Connect Us</h6>
                        <ul className = "list-group list-group-flush">
                            <li className = "list-group-item">
                                <Button isExternal type = "link" href="mailto:comfortzone@gmail.com">
                                comfortzone@gmail.com
                                    </Button>
                            </li>
                            <li className = "list-group-item">
                                <Button isExternal type = "link" href="tel:+628123456789">
                                081-2345-6789
                                    </Button>
                            </li>
                            <li className = "list-group-item">
                                <span>Tanjung Duren, Jakarta Barat</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className = "row">
                    <div className = "col text-center copyrights">
                    Copyright 2021 ●  All right reserved  ●  Comfort Zone
                    </div>
                </div>
            </div>
        </footer>
    )
}
