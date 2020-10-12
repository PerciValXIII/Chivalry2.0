import React from 'react'
import Icon1 from '../../Images/svg-6.svg'
import Icon2 from '../../Images/svg-3.svg'
import Icon3 from '../../Images/svg-4.svg'
import{
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP
} from './ServicesElements'


const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Home Delivery</ServicesH2>
                    <ServicesP>We offer free home delivery of our products</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Pay your way</ServicesH2>
                    <ServicesP>Multiple payment methods for you to choose from</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Mobile App</ServicesH2>
                    <ServicesP>Download our mobile app and shop on the go</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
