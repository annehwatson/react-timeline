import React, { Component } from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

//something is passed from App to Timeline (JSON??) that will render a list of TimelineEvent components
//wave2 will pass in the json data
//apply the pre-built css classes to the html

class Timeline extends React.Component {
  render() {
    let eventData = this.props.events

    return (
      <section className="timeline">
        {eventData}
      </section>
    );
  }
}

export default Timeline;
