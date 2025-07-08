import './../Styles/HerSections.css'
export default function HeroSection({imgPath}){
    return (
       <>
            <header>
            <div className="container">
                <div className="links">
                    <ul>
                        <li> <a href="#Home">Home</a></li>
                        <li><a href="#Works">Works</a></li>
                        <li><a href="#Contacts">Contacts</a></li>
                    </ul>
                </div>
            </div>
            </header>
            <div className="landing bg-light" id="Home">
                <div className="container ">
                    <div className="text mt-2 ">
                        <h1>Hi,I am Mahmoud Abd-Elhaleem,</h1>
                        <h1>Full Stack Developer</h1>
                        <div className="Resume bg-danger mt-2">
                            <a  href="">
                            Download Resume
                        </a>

                        </div>

                    </div>
                    <div className="image">
                        <img src={imgPath} alt=""/>
                    </div>

                </div>
                <a href="#Works" className="go-down">
                    <i className="fas fa-angle-double-down fa-2x"></i>
                </a>
            </div>
       </>
    )
}