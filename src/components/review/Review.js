import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactStars from 'react-stars';
import './Review.css';

class Review extends Component {
  componentDidMount() {
    this.getReview();
  }

  getReview() {
    // TODO: move content out of the component
    fetch('https://cdn.contentful.com/spaces/txizmafqryct/environments/master/entries?access_token=7f8171ccf65b147aea912e6a591724a297c543744cd7e8487971a9e91969a216')
    .then(response => response.json())
    .then((data) => {
      this.setState(data.items[0].fields);
    });
  }

  render() {
    return (
      <div className="review">
        <a href={this.props.item.website} target="_blank">
          <div className="review-container">
            <img className="review-img" src={this.props.item.imageUrl} alt='review'/>
            <div className="review-content">
              <div className="review-name">
                {this.props.item.name}
              </div>
              <ReactStars count={5} value={this.props.item.rating} edit={false} size={18} />          
            </div>
          </div>
        </a>
      </div>
    );
  }
}

Review.defaultProps = {
  item: {
    name: '',
    imageUrl: '',
    website: '',
    rating: ''
  }
}

Review.propTypes = {
  item: PropTypes.object
}

export default Review;
