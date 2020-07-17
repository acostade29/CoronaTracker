import React from 'react';

const NavBar = ({ user, handleLogout }) => {
    let nav = user ?
    <>
        <nav>
            <div className="nav-wrapper">
                <a className=" left" href="/"><img src="https://fontmeme.com/permalink/200717/845966a1dcfd9aca5cafe8e5e408a676.png" height='20' alt="netflix-font" border="0"/></a>
                <ul id="nav-mobile" className="right">
                    <li><a className="nav-link-a" href="/comments">Comments</a></li>
                    <li><a href="/comments"><i className="material-icons left small">note</i></a></li>
                    <li><a href=" " className="nav-link" onClick={handleLogout}>Log Out</a></li>
                    <li><a href=" " className="nav-link">{user.name}</a></li>
                    {/* <li><a className="nav-link-b" href="/search">Search</a></li><i className="material-icons left small">search</i> */}
                </ul>
            </div>
        </nav>
    </>
    :

    <>
    <nav>
            <div className="nav-wrapper">
            <a className=" left" href="/"><img src="https://fontmeme.com/permalink/200717/845966a1dcfd9aca5cafe8e5e408a676.png" height='20' alt="netflix-font" border="0"/></a>
                <ul id="nav-mobile" className="right">
                <li><a className="nav-link-a" href="/comments">Comments</a></li>
                    <li><a href="/comments"><i className="material-icons left small">note</i></a></li>
                    {/* <li><a className="nav-link-b" href="/search">Search</a></li><i className="material-icons left small">search</i> */}
                    <li><a href="/login" className="nav-link">Log In</a></li>
                    <li><a href="/signup" className="nav-link">Sign Up</a></li>
                    </ul>
            </div>
        </nav>
    </>
    return (
    <>
        {nav}
    </>
    )
}
export default NavBar;