import React, { Component } from 'react';
import './App.css';
import Review from './components/review/Review'

class ReviewApp extends Component {
  constructor() {
    super();
    this.state = {
      reviews: []
    }
  }

  componentDidMount() {
    fetch('content-endpoint')
    .then(response => response.json())
    .then((data) => {
      this.setState({
        reviews: data.items
      });
    });
  }

  render() {
    return (
      <div className="review-app">
        {this.state.reviews.map((r) => {
          return <Review key={r.fields.name} item={r.fields} />;
        })}
      </div>
    );
  }
}

export default ReviewApp;
