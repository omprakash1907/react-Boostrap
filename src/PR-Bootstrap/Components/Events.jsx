import React from 'react'
import { Container, Image, Row } from 'react-bootstrap'

export default function Events() {
    return (
        <section id="events" className="events">
            <Container >

                <div className="section-title">
                    <h2>Events</h2>
                    <p>Organize Your Events in our Restaurant</p>
                </div>

                <div className="swiper events-slider" id='events-slider' >
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <Row className="event-item">
                                <div className="col-lg-6">
                                    <Image fluid src="https://bootstrapmade.com/demo/templates/Restaurantly/assets/img/event-birthday.jpg"
                                        alt="" />
                                </div>
                                <div className="col-lg-6 pt-4 pt-lg-0 content">
                                    <h3>Birthday Parties</h3>
                                    <div className="price">
                                        <p><span>$189</span></p>
                                    </div>
                                    <p className="fst-italic">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                                        et dolore
                                        magna aliqua.
                                    </p>
                                    <ul>
                                        <li><i className="bi bi-check-circled"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        </li>
                                        <li><i className="bi bi-check-circled"></i> Duis aute irure dolor in reprehenderit in voluptate velit.
                                        </li>
                                        <li><i className="bi bi-check-circled"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        </li>
                                    </ul>
                                    <p>
                                        Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                                        voluptate
                                        velit esse cillum dolore eu fugiat nulla pariatur
                                    </p>
                                </div>
                            </Row>
                        </div>

                        <div className="swiper-slide">
                            <Row className="event-item">
                                <div className="col-lg-6">
                                    <Image fluid src="https://bootstrapmade.com/demo/templates/Restaurantly/assets/img/event-private.jpg"
                                        alt="" />
                                </div>
                                <div className="col-lg-6 pt-4 pt-lg-0 content">
                                    <h3>Private Parties</h3>
                                    <div className="price">
                                        <p><span>$290</span></p>
                                    </div>
                                    <p className="fst-italic">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                                        et dolore
                                        magna aliqua.
                                    </p>
                                    <ul>
                                        <li><i className="bi bi-check-circled"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        </li>
                                        <li><i className="bi bi-check-circled"></i> Duis aute irure dolor in reprehenderit in voluptate velit.
                                        </li>
                                        <li><i className="bi bi-check-circled"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        </li>
                                    </ul>
                                    <p>
                                        Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                                        voluptate
                                        velit esse cillum dolore eu fugiat nulla pariatur
                                    </p>
                                </div>
                            </Row>
                        </div>

                        <div className="swiper-slide">
                            <Row className="event-item">
                                <div className="col-lg-6">
                                    <Image fluid src="https://bootstrapmade.com/demo/templates/Restaurantly/assets/img/event-custom.jpg"
                                        alt="" />
                                </div>
                                <div className="col-lg-6 pt-4 pt-lg-0 content">
                                    <h3>Custom Parties</h3>
                                    <div className="price">
                                        <p><span>$99</span></p>
                                    </div>
                                    <p className="fst-italic">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                                        et dolore
                                        magna aliqua.
                                    </p>
                                    <ul>
                                        <li><i className="bi bi-check-circled"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        </li>
                                        <li><i className="bi bi-check-circled"></i> Duis aute irure dolor in reprehenderit in voluptate velit.
                                        </li>
                                        <li><i className="bi bi-check-circled"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        </li>
                                    </ul>
                                    <p>
                                        Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                                        voluptate
                                        velit esse cillum dolore eu fugiat nulla pariatur
                                    </p>
                                </div>
                            </Row>
                        </div>

                    </div>
                    <div className="swiper-pagination"></div>
                </div>

            </Container>
        </section>
    )
}
