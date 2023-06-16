import './style.css'
import arrow from '../../assets/arrow.png';
import { useState } from 'react';

export default function Collapse({title, content}) { /*parametres titre et contenu */

    const [toggle, setToggle] = useState(false); /*toggle true up et false down */
    return (
        <> 
            <div>
                <h3 className='collapse_title' onClick={() => setToggle(!toggle)} >
                    {title}
                    <img 
                        className={toggle ? 'arrow arrow_up' : 'arrow arrow_down'} 
                        src={arrow} 
                        alt="menu deroulant" 
                    />
                </h3>
                <div className={toggle ? 'collapse_content' : 'collapse_content_hidden'}>
                    {Array.isArray(content) ? content.map((item, index) => {
                        return (
                            <p key={index}>{item}</p>
                        )
                    }) : content
                    }
                </div> 
            </div>
        </>
    )
}