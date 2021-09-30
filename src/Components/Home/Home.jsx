import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
    return (
        <div id="Home">
            <h2>Hello there!</h2>
            <h2>I'm Darren Evans</h2>
            <h3>I am a self-taught Web Developer from Kent, England.</h3>

            <div id="intro">
                <h2>Allow Me To Introduce Myself</h2>
                <p>I have a passion for building my knowledge in modern JavaScript as well as Frameworks that use it like React.js.</p>
                <p>Please take a look around my site, at my <Link to="/about">skills</Link> and <Link to="/projects">projects</Link>. </p>
            </div>
        </div>
    )
}
