import background from "../assets/heading background.svg"
import brandLogo from "../assets/brand-logo.svg"
import searchIcon from "../assets/search-icon.svg"
import remoteWorker from "../assets/remote-worker-img.svg"
import lock from "../assets/lock.png"
import file from "../assets/file.png"
import save from "../assets/save.png"
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
        <section className="heading-component">
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
                <div className="home-section">
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
                </div>
                <div className="action-container">
                    <div className="action"> 
                        <div className="action-item">
                            <div><img src={lock} alt=""/></div>
                            <h3>Create Account</h3>
                            <p>First you have to create a account here</p>
                        </div>
                        <div className="action-item">
                            <div><img src={file} alt=""/></div>
                            <h3>Search work</h3>
                            <p>Search the best freelance work here</p>
                        </div>
                        <div className="action-item">
                            <div><img src={save} alt=""/></div>
                            <h3>Save and apply</h3>
                            <p>Apply or save and start your work</p>
                        </div>
                    </div>
                </div>
        </section>
    )
}

export default Heading