import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const tweet = require('/src/images/tweet.png')
const tumblr = require('/src/images/tumblr.png')


const quotes = [
  {
    text:
      "I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel",
    author: "- Maya Angelou",
    color: "rgba(0, 0, 0, .6)"
  },
  {
    text: "Life shrinks or expands in proportion to one’s courage.",
    author: "- Anais Nin",
    color: "rgba(255, 165, 0, .6)"
  },
  {
    text: "Strive not to be a success, but rather to be of value.",
    author: "- Albert Einstein",
    color: "rgba(255, 0, 0, .6)"
  },
  {
    text:
      "In order to succeed, your desire for success should be greater than your fear of failure.",
    author: "- Bill Cosby",
    color: "rgba(255, 0, 0, .6)"
  },
  {
    text:
      "Whatever you can do, or dream you can, begin it. Boldness has genius, power and magic in it.",
    author: "- Johann Wolfgang von Goethe",
    color: "rgba(0, 255, 0, .6)"
  },
  {
    text: "We must balance conspicuous consumption with conscious capitalism.",
    author: "- Kevin Kruse",
    color: "rgba(0, 127, 255, .6)"
  },
  {
    text:
      "I am not a product of my circumstances. I am a product of my decisions.",
    author: "- Stephen Covey",
    color: "rgba(139, 0, 255, .6)"
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: {
        text: quotes[0].text,
        author: quotes[0].author,
        color: quotes[0].color
      },
      currentIndex: 0
    };
    this.randomQuote = this.randomQuote.bind(this);
  }
  componentDidMount() {
    this.text = document.querySelector("#text");
    this.author = document.querySelector("#author");
    this.text.addEventListener("animationend", function() {
      this.style.removeProperty("animation");
    });
    this.author.addEventListener("animationend", function() {
      this.style.removeProperty("animation");
    });
  }
  randomQuote() {
    let randomIndex;
    let currentIndex = this.state.currentIndex;
    do {
      randomIndex = Math.floor(Math.random() * quotes.length);
    } while(currentIndex === randomIndex)
    console.log(randomIndex, currentIndex)
    let nextQuote = quotes[randomIndex];
    this.setState({
      quote: {
        text: nextQuote.text,
        author: nextQuote.author,
        color: nextQuote.color
      },
      currentIndex: randomIndex
    });
    document.body.style.backgroundColor = nextQuote.color;
    this.text.style.animation = "changeOpacity 2s";
    this.author.style.animation = "changeOpacity 2s";
  }
  render() {
    const tweetBackImg = {
      backgroundColor: this.state.quote.color,
      backgroundImage: 'url('+tweet+')',
      backgroundSize: '30px',
      backgroundRepeat: "no-repeat",
      backgroundPosition: "5px 5px"
    }
    const tumblrBackImg = {
      backgroundColor: this.state.quote.color,
      backgroundImage: 'url('+tumblr+')',
      backgroundSize: '30px',
      backgroundRepeat: "no-repeat",
      backgroundPosition: "5px 5px"
    }
    return (
      <div id="quote-box">
      <div id="text" style={{ color: this.state.quote.color }}>
          {this.state.quote.text}
        </div>
        <div id="author">
          <p style={{ color: this.state.quote.color }}>
            {this.state.quote.author}
          </p>
        </div>
        <div>
          <a
            href="https://twitter.com/intent/tweet"
            id="tweet-quote"
            style={tweetBackImg}
          >
          </a>
          <a
            href="https://www.tumblr.com/widgets/share/tool"
            id="tumblr-quote"
            style={tumblrBackImg}
          >
          </a>
          <a
            id="new-quote"
            onClick={this.randomQuote}
            style={{ backgroundColor: this.state.quote.color }}
          >
            New quote
          </a>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
