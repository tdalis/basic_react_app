import React from 'react';

export const CvData = () => (
    <div> 
        <div className = "PersonalInfo">
            <ul>
                <li>Name: <strong>Tasos Pardalis</strong></li>
                <li>Title: <strong>Full-Stack Data Scientist</strong></li>
                <ol>contacts:</ol>
                    <li>Email: tasos@tasospardalis.com</li>
                    <li>Phone: 07xxxxxxxxx</li>
                    <li>Location: London</li>
                    <li>Linkedin: https://www.linkedin.com/in/anastasiospardalis/</li>
                    <li>Github: https://github.com/tdalis</li>
            </ul>
        </div>

        <div className = "WorkExpereince">
          <h1>Work Experience</h1>
          <div className = "Background">
            <h2>Short Background</h2>
            <p>When I was a child I wanted to be a professional goalkeeper. I used to say <em>I will be the <strong>best</strong> goalkeeper in the world.</em> I was working really hard to achieve my goal, but one day I had a horrible accident during practice and that was it for my professional career. After a while, I came up with a new goal, <em>become a global multimillionaire entrepreneur.</em> I always set hard goals for myself, this way I make sure to work hard every day.</p>
          </div>
        </div>
          <div className = "BusinessAnalyst">
            <h2 color = "blue">Data Business Analyst</h2>
            <h3>Company: Reckitt Benckiser</h3>
            <h4>Company website: 'https://www.rb.com/</h4>
            <h4>Dates: 2019-09 - 2020-04</h4>
            <h4>Key Responsibilities: Business Analytics, PowerBi, Python, R, Web Scraping, Data Mining, Reporting</h4>
          </div>
          <div className = "DataScientist">
            <h2 color = "blue">Data Scientist</h2>
            <h3>Company: Reckitt Benckiser</h3>
            <h4>Company website: https://www.rb.com/</h4>
            <h4>Dates: 2019-01 - 2019-09</h4>
            <h4>Key Responsibilities: Machine Learning, Business Analytics, PowerBi, Python, R, Web Scraping, Data Mining, Reporting</h4>
          </div>
        </div>
)
