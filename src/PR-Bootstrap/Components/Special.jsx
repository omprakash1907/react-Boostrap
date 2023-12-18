import React from 'react'
import { Container, Image, Nav, NavItem, NavLink, Row } from 'react-bootstrap'

export default function Special() {
    return (
        <section id="specials" className="specials">
            <Container>

                <div className="section-title">
                    <h2>Specials</h2>
                    <p>Check Our Specials</p>
                </div>

                <Row >
                    <div className="col-lg-3">
                        <Nav className="nav-tabs flex-column">
                            <NavItem>
                                <NavLink className="active show" data-bs-toggle="tab" href="#tab-1">Modi sit est</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink data-bs-toggle="tab" href="#tab-2">Unde praesentium sed</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink data-bs-toggle="tab" href="#tab-3">Pariatur explicabo vel</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink data-bs-toggle="tab" href="#tab-4">Nostrum qui quasi</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink data-bs-toggle="tab" href="#tab-5">Iusto ut expedita aut</NavLink>
                            </NavItem>
                        </Nav>
                    </div>
                    <div className="col-lg-9 mt-4 mt-lg-0">
                        <div className="tab-content">
                            <div className="tab-pane active show" id="tab-1">
                                <Row>
                                    <div className="col-lg-8 details order-2 order-lg-1">
                                        <h3>Architecto ut aperiam autem id</h3>
                                        <p className="fst-italic">Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer
                                            a videna mareta paulona marka</p>
                                        <p>Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa
                                            odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni
                                            nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero</p>
                                    </div>
                                    <div className="col-lg-4 text-center order-1 order-lg-2">
                                        <Image fluid src="https://bootstrapmade.com/demo/templates/Restaurantly/assets/img/specials-1.png" alt="" />
                                    </div>
                                </Row>
                            </div>
                            <div className="tab-pane" id="tab-2">
                                <Row>
                                    <div className="col-lg-8 details order-2 order-lg-1">
                                        <h3>Et blanditiis nemo veritatis excepturi</h3>
                                        <p className="fst-italic">Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer
                                            a videna mareta paulona marka</p>
                                        <p>Ea ipsum voluptatem consequatur quis est. Illum error ullam omnis quia et reiciendis sunt sunt
                                            est. Non aliquid repellendus itaque accusamus eius et velit ipsa voluptates. Optio nesciunt eaque
                                            beatae accusamus lerode pakto madirna desera vafle de nideran pal</p>
                                    </div>
                                    <div className="col-lg-4 text-center order-1 order-lg-2">
                                        <Image fluid src="https://bootstrapmade.com/demo/templates/Restaurantly/assets/img/specials-2.png" alt="" />
                                    </div>
                                </Row>
                            </div>
                            <div className="tab-pane" id="tab-3">
                                <Row>
                                    <div className="col-lg-8 details order-2 order-lg-1">
                                        <h3>Impedit facilis occaecati odio neque aperiam sit</h3>
                                        <p className="fst-italic">Eos voluptatibus quo. Odio similique illum id quidem non enim fuga. Qui natus
                                            non sunt dicta dolor et. In asperiores velit quaerat perferendis aut</p>
                                        <p>Iure officiis odit rerum. Harum sequi eum illum corrupti culpa veritatis quisquam. Neque
                                            necessitatibus illo rerum eum ut. Commodi ipsam minima molestiae sed laboriosam a iste odio. Earum
                                            odit nesciunt fugiat sit ullam. Soluta et harum voluptatem optio quae</p>
                                    </div>
                                    <div className="col-lg-4 text-center order-1 order-lg-2">
                                        <Image fluid src="https://bootstrapmade.com/demo/templates/Restaurantly/assets/img/specials-3.png" alt="" />
                                    </div>
                                </Row>
                            </div>
                            <div className="tab-pane" id="tab-4">
                                <Row>
                                    <div className="col-lg-8 details order-2 order-lg-1">
                                        <h3>Fuga dolores inventore laboriosam ut est accusamus laboriosam dolore</h3>
                                        <p className="fst-italic">Totam aperiam accusamus. Repellat consequuntur iure voluptas iure porro quis
                                            delectus</p>
                                        <p>Eaque consequuntur consequuntur libero expedita in voluptas. Nostrum ipsam necessitatibus aliquam
                                            fugiat debitis quis velit. Eum ex maxime error in consequatur corporis atque. Eligendi asperiores
                                            sed qui veritatis aperiam quia a laborum inventore</p>
                                    </div>
                                    <div className="col-lg-4 text-center order-1 order-lg-2">
                                        <Image fluid src="https://bootstrapmade.com/demo/templates/Restaurantly/assets/img/specials-4.png" alt="" />
                                    </div>
                                </Row>
                            </div>
                            <div className="tab-pane" id="tab-5">
                                <Row>
                                    <div className="col-lg-8 details order-2 order-lg-1">
                                        <h3>Est eveniet ipsam sindera pad rone matrelat sando reda</h3>
                                        <p className="fst-italic">Omnis blanditiis saepe eos autem qui sunt debitis porro quia.</p>
                                        <p>Exercitationem nostrum omnis. Ut reiciendis repudiandae minus. Omnis recusandae ut non quam ut
                                            quod eius qui. Ipsum quia odit vero atque qui quibusdam amet. Occaecati sed est sint aut vitae
                                            molestiae voluptate vel</p>
                                    </div>
                                    <div className="col-lg-4 text-center order-1 order-lg-2">
                                        <Image fluid src="https://bootstrapmade.com/demo/templates/Restaurantly/assets/img/specials-5.png" alt="" />
                                    </div>
                                </Row>
                            </div>
                        </div>
                    </div>
                </Row>

            </Container>
        </section>
    )
}
