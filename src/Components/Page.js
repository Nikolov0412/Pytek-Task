import{questionsData} from '../utils/data';
import React, { useState } from 'react';
import Question from'./Questions';
import './Page.css'
function Faq(){

    // initializing active and setActive consts from useState hook
    const [active, setActive] = useState("");
    return(
<div>
    <div className="heading"> 
<h1 className="title">Frequently asked questions</h1>
<p className="underTitle">Hello! Didn't find what you are looking for? Please contact us.</p>
</div>

 {/* Mapping the question array to our component question and parsing the data.*/}
<div className='card'>{questionsData.map((data)=>( 
     /* Parsing data from the array to the component Question with parameters.*/
    <Question key={data.id} question={data.question} answer={data.answer} active={active} setActive={setActive}/>
))}
</div>


</div>
    );
}
export default Faq;