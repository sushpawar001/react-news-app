import React from 'react'

function NewsItem(props) {
  return (
    <div className="mb-5 card shadow border-0" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="row no-gutters">
        <div className="col-md-5">
          <img src={props.article.urlToImage} className="h-100 w-100 rounded-start" style={{ objectFit: 'cover' }} alt="Article" />
        </div>
        <div className="col-md-7">
          <div className="card-body p-4">
            <h5 className="card-title">{props.article.title}</h5>
            <p className="card-text">{props.article.description}</p>
            <a href={props.article.url} className="btn" style={{ backgroundColor: "#fca311", color: '#FFFFFF' }}>Read More</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsItem