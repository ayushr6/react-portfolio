import React, {useState} from 'react'
import "./qualification.css"

const Qualification = () => {

  const [toggleState,
    setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personel journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={toggleState === 1
            ? "qualification__button button--flex"
            : "qualification__button qualification__active button-flex"}
            onClick={() => toggleTab(1)}>
            <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
            Education
          </div>

          <div
            className={toggleState === 2
            ? "qualification__button button--flex"
            : "qualification__button qualification__active button-flex"}
            onClick={() => toggleTab(2)}>
            <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={toggleState === 1
            ? "qualification__content qualification__content-active"
            : "qualification__content"}>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">BTech - CSE</h3>
                <span className="qualification__substitle">JKLU, Jaipur</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"> 2020 - Present</i>
                </div>
                <br/>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <div className="qualification__line"></div>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Senior Secondary School</h3>
                <span className="qualification__substitle">Sanskar School, Jaipur</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"> 2018 - 2020</i>
                </div>
                <br/>
              </div>
            </div>

            <div className="qualification__data">

              <div>
                <h3 className="qualification__title">Secondary School</h3>
                <span className="qualification__substitle">Sanskar School, Jaipur</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"> 2012 - 2018</i>
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <div className="qualification__line"></div>
              </div>
            </div>

          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={toggleState === 2
            ? "qualification__content qualification__content-active"
            : "qualification__content"}>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <div className="qualification__line"></div>
              </div>
              <div>
                <h3 className="qualification__title">Software Engineer</h3>
                <span className="qualification__substitle">DeepKlarity, Bangaluru</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"> December (2022) - Present</i>
                </div>
                <br/>
              </div>

            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Coding Club (President)</h3>
                <span className="qualification__substitle">JKLU, Jaipur</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"> November (2022) - Present</i>
                </div>
                <br/>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <div className="qualification__line"></div>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Data Engineer (part-time)</h3>
                <span className="qualification__substitle">DeepKlarity, Bangaluru</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"> Aug - Sept (2022)</i>
                </div>
                <br/>
              </div>
            </div>

            <div className="qualification__data">

              <div>
                <h3 className="qualification__title">Data Engineer (internship)</h3>
                <span className="qualification__substitle">DeepKlarity, Bangaluru</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"> June - July (2022)</i>
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <div className="qualification__line"></div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default Qualification