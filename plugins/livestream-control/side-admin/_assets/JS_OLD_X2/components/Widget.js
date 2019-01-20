import preact from 'preact';

class Widget extends preact.Component {
  state = {
    isContentShown: false
  };

  toggle = event => {
    event.preventDefault();

    this.setState(prevState => ({
      isContentShown: !prevState.isContentShown
    }));
  };

  render() {
    const { isContentShown } = this.state;

    const cx = {
      toggle: `lc-widget__header-toggle dashicons ${
        isContentShown ? 'dashicons-arrow-up' : 'dashicons-arrow-down'
      }`,
      content: 'lc-widget__content animated faster fadeIn'
    };

    return (
      <div className="lc-widget">
        <div className="lc-widget__header">
          <h3 className="lc-widget__title">
            <span>{this.props.title}</span>
            {this.props.meta && <code>{this.props.meta}</code>}
          </h3>

          <button className={cx.toggle} type="button" onClick={this.toggle} />
        </div>

        {isContentShown && <div className={cx.content}>{this.props.children}</div>}
      </div>
    );
  }
}

export default Widget;
