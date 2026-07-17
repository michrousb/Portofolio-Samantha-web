import "./footer.css"

function Footer() {
    return (
        <footer id="contact" className="footer">
            <div className="footer-text">
                <p>Get In Touch</p>
            </div>
            <div className="socialIcons">
                <a href="mailto:samantha.michelle2007@gmail.com"><i className="fa-solid fa-envelope" aria-hidden="true"></i></a>
                <a href="https://www.instagram.com/samantha.michlle/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram" aria-hidden="true"></i></a>
                <a href="https://www.linkedin.com/in/samantha-michelle-sujatmoko-silaban" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin" aria-hidden="true"></i></a>
            </div>

        </footer>
    );
}

export default Footer;
