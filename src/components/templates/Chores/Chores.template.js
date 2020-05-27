import React from 'react'
import slugify from 'slugify'
import choreAsset from '../../../assets/chore.png'
import './Chores.template.scss'

function Chores() {
    const chores = [
        {
            asset: choreAsset,
            description: 'aus dem Supermarkt',
        },
        {
            asset: choreAsset,
            description: 'aus der Drogerie',
        },
        {
            asset: choreAsset,
            description: 'aus der Apotheke',
        },
        {
            asset: choreAsset,
            description: 'vom Bäcker',
        },
    ]

    return (
        <div className="chores">
            {chores.map((chore) => (
                <div key={slugify(chore.description)} className="chore">
                    <img src={chore.asset} alt="{asset.description}" />
                    <p>{chore.description}</p>
                </div>
            ))}
        </div>
    )
}

export default Chores
