import React from 'react';
import SearchBar from './SearchBar';
import youtubeServices from '../apis/youtube'

class App extends React.Component {
    onTermSubmit = (term) => {
        youtubeServices.get('/search', {
            params: {
                q: term
            }
        })
    };
    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
            </div>
        )
    }
}

export default App;