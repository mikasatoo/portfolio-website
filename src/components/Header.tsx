import { slide as Menu } from 'react-burger-menu'

const Hamburger = () => {
    return (
        <div className="hamburger-menu">
            <Menu right width={ 200 } >
                <a id="about" className="page-link" href="/about">About Me</a>
                <a id="experience" className="page-link" href="/experience">Experience</a>
                <a id="projects" className="page-link" href="/projects">Projects</a>
                <a id="blog" className="page-link" href="/blog">Blog</a>
            </Menu>
        </div>
    );
}

const NavBar = () => {


    // *** make sure the hrefs direct to the relevant page
    // *** add hamburger menu functionality for when viewport is too small for the links

    return (
        <div className="navbar">
            <ul className="navbar-list">
                <li><a id="about" className="page-link" href="/about">About Me</a></li>
                <li><a id="experience" className="page-link" href="/experience">Experience</a></li>
                <li><a id="projects" className="page-link" href="/projects">Projects</a></li>
                <li><a id="blog" className="page-link" href="/blog">Blog</a></li>
            </ul>
        </div>
    );
}

export const Header = () => {


    return (
        <div className="header">
            <a className="home-link" href="/">Mika Sato 🌻</a>
            <NavBar />
            <Hamburger />
        </div>
    );
}