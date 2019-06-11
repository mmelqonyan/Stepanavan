class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { likes: 0 };
  }
  render() {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <input type="button" value={`Like: ${this.state.likes}`} onClick={() => { this.setState({ likes: this.state.likes + 1 }) }} />
        <input type="button" value="Dislike" onClick={() => { this.setState({ likes: this.state.likes - 1 }) }} />
      </div>
    )
  }
}
const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(<LikeButton />, domContainer);