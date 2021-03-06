import React from 'react';
import WorkExperience from '../WorkExperience/workExperience';

const workExperience = [
	{
		position: 'Full-Stack Web Developer',
		companyName: 'BroadSign International',
		startDate: 'Nov 2018',
		endDate: 'Feb 2019',
		location: 'Montreal, QC',
		descriptions: [
			'Created front-end components using Backbone.js and React.js',
			'Refactored Backbone.js code into React.js',
			'Debugged back-end API written in Python.',
			'Implemented TDD development using Cypress, Jenkins, and Python Unittest.',
			'Provided QA assistance with regression and smoke tests.',
			'Used Bitbucket and Git for version control and organization of features and bug fixes.',
			'Added to and enhanced existing documentation via Confluence for new hires and on-boarding processes involving environment setting.',
			'Used Jira and Bitbucket for feature/bug ownership, continuous integration pipelines, tracking of development time, and releases.',
			'Collaborated in sprint planning, design sessions with PO, and spike sessions to discuss new features enhancements, time estimations, and feasibility of new features.',
			'Consulted UX designers with grooming of UI features and provided insights for design elements.',
			'Consistently initiated and contributed to team building activities to further develop interpersonal skills and enhance connections at the workplace.'
		]
	},
	{
		position: 'Freelance Developer',
		companyName: 'Self Employed',
		startDate: 'Apr 2018',
		endDate: 'Nov 2018',
		location: 'Ottawa, ON',
		descriptions: [
			'Self-taught React.js developer',
			'Responsible for constructing and implementing a front-end dashboard involving React, Redux, and ES2018 for client 1996 Photo Lab for sales, inventory, and staff management and scheduling.',
			'Created RESTful API endpoints using Express.js allowing real-time communication with Socket.io',
			'Building UX focused user-friendly components using various React UI frameworks such as Ant Design and Bootstrap.',
			'Performing requirements analysis, design, service and technology sourcing to over 7 customers simultaneously.',
			'Consistently resolving bugs, rolling out new patches, updating content, and clearing backlogs with minimal downtime.',
			'Discussed, analyzed, and strategized production dates with customers on a consistent basis to ensure clarity of demands and delivery of product in a timely manner.',
			'Designed and deployed landing pages and websites for clients using HTML5, CSS, and JavaScript.'
		]
	},
	{
		position: 'Full-Stack Application Developer',
		companyName: 'iSight Customer Expressions',
		startDate: 'Apr 2017',
		endDate: 'Feb 2018',
		location: 'Ottawa, ON',
		descriptions: [
			'Used Backbone.js, jQuery, and Bootstrap in wireframing to create forms and UI elements.',
			'Collaborated with product and support teams in delivering new features and tier 3 support.',
			'Wrote custom workflows using JavaScript and JS framework Seneca.js.',
			'Created PostgreSQL database schemas and scripts for migration of client legacy data.',
			'Used Elasticsearch and Yellowfin to deliver multi-tenant search capabilities.',
			'Developed custom APIs and workflows using Node.js and Ajax.',
			'Wrote test cases against designed workflows and API calls and consumable web APIs.',
			'Deployed application for UAT and Production Environment using Vagrant and Docker.',
			'Oversaw troubleshooting of technical issues to solve problems in time.',
			'Provided continued maintenance and development of bug fixes and patch sets for existing live applications.',
			'Prioritized new features, helped manage project workflow and progression tracking.',
			'Attended weekly planning meetings for story estimations and project resource management to ensure compliance with client deadlines.',
			'Provided analysts with an easy-to-understand overview of the technical features and constraints to aid them in formulating more efficient business solutions.',
			'Conducted professional and constructive communications with all team members.',
			'Displayed initiative in enhancing business requirement and acceptance criteria.',
			'Consistently utilized best programming practices such as TDD.',
			'Actively participated in peer code reviews on GitHub.',
			'Consistently initiated and contributed to team building activities to further develop interpersonal skills and enhance connections at the workplace.'
		]
	}
];

function Resume(props) {
	return (
		<div className="resume">
			<WorkExperience workExperience={workExperience} />
		</div>
	);
}

export default Resume;
