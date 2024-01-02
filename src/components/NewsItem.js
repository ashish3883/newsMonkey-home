import React from "react";

const NewsItem =(props)=> {
  let textStyle1 = {
    maxWidth: '100%',
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 2,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  }
  let textStyle2 = {
    maxWidth: '100%',
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 1,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  }
    let { title, description, imgUrl, newsUrl, author, date, source } = props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "406px", height: "430px" }}><span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">
          {source}
        </span>
          <img src={imgUrl} className="card-img-top" alt="..." style={{ width: "406px", height: "230px" }} />
          <div className="card-body">
            <h5 className="card-title" style={textStyle1}>{title}</h5>
            <p className="card-text" style={textStyle2}>
              {description}
            </p>
            <p className="card-text" style={textStyle2}><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toDateString()}</small></p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
}

export default NewsItem;
