// import logo from './logo.svg';
import "./App.css";
import Header from "./components/Header";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div>
      <Navigation />
      <Header />
      <div className="container">
        {/* <!-- Start: Desc --> */}
        <div className="row me-row content-ct">
          <h2 className="row-title">Why This Event Is Super Cool?</h2>
          <div className="col-md-4 feature">
            <span className="ti-ticket"></span>
            <h3>Buy Early Bird Tickets</h3>
            <p>
              Super cool discounts if you purchase early bird tickets now.
              Limited tickets available with some awesome perks and goodies!
            </p>
          </div>
          <div className="col-md-4 feature">
            <span className="ti-microphone"></span>
            <h3>Expert Speakers</h3>
            <p>
              Best in className expert speakers who have extensive knowledge of
              the topic. All speakers are curated by the panel of experts.
            </p>
          </div>
          <div className="col-md-4 feature">
            <span className="ti-world"></span>
            <h3>People around the globe!</h3>
            <p>
              Meet the people attending this event around the globe. This will
              be the best opportunity to meet and greet people from your
              industry.
            </p>
          </div>
        </div>
        {/* <!-- End: Desc --> */}

        {/* <!-- Start: Speakers --> */}
        <div className="row me-row content-ct speaker" id="speakers">
          <h2 className="row-title">Meet the Speakers</h2>
          <div className="col-md-4 col-sm-6 feature">
            <img src="img/speaker-1.png" className="speaker-img" />
            <h3>Simon Collins</h3>
            <p>
              Simon is designer and partner at Fictivekin and has worked in a
              variety of situations for bands, record labels, governments, polar
              explorers, and most other things...
            </p>
            <ul className="speaker-social">
              <li>
                <a href="#">
                  <span className="ti-facebook"></span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="ti-twitter-alt"></span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="ti-linkedin"></span>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4 col-sm-6 feature">
            <img src="img/speaker-2.png" className="speaker-img" />
            <h3>Stephanie Troeth</h3>
            <p>
              Stephie is a user experience researcher and designer. In over 15
              years of working on the web, she has worn many hats, including a
              product lead for a tech startup in publishing...
            </p>
            <ul className="speaker-social">
              <li>
                <a href="#">
                  <span className="ti-facebook"></span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="ti-twitter-alt"></span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="ti-linkedin"></span>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4 col-sm-6 feature">
            <img src="img/speaker-3.png" className="speaker-img" />
            <h3>Harry Roberts</h3>
            <p>
              Harry is a freelance designer, developer, writer, speaker and
              front-end architect from the UK, previously working as Senior UI
              Developer for Sky. He Tweets at...
            </p>
            <ul className="speaker-social">
              <li>
                <a href="#">
                  <span className="ti-facebook"></span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="ti-twitter-alt"></span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="ti-linkedin"></span>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4 col-sm-6 feature">
            <img src="img/speaker-4.png" className="speaker-img" />
            <h3>Geri Coady</h3>
            <p>
              Harry is a freelance designer, developer, writer, speaker and
              front-end architect from the UK, previously working as Senior UI
              Developer for Sky. He Tweets at...
            </p>
            <ul className="speaker-social">
              <li>
                <a href="#">
                  <span className="ti-facebook"></span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="ti-twitter-alt"></span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="ti-linkedin"></span>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4 col-sm-6 feature">
            <img src="img/speaker-5.png" className="speaker-img" />
            <h3>Andy Budd</h3>
            <p>
              Harry is a freelance designer, developer, writer, speaker and
              front-end architect from the UK, previously working as Senior UI
              Developer for Sky. He Tweets at...
            </p>
            <ul className="speaker-social">
              <li>
                <a href="#">
                  <span className="ti-facebook"></span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="ti-twitter-alt"></span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="ti-linkedin"></span>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4 col-sm-6 feature">
            <img src="img/speaker-6.png" className="speaker-img" />
            <h3>Christian Lauke</h3>
            <p>
              Harry is a freelance designer, developer, writer, speaker and
              front-end architect from the UK, previously working as Senior UI
              Developer for Sky. He Tweets at...
            </p>
            <ul className="speaker-social">
              <li>
                <a href="#">
                  <span className="ti-facebook"></span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="ti-twitter-alt"></span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="ti-linkedin"></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* <!-- End: Speakers --> */}
      </div>

      {/* <!-- Start: Tickets --> */}
      <div className="container-fluid tickets" id="tickets">
        <div className="row me-row content-ct">
          <h2 className="row-title">Buy Tickets</h2>
          <div className="col-md-4 col-sm-6 col-md-offset-2">
            <h3>Early Bird Ticket</h3>
            <p className="price">$399</p>
            <p>All days entry pass for all the events.</p>
            <a href="#" className="btn btn-lg btn-red">
              Buy <small>(6 remaining)</small>
            </a>
          </div>
          <div className="col-md-4 col-sm-6">
            <h3>Workshop Pass</h3>
            <p className="price">$199</p>
            <p>Entry pass for each workshop</p>
            <a href="#" className="btn btn-lg btn-red">
              Buy <small>(42 remaining)</small>
            </a>
          </div>
        </div>
      </div>
      {/* <!-- End: Tickets --> */}

      {/* <!-- Start: Schedule --> */}
      <div className="container">
        <div className="row me-row schedule" id="schedule">
          <h2 className="row-title content-ct">Event Schedule</h2>
          <div className="col-md-12">
            {/* <!-- Nav tabs --> */}
            <ul className="nav nav-tabs" role="tablist">
              <li role="presentation" className="active">
                <a
                  href="#day-1"
                  aria-controls="home"
                  role="tab"
                  data-toggle="tab"
                >
                  Day 01{" "}
                  <small className="hidden-xs">
                    (20<sup>th</sup>, October)
                  </small>
                </a>
              </li>
              <li role="presentation">
                <a
                  href="#day-2"
                  aria-controls="profile"
                  role="tab"
                  data-toggle="tab"
                >
                  Day 02{" "}
                  <small className="hidden-xs">
                    (21<sup>st</sup>, October)
                  </small>
                </a>
              </li>
              <li role="presentation">
                <a
                  href="#day-3"
                  aria-controls="messages"
                  role="tab"
                  data-toggle="tab"
                >
                  Day 03{" "}
                  <small className="hidden-xs">
                    (22<sup>nd</sup>, October)
                  </small>
                </a>
              </li>
            </ul>

            {/* <!-- Tab panes --> */}
            <div className="tab-content">
              <div
                role="tabpanel"
                className="tab-pane fade in active"
                id="day-1"
              >
                <div className="row">
                  <div className="col-md-6">
                    <div className="media">
                      <div className="media-left">
                        <a href="#">
                          <img
                            className="media-object"
                            src="img/speaker-1.png"
                            alt="..."
                          />
                        </a>
                      </div>
                      <div className="media-body">
                        <h4 className="media-heading">10am to 10:30am</h4>
                        <h5>THE DESIGNER’S GUIDE TO BEING ESSENTIAL</h5>
                        <p>
                          Simon is designer and partner at Fictivekin and has
                          worked in a variety of situations for bands, record
                          labels, governments, polar explorers, and most other
                          things.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="media">
                      <div className="media-left">
                        <a href="#">
                          <img
                            className="media-object"
                            src="img/speaker-2.png"
                            alt="..."
                          />
                        </a>
                      </div>
                      <div className="media-body">
                        <h4 className="media-heading">10:45am to 11:30am</h4>
                        <h5>MODULAR DESIGN AT WORK</h5>
                        <p>
                          Simon is designer and partner at Fictivekin and has
                          worked in a variety of situations for bands, record
                          labels, governments, polar explorers, and most other
                          things.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="media">
                      <div className="media-left">
                        <a href="#">
                          <img
                            className="media-object"
                            src="img/speaker-3.png"
                            alt="..."
                          />
                        </a>
                      </div>
                      <div className="media-body">
                        <h4 className="media-heading">12:00pm to 01:30pm</h4>
                        <h5>AN INTRODUCTION TO TOUCH AND POINTER EVENTS</h5>
                        <p>
                          Simon is designer and partner at Fictivekin and has
                          worked in a variety of situations for bands, record
                          labels, governments, polar explorers, and most other
                          things.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="media">
                      <div className="media-left">
                        <a href="#">
                          <img
                            className="media-object"
                            src="img/speaker-4.png"
                            alt="..."
                          />
                        </a>
                      </div>
                      <div className="media-body">
                        <h4 className="media-heading">02:00pm to 03.30pm</h4>
                        <h5>WEB FONTS PERFORMANCE</h5>
                        <p>
                          Simon is designer and partner at Fictivekin and has
                          worked in a variety of situations for bands, record
                          labels, governments, polar explorers, and most other
                          things.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div role="tabpanel" className="tab-pane fade" id="day-2">
                <div className="row">
                  <div className="col-md-6">
                    <div className="media">
                      <div className="media-left">
                        <a href="#">
                          <img
                            className="media-object"
                            src="img/speaker-4.png"
                            alt="..."
                          />
                        </a>
                      </div>
                      <div className="media-body">
                        <h4 className="media-heading">10am to 10:30am</h4>
                        <h5>MAKING DOG FOOD PART OF A BALANCED DIET</h5>
                        <p>
                          Simon is designer and partner at Fictivekin and has
                          worked in a variety of situations for bands, record
                          labels, governments, polar explorers, and most other
                          things.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="media">
                      <div className="media-left">
                        <a href="#">
                          <img
                            className="media-object"
                            src="img/speaker-3.png"
                            alt="..."
                          />
                        </a>
                      </div>
                      <div className="media-body">
                        <h4 className="media-heading">10:45am to 11:30am</h4>
                        <h5>HANDS-ON WEB AUDIO</h5>
                        <p>
                          Simon is designer and partner at Fictivekin and has
                          worked in a variety of situations for bands, record
                          labels, governments, polar explorers, and most other
                          things.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="media">
                      <div className="media-left">
                        <a href="#">
                          <img
                            className="media-object"
                            src="img/speaker-2.png"
                            alt="..."
                          />
                        </a>
                      </div>
                      <div className="media-body">
                        <h4 className="media-heading">12:00pm to 01:30pm</h4>
                        <h5>
                          CONVERSION RATE OPTIMIZATION TECHNIQUES IN ECOMMERCE
                        </h5>
                        <p>
                          Simon is designer and partner at Fictivekin and has
                          worked in a variety of situations for bands, record
                          labels, governments, polar explorers, and most other
                          things.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="media">
                      <div className="media-left">
                        <a href="#">
                          <img
                            className="media-object"
                            src="img/speaker-1.png"
                            alt="..."
                          />
                        </a>
                      </div>
                      <div className="media-body">
                        <h4 className="media-heading">02:00pm to 03.30pm</h4>
                        <h5>PAPER PROTOTYPING APPLICATIONS</h5>
                        <p>
                          Simon is designer and partner at Fictivekin and has
                          worked in a variety of situations for bands, record
                          labels, governments, polar explorers, and most other
                          things.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div role="tabpanel" className="tab-pane fade" id="day-3">
                <div className="row">
                  <div className="col-md-6">
                    <div className="media">
                      <div className="media-left">
                        <a href="#">
                          <img
                            className="media-object"
                            src="img/speaker-6.png"
                            alt="..."
                          />
                        </a>
                      </div>
                      <div className="media-body">
                        <h4 className="media-heading">10am to 10:30am</h4>
                        <h5>THE DESIGNER’S GUIDE TO BEING ESSENTIAL</h5>
                        <p>
                          Simon is designer and partner at Fictivekin and has
                          worked in a variety of situations for bands, record
                          labels, governments, polar explorers, and most other
                          things.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="media">
                      <div className="media-left">
                        <a href="#">
                          <img
                            className="media-object"
                            src="img/speaker-5.png"
                            alt="..."
                          />
                        </a>
                      </div>
                      <div className="media-body">
                        <h4 className="media-heading">10:45am to 11:30am</h4>
                        <h5>THE DESIGNER’S GUIDE TO BEING ESSENTIAL</h5>
                        <p>
                          Simon is designer and partner at Fictivekin and has
                          worked in a variety of situations for bands, record
                          labels, governments, polar explorers, and most other
                          things.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="media">
                      <div className="media-left">
                        <a href="#">
                          <img
                            className="media-object"
                            src="img/speaker-3.png"
                            alt="..."
                          />
                        </a>
                      </div>
                      <div className="media-body">
                        <h4 className="media-heading">12:00pm to 01:30pm</h4>
                        <h5>THE DESIGNER’S GUIDE TO BEING ESSENTIAL</h5>
                        <p>
                          Simon is designer and partner at Fictivekin and has
                          worked in a variety of situations for bands, record
                          labels, governments, polar explorers, and most other
                          things.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="media">
                      <div className="media-left">
                        <a href="#">
                          <img
                            className="media-object"
                            src="img/speaker-4.png"
                            alt="..."
                          />
                        </a>
                      </div>
                      <div className="media-body">
                        <h4 className="media-heading">02:00pm to 03.30pm</h4>
                        <h5>THE DESIGNER’S GUIDE TO BEING ESSENTIAL</h5>
                        <p>
                          Simon is designer and partner at Fictivekin and has
                          worked in a variety of situations for bands, record
                          labels, governments, polar explorers, and most other
                          things.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End: Schedule --> */}

      {/* <!-- Start: Footer --> */}
      <div className="container-fluid footer">
        <div className="row contact">
          <div className="col-md-6 contact-form">
            <h3 className="content-ct">
              <span className="ti-email"></span> Contact Form
            </h3>
            <form
              className="form-horizontal"
              data-toggle="validator"
              role="form"
            >
              <div className="form-group">
                <label htmlFor="name" className="col-sm-3 control-label">
                  Name<sup>*</sup>
                </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="John Doe"
                    required
                  />
                  <div className="help-block with-errors pull-right"></div>
                  <span
                    className="form-control-feedback"
                    aria-hidden="true"
                  ></span>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="email" className="col-sm-3 control-label">
                  Email<sup>*</sup>
                </label>
                <div className="col-sm-9">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="you@youremail.com"
                    required
                  />
                  <div className="help-block with-errors pull-right"></div>
                  <span
                    className="form-control-feedback"
                    aria-hidden="true"
                  ></span>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message" className="col-sm-3 control-label">
                  Your Message<sup>*</sup>
                </label>
                <div className="col-sm-9">
                  <textarea
                    id="message"
                    className="form-control"
                    rows="3"
                    required
                  ></textarea>
                  <div className="help-block with-errors pull-right"></div>
                  <span
                    className="form-control-feedback"
                    aria-hidden="true"
                  ></span>
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-offset-3 col-sm-9">
                  <button
                    type="submit"
                    id="submit"
                    name="submit"
                    className="btn btn-yellow pull-right"
                  >
                    Send <span className="ti-arrow-right"></span>
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-md-4 col-md-offset-1 content-ct">
            <h3>
              <span className="ti-twitter"></span> Twitter Feed
            </h3>
            <p>
              Lorem <a href="#">#Ipsum</a> is a dummy text used as a text filler
              in designs. This is just a dummy text. via{" "}
              <a href="#">@designerdada</a>{" "}
            </p>
            <hr />
            <p>
              Lorem Ipsum is a <a href="#">#dummy</a> text used as a text filler
              in designs. This is just a dummy text. via{" "}
              <a href="#">@designerdada</a>{" "}
            </p>
            <hr />
            <p>
              Lorem Ipsum is a <a href="#">#dummy</a> text used as a text filler
              in designs. This is just a dummy text. via{" "}
              <a href="#">@designerdada</a>{" "}
            </p>
          </div>
        </div>
        <div className="row footer-credit">
          <div className="col-md-6 col-sm-6">
            <p>
              &copy; 2015,{" "}
              <a href="http://www.designerdada.com">DesignerDada.com</a> | All
              rights reserved.
            </p>
          </div>
          <div className="col-md-6 col-sm-6">
            <ul className="footer-menu">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms &amp; Condition</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <!-- End: Footer --> */}
    </div>
  );
}

export default App;
