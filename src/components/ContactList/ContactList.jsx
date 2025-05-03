import css from './ContactList.module.css'
import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';
import { selectLoading, selectError, selectFilteredContacts } from '../../redux/contactsSlice'

const ContactList = () => {
    const error = useSelector(selectError);
    const loading = useSelector(selectLoading);
    const contact = useSelector(selectFilteredContacts);

    // console.log(contact, searchName);  
   
    return <ul className={css.list}>
        {contact.map((card) => {

                return (<li key={card.id} className={css.cardItem}>
                    <Contact
                        contact={card}
                    />
                </li>);
            // }
        
        })}
        {loading && <h3>Please wait. Loading...</h3>}
        {error && <h2>Sorry. Server is dead...</h2>}
    </ul>;
};

export default ContactList;