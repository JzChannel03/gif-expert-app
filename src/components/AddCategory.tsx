import React, {SetStateAction, useState} from 'react';

interface Categories{
    setCategories: React.Dispatch<SetStateAction<string[]>>
}

const AddCategory = (props: Categories) => {

    const [inputValue, setInputValue] = useState('');
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        /*Necesita ser una función u operación pura
        La cual no modifique el arreglo directamente*/
        if (inputValue.trim().length > 2){
            props.setCategories((value) => [...value, inputValue]);
            setInputValue('');
        }
    }

    const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
      setInputValue(e.currentTarget.value);

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Add Category</label>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                />
                <input type="submit"/>
            </form>
        </div>
    );
};

export default AddCategory;