import React, {useState} from 'react';
import Faqs from './Data';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close'
import './Accordion.css';

function Accordion() {

    const[isShown, setIsShown] = useState ();

    function handleClick(id) {
        if (isShown === id){
            setIsShown()
        } else {
            setIsShown(id)
        }
    }
  return (
    <div className='faq--content'>
        <h1>Frequently asked questions</h1>
        <div className='faqs'>
            {Faqs.map((data) =>{
                const {id,question,answer} = data;
                return (
                    <section key={id} className="accordion" onClick={() => handleClick(id)}>
                        <div className='question'>
                        <h2>{question}</h2>
                        <button className='acc--btn'>
                            {isShown === id ? <CloseIcon/> : <AddIcon/>}
                        </button>
                        </div>
                        {isShown === id && <div className='answer'>
                        <h4>{answer}</h4>
                            </div>}
                    </section>
                )
            })}
        </div>
        </div>
  )
}

export default Accordion