import React from 'react'
import { Container, Row } from 'react-bootstrap'

export default function US() {
    return (
        <>
            <section id="why-us" className="why-us">
                <Container >
                    <div className="section-title">
                        <h2>Why Us</h2>
                        <p>Why Choose Our Restaurant</p>
                    </div>

                    <Row>
                        <div className="col-lg-4">
                            <div className="box" >
                                <span>01</span>
                                <h4>Lorem Ipsum</h4>
                                <p>Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et consectetur ducimus vero placeat</p>
                            </div>
                        </div>

                        <div className="col-lg-4 mt-4 mt-lg-0">
                            <div className="box" >
                                <span>02</span>
                                <h4>Repellat Nihil</h4>
                                <p>Dolorem est fugiat occaecati voluptate velit esse. Dicta veritatis dolor quod et vel dire leno para
                                    dest</p>
                            </div>
                        </div>

                        <div className="col-lg-4 mt-4 mt-lg-0">
                            <div className="box" >
                                <span>03</span>
                                <h4> Ad ad velit qui</h4>
                                <p>Molestiae officiis omnis illo asperiores. Aut doloribus vitae sunt debitis quo vel nam quis</p>
                            </div>
                        </div>
                    </Row>
                </Container>
            </section>
        </>
    )
}
