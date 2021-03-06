import React, { Component } from 'react';
import './HomePage.css'
class HomePage extends Component {
    state = {}
    render() {
        return (
            <div className="homepage">
                <div className="main">
                    <div className="main__imageConatiner">
                        <img src={require('../logo.png')} alt="icon img"></img>
                        <h2>Some Course Some Course</h2>
                        <h3><div></div>8th</h3>
                    </div>

                    <div className="main__section">
                        <h2>Welcome</h2>
                        <p> Welcome to a brief introduction to the ACS Professional Year Program
                            in partnership with your chosen education provider. This short course
                            will introduce you to ACS, outline the benefits of your ACS membership,
                            provide an overview of the Professional Year Program including a summary
                            of the key requirements. At the same time it will provide a short practical
                            experience in using the Canvas Learning Management System (LMS).</p>
                    </div>
                </div>

                <div className="todo">
                    <div className="todo__listContainer ">
                        <h3>To Do</h3>
                        <span>Nothing for now</span>
                    </div>
                    <div className="todo__recentFeedbackContainer ">
                        <h3>Recent Feedback</h3>
                        <span>Nothing for now</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;