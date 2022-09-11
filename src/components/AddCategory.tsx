import React, {SetStateAction, useState} from 'react';

interface Categories{
    setCategories: React.Dispatch<SetStateAction<string[]>>
}

/**
 *
 * @param props
 * @constructor
 */

const AddCategory = (props: Categories) => {

    const [inputValue, setInputValue] = useState('');
    const [categoryExists, setCategoryExists] = useState('');

    /**
     *
     * @param e Recibe como argumento el evento del Form
     * @return {void} Always return void
     */
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        /*Necesita ser una función u operación pura
        La cual no modifique el arreglo directamente*/
        if (inputValue.trim().length > 2){
            props.setCategories((value) => {
                if(!value.some(
                        (value) =>
                            value.toLowerCase() === inputValue.toLowerCase()
                    )
                ){
                    setCategoryExists('');
                    return [inputValue, ...value];
                }
                setCategoryExists('The category exists');
                return value;
            });
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
                <span className={'errorCategory'}>{categoryExists}</span>
            </form>
        </div>
    );
};

export default AddCategory;