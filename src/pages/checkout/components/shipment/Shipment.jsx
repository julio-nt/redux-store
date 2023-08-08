import * as PageStyles from '../../styles'
import Input from '../../../../components/input/Input'

import { useSelector } from 'react-redux'

export default function Shipment(props) {
    const { currentUser } = useSelector(state => state.userReducer)

    const handleCheckbox = (e) => {
        if (e.target.checked === true) {
            props.setName(`${currentUser.firstname} ${currentUser.lastname}`)
            props.setEmail(currentUser.email)
            props.setId(currentUser.id)
            props.setPhone(currentUser.phone ? currentUser.phone : props.phone)
            props.setCountry(currentUser.country ? currentUser.country : props.country)
            props.setState(currentUser.state ? currentUser.state : props.state)
            props.setCity(currentUser.city ? currentUser.city : props.city)
            props.setAddress(currentUser.address ? currentUser.address : props.address)
            props.setExtraAddress(currentUser.extraAddress ? currentUser.extraAddress : props.extraAddress)
        }
    }

    return (
        <>
            <PageStyles.Title>Delivery information</PageStyles.Title>
            <PageStyles.Container>
                <div>
                    <PageStyles.Input>
                        <Input type='text' legend='Full name' value={props.name} setValue={props.setName} required />
                    </PageStyles.Input>
                    <PageStyles.Input>
                        <Input type='email' legend='Email' value={props.email} setValue={props.setEmail} required />
                    </PageStyles.Input>
                    <PageStyles.Input>
                        <Input type='text' legend='Id' value={props.id} setValue={props.setId} required />
                    </PageStyles.Input>
                </div>
                <div>
                    <PageStyles.Input>
                        <Input type='text' legend='Phone number' value={props.phone} setValue={props.setPhone} required />
                    </PageStyles.Input>
                    <PageStyles.Input>
                        <Input type='text' legend='Country' value={props.country} setValue={props.setCountry} required />
                    </PageStyles.Input>
                    <PageStyles.Input>
                        <Input type='text' legend='State' value={props.state} setValue={props.setState} required />
                    </PageStyles.Input>
                </div>
                <div>
                    <PageStyles.Input>
                        <Input type='text' legend='City' value={props.city} setValue={props.setCity} required />
                    </PageStyles.Input>
                    <PageStyles.Input>
                        <Input type='text' legend='Address' value={props.address} setValue={props.setAddress} required />
                    </PageStyles.Input>
                    <PageStyles.Input>
                        <Input type='text' legend='Apt, block, etc' value={props.extraAddress} setValue={props.setExtraAddress} />
                    </PageStyles.Input>
                </div>
            </PageStyles.Container>
            <div style={{ paddingLeft: '2rem', paddingTop: '1rem' }}>
                <input type='checkbox' id='fill' onChange={handleCheckbox} />
                <label htmlFor='fill'> Fill with my account information.</label>
            </div>
        </>
    )
}
