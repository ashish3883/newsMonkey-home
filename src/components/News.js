import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1
    };
  }

  async componentDidMount() {
    this.setState({loading: true})
    let url =`https://newsapi.org/v2/top-headlines?country=in&apiKey=fdbc1e5e395b4d31b343b7fe482b6655&page=1&pagesize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ 
      articles: parsedData.articles, 
      totalResults: parsedData.totalResults,
      loading: false
    });
  }
  handleNext = async ()=>{
    if(!(this.state.page +1 > Math.ceil(this.state.totalResults/9))){
      this.setState({loading: true})
      let url =`https://newsapi.org/v2/top-headlines?country=in&apiKey=fdbc1e5e395b4d31b343b7fe482b6655&page=${this.state.page + 1}&pagesize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading: false
      })
    }
  }
  handlePrev = async ()=>{
    this.setState({loading: true})
    let url =`https://newsapi.org/v2/top-headlines?country=in&apiKey=fdbc1e5e395b4d31b343b7fe482b6655&page=${this.state.page - 1}&pagesize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false
    })
  }
  render() {
    return (
      <div className="container my-4">
        <h1 className="text-center my-4">NewsMonkey - Headlines</h1>
        l{this.state.loading && <Spinner/>}
        <div className="row">
          {!this.state.loading && this.state.articles.map((el) => {
            return (
              <div className="col-md-4" key={el.url}>
                <NewsItem
                  title={
                    el.title ? el.title.slice(0, 60) : "Title Not Available"
                  }
                  description={
                    el.description
                      ? el.description.slice(0, 60)
                      : "Description Not Available"
                  }
                  imgUrl={
                    el.urlToImage
                      ? el.urlToImage
                      : "https://t3.ftcdn.net/jpg/03/27/55/60/360_F_327556002_99c7QmZmwocLwF7ywQ68ChZaBry1DbtD.jpg"
                  }
                  newsUrl={el.url ? el.url : "Link Not Available"}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button type="button" disabled={this.state.page <= 1} className="btn btn-primary" onClick={this.handlePrev}>
            &larr;Previous
          </button>
          <button type="button" disabled={this.state.page +1 > Math.ceil(this.state.totalResults/9)}className="btn btn-primary" onClick={this.handleNext}>
            Next&rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
