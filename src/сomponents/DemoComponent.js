import React, {useEffect, useState} from 'react';
import banner1 from '../images/banner1.jpg';
import banner2 from '../images/banner2.jpg';
import banner3 from '../images/banner3.jpg';
import banner4 from '../images/banner4.jpg';
import {Button, Col, Form, Nav, Navbar, Row, Container} from 'react-bootstrap';

const Breadcrumbs = () => (
  <div className='w3l-breadcrumbs'>
    <Nav id='breadcrumbs' className='breadcrumbs'>
      <Container className='page-wrapper'>
        <a href='index.html'> Home </a>{' '}
        <span className='breadcrumb_last' aria-current='page'>
          Contact
        </span>
      </Container>
    </Nav>
  </div>
);

const Contacts = () => (
  <section className='w3l-contact-1'>
    <div className='contacts-9 py-5'>
      <Container className='py-lg-4'>
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
            <Form
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
                />
              </div>
              <div className='submithny text-right mt-4'>
                <Button className='read-button'>Submit Message</Button>
              </div>
            </Form>
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
                  <Icon icon={'envelope-open-o'} />
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
      </Container>
    </div>
    <div className='contact-map'>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.305935303!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sin!4v1563262564932!5m2!1sen!2sin'
        style={{border: 0}}
        allowfullscreen=''
      />
    </div>
  </section>
);

const SearchPopup = () => (
  <div id='search' className='pop-overlay'>
    <div className='popup'>
      <form action='#' method='post' className='search-box'>
        <input
          type='search'
          placeholder='Search your Keyword'
          name='search'
          required='required'
          autofocus=''
        />
        <Button type='submit'>
          <Icon icon={'search'} />
        </Button>
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

const Icon = ({icon, className}) => {
  return (
    <span
      className={'fa fa-' + icon + ' ' + className}
      aria-hidden='true'
    ></span>
  );
};

const SearchButton = () => {
  return (
    <Button
      variant='danger'
      href='#search'
      className='search-hny mr-lg-3 mt-lg-0 mt-4'
    >
      Search
      <Icon icon={'search'} className={'ml-3'} />
    </Button>
  );
};

const ToggleTheme = () => {
  const toggleTheme = (event) => {
    const isChecked = event.target.checked;

    document
      .getElementsByTagName('html')[0]
      .setAttribute('data-theme', isChecked ? 'dark' : 'light');
    console.info(isChecked);
  };

  return (
    <div className='mobile-position'>
      <Nav>
        <div className='theme-switch-wrapper'>
          <label className='theme-switch' for='checkbox'>
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

const Navigation = () => (
  <Navbar expand='lg' className='px-lg-0 py-0 px-3'>
    <Container>
      <h1>
        <Navbar.Brand href='index.html'>
          <Icon icon={'play'} className={'icon-log'} /> ProShowz
        </Navbar.Brand>
      </h1>
      {/* if logo is image enable this
             <a className="navbar-brand" href="#index.html">
             <img src="image-path" alt="Your logo" title="Your logo" style="height:35px;" />
             </a> */}
      <Navbar.Toggle>
        <Icon icon={'bars'} className={'icon-expand'} />
        <Icon icon={'times'} className={'icon-close'} />
      </Navbar.Toggle>

      <Navbar.Collapse>
        <Nav className='ml-auto'>
          <Nav.Link href='index.html'> Home </Nav.Link>
          <Nav.Link href='about.html'>About</Nav.Link>
          <Nav.Link href='genre.html'>Genre</Nav.Link>
          <Nav.Link href='contact.html'>Contact</Nav.Link>
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

const makeApiLink = (command, lang = 'uk') => {
  const host = 'https://api.themoviedb.org/3';
  return `${host}${command}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=${lang}`;
};

const FilmsList = ({onClick, count, count2}) => {
  const [posterPrefix, setPosterPrefix] = useState('');
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const url = makeApiLink('/trending/movie/day');
    fetch(url)
      .then((response) => response.json())
      .then((data) => setFilms(data.results));
  }, []);

  useEffect(() => {
    const url = makeApiLink('/configuration');
    fetch(url)
      .then((response) => response.json())
      .then((data) =>
        setPosterPrefix(data.images.base_url + data.images.poster_sizes[1])
      );
  });

  console.log('!!!!КОМПОНЕТ ОБНОВЛЕН');

  return (
    <Container>
      <Row className={'my-4'}>
        <Col>
          <h2> Trending Films </h2>
          {films.length === 0 ? (
            <p> Loading...</p>
          ) : (
            <>
              {films.map((film) => (
                <Row className={'mb-4'}>
                  <Col ms={6} md={2}>
                    {posterPrefix ? (
                      <img src={posterPrefix + film.poster_path} />
                    ) : null}
                  </Col>
                  <Col>{film.title}</Col>
                </Row>
              ))}
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
};

const DemoComponent = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <>
      <header id='site-header' className='w3l-header fixed-top'>
        <Navigation />
      </header>

      <Breadcrumbs />
      {/*<Contacts />*/}
      <Button onClick={() => setCount((i) => i + 1)}> ADD to 1({count})</Button>
      <Button onClick={() => setCount2((i) => i + 1)}>
        {' '}
        ADD to 2({count2})
      </Button>
      <FilmsList
        onClick={() => console.log('hello')}
        count1={count}
        count2={count2}
      />

      <footer className='w3l-footer'>
        <section className='footer-inner-main'>
          <Container className='footer-hny-grids py-5'>
            <Container className='container py-lg-4'>
              <div className='text-txt'>
                <div className='right-side'>
                  <Row className='footer-about'>
                    <Col md={3} xs={6} className='footer-img mb-lg-0 mb-4'>
                      <a href='articles.html'>
                        <img className='img-fluid' src={banner1} alt='' />
                      </a>
                    </Col>
                    <Col md={3} xs={6} className='footer-img mb-lg-0 mb-4'>
                      <a href='articles.html'>
                        <img className='img-fluid' src={banner2} alt='' />
                      </a>
                    </Col>
                    <Col md={3} xs={6} className='footer-img mb-lg-0 mb-4'>
                      <a href='articles.html'>
                        <img className='img-fluid' src={banner3} alt='' />
                      </a>
                    </Col>
                    <Col md={3} xs={6} className='footer-img mb-lg-0 mb-4'>
                      <a href='articles.html'>
                        <img className='img-fluid' src={banner4} alt='' />
                      </a>
                    </Col>
                  </Row>
                  <Row className='footer-links'>
                    <Col md={3} xs={6} className='sub-two-right mt-5'>
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
                    </Col>
                    <Col md={3} xs={6} className='sub-two-right mt-5'>
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
                    </Col>
                    <Col md={3} sm={6} className='sub-two-right mt-5'>
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
                    </Col>
                    <Col md={3} sm={6} className='sub-two-right mt-5'>
                      <h6>Newsletter</h6>
                      <Form action='#' className='subscribe mb-3' method='post'>
                        <input
                          type='email'
                          name='email'
                          placeholder='Your Email Address'
                          required=''
                        />
                        <Button>
                          <Icon icon={'envelope-o'} />
                        </Button>
                      </Form>
                      <p>
                        Enter your email and receive the latest news, updates
                        and special offers from us.
                      </p>
                    </Col>
                  </Row>
                </div>
              </div>
            </Container>
          </Container>

          <div className='below-section'>
            <Container>
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
                      <Icon icon={'facebook'} />
                    </a>
                  </li>
                  <li>
                    <a href='#linkedin'>
                      <Icon icon={'linkedin'} />
                    </a>
                  </li>
                  <li>
                    <a href='#twitter'>
                      <Icon icon={'twitter'} />
                    </a>
                  </li>
                  <li>
                    <a href='#google'>
                      <Icon icon={'google-plus'} />
                    </a>
                  </li>
                </ul>
              </div>
            </Container>
          </div>
          {/* copyright */}
          {/* move top */}
          <Button onClick={() => {}} id='movetop' title='Go to top'>
            <Icon icon={'arrow-up'} />
          </Button>
          {/* /move top */}
        </section>
      </footer>
    </>
  );
};

export default DemoComponent;
