import React, { useState } from 'react'
import "./services.css"

const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) =>{
        setToggleState(index);
    }

  return (
  <section className="services section" id="services">
    <h2 className="section__title">Services</h2>
    <span className="section__subtitle">What i offer</span>

    <div className="services__container container grid">
        <div className="services__content">
            <div>
                <i className="uil uil services__icon"></i>
                <h3 className="services__title">Fullstack Development</h3>
            </div>
            <span className="services__button" onClick={ () => toggleTab(1)}>
                View more{""}
                <i className="uil uil-arrow-right services__button-icon"></i> 
            </span>
            <div className={toggleState === 1 ? "services__modal active-modal": "services__modal"}>
                <div className="services__modal-content">
                    <i className="uil uil-times services__modal-close" onClick={ () => toggleTab(0)}></i>
                    <h3 className="services__modal-title">Full stack</h3>
                    <p className="service__modal-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque libero laboriosam modi rerum.</p>

                    <ul className="service__modal-services grid">
                        <li className="services__modal-info">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                            I do something.
                            </p>
                        </li>

                        <li className="services__modal-info">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                            I do something part 2.
                            </p>
                        </li>

                        <li className="services__modal-info">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                            I do something part 3.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="services__content">
            <div>
                <i className="uil uil services__icon"></i>
                <h3 className="services__title">Fullstack Development</h3>
            </div>
            <span className="services__button" onClick={ () => toggleTab(1)}>
                View more{""}
                <i className="uil uil-arrow-right services__button-icon"></i> 
            </span>
            <div className={toggleState === 1 ? "services__modal active-modal": "services__modal"}>
                <div className="services__modal-content">
                    <i className="uil uil-times services__modal-close" onClick={ () => toggleTab(0)}></i>
                    <h3 className="services__modal-title">Full stack</h3>
                    <p className="service__modal-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque libero laboriosam modi rerum.</p>

                    <ul className="service__modal-services grid">
                        <li className="services__modal-info">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                            I do something.
                            </p>
                        </li>

                        <li className="services__modal-info">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                            I do something part 2.
                            </p>
                        </li>

                        <li className="services__modal-info">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                            I do something part 3.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="services__content">
            <div>
                <i className="uil uil services__icon"></i>
                <h3 className="services__title">Fullstack Development</h3>
            </div>
            <span className="services__button" onClick={ () => toggleTab(1)}>
                View more{""}
                <i className="uil uil-arrow-right services__button-icon"></i> 
            </span>
            <div className={toggleState === 1 ? "services__modal active-modal": "services__modal"}>
                <div className="services__modal-content">
                    <i className="uil uil-times services__modal-close" onClick={ () => toggleTab(0)}></i>
                    <h3 className="services__modal-title">Full stack</h3>
                    <p className="service__modal-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque libero laboriosam modi rerum.</p>

                    <ul className="service__modal-services grid">
                        <li className="services__modal-info">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                            I do something.
                            </p>
                        </li>

                        <li className="services__modal-info">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                            I do something part 2.
                            </p>
                        </li>

                        <li className="services__modal-info">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                            I do something part 3.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>


        
        
    </div>

  </section>
  )
}

export default Services