import "./about.css"
import youngLady from "../assets/young_lady.svg"

function About(){
    return(
        <section className="about-section">
            <aside>
                <img src={youngLady} alt="" />
                <div className="no-of-freelancers">
                    <p><span>500+ </span>freelancers</p>
                </div>
                <div className="no-of-freelance-jobs">
                    <p><span>300+ </span>freelance work Posted</p>
                </div>
            </aside>
            <article>
                <h3>Find The Best <span>Freelancers</span> Here </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut erat bibendum ornare urna, cursus eget convallis. Feugiat imperdiet posuere justo, ultrices interdum
                sed orci nunc, mattis. Ipsum viverra viverra neque adipiscing arcu, quam dictum. Dui mi viverra dui, sit accumsan, tincidunt massa. Dui cras magnis.</p>
            </article>
        </section>
    )
}

export default About