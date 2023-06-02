import { Link } from "react-router-dom"
import style from "./home.module.css"
const HomeCrud = () => {
    return(
        <div id={style.nav}>
            <Link to="/">CreateUser</Link>
            <Link to="/users">Users</Link>
        </div>
    )
}
export default HomeCrud