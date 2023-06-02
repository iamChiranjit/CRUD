import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomeCrud from "./CRUD/HomeCrud"
import CreateUser from "./CRUD/CreateUser"
import Users from "./CRUD/Users"
import Edit from "./CRUD/Edit"
const App = () => {
    return(
        <div>
            <BrowserRouter>
            <HomeCrud/>
                <Routes>
                    <Route element = {<CreateUser/>} path="/"/>
                    <Route element = {<Users/>} path="/users"/>
                    <Route element = {<Edit/>} path="/edit/:index"/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default App