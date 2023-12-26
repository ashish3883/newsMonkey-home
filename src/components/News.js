import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'
// import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 9,
    category: "general"
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults : 0,
    };
  }

  async updateNews() {
    this.props.setProgress(0)
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fdbc1e5e395b4d31b343b7fe482b6655&page=${this.state.page}&pagesize=${this.props.pageNo}`;
    this.props.setProgress(10)
    this.setState({ loading: true })
    this.props.setProgress(30)
    let data = await fetch(url);
    this.props.setProgress(50)
    let parsedData = await data.json();
    this.props.setProgress(70)
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    });
    this.props.setProgress(100)
  }
  // fetchMoreData = async() => {
  //   this.setState({page: this.state.page +1})
  //   const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fdbc1e5e395b4d31b343b7fe482b6655&page=${this.state.page}&pagesize=${this.props.pageNo}`;
  //   let data = await fetch(url);
  //   let parsedData = await data.json();
  //   this.setState({
  //     articles: this.state.articles.concat(parsedData.articles),
  //     totalResults: parsedData.totalResults,
  //     loading: false
  //   });
  // };

  async componentDidMount() {
    this.updateNews()
  }
  handleNext = async () => {
    this.setState({ page: this.state.page + 1 })
    this.updateNews()
  }
  handlePrev = async () => {
    this.setState({ page: this.state.page - 1 })
    this.updateNews()
  }
  render() {
    return (
      <>
        <h1 className="text-center my-4">NewsMonkey - Headlines</h1>
        {this.state.loading && <Spinner />}
        {/* <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
        > */}
          <div className="container">
          <div className="row">
            {!this.state.loading &&  this.state.articles.map((el) => {
              return (
                <div className="col-md-4" key={el.url}>
                  <NewsItem
                    title={el.title ? el.title : "Title Not Available"}
                    description={el.description ? el.description : "Description Not Available"}
                    imgUrl={el.urlToImage ? el.urlToImage : "https://t3.ftcdn.net/jpg/03/27/55/60/360_F_327556002_99c7QmZmwocLwF7ywQ68ChZaBry1DbtD.jpg"}
                    newsUrl={el.url ? el.url : "Link Not Available"}
                    author={el.author}
                    date={el.publishedAt}
                    source={el.source.name}
                  />
                </div>
              );
            })}
          </div>
          </div>
        {/* </InfiniteScroll> */}
        <div className="container d-flex justify-content-between">
          <button type="button" disabled={this.state.page <= 1} className="btn btn-primary" onClick={this.handlePrev}>&larr;Previous</button>
          <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} className="btn btn-primary" onClick={this.handleNext}>
            Next&rarr;
          </button>
        </div>
      </>
    );
  }
}

export default News;
