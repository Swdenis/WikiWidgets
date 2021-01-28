import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Search = () =>
{   const [term,setTerm] = useState('');

    useEffect(()=>
        {
            axios.get("url")
            .then((response)=>{func});
        },[term])

    return(
        <div className="ui container">
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input 
                    className="input"
                    onChange={e => setTerm(e.target.value)}
                    value={term}
                    />
                </div>
            </div>
        </div>
    );
}

export default Search;