import {Component} from 'react';
import PropTypes from 'prop-types';
import './App.css';

class Box extends Component {
  render () {
    return (
      <div style={{border: '1px solid #000', margin: 5, padding: 5}}>
        {this.props.children}
      </div>
    );
  }
}

class Article extends Component {
  static propTypes = {
    author: PropTypes.string.isRequired
  }

  render () {
    const {author, children, date, title} = this.props
    return (
      <section>
        <h2>{title}</h2>
        <p><em>Author: {author}</em></p>
        <Box>{date}</Box>
        <article>
          {children}
        </article>
      </section>
    );
  }
}

class App extends Component {
  render () {
    // The children props should use to create layouts
    return (
      <div className="App">
        <h4>Children props</h4>
        <Article
          author='Luis Ovando'
          date={new Date ().toLocaleDateString ()}
          title={'The childen props'}
        >
          <p>The content wrapped on the Article component will send via childen props</p>
          <strong>And will maintent it all tags and components that you added</strong>
        </Article>
      </div>
    );
  }
}

export default App;
