import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './Search.css';
import Main from '../Main/Main';
const Search = () => {
    const [first, setFirst] = useState([]);
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${' '}`)
        .then(res => res.json())
        .then(DATA => {
            setFirst(DATA);
        })
    },[]);
    const [data, setData] = useState([]);
    const nameRef = useRef();
    const handleSubmit = (evt) => {
        evt.preventDefault();
        const name = nameRef.current.value;
        nameRef.current.value = `${name}`;
        searchRecipes(name);
    }
    const searchRecipes = (name) =>{
        // console.log(name);
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
        .then(res => res.json())
        .then(DATA => {
            // console.log(DATA);
            setData(DATA);
        })
    } 
    return (
        <div>
            <div className="search bg-dark text text-light">
                <h1 className="text text-info text-center">Search Your Recipe</h1>
                <form onSubmit={handleSubmit} className="container input d-flex text-center">
                    <a href="/" onClick={handleSubmit} style={{position: 'relative', left: '65px',top:'9px',cursor: "pointer"}}><FontAwesomeIcon className="text text-info" icon={faSearch}></FontAwesomeIcon></a>
                    <input ref={nameRef} type="text" className="form-control" placeholder="Search..."/>
                    <button className='btn btn-warning'>Search</button>
                </form>
            </div>
            <Main data={data} first={first}></Main>
        </div>
    );
};

export default Search;