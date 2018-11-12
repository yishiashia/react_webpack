import React from 'react';
import CSRFToken from '../components/CSRFToken';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      headings: "Article title"
    };
  }

  componentDidMount() {
  }

  render() {

    return (
      <div className="container">
        <CSRFToken />
        <article>
          <h1>{this.state.headings}</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto nulla eius fuga illum a nostrum totam ea magnam quasi, ad doloribus, voluptas eos molestias, maxime reprehenderit praesentium. Vitae doloribus, quia.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto nulla eius fuga illum a nostrum totam ea magnam quasi, ad doloribus, voluptas eos molestias, maxime reprehenderit praesentium. Vitae doloribus, quia.</p>
        </article>
      </div>
    );
  }
}

export default Home;
