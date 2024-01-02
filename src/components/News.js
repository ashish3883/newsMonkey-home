import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'
// import InfiniteScroll from "react-infinite-scroll-component";

const News =(props)=> {
  const [articles, setArticles] = useState([])
  const [totalResults, setTotalResults] = useState(0)
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)

  const capitalize = (word)=>{
      return word.charAt(0).toUpperCase() + word.slice(1)
  }
  
  
  const updateNews = async()=> {
    props.setProgress(0)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pageNo}`;
    props.setProgress(10)
    setLoading(true)
    props.setProgress(30)
    let data = await fetch(url);
    props.setProgress(50)
    let parsedData = await data.json();
    props.setProgress(70)
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    
    props.setProgress(100)
  }
  // const fetchMoreData = async() => {
  //   setPage(page+ 1)
  //   const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pageNo}`;
  //   let data = await fetch(url);
  //   let parsedData = await data.json();
  //   setArticles(parsedData.articles);
  //   setTotalResults(parsedData.totalResults)
  //   setLoading(false)
    
  // };
  useEffect(() => {
    document.title = `NewMonkey - ${capitalize(props.category)}`
    updateNews()
    //eslint-disable-next-line
  }, [])
  
  const handleNext = async () => {
    setPage(page+ 1)
    updateNews()
  }
  const handlePrev = async () => {
    setPage(page-1)
    updateNews()
  }
  return (
      <>
        <h1 className="text-center" style={{marginTop:"70px"}} >NewsMonkey - Top {capitalize(props.category)} Headlines</h1>
        {loading && <Spinner />}
        {/* <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        > */}
          <div className="container">
          <div className="row">{!loading &&  articles.map((el) => {
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
          <button type="button" disabled={page <= 1} className="btn btn-primary" onClick={handlePrev}>&larr;Previous</button>
          <button type="button" disabled={page + 1 > Math.ceil(totalResults / props.pageSize)} className="btn btn-primary" onClick={handleNext}>
            Next&rarr;
          </button>
        </div>
      </>
    );
  
}

News.defaultProps = {
  country: "in",
  pageSize: 9,
  category: "general"
}
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}


export default News;