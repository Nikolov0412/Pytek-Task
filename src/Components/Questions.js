 

function Questions({question, answer,active,setActive}){
    
    // Setting the active state on the component when is clicked
    const onToggle = (question) => {
        // If is already active clear the active status
        if (active === question) {
          setActive('');
        } else {
          setActive(question);
        }
      };
    

    return(
    <div className='card-child'>
         {/* Calling our function OnToggle on OnClick event */}
        <div className='card-question' onClick={()=>onToggle(question)}  >
            <div><h2 className='questionHeading'>{question}</h2></div>
            <span className="openSigns">{active=== question ? '-':'+'}</span>
        </div>
        <div className={(active===question?"show":"")+"card-answer"}>
            <p className='answerParagraph'> {answer}</p>
        </div>
        <br>
        </br>
        
    </div>


    );
}
export default Questions;