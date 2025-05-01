import css from './SearchBox.module.css';
import { useDispatch } from "react-redux";
import { changeFilter } from '../../redux/filtersSlice';
import { useSelector } from 'react-redux';

const SearchBox = () => {
    const search = useSelector((state) => state.filters.name);
    // console.log(search);
    const dispatch = useDispatch();

    const handleOnChange = (e) => dispatch(changeFilter(e.target.value));

    return (
    <div className={css.search}>
        <p >Find contacts by name.</p>
            <input
                type='text'
                value = {search}
                onChange={handleOnChange} 
             className={css.inputSearch} />
    </div>
 )}

export default SearchBox;
