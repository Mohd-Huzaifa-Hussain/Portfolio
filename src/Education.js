import React from "react";

const Education = () => (
    <div>
         <section className="resume-section" id="education">
                <div className="resume-section-content">
                    <h2 className="mb-5">Education</h2>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Guru Nanak Dev Engineering College Bidar - VTU</h3>
                            <div className="subheading mb-3">Bachelor's of Engineering</div>
                            <div>Information Science And Engineering</div>
                            <p>CGPA: 6.03</p>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">August 2016 - August 2021</span></div>
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Shahenn PU Independent College</h3>
                            <div className="subheading mb-3">Pre University College</div>
                            <p>Percentile: 70.00</p>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">June 2014 - May 2016</span></div>
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Shaheen High School Bidar</h3>
                            <div className="subheading mb-3">SSLC</div>
                            <p>Percentile: 71.28</p>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">May 2014</span></div>
                    </div>
                </div>
            </section>
            <hr className="m-0" />
    </div>
)

export default Education