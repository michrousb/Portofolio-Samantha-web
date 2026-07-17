import "./AboutPage.css";

function AboutPage() {
    const tools = ["Wireshark", "Nmap", "Figma", "Linux"];
    return (
        <section className="about-section page-container">
            <div className="about-content">
                <div className="about-image">
                    <img src="/images/aboutphoto.jpg"/>
                </div>
                <div className="about-text">
                    <h1>Get to Know <span className="highlight-text">Me.</span></h1>
                    <p> Hi! I'm Samantha Michelle, an Informatics Engineering student at
                        Bandung Institute of Technology, class of 2025. </p>
                   <p> I am interested in computer science and currently exploring robotics and cybersecurity</p>
                </div>    
            </div>
            <div className = "skills-content">
                    <h1><span className="highlight-text">Tech</span>Skills.</h1>
                    <div className="tools-container">
                        {tools.map((tool)=>(
                            <span className="tool-item" key={tool}>
                                {tool}
                            </span>
                        ))}
                    </div>
            </div>

            
        </section>
    );
}

export default AboutPage;