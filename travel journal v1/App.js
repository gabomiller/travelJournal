import React from "react"
import Header from "./components/Header.js"
import Entry from "./components/Entry.js"
import data from "./data.js"

export default function App() {
    const entries = data.map(entry => {
        return (
            <Entry 
                key={entry.id}
                entry={entry}
            />
        )
    })
        
    return (
        <div className="app">
            <Header />
            <section>
                {entries}
            </section>
        </div>
    )

}