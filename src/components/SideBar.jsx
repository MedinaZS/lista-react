// import { useState } from 'react'
import NavItem from './NavItem'

const SideBar = () => {

    let lista = [
        {
            "element": "Alaska",
            "subElements": [
                "Bascom"
            ]
        },
        {
            "element": "Connecticut",
            "subElements": []
        },
        {
            "element": "Wisconsin",
            "subElements": [
                "Oretta",
                "Konterra",
                "Guthrie"
            ]
        },
        {
            "element": "Nebraska",
            "subElements": [
                "Jennings",
                "Harviell",
                "Alfarata",
                "Bluffview",
                "Escondida"
            ]
        },
        {
            "element": "Georgia",
            "subElements": []
        }
    ]


    return (
        <ul className="list-unstyled ps-0 ">
            {lista &&
                lista.map((item, index) =>
                    <NavItem key={index} index={index} item={item} />
                )}
        </ul>
    )
}

export default SideBar