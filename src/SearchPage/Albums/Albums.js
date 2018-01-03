import React from 'react';

import './Albums.css';

const albums = (props) => {
    console.log(props)
    let allAlbums = null;
    if (props.albums !== 0) {
        allAlbums = props.albums.map((album, index) => {
            if (album.image[2]['#text'] === '') return (
                <div key={index} className="imageBlock">
                    <span>{album.name === '(null)' ? 'У этого альбома нет названия' : album.name}</span> <br />
                    <span>Для этого альбома нет картинки</span>
                </div>
            )
            return <div key={index} className="imageBlock"><img  src={album.image[2]['#text']} alt="Для этого альбома нет картинки" /></div>
        })
    }

    if (props.albums === 0) {
        allAlbums = 'Альбомов для данного исполнителя не найдено'
    }

    return (
        <div className="Albums">
            <strong>Альбомы {props.curArtistName}</strong>
            <div className="wrapper">
                {allAlbums}
            </div>
        </div>
    );
}

export default albums;