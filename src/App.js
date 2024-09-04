import './App.css';
import logo from './images/logo.svg';
import footerLogo from './images/footer-logo.svg'
import imgOne from './images/illustration-1.svg'
import imgTwo from './images/illustration-2.svg';
import arrow from './images/icon-arrow.svg';
import quotes from './images/icon-quotes.svg';
import kyle from './images/avatar-testimonial.jpg';
import phone from './images/icon-phone.svg';
import email from './images/icon-email.svg';
import facebook from './images/icon-facebook.svg';
import twitter from './images/icon-twitter.svg';
import instagram from './images/icon-instagram.svg';

function App() {
  return (
    <>
    <header>
      <img src={logo} alt="" />
      <div className='header-links'>
        <p className='features'>Features</p>
        <p className='team'>Team</p>
        <p className='signIn'>Sign In</p>
      </div>
    </header>

    <div className='section1'>
      <img src={imgOne} alt="" />
      <div className='section1-content'>
        <h1>All your files in one secure location, accessible anywhere.</h1>
        <p>Fylo stores your most important files in one secure location. 
          Access them wherever you need, share and collaborate with friends, 
          family, and co-workers.</p>
        <div className='email-container'>
          <input type="email" placeholder='Enter your email...' required/>
          <button>Get Started</button>
        </div>

      </div>

    </div>

    <div className='productive'>
      <div className='section2'>
      <img className='productive-img' src={imgTwo} alt="" />
      <h2>Stay productive, wherever you are</h2>
      <p>Never let location be an issue when accessing your 
         files. Fylo has you covered for all of your file storage needs.</p>
      <p>Securely share files and folders with friends, family and 
        colleagues for live collaboration. No email attachments required!</p>
      <div className='fylo-works'>
        <p>See how Fylo works</p>
        <img src={arrow} alt="" />
      </div>
    </div>

    <div className='section3'>
      <img className='quotes' src={quotes} alt="" />
      <p>Fylo has improved our team productivity by an order of magnitude.
         Since making the switch our team has become a well-oiled 
         collaboration machine.</p>
      <div className='kyle'>
        <img className='avatar' src={kyle} alt="" />
        <div className='kyleInfo'>
          <h4>Kyle Burton</h4>
          <p>Founder & CEO, Huddle</p>
        </div>
      </div>
    </div>
    </div>

    <div className='section4'>
      <div className='section4A'>
        <h2>Get early access today</h2>
        <p>It only takes a minute to sign up and our free starter tier 
          is extremely generous. If you have any questions, our support 
          team would be happy to help you.</p>
      </div>
      <div className='section4B'>
        <input type="email" placeholder='email@example.com' required/>
        <button>Get Started For Free</button>
      </div>
    </div>

    <div className='footer'>
      <div className='footer1'>
        <img src={footerLogo} alt="" />
        <div className='phone'>
          <img src={phone} alt="" />
          <p>Phone: +1-543-123-4567</p>
        </div>
        <div className='email'>
          <img src={email} alt="" />
          <p>example@fylo.com</p>
        </div>
      </div>

      <ul className='links'>
        <div className='footer2'  >
          <li>About Us</li>
          <li>Jobs</li>
          <li>Press</li>
          <li>Blog</li>
          <br />
        </div>
        <div className='footer3'>
          <li>Contact Us</li>
          <li>Terms</li>
          <li>Privacy</li>
        </div>
      </ul>
      <div className='socials'>
        <div className="socials-border">
          <img className='facebook' src={facebook} alt="" />
        </div>
        <div className="socials-border">
          <img className='twitter' src={twitter} alt="" />
        </div>
        <div className="socials-border">
          <img className='insta' src={instagram} alt="" />
        </div>
      </div>

    </div>

    </>
  );
}

export default App;
