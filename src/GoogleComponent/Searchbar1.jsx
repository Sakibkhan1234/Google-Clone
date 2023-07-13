import style from './home.module.css'
import React from 'react';
import { Link } from 'react-router-dom';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import VideoSettingsIcon from '@mui/icons-material/VideoSettings';
import SearchIcon from '@mui/icons-material/Search';
import DescriptionIcon from '@mui/icons-material/Description';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MicIcon from '@mui/icons-material/Mic';
class Searchbar1 extends React.Component {
    handleChange = (event) => {
        this.setState({
            term: event.target.value
        });
    
    };
    handleSubmit = event => {
        event.preventDefault();
        this.props.handleFormSubmit(this.state.term);
    }

    render() {
        
        return (
            <>
            <div>
           <div className={style.searchpage}>
          <div className={style.searchpage_header} >
          <Link to="/">
            <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" height={30} width={92}/>
          </Link>
          </div>
          <div className={style.searchpage_headerAll}>
            <div className={style.search}>
    
          
            <div className={style.img}>
          <div className={style.search_C}>
          <div>
                <form onSubmit={this.handleSubmit} className='ui form'>
                    <div>
                    <SearchIcon className={style.S} />
                    <input onChange={this.handleChange} name='video-search' type="text" placeholder="Search for Videos"className={style.I}/>
                    <MicIcon className={style.M}/>
                    </div>
                </form>
            </div>
          </div>
        </div>
            </div>
             <div className={style.searchpage_option}>
             <div className={style.searchpage_options}>
             <div className={style.searchpage_options1}>
             <SearchIcon className={style.Icon}/>
             <Link to='/all'>All</Link>
             </div>
             <div className={style.searchpage_options1}>
             <DescriptionIcon className={style.Icon}/>
             <Link to='/news'>News</Link>
             </div>
             <div className={style.searchpage_options1}>
             <ImageSearchIcon className={style.Icon}/>
             <Link to='/images'>Images</Link>
             </div>
             <div className={style.searchpage_options1}>
             <VideoSettingsIcon className={style.Icon}/>
             <Link to='/videos'>Videos</Link>
             </div>
             <div className={style.searchpage_options1}>
             <FmdGoodIcon className={style.Icon}/>
             <Link to='/maps'>Maps</Link>
             </div>
             <div className={style.searchpage_options1}>
             <MoreVertIcon className={style.Icon}/>
             <Link to='/more'>More</Link>
             </div>
             </div>
          </div>
             <div className={style.searchpage_optionright}>
             <div className={style.searchpage_options}>
             <Link to='settings'>Settings</Link>
             </div>
             <div className={style.searchpage_options}>
             <Link to='tools'>Tools</Link>
             </div>
             </div>
             </div>
            </div>
        </div> 
            </>
        )
    }
}
export default Searchbar1;