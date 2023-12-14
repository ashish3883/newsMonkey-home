import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
      let {title, description, imgUrl, newsUrl, author, date, source} = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{width:"406px", height:"450px"}}><span class="position-absolute top-0 start-100.left:10% translate-middle badge rounded-pill bg-danger">
                                               {source}
                                                <span class="visually-hidden">unread messages</span>
                                              </span>
          <img src={imgUrl} className="card-img-top" alt="..." style={{width:"406px", height:"230px"}} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {description}...
            </p>
            <p class="card-text"><small class="text-muted">By {!author?"Unknown":author} on {new Date(date).toDateString()}</small></p>
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
