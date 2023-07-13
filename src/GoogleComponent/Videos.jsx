import style from "./home.module.css"
import React, { useEffect, useState } from 'react'
import SearchBar1 from './Searchbar1';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class Videos extends React.Component {
  state = {
      videos: [],
      selectedVideo: null
  }
  handleSubmit = async (termFromSearchBar) => {
      const response = await youtube.get('/search', {
          params: {
              q: termFromSearchBar
          }
      })

      this.setState({
          videos: response.data.items
      })
      console.log("this is resp",response);
  };
  handleVideoSelect = (video) => {
      this.setState({selectedVideo: video})
  }

  render() {
      return (
        <>
        <SearchBar1 handleFormSubmit={this.handleSubmit}/>

        <div className={style.back}>

          <div className='ui container' style={{marginTop: '1em'}}>
              <div className='ui grid'>
                  <div className="ui row">
                      <div className="eleven wide column">
                          <VideoDetail video={this.state.selectedVideo}/>
                      </div>
                      <div className="five wide column">
                          <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos}/>
                      </div>
                  </div>
              </div>
          </div>
        </div>
          </>
      )
  }
}

export default Videos;