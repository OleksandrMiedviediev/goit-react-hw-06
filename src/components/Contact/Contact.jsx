import { HiPhone } from "@react-icons/all-files/hi/HiPhone";
import { HiUser } from "@react-icons/all-files/hi/HiUser";
import css from "./Contact.module.css"
export default function Contact({ contact: { name, number, id }, onDelete }) {


  return (
      <>
        <div className={css.container}>
            <div>
                <p><HiUser/> {name}</p>
                <p><HiPhone /> {number}</p>
            </div>
                <button className={css.btn} onClick={()=>{onDelete(id)}}>Delete</button>
        </div>
    </>
  )
}