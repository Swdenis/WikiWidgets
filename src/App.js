import React,{useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import TextBox from './components/TextBox';
import Header from './components/Header';

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

const App = ()=> {
    const [selected,setSelected] = useState(options[0]);

    return( 
        <div className='ui container'>   
            <Header/>  
            <Route path = '/'>
                <Accordion items={items}/>
            </Route> 
            <Route path = '/list'>
                <Search items={items}/>
            </Route> 
            <Route path = '/dropdown'>
                <Dropdown items={items}
                options={options}
                selected={selected}
                onSelectedChange={setSelected}
                label="Select a Color"
                />
                <TextBox selected={selected}/>
            </Route> 
            <Route path = '/translate'>
                <Translate items={items}/>
            </Route> 
        </div>
    );
};

export default App;