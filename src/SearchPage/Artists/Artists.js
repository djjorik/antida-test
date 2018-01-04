import React from 'react';

import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import ListGroup from 'react-bootstrap/lib/ListGroup';

const artists = (props) => {
    let artistList = null;
    if (props.artists.length !== 0) {
        artistList =  props.artists.map((artist, index) => {
            return <ListGroupItem key={index} onClick={() => props.clicked(artist.name)}>{artist.name}</ListGroupItem>
        });
    };
    if (props.artists.length === 0 && props.isRequested) {
        artistList = 'По вашему запросу ничего не найдено'
    };
    return (
        <div>
            <ListGroup>
               {artistList}
            </ListGroup>
        </div>
    )
}

export default artists;


  