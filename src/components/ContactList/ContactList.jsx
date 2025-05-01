import css from './ContactList.module.css'
import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';

const ContactList = () => {

    const contact = useSelector((state) => state.contacts.items);
    const searchName = useSelector((state) => state.filters.name);

    // console.log(contact, searchName);  
   
    return <ul className={css.list}>
        {contact.map((card) => {
            if (card.name.toLowerCase().includes(searchName.toLowerCase()))
            {
                return (<li key={card.id} className={css.cardItem}>
                    <Contact
                        contact={card}
                    />
                </li>);
            }
        
        })}
    </ul>;
};

export default ContactList;