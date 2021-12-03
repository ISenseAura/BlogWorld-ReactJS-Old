import React from 'react'

const BlogItem = (props)=> {
        let { title, description, imageUrl, author, date } = props;
  /*
  return (
  <div className="card shadow-sm">
      <div className="card">
                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        position: 'absolute',
                        right: '0'
                    }
                    }> 
                        <span className="badge rounded-pill bg-danger"> 'test' </span>
                      
      <img className="" width="100%" height="225" src={!imageUrl ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg" : imageUrl} className="bd-placeholder-img card-img-top" alt="..." />
               
            
            <div className="card-body">
              <p className="card-text">{description}</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                <small className="text-muted">{date}</small>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
*/
        return (
            <div className="my-3">
                <div className="card card shadow-lg">
                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        position: 'absolute',
                        right: '0'
                    }
                    }> 
                        <span className="badge rounded-pill bg-danger"> {!author ? "Unknown" : author} </span>
                    </div>
                    <img src={!imageUrl ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}  </h5>
                        <p className="card-text">{description}</p>
                      <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary"><i class="bi-class-"></i> </button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">Dislike</button>
                </div>
                <small className="text-muted"> <small> {new Date(date).toGMTString()}</small></small>
                    </div>
                  </div>
                </div>
            </div>
        )
     
}

export default BlogItem
