import React from 'react';
import banner1 from '../images/banner1.jpg';
import banner2 from '../images/banner2.jpg';
import banner3 from '../images/banner3.jpg';
import banner4 from '../images/banner4.jpg';
import {Button, Container, Nav, Navbar} from 'react-bootstrap';

const Icon = ({icon, className}) => {
  return (
    <span
      className={'fa ' + 'fa-' + icon + ' ' + className}
      aria-hidden='true'
    ></span>
  );
};

const SearchPopup = () => (
  <div id='search' className='pop-overlay'>
    <div className='popup'>
      <form action='#' method='post' className='search-box'>
        <input
          type='search'
          placeholder='Search your Keyword'
          name='search'
          required='required'
          autoFocus=''
        />
        <button type='submit' className='btn'>
          <span className='fa fa-search' aria-hidden='true'></span>
        </button>
      </form>
      <div className='browse-items'>
        <h3 className='hny-title two mt-md-5 mt-4'>Browse all:</h3>
        <ul className='search-items'>
          <li>
            <a href='genre.html'>Action</a>
          </li>
          <li>
            <a href='genre.html'>Drama</a>
          </li>
          <li>
            <a href='genre.html'>Family</a>
          </li>
          <li>
            <a href='genre.html'>Thriller</a>
          </li>
          <li>
            <a href='genre.html'>Commedy</a>
          </li>
          <li>
            <a href='genre.html'>Romantic</a>
          </li>
          <li>
            <a href='genre.html'>Tv-Series</a>
          </li>
          <li>
            <a href='genre.html'>Horror</a>
          </li>
          <li>
            <a href='genre.html'>Action</a>
          </li>
          <li>
            <a href='genre.html'>Drama</a>
          </li>
          <li>
            <a href='genre.html'>Family</a>
          </li>
          <li>
            <a href='genre.html'>Thriller</a>
          </li>
          <li>
            <a href='genre.html'>Commedy</a>
          </li>
          <li>
            <a href='genre.html'>Romantic</a>
          </li>
          <li>
            <a href='genre.html'>Tv-Series</a>
          </li>
          <li>
            <a href='genre.html'>Horror</a>
          </li>
        </ul>
      </div>
    </div>
    <a className='close' href='#close'>
      ×
    </a>
  </div>
);

const ToggleTheme = () => {
  const toggleTheme = (event) => {
    const isChecked = event.target.checked;

    document
      .getElementsByTagName('html')[0]
      .setAttribute('data-theme', isChecked ? 'dark' : 'light');
  };

  return (
    <div className='mobile-position'>
      <Nav>
        <div className='theme-switch-wrapper'>
          <label className='theme-switch' htmlFor='checkbox'>
            <input type='checkbox' id='checkbox' onChange={toggleTheme} />
            <div className='mode-container'>
              <i className='gg-sun'></i>
              <i className='gg-moon'></i>
            </div>
          </label>
        </div>
      </Nav>
    </div>
  );
};

const SearchButton = () => (
  <Button
    as={'a'}
    href={'#search'}
    className={'search-hny mr-lg-3 mt-lg-0 mt-4'}
  >
    Search <Icon icon={'search'} className={'ml-3'} />
  </Button>
);

const Navigation = () => (
  <Navbar expand='lg' className='px-lg-0 py-0 px-3'>
    <Container>
      <h1>
        <Navbar.Brand href='index.html'>
          <Icon icon={'play'} className={'icon-log'} />
          ProShowz{' '}
        </Navbar.Brand>
      </h1>
      {/*if logo is image enable this
            <a className="navbar-brand" href="#index.html">
              <img src="image-path" alt="Your logo" title="Your logo" style="height:35px;" />
            </a>*/}
      <Navbar.Toggle>
        <Icon icon={'bars'} className={'icon-expand'} />
        <Icon icon={'times'} className={'icon-close'} />
      </Navbar.Toggle>

      <Navbar.Collapse>
        <Nav className='ml-auto'>
          <Nav.Link href='index.html'>Home</Nav.Link>
          <Nav.Link href='about.html'>About</Nav.Link>
          <Nav.Link href='genre.html'>Genre</Nav.Link>
          <Nav.Link active href='contact.html'>
            Contact
          </Nav.Link>
        </Nav>

        <div className='search-right'>
          <SearchButton />
          <SearchPopup />
        </div>
      </Navbar.Collapse>

      <ToggleTheme />
    </Container>
  </Navbar>
);

const Breadcrumbs = () => (
  <div className='w3l-breadcrumbs'>
    <nav id='breadcrumbs' className='breadcrumbs'>
      <div className='container page-wrapper'>
        <a href='index.html'>Home</a> »{' '}
        <span className='breadcrumb_last' aria-current='page'>
          Contact
        </span>
      </div>
    </nav>
  </div>
);

const Contacts = () => (
  <section className='w3l-contact-1'>
    <div className='contacts-9 py-5'>
      <div className='container py-lg-4'>
        <div className='headerhny-title text-center'>
          <h4 className='sub-title text-center'>Contact us</h4>
          <h3 className='hny-title mb-0'>Leave a Message</h3>
          <p className='hny-title mb-lg-5 mb-4'>
            If you have a question regarding our services, feel free to contact
            us using the form below.
          </p>
        </div>
        <div className='contact-view mt-lg-5 mt-4'>
          <div className='conhny-form-section'>
            <form
              action='https://sendmail.w3layouts.com/submitForm'
              method='post'
              className='formhny-sec'
            >
              <div className='form-grids'>
                <div className='form-input'>
                  <input
                    type='text'
                    name='w3lName'
                    id='w3lName'
                    placeholder='Enter your name *'
                    required=''
                  />
                </div>
                <div className='form-input'>
                  <input
                    type='text'
                    name='w3lSubject'
                    id='w3lSubject'
                    placeholder='Enter subject '
                    required
                  />
                </div>
                <div className='form-input'>
                  <input
                    type='email'
                    name='w3lSender'
                    id='w3lSender'
                    placeholder='Enter your email *'
                    required
                  />
                </div>
                <div className='form-input'>
                  <input
                    type='text'
                    name='w3lPhone'
                    id='w3lPhone'
                    placeholder='Enter your Phone Number *'
                    required
                  />
                </div>
              </div>
              <div className='form-input mt-4'>
                <textarea
                  name='w3lMessage'
                  id='w3lMessage'
                  placeholder='Type your query here'
                  required=''
                ></textarea>
              </div>
              <div className='submithny text-right mt-4'>
                <button className='btn read-button'>Submit Message</button>
              </div>
            </form>
          </div>

          <div className='d-grid contact-addres-inf mt-5 pt-lg-4'>
            <div className='contact-info-left d-grid'>
              <div className='contact-info'>
                <div className='icon'>
                  <Icon icon={'location-arrow'} />
                </div>
                <div className='contact-details'>
                  <h4>Address:</h4>
                  <p>Lorem dolor sit, New York, USA</p>
                </div>
              </div>
              <div className='contact-info'>
                <div className='icon'>
                  <Icon icon={'phone'} />
                </div>
                <div className='contact-details'>
                  <h4>Phone:</h4>
                  <p>
                    <a href='tel:+598-658-456'>+598-658-346</a>
                  </p>
                  <p>
                    <a href='tel:+598-658-457'>+598-658-436</a>
                  </p>
                </div>
              </div>
              <div className='contact-info'>
                <div className='icon'>
                  <span
                    className='fa fa-envelope-open-o'
                    aria-hidden='true'
                  ></span>
                </div>
                <div className='contact-details'>
                  <h4>Mail:</h4>
                  <p>
                    <a href='mailto:mail@example.com' className='email'>
                      info@proshowz.com
                    </a>
                  </p>
                  <p>
                    <a href='mailto:mail@example.com' className='email'>
                      proshowz@support.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='contact-map'>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.305935303!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sin!4v1563262564932!5m2!1sen!2sin'
        style={{border: 0}}
        allowFullScreen
      ></iframe>
    </div>
  </section>
);

const DemoComponent = () => {
  return (
    <>
      <header id='site-header' className='w3l-header fixed-top'>
        <Navigation />
      </header>
      <Breadcrumbs />
      <Contacts />
      <footer className='w3l-footer'>
        <section className='footer-inner-main'>
          <div className='footer-hny-grids py-5'>
            <div className='container py-lg-4'>
              <div className='text-txt'>
                <div className='right-side'>
                  <div className='row footer-about'>
                    <div className='col-md-3 col-6 footer-img mb-lg-0 mb-4'>
                      <a href='articles.html'>
                        <img className='img-fluid' src={banner1} alt='' />
                      </a>
                    </div>
                    <div className='col-md-3 col-6 footer-img mb-lg-0 mb-4'>
                      <a href='articles.html'>
                        <img className='img-fluid' src={banner2} alt='' />
                      </a>
                    </div>
                    <div className='col-md-3 col-6 footer-img mb-lg-0 mb-4'>
                      <a href='articles.html'>
                        <img className='img-fluid' src={banner3} alt='' />
                      </a>
                    </div>
                    <div className='col-md-3 col-6 footer-img mb-lg-0 mb-4'>
                      <a href='articles.html'>
                        <img className='img-fluid' src={banner4} alt='' />
                      </a>
                    </div>
                  </div>
                  <div className='row footer-links'>
                    <div className='col-md-3 col-sm-6 sub-two-right mt-5'>
                      <h6>Movies</h6>
                      <ul>
                        <li>
                          <a href='#'>Movies</a>
                        </li>
                        <li>
                          <a href='#'>Videos</a>
                        </li>
                        <li>
                          <a href='#'>English Movies</a>
                        </li>
                        <li>
                          <a href='#'>Tailor</a>
                        </li>
                        <li>
                          <a href='#'>Upcoming Movies</a>
                        </li>
                        <li>
                          <a href='contact.html'>Contact Us</a>
                        </li>
                      </ul>
                    </div>
                    <div className='col-md-3 col-sm-6 sub-two-right mt-5'>
                      <h6>Information</h6>
                      <ul>
                        <li>
                          <a href='index.html'>Home</a>
                        </li>
                        <li>
                          <a href='about.html'>About</a>
                        </li>
                        <li>
                          <a href='#'>Tv Series</a>
                        </li>
                        <li>
                          <a href='#'>Blogs</a>
                        </li>
                        <li>
                          <a href='#'>Login</a>
                        </li>
                        <li>
                          <a href='contact.html'>Contact</a>
                        </li>
                      </ul>
                    </div>
                    <div className='col-md-3 col-sm-6 sub-two-right mt-5'>
                      <h6>Locations</h6>
                      <ul>
                        <li>
                          <a href='genre.html'>Asia</a>
                        </li>
                        <li>
                          <a href='genre.html'>France</a>
                        </li>
                        <li>
                          <a href='genre.html'>Taiwan</a>
                        </li>
                        <li>
                          <a href='genre.html'>United States</a>
                        </li>
                        <li>
                          <a href='genre.html'>Korea</a>
                        </li>
                        <li>
                          <a href='genre.html'>United Kingdom</a>
                        </li>
                      </ul>
                    </div>
                    <div className='col-md-3 col-sm-6 sub-two-right mt-5'>
                      <h6>Newsletter</h6>
                      <form action='#' className='subscribe mb-3' method='post'>
                        <input
                          type='email'
                          name='email'
                          placeholder='Your Email Address'
                          required=''
                        />
                        <button>
                          <span className='fa fa-envelope-o'></span>
                        </button>
                      </form>
                      <p>
                        Enter your email and receive the latest news, updates
                        and special offers from us.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='below-section'>
            <div className='container'>
              <div className='copyright-footer'>
                <div className='columns text-lg-left'>
                  <p>
                    &copy; 2020 ProShowz. All rights reserved | Designed by{' '}
                    <a href='https://w3layouts.com'>W3layouts</a>
                  </p>
                </div>

                <ul className='social text-lg-right'>
                  <li>
                    <a href='#facebook'>
                      <span
                        className='fa fa-facebook'
                        aria-hidden='true'
                      ></span>
                    </a>
                  </li>
                  <li>
                    <a href='#linkedin'>
                      <span
                        className='fa fa-linkedin'
                        aria-hidden='true'
                      ></span>
                    </a>
                  </li>
                  <li>
                    <a href='#twitter'>
                      <span className='fa fa-twitter' aria-hidden='true'></span>
                    </a>
                  </li>
                  <li>
                    <a href='#google'>
                      <span
                        className='fa fa-google-plus'
                        aria-hidden='true'
                      ></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <button onClick={() => {}} id='movetop' title='Go to top'>
            <span className='fa fa-arrow-up' aria-hidden='true'></span>
          </button>
        </section>
      </footer>
    </>
  );
};

export default DemoComponent;
