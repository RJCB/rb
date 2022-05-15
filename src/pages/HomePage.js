import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import PersonalInfo from '../components/PersonalInfo'
import ProfessionalInfo from '../components/ProfessionalInfo'

const HomePage = () => {
    return (
        <Container fluid="md">
            <Row>
                <Col lg={6}>
                    <PersonalInfo />
                </Col>
                <Col lg={6}>
                    <ProfessionalInfo />
                </Col>
            </Row>
        </Container>
    )
}

export default HomePage