import React,{useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';

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
    return(
        
        <div>     
            {/*<Accordion items={items}/>*/}
            {/*<Search/>*/}
            <button onClick={() => setshowDropdown(!showDropdown)}>Toggle dropdown</button>
            {showDropdown ? 
                <Dropdown 
                options={options}
                selected={selected}
                onSelectedChange={setSelected}
                />
            :
            null
            }
            
        </div>
    );
};