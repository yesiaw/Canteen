import { NavLink } from "react-router-dom";

const Menu = () => {
    return (
        <div>
            <NavLink to="/catigories/hotdishes">Горячие блюда </NavLink>
            <NavLink to="/catigories/salads">Салаты  </NavLink>
            <NavLink to="/catigories/colddishes">Холодные блюда</NavLink>

        </div>

    )
}

export default Menu;