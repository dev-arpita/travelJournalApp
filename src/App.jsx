import React from "react"
import data from "./seperate"
import Card from "./components/Card"
import Navbar from "./components/Navbar"

export default function App() {
    const cardEl = data.map( item => {
        return(
            <Card
                key = {item.title}
                item = {item}
            />
       )
     })


    return (
        <div className="container">
            <Navbar />
            {cardEl}
        </div>
    )
}
