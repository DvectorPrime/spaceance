import background from "../assets/heading background.svg"
import brandLogo from "../assets/brand-logo.svg"
import searchIcon from "../assets/search-icon.svg"
import remoteWorker from "../assets/remote-worker-img.svg"
import "./heading.css"

import NavLink from "../minor components/Navlink"

function Heading() {
    const navLinks = [
        {
            name: "Home",
            link: "/home"
        },
        {
            name: "Find Work",
            link: "/findwork"
        },
        {
            name: "Find Freelancers",
            link: "/findfreelancers"
        },
        {
            name: "Log in",
            link: "/login"
        },
        {
            name: "Sign up",
            link: "/signup"
        },        
    ]
    
    const navLinksElements = navLinks.map( ({name, link}, index) => <NavLink name={name} link={"#"} active={index === 0} /> )

    return (
        <div className="heading-component">
            <img src={background} alt="" className="heading-background"/>
            <div className="nav-bar-container">
                <img src={brandLogo} alt="Space Lance" />
                <div className="nav-bar">
                    <ul className="nav-links">
                        {navLinksElements}
                    </ul>
                    <button className="post-a-project-cta">Post a project</button>
                </div>
            </div>
                <section className="home-section">
                    <div>
                        <h2>Are you looking for Freelancers?</h2>
                        <p>Hire Great Freelancers, Fast. Spacelance helps you hire elite freelancers at a moment's notice</p>
                        <button className="hire-a-freelancer-button">Hire a freelancer</button>
                        <div className="search-container">
                            <input type="text" className="job-serch" placeholder="search freelance work"/>
                            <button className="search-bar-container"><img src={searchIcon} alt="search for jobs" /></button>
                        </div>
                    </div>
                    <aside>
                        <img src={remoteWorker} alt="" />
                    </aside>
                </section>
        </div>
    )
}

export default Heading