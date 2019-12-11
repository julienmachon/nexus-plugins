import React from "react";

export default class RenderRemoteComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, loading: true };
    this.container = React.createRef();
  }

  componentDidCatch(e) {
    console.error(e);
    this.setState({ hasError: true, loading: false });
  }

  componentDidMount() {
    window.System.import(this.props.url)
      .then(module => {
        this.setState({
          hasError: false,
          loading: false
        });
        module.default(this.container.current);
      })
      .catch(e => {
        console.error(e);
        this.setState({ hasError: true, loading: false });
      });
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    if (this.state.loading) {
      return <h1>loading...</h1>;
    }
    return <div className="remote-component" ref={this.container}></div>;
  }
}
