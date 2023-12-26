import React, { Component } from "react";

export class NewsItem extends Component {
  textStyle1 = {
    maxWidth: '100%',
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 2,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  }
  textStyle2 = {
    maxWidth: '100%',
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 1,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  }
  render() {
    let { title, description, imgUrl, newsUrl, author, date, source } = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "406px", height: "430px" }}><span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">
          {source}
        </span>
          <img src={imgUrl} className="card-img-top" alt="..." style={{ width: "406px", height: "230px" }} />
          <div className="card-body">
            <h5 className="card-title" style={this.textStyle1}>{title}</h5>
            <p className="card-text" style={this.textStyle2}>
              {description}
            </p>
            <p className="card-text" style={this.textStyle2}><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toDateString()}</small></p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
