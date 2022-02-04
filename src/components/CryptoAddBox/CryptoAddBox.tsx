import './CryptoAddBox.scss'
import Button from '../Button/Button'
import { useState } from 'react';

const CryptoAddBox = (props: any) => {
    const [term, setTerm] = useState('');
    const submitForm = (event: any) => {
        event.preventDefault();
        props.parentCallback(event.target.currency.value)
        setTerm('')
      }

    return(
        <div className='cryptoAddContainer'>
            <form onSubmit={submitForm}>
            <input type='text' name='currency' value={term} onChange={(e) => setTerm(e.target.value)} required /> 
            <Button text='Add' className='addButton' />
            </form>
            <p>Use of this service subject to terms and conditions</p>
        </div>
    )
};

export default CryptoAddBox;