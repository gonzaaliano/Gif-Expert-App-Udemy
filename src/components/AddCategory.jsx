import { useState } from "react";
import PropTypes from "proptypes";

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = (event) => {
        console.log(event.target.value)
        setInputValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) return;

        // setCategories(categories => [inputValue, ...categories]);
        setInputValue('');
        onNewCategory(inputValue.trim());
    }


    return (
        <form onSubmit={(event) => onSubmit(event)} aria-label='form'>
            <input
                type="text"
                placeholder="Search GIFs"
                value={inputValue}
                onChange={(event) => onInputChange(event)}
            />
        </form>
    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}