import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import style from "./home.module.css"

const CreateUser = () => {
    let [name, setName] = useState("")
    let [sal, setSal] = useState("")
    let [comp, setComp] = useState("")

    let nameData = (x) => {
        setName(x.target.value)
    }
    let salData = (x) => {
        setSal(x.target.value)
    }
    let compData = (x) => {
        setComp(x.target.value)
    }
    let nav = useNavigate()
    let submit = (x) => {
        x.preventDefault()
        let payload = {name, sal, comp}
        axios.post("http://localhost:3000/employee", payload)
        .then(()=>{
            console.log("Got Data");
        }).catch(()=>{
            console.log("Something Wrong");
        })
        nav("/users")
    }
    return(
        <div id={style.createuser}>
            <form action="">
                <label htmlFor="">Name </label>
                <input type="text" value={name} onChange={nameData}/><br />
                <label htmlFor="">Salary </label>
                <input type="number" value={sal} onChange={salData}/><br />
                <label htmlFor="">Company </label>
                <input type="text" value={comp} onChange={compData}/><br />
                <button onClick={submit}>Submit</button>
            </form>
        </div>
    )
}
export default CreateUser