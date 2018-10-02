import React, {Component} from 'react';
import {Link, Route} from "react-router-dom";
import Course from "./Course/Course";

class Courses extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="Courses">
          <Link
            className="Link" to={{
            pathname: "/courses/101",
            title: "Differential Calculus"
          }}>Math 101</Link>
          <Link
            className="Link"
            to={{
              pathname: "/courses/201",
              title: "Discrete Mathematics"
            }}>Math 201</Link>
          <Link
            className="Link"
            to={{
              pathname: "/courses/301",
              title: "Linear Algebra"
            }}>Math 301</Link>
        </section>
        <Route path="/courses/:cid" component={Course}/>
      </React.Fragment>
    );
  }
}

export default Courses;