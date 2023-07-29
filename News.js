import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from './Spinner';
import { PropTypes } from "prop-types";

export class News extends Component {
  article = [
    {
      source: {
        id: "bbc-sport",
        name: "BBC Sport",
      },
      author: null,
      title: "'His dad cut off the cast and he made a hundred'",
      description:
        "As Ben Stokes prepares to play a Test in Wellington, the city he called home for two years, Stephan Shemilt traces the England captain's cricketing roots in New Zealand.",
      url: "http://www.bbc.co.uk/sport/cricket/64728494",
      urlToImage:
        "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/5172/production/_128705802_benstokesinthemerivalpapanuiteam.jpg",
      publishedAt: "2023-02-22T08:07:25.0501381Z",
      content:
        "Ben Stokes (far left) playing for Merivale Papanui in Christchurch in the 2000-01 season\r\nUntil recently Andy Cameron did not know he still has a certificate that rightfully belongs to Ben Stokes.\r\nI… [+7037 chars]",
    },
    {
      source: {
        id: "bloomberg",
        name: "Bloomberg",
      },
      author: null,
      title: "Ambani Streams Cricket League for Free After Paying $2.7 Billion",
      description: "",
      url: "https://www.bloomberg.com/news/articles/2023-02-22/ambani-streams-cricket-league-for-free-after-paying-2-7-billion",
      urlToImage: null,
      publishedAt: "2023-02-22T04:34:00+00:00",
      content: "",
    },
    {
      source: {
        id: "espn-cric-info",
        name: "ESPN Cric Info",
      },
      author: null,
      title:
        "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      description:
        "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      publishedAt: "2020-04-27T11:41:47Z",
      content:
        "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]",
    },
    {
      source: {
        id: "espn-cric-info",
        name: "ESPN Cric Info",
      },
      author: null,
      title:
        "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      description:
        "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      publishedAt: "2020-03-30T15:26:05Z",
      content:
        "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]",
    },
  ];
  static defaultProps = {
    // country: 'in',
    pageSize: 4,
    category: 'general'
  }
  static propTypes = {
    // country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }
  capitalizeFirstLetter = (string) =>{
    return string.charAt(0).toUpperCase() + string.slice(1);
}
  constructor(props) {
    super(props);
    console.log("Hello I am Constructor");
    this.state = {
      articles: this.article,
      loading: false,
      page: 1,
    };
    document.title =  `${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey`;
  }

  async updateNews(pageno){
    console.log("PRe");
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apikey=35d8626e31b849deb4d16b902092303e&page=${
      this.state.page 
    }&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data = await fetch(url); //takes the url and return the promise
    let parseddata = await data.json();
    this.setState({
      articles: parseddata.articles,
      loading:false
    });
  }
  // Runs at last
  async componentDidMount() {
    // let url =
    //   `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apikey=35d8626e31b849deb4d16b902092303e&page=1&pageSize=${this.props.pageSize}`;
    //   this.setState({loading:true})
    // let data = await fetch(url); //takes the url and return the promise
    // let parseddata = await data.json();
    // console.log(parseddata);
    // this.setState({
    //   articles: parseddata.articles,
    //   totalResults: parseddata.totalResults,
    //   loading:false
    // });
    this.updateNews();
  }
  handlePreviousClick = async () => {
    // console.log("PRe");
    // let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apikey=35d8626e31b849deb4d16b902092303e&page=${
    //   this.state.page - 1
    // }&pageSize=${this.props.pageSize}`;
    // this.setState({loading:true})
    // let data = await fetch(url); //takes the url and return the promise
    // let parseddata = await data.json();
    // this.setState({
    //   articles: parseddata.articles,
    //   page: this.state.page - 1,
    //   loading:false
    // });
    this.setState({
      page: this.state.page-1
    })
    this.updateNews()
  };
  handleNextClick = async () => {
    // if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
    //   console.log("Next");
    //   let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.Props.category}&apikey=35d8626e31b849deb4d16b902092303e&page=${this.state.page + 1}&pageSize=${this.Props.pageSize}`;
    //   this.setState({loading:true})
    //   let data = await fetch(url); //takes the url and return the promise
    //   let parseddata = await data.json();
    //   this.setState({
    //     articles: parseddata.articles,
    //     page: this.state.page + 1,
    //     loading:false
    //   });
    // }
    this.setState({
      page: this.state.page+1
    })
    this.updateNews()
  };
  render() {
    return (
      <div className="container my-3">
        
        <div className="row">
          <h1 className="text-center">NewsMonkey - Top HeadLines on {this.capitalizeFirstLetter(this.props.category)} Category</h1>
          {this.state.loading && <Spinner/>}
          {!this.state.loading && this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <Newsitem
                  title={element.title!==null ? element.title : ""}
                  description={element.description!==null ? element.description : ""}
                  imageUrl={
                    element.urlToImage!==null
                      ? element.urlToImage
                      : "https://im.indiatimes.in/content/2023/Feb/FBImage-2_63f5f35f8173c.jpg"
                  }
                  newsurl={element.url} author = {element.author!==null ? element.author : "Unknown"}
                  date = {element.publishedAt!==null ? element.publishedAt : "Not Known"}
                  source = {element.source.id}
                />
              </div>
            );
          })}
          <div className="container d-flex justify-content-between">
            <button
              disabled={this.state.page <= 1}
              type="button"
              onClick={this.handlePreviousClick}
              className="btn btn-dark"
            >
              &larr; Previous
            </button>
            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)}
              type="button"
              onClick={this.handleNextClick}
              className="btn btn-dark"
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default News;



// React Component Lifecycle 
// The series of events that happen from the mounting of a react component to its unmounting

// Mounting - Birth of your component 
// Update - Growth of Your component 
// Unmount - Death of your component

// Methods in React component Lifecylcle 
// render() method is used to render html of the component in React. This method is required for a class based component to render the DOMException.it runs during the mounting and update of your component . render() should be pure i.e you cannot modify the state inside it.Component

// The componentDidMount() method runs after u/p has been render to the DOm.
// the componentDidUpdate() method is invoked as soon as the updating happens. It is mostly used for updating the dom in response to props or state changes.
// The componentWillUnmount() runs just before componentis unmounted and destroyed. Usually used to performs cleanup.