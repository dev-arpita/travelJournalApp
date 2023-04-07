import React from "react"

export default function Card({item}) {
        console.log(item)
    return(
        <>
        <div className="card">
                <img src={item.imageUrl} />
            <div className="card--details">
                <div className="map-section">
                    <span className="fa-solid fa-location-dot card--location_dot"></span>
                    <span className="location">{item.location}</span>
                    <a href={item.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1 className="card--title">{item.title}</h1>
                <div className="date">
                    <span>{item.startDate}</span>
                    <span>{item.endDate}</span>
                </div>
                <p className="card--description">{item.description}</p>
            </div>
        </div>
           <div className="divider"></div>
        </>
    )

}
