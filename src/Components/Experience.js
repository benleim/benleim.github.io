import React from 'react';
import './Experience.css';

class Experience extends React.Component {
    constructor(props) {
        super(props);
        this.changeJob = this.changeJob.bind(this);
        this.state = {
            title: 'SWE + Cloud Architect Intern',
            dates: 'May 2019 - August 2019',
            company: 'Paymerang',
            link: 'https://paymerang.com/',
            job1Class: 'Exp-List-Item Exp-List-Selected',
            job2Class: 'Exp-List-Item',
            job3Class: 'Exp-List-Item',
            job4Class: 'Exp-List-Item',
            bullets: [
                'Wrote CloudFormation templates for spinning up stacks with RDS, EC2, and VPC instances and ' +
                'Lambda functions.',
                'Leveraged AWS to build a web app dashboard of performance metrics for the development team.',
                'Two of my metrics were reported to investors',
                'Wrote Serverless functions for querying the Azure DevOps API, uploaded to S3, crawled the data with ' +
                'Glue, and created visualizations with KendoUI.'
            ]
        };
    }

    changeJob(e) {
        let job = e.target.innerText;
        let data = {};
        switch (job) {
            case 'Paymerang':
                data = {
                    title: 'SWE + Cloud Architect Intern',
                    dates: 'May 2019 - August 2019',
                    company: 'Paymerang',
                    link: 'https://paymerang.com/',
                    job1Class: 'Exp-List-Item Exp-List-Selected',
                    job2Class: 'Exp-List-Item',
                    job3Class: 'Exp-List-Item',
                    job4Class: 'Exp-List-Item',
                    bullets: [
                        'Wrote CloudFormation templates for spinning up stacks including RDS, EC2, and VPC instances and ' +
                        'Lambda functions.',
                        'Leveraged AWS to build a web app dashboard of performance metrics for the development team.',
                        'Two of my metrics were reported to investors',
                        'Wrote Serverless functions for querying the Azure DevOps API, uploaded to S3, crawled the data with ' +
                        'Glue, and created visualizations with KendoUI.'
                    ]
                };
                break;
            case 'Richweb':
                data = {
                    title: 'Web Developer',
                    dates: 'June 2018 - August 2018',
                    company: 'Richweb',
                    job1Class: 'Exp-List-Item',
                    job2Class: 'Exp-List-Item Exp-List-Selected',
                    job3Class: 'Exp-List-Item',
                    job4Class: 'Exp-List-Item',
                    link: 'https://richweb.com/',
                    bullets: [
                        'Developed a React web app for employee time tracking and daily planning that increased employee' +
                        ' time efficiency.',
                        'Combined two legacy enterprise management platforms into one.',
                        'Increased employee productivity and company profitability.'
                    ]
                };
                break;
            case 'Impact Makers':
                data = {
                    title: "SWE Intern",
                    dates: 'June 2017 - August 2017',
                    company: 'Impact Makers',
                    job1Class: 'Exp-List-Item',
                    job2Class: 'Exp-List-Item',
                    job3Class: 'Exp-List-Item Exp-List-Selected',
                    job4Class: 'Exp-List-Item',
                    link: 'https://www.impactmakers.com/',
                    bullets: [
                        'Created an Polymer web app for analytics of an in-house, custom search engine built on Elastic Search.',
                        'Code went into production for the IM Connect platform used by multiple billion-dollar hospital systems.'
                    ]
                };
                break;
            case 'Ben Leimberger LLC':
                data = {
                    title: 'Founder',
                    dates: 'March 2014 - Present',
                    company: 'Ben Leimberger LLC',
                    job1Class: 'Exp-List-Item',
                    job2Class: 'Exp-List-Item',
                    job3Class: 'Exp-List-Item',
                    job4Class: 'Exp-List-Item Exp-List-Selected',
                    link: 'https://itunes.apple.com/us/developer/ben-leimberger-llc/id940307720?mt=8',
                    bullets: [
                        'Founded an app development company that has published 3 iPhone and 1 Windows Phone apps.',
                        'Developed an MVP for a social network oriented around forming social movements.',
                        'Accrued over 12,000 aggregate unique downloads and 100+ weekly sessions.'
                    ]
                };
                break;
            default:
                break;
        }

        this.setState(data);
    }

    render() {
        return (
            <div className="Experience" ref={ (divElement) => this.divElement = divElement}>
                <div className="Exp-Header">
                    <h3 className="Exp-TitleNum">02.</h3>
                    <h3 className="Exp-TitleText">Experience</h3>
                </div>
                <ul className="Exp-List">
                    <li className={this.state.job1Class} onClick={this.changeJob}>Paymerang</li>
                    <li className={this.state.job2Class} onClick={this.changeJob}>Richweb</li>
                    <li className={this.state.job3Class} onClick={this.changeJob}>Impact Makers</li>
                    <li className={this.state.job4Class} onClick={(e) => this.changeJob(e)}>Ben Leimberger LLC</li>
                </ul>
                <div className="Exp-DescContainer">
                    <h4 className="Exp-JobTitle">
                        <span>{this.state.title}</span>
                        <span>
                            <span className="Exp-At"> @ </span>
                            <a className="Exp-JobLink" href={this.state.link} target="_blank">{this.state.company}</a>
                        </span>
                    </h4>
                    <h5 className="Exp-JobSubtitle">{this.state.dates}</h5>
                    <ul className="Exp-JobList">
                        {this.state.bullets.map(function(object, i){
                            return <li>{object}</li>;
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Experience;