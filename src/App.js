import React from 'react';
import './App.css';
import Header from "./components/Header";
import Upload from "./components/Upload";

class App extends React.Component{

  imageList = [];

  state = {
    changer: (c) => {
      this.setState({page: c});
    },
    uploader: (i) => {
      this.imageList.push(i);
      this.setState({
        imgList: this.imageList
      });
    },
    page: true,
    imgList: []
  }


  changePage = () => {
    this.setState({
      page: true
    })
  }

  render() {
    return(
        <div>
          <button onClick={() => this.changePage()}>upload page</button>
          {
            this.state.page ? (
            <Header changer={this.state.changer} uploader={this.state.uploader} />
            ) : (
            <Upload imgList={this.state.imgList} />
            )
          }
        </div>
    )}
}

export default App;
