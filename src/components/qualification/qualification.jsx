import React, { useState } from 'react'
import "./qualification.css";

const Qualification = () => {
    const [togglestate, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    };


    return (
        <section className="qualification section" id='qualification'>
            <h2 className="section_title">Qualifications</h2>
            <h2 className="section__subtitle">My Programming Journey</h2>
            <div className="qualification_container container">
                <div className="qualification_tabs">
                    <div className={togglestate === 1
                        ? "qualification_button qualification_active button--flex"
                        : "qualification_button--flex"
                    }
                        onClick={() => toggleTab(1)}

                    >
                        <i className="uil uil-graduation-cap qualification_icon"></i>{" "}
                        Education
                    </div>

                    <div className={togglestate === 2
                        ? "qualification_button qualification_active button--flex"
                        : "qualification_button--flex"
                    }
                        onClick={() => toggleTab(2)}
                    >
                        <i className="uil uil-briefcase-alt qualification_icon"></i>{" "}
                        Experience
                    </div>
                </div>





                <div className="qualification_sections">
                    <div className={togglestate === 1 ? "qualification_content qualification_content-active"
                        : "qualification_content "}>
                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">Web Designer</h3>
                                <span className="qualification_subtitle">Alusoft Technologies</span>
                                <div className="qualification_calender">
                                    <i className="uil uil-calendar-alt">
                                        2020 - 2021
                                    </i>
                                </div>
                            </div>
                            <div> <span className="qualififcation_rounder"></span>
                                <span className="qualification_line"></span></div>
                        </div>
                        <div className="qualification_data">
                            <div></div>
                            <div>
                                <span className="qualififcation_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                            <div>
                                <h3 className="qualification_title">Web Developer</h3>
                                <span className="qualification_subtitle">Alusoft Technologies</span>
                                <div className="qualification_calender">
                                    <i className="uil uil-calendar-alt">
                                        2021 - 2022
                                    </i>
                                </div>
                            </div>
                        </div>
                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">computer Science Engineer</h3>
                                <span className="qualification_subtitle">Odudua University - Instituition</span>
                                <div className="qualification_calender">
                                    <i className="uil uil-calendar-alt">
                                        2021 - 2024
                                    </i>
                                </div>
                            </div>
                            <div> <span className="qualififcation_rounder"></span>
                                <span className="qualification_line"></span></div>
                        </div>
                    </div>







                    <div className={togglestate === 2 ? "qualification_content qualification_content-active"
                        : "qualification_content "}>
                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">Web Designer Intern</h3>
                                <span className="qualification_subtitle">Alusoft Technologies</span>
                                <div className="qualification_calender">
                                    <i className="uil uil-calendar-alt">
                                        2021
                                    </i>
                                </div>
                            </div>
                            <div> <span className="qualififcation_rounder"></span>
                                <span className="qualification_line"></span></div>
                        </div>
                        <div className="qualification_data">
                            <div></div>
                            <div>
                                <span className="qualififcation_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                            <div>
                                <h3 className="qualification_title">Web Developer Intern</h3>
                                <span className="qualification_subtitle">Alusoft Technologies</span>
                                <div className="qualification_calender">
                                    <i className="uil uil-calendar-alt">
                                        2022
                                    </i>
                                </div>
                            </div>

                        </div>
                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">Web Programmer</h3>
                                <span className="qualification_subtitle">FreeLancer</span>
                                <div className="qualification_calender">
                                    <i className="uil uil-calendar-alt">
                                        2022 - Present
                                    </i>
                                </div>
                            </div>
                            <div> <span className="qualififcation_rounder"></span>
                                <span className="qualification_line"></span></div>
                        </div>
                        <div className="qualification_data">
                            <div></div>
                            <div>
                                <span className="qualififcation_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                            <div>
                                <h3 className="qualification_title">Web Developer </h3>
                                <span className="qualification_subtitle">Harvest Nexus</span>
                                <div className="qualification_calender">
                                    <i className="uil uil-calendar-alt">
                                        2025 - Present
                                    </i>
                                </div>
                            </div>

                        </div>
                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">Front End Developer</h3>
                                <span className="qualification_subtitle">Caremeal</span>
                                <div className="qualification_calender">
                                    <i className="uil uil-calendar-alt">
                                        2025
                                    </i>
                                </div>
                            </div>
                            <div> <span className="qualififcation_rounder"></span>
                                <span className="qualification_line"></span></div>
                        </div>
                        <div className="qualification_data">
                            <div></div>
                            <div>
                                <span className="qualififcation_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                            <div>
                                <h3 className="qualification_title">Front End Developer Intern</h3>
                                <span className="qualification_subtitle">Teeket</span>
                                <div className="qualification_calender">
                                    <i className="uil uil-calendar-alt">
                                        2025 - Present
                                    </i>
                                </div>
                            </div>

                        </div>
                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">Frontend Developer (App)</h3>
                                <span className="qualification_subtitle">Sharegrid</span>
                                <div className="qualification_calender">
                                    <i className="uil uil-calendar-alt">
                                        2025 - Present
                                    </i>
                                </div>
                            </div>
                            <div> <span className="qualififcation_rounder"></span>
                                <span className="qualification_line"></span></div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification