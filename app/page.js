import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
  <>
   <header>
      <nav>
        <div className="left">Nikhil's Portfolio</div>
        <div className="right">
          <ul>
            <li><a href="#Home">Home</a></li>
            <li><a href="#About">About</a></li>
            <li><a href="#Services">Services</a></li>
            <li><a href="#project">Projects</a></li>
            <li><a href="#Contact">Contact</a></li>
          </ul>
        </div>
      </nav>
    </header>

    <main>
      <section className="firstsection">
        <div className="leftsection">
          <div>Hi,My name is <span className="name-color"> Nikhil </span></div>
          <div>I am a Passionate</div>
          <span id="element"></span>
          <div className="buttons">
            <button className="btn">Download Resume</button>
            <button className="btn">Visit Github</button>
          </div>
        </div>
        <div className="rightsection">
          <img
            src="images/Programmer-Engineering-Development-Illustration-on-transparent-background-PNG.png"
            alt=""
          />
        </div>
      </section>
      <hr />
      <section className="secondsection">
        <span className="text-gray">What I have learn so far</span>
        <h1>Skills</h1>
        <div className="horizontal-line">
          <div className="vertical-line">
            <img src="images/html.png" className="image-top" />
            <div className="vertical-line-title">HTML</div>
            <div className="vertical-line-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              repellat obcaecati animi consequatur. Labore repellat deserunt.
            </div>
          </div>
          <div className="vertical-line">
            <img src="images/css.png" className="image-top" />
            <div className="vertical-line-title">CSS</div>
            <div className="vertical-line-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              repellat obcaecati animi consequatur. Labore repellat deserunt.
            </div>
          </div>
          <div className="vertical-line">
            <img src="images/js.png" className="image-top" />
            <div className="vertical-line-title">JS</div>
            <div className="vertical-line-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              repellat obcaecati animi consequatur. Labore repellat deserunt.
            </div>
          </div>
          <div className="vertical-line">
            <img src="images/react.png" className="image-top" />
            <div className="vertical-line-title">React</div>
            <div className="vertical-line-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              repellat obcaecati animi consequatur. Labore repellat deserunt.
            </div>
          </div>
          <div className="vertical-line">
            <img src="images/php.png" className="image-top" />
            <div className="vertical-line-title">PHP</div>
            <div className="vertical-line-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              repellat obcaecati animi consequatur. Labore repellat deserunt.
            </div>
          </div>
          <div className="vertical-line">
            <img src="images/mysql.png" className="image-top" />
            <div className="vertical-line-title">MYSQL</div>
            <div className="vertical-line-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              repellat obcaecati animi consequatur. Labore repellat deserunt.
            </div>
          </div>
          <div className="vertical-line">
            <img src="images/python.png" className="image-top" />
            <div className="vertical-line-title">Python</div>
            <div className="vertical-line-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              repellat obcaecati animi consequatur. Labore repellat deserunt.
            </div>
          </div>
        </div>
      </section>
    </main>
    <footer>
      <div className="footer">
        <div className="footer-first">
          <h3>Nikhil's Portfolio</h3>
        </div>
        <div className="first">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="second">
          <ul>
            <li>Projects</li>
            <li>Work Experience</li>
            <li>Skills</li>
            <li>Achievements</li>
          </ul>
        </div>

        <div className="fourth">
          <ul>
            <li>Linkedin</li>
            <li>GitHub</li>
            <li>Instagram</li>
            <li>Gmail</li>
          </ul>
        </div>
      </div>
      <div className="disclamer">
        Copyright &#169; www.NikhilPortfolio.com | All rights reserved
      </div>
    </footer>
  </>
    
  );
}
