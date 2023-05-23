// import { useState } from 'react'

const NavSubItem = ({ index, element, isSubActive, setIsSubActive }) => {

    const additionalClass = (isSubActive) ? 'text-info active' : 'text-white'

    const handleClick = () => {
        // Indicar cual esta activo
        setIsSubActive(index)
    }

    return (
        <li onClick={handleClick}>
            <a href="#" className={"link-dark fw-normal rounded " + additionalClass}>
                {element}
            </a>
        </li>
    )
}

export default NavSubItem