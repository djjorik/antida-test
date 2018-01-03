import React from 'react';

import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import ListGroup from 'react-bootstrap/lib/ListGroup';

const results = (props) => {
    let resultList = null;
    if (props.results.length !== 0) {
        resultList =  props.results.map((result, index) => {
            return <ListGroupItem key={index} onClick={() => props.clicked(result.name)}>{result.name}</ListGroupItem>
        });
    };
    if (props.results.length === 0 && props.isRequested) {
        resultList = 'По вашему запросу ничего не найдено'
    };
    return (
        <div>
            <ListGroup>
               {resultList}
            </ListGroup>
        </div>
    )
}

export default results;


  