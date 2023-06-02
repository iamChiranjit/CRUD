import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import style from "./home.module.css"

const Edit = () => {
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

    let {index} = useParams()

    useEffect(()=>{
        axios.get(`http://localhost:3000/employee/${index}`)
        .then((x)=>{
            setName(x.data.name)
            setSal(x.data.sal)
            setComp(x.data.comp)
        })
    }, [index])
    let nav = useNavigate()
    let update = () => {
        let payload = {name, sal, comp}
        axios.put(`http://localhost:3000/employee/${index}`, payload)
        nav("/users")
    }
    return(
        <div id={style.edit}>
            <form action="">
                <label htmlFor="">Name </label>
                <input type="text" value={name} onChange={nameData}/><br />
                <label htmlFor="">Salary </label>
                <input type="number" value={sal} onChange={salData}/><br />
                <label htmlFor="">Company </label>
                <input type="text" value={comp} onChange={compData}/><br />
                <button onClick={update}>Update</button>
            </form>
        </div>
    )
}
export default Edit