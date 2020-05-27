import React from 'react'
import uuid from 'react-uuid'
import './LocationIndicator.organism.scss'

const LocationIndicator = ({ sectionCount, activeSection }) => {
    const sections = parseInt(sectionCount, 10)
    return (
        <div className="location-indicator">
            {[...Array(sections)].map((section, index) => (
                <span key={uuid()} className={index === activeSection ? 'active' : ''} />
            ))}
        </div>
    )
}

export default LocationIndicator
