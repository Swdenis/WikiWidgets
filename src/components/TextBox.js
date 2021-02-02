import React, {useState} from 'react';



const TextBox = ({selected}) =>
{   const [text,setText] = useState('Enter any text');

    return  (<div className="ui input">
                <input style={{color:`${selected.value}`}} 
                type="text" 
                value={text} 
                onChange={e => setText(e.target.value)}/>
            </div>);
};


export default TextBox;