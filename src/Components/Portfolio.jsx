export default function Portfolio({img3Path,img2Path,img1Path}){
    return(
        <div className="Works mt-5 bg-light container" id="Works">
            <div className="container">
                <div className="Portfolio">
                    <h1 className="main-title text-center">Portfolio</h1>
                </div>
                <div className="work-content">
                    <div className="image">
                        <img src={img3Path} alt=""/>
                    </div>
                    <div className="content">
                        <h1>Front-End Development</h1>
                        <div className="type">
                            <span className="date">2025</span> Templete
                            <a className="git" href="https://github.com/muhmouddd21/HTML_AND_CSS_Templete_1" target="_blank">
                                <i className="fa-brands fa-github"></i>
                            </a>
                        </div>

                        <p>
                            Designed and developed a responsive website based on the Leon Agency Template, utilizing HTML, CSS to create a modern and visually appealing layout optimized for agencies and portfolio showcases
                        </p>
                    </div>
                </div>

                <div className="work-content">
                    <div className="image">
                        <img src={img2Path} alt=""/>
                    </div>
                    <div className="content">
                        <h1>Front-End Development</h1>
                        <div claclassNamess="type">
                            <span className="date">2025</span>
                            Twitter_Clone
                            <a className="git" href="https://github.com/muhmouddd21/Twitter_Clone" target="_blank" >
                                <i className="fa-brands fa-github"></i>
                            </a>
                        </div>

                        <p>
                            Developing a Twitter clone using HTML and CSS to recreate the platform's user interface
                        </p>
                    </div>
                </div>
                <div className="work-content">
                    <div className="image">
                        <img src={img1Path} alt=""/>
                    </div>
                    <div className="content">
                        <h1>Front-End Development</h1>
                        <div className="type">
                            <span className="date">2025</span>
                            Youtube_Clone
                            <a className="git" href="https://github.com/muhmouddd21/Youtube_clone_html_css" target="_blank">
                                <i className="fa-brands fa-github"></i>
                            </a>
                        </div>

                        <p>
                            Designing a YouTube clone using HTML and CSS to replicate the platform's layout and user interface
                        </p>
                    </div>
                </div>
                <a href="#Contacts" className="go-down">
                    <i className="fas fa-angle-double-down fa-2x"></i>
                </a>

            </div>
        </div>
    )
}