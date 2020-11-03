import React from 'react';
import {Link} from 'react-router-dom';

export const Landing = () => {
    return (
        <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">Movie Recommender</h1>
          <p className="lead">
           Alright! Alright! Alright! You come to a fine place if you are confused on what to watch next? We will help you to take the decision.
          </p>
          <div className="buttons">
            <Link to="/register" className="btn btn-primary">Sign Up</Link>
            <Link to="/login" className="btn btn-light">Login</Link>
          </div>
        </div>
      </div>
    </section>
    )
}
 export default Landing