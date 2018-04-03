import React, {Component} from 'react';
import axios from 'axios';
import apiKey from './config';
import PhotoList from './PhotoList'
import Menu from './Menu';

let searchWord = "";
export default class PhotoContainer extends Component {

  constructor() {
    super();
    this.state = {
      photos : [],
      loading: true,
    };
  }

  componentDidMount() {
    searchWord = this.props.match.params.searchWord;
    this.fetchFlickrData(this.props.match.params.searchWord);
  }

  fetchFlickrData(searchWord) {

    axios.get(
      `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${searchWord}&per_page=12&format=json&nojsoncallback=1`
        ).then(response => {

           this.setState({photos: response.data.photos.photo,
                          loading: false})

        }).catch(error => console.log(error))

  }

  componentWillReceiveProps(nextProps) {

    if(nextProps !== this.props) {
      searchWord = nextProps.match.params.searchWord;
      this.setState({loading:true,
                    })
      this.fetchFlickrData(nextProps.match.params.searchWord);
    }

  }

  render() {

    return (
    <div>
      <Menu />
        {
          (this.state.loading)
          ?
           <p>Loading....</p>
          :
            <div className="photo-container">
              <PhotoList photos={this.state.photos} searchWord={searchWord} />
            </div>
         }

    </div>)

  }
}
