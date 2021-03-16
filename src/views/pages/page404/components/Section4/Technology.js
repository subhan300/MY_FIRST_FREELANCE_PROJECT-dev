import React from 'react'
export default function Technology({title,desc,img}) {
    return (
            <div className="row">
                    <div className="col">
                    <div className="row">
                        <div className="col">
                        <img src={img} className="img-fluid logo"></img>
                        </div>
                    </div>
                    <div className="row">
                    <div className="card-body">
                    <h5 className="card-title font-weight-bold">{title}</h5>
                    <p className="card-text font-weight-light">{desc}.</p>
                    </div>
                    </div>
                    </div>
        </div>
    )
}
