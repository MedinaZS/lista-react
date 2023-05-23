// import React from 'react'

import { useState } from "react"
import NavSubItem from "./NavSubItem"

const NavItem = ({ index, item }) => {
    const { element, subElements } = item

    const [active, setActive] = useState(false)

    const handleClick = () => {
        setActive(!active)
    }

    return (
        <li className="mb-1 ">
            <button onClick={handleClick}
                className={"btn btn-toggle w-100 d-flex justify-content-between align-items-center rounded text-white" +
                    ((active) ? " active" : "") +
                    ((subElements.length > 0) ? " btn-drop" : "")}

                data-bs-toggle="collapse" data-bs-target={"#collapse-" + index}
            >
                {element}
                {(subElements.length > 0) && <i className={"bi bi-caret-right"}></i>}
            </button>


            {(subElements.length > 0 && active) &&
                <div className={"collapse" + ((active) ? " show" : "")} id={"collapse-" + index}>
                    <ul className="btn-toggle-nav list-unstyled pb-1 small">
                        {subElements.map((item, index) =>
                            <NavSubItem key={index} element={item}></NavSubItem>
                        )}
                    </ul>
                </div>
            }
        </li >
    )
}

export default NavItem