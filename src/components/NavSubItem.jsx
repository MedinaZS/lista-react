// import { useState } from 'react'

const NavSubItem = ({ index, element , isSubActive, setIsSubActive}) => {
    
    const handleClick = () => {
        // Indicar cual esta activo
        setIsSubActive(index)
    }

    return (
        <li onClick={handleClick}>
            <a href="#" className={"link-dark fw-normal rounded " + (isSubActive ? "text-info" : " text-white")}>
                {element}
            </a>
        </li>
    )
}

export default NavSubItem