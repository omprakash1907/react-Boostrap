import React from 'react'
import { Container, Row } from 'react-bootstrap'


export default function MainBanner() {
  return (
    <>
      <section id="Main-Banner" className="d-flex align-items-center">
        <Container className=" position-relative text-center text-lg-start" >
          <div className="row">
            <Row className="col-lg-8">
              <h1>Welcome to <span>Restaurantly</span></h1>
              <h2>Delivering great food for more than 18 years!</h2>

              <div className="btns">
                <a href="#menu" className="btn-menu animated fadeInUp scrollto">Our Menu</a>
                <a href="#book-a-table" className="btn-book animated fadeInUp scrollto">Book a Table</a>
              </div>
            </Row>
            <div className="col-lg-4 d-flex align-items-center justify-content-center position-relative" >
              <a href="https://www.youtube.com/watch?v=u6BOC7CDUTQ" className="play-btn"></a>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
