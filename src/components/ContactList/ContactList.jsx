import Contact from "../Contact/Contact"
import css from "./ContactList.module.css"

export default function ContactList({ contacts, onDelete}) {

  return (
      <>
          <ul>
            {contacts.map((item => (
            <li key={item.id}>
                <Contact contact={item} onDelete={ onDelete} />
            </li>
            )))}
        </ul>
    </>
  )
}