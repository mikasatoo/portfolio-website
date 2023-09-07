

export const Header = () => {


    const NavBar = () => {


        // *** add href to list items below to direct to relevant page
        // *** add hamburger menu functionality for when viewport is too small for the links
        
        return (
            <div className="navbar">
                <ul className="navbar-list">
                    <li><a className="page-link">About Me</a></li>
                    <li><a className="page-link">Experience</a></li>
                    <li><a className="page-link">Projects</a></li>
                    <li><a className="page-link">Blog</a></li>
                </ul>
            </div>
        )
    }

    return (
        <div className="header">
            <a className="home-link" href="/">Mika Sato 🌻</a>
            <NavBar />
        </div>
    )
}