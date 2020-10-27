import "./SearchBar.css";
import React from "react";

class SearchBar extends React.Component {
  state = { searchterm: "" };

  onInputChange = (event) => {
    this.setState({ searchterm: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onFormSubmit(this.state.searchterm);
  };

  render() {
    return (
      <div className="search-bar ui black inverted segment">
        <form onSubmit={this.onFormSubmit} className="ui inverted form">
          <div className="field">
            <label>YouTube</label>
            <div className="ui icon input">
              <input
                type="text"
                placeholder="Search"
                value={this.state.searchterm}
                onChange={this.onInputChange}
              />
              <i className="search icon"></i>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
