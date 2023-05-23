// import { useState } from 'react'
import { useState } from 'react'
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

    const [isActive, setIsActive] = useState(null)

    return (
        <ul className="list-unstyled ps-0 ">
            {lista &&
                lista.map((item, index) =>
                    <NavItem
                        key={index}
                        index={index}
                        item={item}
                        isActive={ (isActive === index) ? true : false } //Is active tiene el index del que esta activo
                        setIsActive={setIsActive} />
                )}
        </ul>
    )
}

export default SideBar