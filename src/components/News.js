import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  
  constructor(){
    super();
    this.state={
      articles: [],
      loading: false
    }
  }

  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=fdbc1e5e395b4d31b343b7fe482b6655";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({articles: parsedData.articles})
  }
  render() {
    return (
      <div className='container my-4'>
        <h2>NewsMonkey - Headlines</h2>
        <div className="row">
          {this.state.articles.map((el)=>{
            return <div className="col-md-4" key={el.url}>
            <NewsItem title={el.title?el.title.slice(0, 60):"Title Not Available"} description={el.description?el.description.slice(0, 60):"Description Not Available"} imgUrl={el.urlToImage?el.urlToImage:"https://t3.ftcdn.net/jpg/03/27/55/60/360_F_327556002_99c7QmZmwocLwF7ywQ68ChZaBry1DbtD.jpg"} newsUrl={el.url?el.url:"Link Not Available"} />
            </div>
          })}
       </div>
      </div>
    )
  }
}

export default News
