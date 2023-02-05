import React, { Component } from 'react'
import { connect } from 'react-redux'

class Character extends Component {
  render() {
    const { isFetchinging, data, errorMessage } = this.props;
    if ( !isFetchinging && data) {
      return (
        <ul>
          <li>Name: {data.name}</li>
          <li>Born: {data.born}</li>
          <li>
            Titles:
            <ol>
              {data.titles.map((title, index) => (
                <li key={`${title}-${index}`}>{title}</li>
              ))}
            </ol>
          </li>
          <li>
            Aliases:
            <ol>
              {data.aliases.map((alias, index) => (
                <li key={`${alias}-${index}`}>{alias}</li>
              ))}
            </ol>
          </li>
        </ul>
      );
    }
    if (errorMessage) { return <div>{errorMessage}</div>; }
    if (isFetchinging) { return <h3>Loading...</h3>; }
    return <div>Type a character name and click to search!</div>;
  }
}

const mapStateToProps = (state) => ({
  isFetching: state.isFetching,
  data: state.data,
  errorMessage: state.errorMessage,
});

export default connect(mapStateToProps)(Character)
