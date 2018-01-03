import React from 'react';

import './InputContainer.css';
import Button from 'react-bootstrap/lib/Button';
import FormControl from 'react-bootstrap/lib/FormControl';



const inputContainer = (props) => {
    let searchWord = null;
    if (props.value) {
        searchWord = props.value;
    }

    let error = null;
    if (props.error) {
        error = props.error
    }

    return (
        <div className="InputContainer">
            <div className="wrapper">
                <FormControl
                    type="text"
                    placeholder="Введите имя исполнителя"
                    value={props.value}
                    onChange={props.changed}
                    onKeyPress={props.enterHandler}
                />
                <Button bsStyle="success" onClick={props.searchRequest}
                    >Искать</Button>
            </div>
            <span>{error}</span>
        </div>
    );
}


export default inputContainer;