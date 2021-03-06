import React, { Component } from 'react';
import axios from 'axios';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from "react-router-dom";

import InputContainer from './InputContainer/InputContainer';
import Artists from './Artists/Artists';
import Albums from './Albums/Albums';



const API_KEY = 'c06728309b384d47ffce7566b4e78801';


class SearchPage extends Component {
    state = {
        inputValue: '',
        artists: [],
        albums: [],
        albumIsRequested: false,
        error: '',
        curArtistName: ''
    };

    inputHandler = (event) => {
        this.setState({
            ...this.state,
            inputValue: event.target.value
        })
    }

    sendSearchArtistRequest = () => {
        axios.get('http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=' + this.state.inputValue + '&api_key=' + API_KEY + '&format=json')
            .then(response => {
                console.log('response Artist');
                this.setState({
                    ...this.state,
                    error: ''
                });
                const allArtists = response.data.results.artistmatches.artist;

                this.setState({
                    ...this.state,
                    artists: allArtists
                });
            })
            .catch(error => {
                console.log('error Artist')
                this.setState({
                    ...this.state,
                    error: 'Вы не правильно ввели имя исполнителя'
                });
            });
    }

    sendSearchAlbumRequest = (name) => {
        axios.get('http://ws.audioscrobbler.com/2.0/?method=album.search&album=' + name + '&api_key=' + API_KEY + '&format=json')
            .then(response => {
                console.log(response);
                const allAlbums = response.data.results.albummatches.album;
                this.setState({
                    ...this.state,
                    albums: allAlbums,
                    curArtistName: name
                });
                this.props.history.push('/albums');
            })
            .catch(error => {
                console.error(error)
            });
    }

    handleKeyPress = (event) => {
        if(event.key === 'Enter'){
          this.sendSearchArtistRequest();
        }
      }

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/albums' render={(props) => (
                        <div>
                            <Albums albums={this.state.albums}
                                isRequested={this.state.albumIsRequested}
                                curArtistName={this.state.curArtistName} />
                        </div>
                    )} />
                    <Route exact path='/' render={(props) => (
                        <div>
                            <InputContainer value={this.state.inputValue}
                                changed={(event) => this.inputHandler(event)}
                                searchRequest={this.sendSearchArtistRequest}
                                error={this.state.error}
                                enterHandler={this.handleKeyPress} />
                            <Artists artists={this.state.artists}
                                clicked={this.sendSearchAlbumRequest}
                            />
                        </div>
                    )} />
                    <Route render={() => <h1>Страница не найдена</h1>} />
                </Switch>
            </div>
        );
    }
}


export default withRouter(SearchPage);
