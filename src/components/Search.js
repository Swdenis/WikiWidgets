import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Search = () =>
{   const [term,setTerm] = useState('');
    const [results, setResults] = useState([]);

    console.log(results);
    

    useEffect(()=>
        {
            const search = async() => {
                const {data} = await axios.get("https://en.wikipedia.org/w/api.php", {
                    params: {
                        action: 'query',
                        list: 'search',
                        origin: '*',
                        format: 'json',
                        srsearch: term
                    },
                });
                console.log(data);
                setResults(data.query.search);
                };

                if(term && !results) {
                    search();
                } else {

                const timeoutId = setTimeout(()=>
                {
                    if(term) {
                        search();
                    }
                },500);
                
                return( () => 
                {
                    clearTimeout(timeoutId);
                })
                }
            }, [term]);

    const renderedResults = results.map(result => {
        return(
            <div className="item" key={result.pageid}>
                <div className="right floated content">
                    <a 
                    className="ui button"
                    href={`https://en.wikipedia.org?curid=${result.pageid}`}>
                        Go
                    </a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span 
                    dangerouslySetInnerHTML={{ __html: result.snippet}}>
                    </span>
                </div>
            </div>
        );
    });

    return(
        <div className="ui container">
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input 
                    className="input"
                    onChange={e => setTerm(e.target.value)}
                    value={term}
                    placeholder="Search for something"
                    />
                </div>
            </div>
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
    );
}

export default Search;