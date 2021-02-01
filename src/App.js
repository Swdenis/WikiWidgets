import React,{useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';

const items = [
    {
        title:"What is React?",
        content:"React is a frontend jvs library",
    },
    {
        title:"Why use React?",
        content:"React is cool",
    },
    {
        title:"How to use React?",
        content:"You create components",
    }
]

const options = [
    {
        label: "Red",
        value: 'red',
    },

    {
        label: "Green",
        value: 'green',
    },

    {
        label: "Blue",
        value: 'blue',
    },
]

export default ()=> {
    const [selected,setSelected] = useState(options[0]);
    const [showDropdown, setshowDropdown] = useState(true);
    const [text,setText] = useState('Enter any text');

    return(
        
        <div>     
            {/*<Accordion items={items}/>*/}
            {/*<Search/>*/}
            {/*
            <button onClick={() => setshowDropdown(!showDropdown)}>Toggle dropdown</button>
            {showDropdown ?
                <div>
                    <Dropdown 
                options={options}
                selected={selected}
                onSelectedChange={setSelected}
                label="Select a Color"
                />
                <div class="ui input">
                <input style={{color:`${selected.value}`}} 
                type="text" 
                value={text} 
                onChange={e => setText(e.target.value)}/>
                 </div>
                </div> 
                
            :
            null
            }
            */}
            <Translate/>
        </div>
    );
};