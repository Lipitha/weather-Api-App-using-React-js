import React from 'react';

const Navbar = () =>{
    return(
    <nav className='ui raised vaery padded segment'>
        <a className='ui teal inverted segment'>Gloria</a>
        <div className='ui right floated header'>
            <button className='ui button'>
                <a href='/'>home</a>
            </button>
            <button className='ui button'>
                <a href='/About'>About</a>
            </button>
            <button className='ui button'>
                <a href='/Contact'>Contact</a>
            </button>
        </div>
    </nav>
    )
};
export default Navbar;