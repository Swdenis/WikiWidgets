import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';

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

export default ()=> {

    return(
        <div>
            {/*<Accordion items={items}/>*/}
            <Search/>
        </div>
    );
};