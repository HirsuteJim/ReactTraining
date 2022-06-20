import React, {Component} from 'react';
class Counter extends Component {
  state = {
    count: 0,
    tags: ['tag1', 'tag2', 'tag3'],
    // tags: [],
    // imageUrl: 'https://picsum.photos/200',
  };

  // We can use a constructor to bind 'this' to a regular 'handleIncrement' function.
  // OR
  // We can define the 'handleIncrement' function as an array function. (MUCH CLEANER)
  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  // handleIncrement() {
  handleIncrement = (product) => {
    console.log(product);
    // console.log('Increment Clicked', this);
    this.setState({count: this.state.count + 1});
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags.</p>;

    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <React.Fragment>
        {/* <img src={this.state.imageUrl} alt='' /> */}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement(this.state.tags[2])}
          className='btn btn-secondary btn-sm'
        >
          Increment
        </button>
        {this.state.tags.length === 0 && 'Please create a new tag!'}
        {this.renderTags()}
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = 'badge m-2 bg-';
    classes += this.state.count === 0 ? 'warning' : 'primary';
    return classes;
  }

  formatCount() {
    const {count} = this.state;
    return count === 0 ? 'Zero' : count;
  }
}

export default Counter;
