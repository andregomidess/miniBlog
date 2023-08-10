import { NavLink } from "react-router-dom";
import styles from "./navbar.module.scss";
import { useAuthValue } from "../../../context/AuthContext";

const Navbar = () => {
    const { user } = useAuthValue();

    return (
        <nav className={`flex justify-between items-center ${styles.navbar}`}>
            <NavLink className="ml-12" to="/">
                Mini <span>Blog</span>
            </NavLink>
            <ul className="flex mr-12">
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) => (isActive ? styles.active : "")}
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/about"
                        className={({ isActive }) => (isActive ? styles.active : "")}
                    >
                        Sobre
                    </NavLink>
                </li>
                {!user && (
                    <>
                        <li>
                            <NavLink
                                to="/login"
                                className={({ isActive }) => (isActive ? styles.active : "")}
                            >
                                Login
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/register"
                                className={({ isActive }) => (isActive ? styles.active : "")}
                            >
                                Cadastrar
                            </NavLink>
                        </li>
                    </>
                )}

                {user && (
                    <>
                        <li>
                            <NavLink
                                to="/post/create"
                                className={({ isActive }) => (isActive ? styles.active : "")}
                            >
                                Novo post
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/dashboard"
                                className={({ isActive }) => (isActive ? styles.active : "")}
                            >
                                Dashboard
                            </NavLink>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;
