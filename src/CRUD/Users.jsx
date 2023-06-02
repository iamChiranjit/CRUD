import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import style from "./home.module.css"

const Users = () => {
    let [content, setContent] = useState([])


    useEffect(()=>{
        axios.get("http://localhost:3000/employee")
        .then((e)=>{
            setContent(e.data)
        })
    }, [])

    let deleteData = (x) => {
        axios.delete(`http://localhost:3000/employee/${x}`)
        window.location.assign("/users")
    }
    return(
        <div id={style.user}>
            {content.map((x)=>{
                return(
                    <div id={style.box}>
                        <table>
                            <th colSpan="2">Employee: {x.id}</th>
                            <tr>
                                <td>Name: </td>
                                <td>{x.name}</td>
                            </tr>
                            <tr>
                                <td>Salary: </td>
                                <td>{x.sal}</td>
                            </tr>
                            <tr>
                                <td>Company: </td>
                                <td>{x.comp}</td>
                            </tr>
                            <tr>
                                <td><button><Link to={`/edit/${x.id}`}>Edit</Link></button></td>
                                <td><button onClick={()=>{deleteData(x.id)}}>Delete</button></td>
                            </tr>
                        </table>
                    </div>
                )
            })}
        </div>
    )
}
export default Users