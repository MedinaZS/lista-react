import  { useState } from 'react'

const NavSubItem = ({ element }) => {

    const [active, setActive] = useState(false)

    const handleClick = () => {
        setActive(!active)
    }

    
    return (
        <li onClick={handleClick}>
            <a href="#" className={"link-dark fw-normal rounded " + (active ? "text-danger" : " text-white")}>
                {element}
            </a>
        </li>
    )
}

export default NavSubItem