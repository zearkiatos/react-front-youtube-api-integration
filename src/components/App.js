import React from 'react';
import SearchBar from './SearchBar';
import youtubeServices from '../apis/youtube';
import VideoList from './VideosList';

class App extends React.Component {
    state = {
        videos: []
    };
    onTermSubmit = async (term) => {
        const response = await youtubeServices.get('/search', {
            params: {
                q: term
            }
        });
        this.setState({ videos: response.data.items });
    };
    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <VideoList videos={this.state.videos}/>
            </div>
        )
    }
}

export default App;