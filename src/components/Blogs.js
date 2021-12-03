import React, {useEffect, useState} from 'react'

import BlogItem from './BlogItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const Blogs = (props)=>{
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    } 

    const updateBlogs = async ()=> {
        props.setProgress(10);
        const url = `https://glistening-lackadaisical-glue.glitch.me/api/posts/posts`; 
        setLoading(true)
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json()
        props.setProgress(70);
        setArticles(parsedData.post)
        setLoading(false)
        props.setProgress(100);
    }

    useEffect(() => {
        document.title = `${capitalizeFirstLetter(props.category)} - MyBlogWorld`;
        updateBlogs(); 
        // eslint-disable-next-line
    }, [])


    const fetchMoreData = async () => {   
        const url = `https://glistening-lackadaisical-glue.glitch.me/api/posts/posts`;
         setPage(page+1) 
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.post))
      
      };
 
        return (
            <>
            
                  <section className="py-5 text-center container">
    <div className="row py-lg-5">
      <div className="col-lg-6 col-md-8 mx-auto">
        <h1 className="fw-light">Album example</h1>
        <p className="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
        <p>
          <a href="#" className="btn btn-primary my-2 mx-2">Main call to action</a>
          <a href="#" className="btn btn-secondary my-2 mx-2">Secondary action</a>
        </p>
      </div>
    </div>
  </section>
                  {loading && <Spinner />}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner/>}
                > 
                  
                    <div className="container">
                         
                    <div className="row">
                        {articles.map((element) => {
                            return <div className="col-md-4" key={element.id}>
                                <BlogItem title={element.title ? element.title : ""} description={element.body.text ? element.body.text : ""} imageUrl={element.body.img}  author={element.author} date={element.dateCreated}  />
                            </div>
                        })}
                    </div>
                    </div> 
                </InfiniteScroll>
            </>
        )
    
}


Blogs.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',
}

Blogs.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}

export default Blogs
