import React from "react"

export default function Entry(props) {
    return (
        <div className="entry--main">
            <img src={`.${props.entry.img}`} className="entry--pic"/>
            <div className="entry--right">
                <div className="entry--locationRow">
                    <img src="../pinpoint.png" className="entry--pinpoint" />
                    <p className="entry--location">{props.entry.location}</p>
                    <a href={props.entry.googleMapsUrl}> 
                        <p className="entry--mapsLink">View on Google Maps</p> 
                    </a>
                </div> 
                <p className="entry--title">{props.entry.title}</p>
                <p className="entry--date">{props.entry.startDate} - {props.entry.endDate}</p>
                <p className="entry--description">{props.entry.description}</p>
            </div>
            <div>
                <hr className="entry--line"/>
            </div>
        </div>
    )
}