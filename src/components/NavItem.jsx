import { useState } from "react"
import NavSubItem from "./NavSubItem"

const NavItem = ({ index, item, isActive, setIsActive }) => {
    const { element, subElements } = item

    // Estado para los subItems (Almacena el indice del elemento activo)
    const [isSubActive, setIsSubActive] = useState(null)

    const background = (isActive) ? ' bg-secondary active' : ''
    const color = (isActive) ? ' text-info active' : ''
    const additionalClass = (subElements.length > 0) ? background : color

    const handleClick = () => {
        // Si se cerro el drop (es false) -> poner en null el activo
        if (!isActive) {
            setIsActive(index)
        } else {
            setIsActive(null)
            // Si se cerro el drop, resetear el active de los hijos
            setIsSubActive(null)
        }
    }

    return (
        <li className="mb-1 ">
            <button onClick={handleClick}
                className={"btn btn-toggle w-100 d-flex justify-content-between align-items-center rounded " +  additionalClass}
                data-bs-toggle="collapse" data-bs-target={"#collapse-" + index}>
                {element}
                {(subElements.length > 0) && <i className={"bi bi-caret-right btn-drop"}></i>}
            </button>

            {/* Mostrar los subElementos solo si hay elementos*/}
            {(subElements.length > 0) &&
                <div className={"collapse" + ((isActive) ? " show" : "")} id={"collapse-" + index}>
                    <ul className="btn-toggle-nav list-unstyled pb-1 small">
                        {subElements.map((item, index) =>
                            <NavSubItem
                                key={index}
                                index={index}
                                element={item}
                                isSubActive={(isSubActive === index) ? true : false} //Is sub active tiene el index del que esta activo
                                setIsSubActive={setIsSubActive}
                            />
                        )}
                    </ul>
                </div>
            }
        </li >
    )
}

export default NavItem