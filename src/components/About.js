import React from 'react'
import ProfileImage from '../images/profile.jpg';

const About = () => {
  return (
	<div className='about' id='about'>
		<div className='info'>
			<div className='highlight'>About Me</div>
			
			<br />
			<p>
				Hello there! My name is Girly and I enjoy building and learning 
				things related to the web, or programming in general. I started
				web development as a profession back in 2018 and I've come to enjoy what I do since then.
			</p>

			<br />
			<p>
				Prior to web development, I worked in BPO industries as technical support engineer and analyst, 
				but then I decided to pursue development as it is what I really wanted to do back then, so I made 
				the career shift.
			</p> 

			<br />
			<p>
				I've been working with Goetu Software Solutions since I've started on
				 this journey and also do some freelance work at the side.
			</p>

			<br />
			<p>Here are a few technologies that I've been working with recently:</p>

			<br />
			<ul>
				<li>JavaScript (ES6)</li>
				<li>React JS</li>
				<li>Next JS</li>
				<li>Laravel</li>
				<li>Wordpress</li>
				<li>Vagrant</li>
				<li>Git</li>
			</ul>

			<br/>
			<div className='social'>
				<a href='https://www.linkedin.com/in/girly-gado/' target='_blank' rel='noreferrer' className='social--icons'>
					<i className="fa-brands fa-linkedin-in"></i>
				</a>

				<a href='https://github.com/girlygdev' target='_blank' rel='noreferrer' className='social--icons'>
					<i className="fa-brands fa-github-alt"></i>
				</a>
			</div>
		</div>

		<div className='profile'>
			<img src={ProfileImage} alt="Girly's Profile" className='profile--img' />
		</div>
	</div>
  )
}

export default About