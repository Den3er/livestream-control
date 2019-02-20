import preact from 'preact';
import ReactPlayer from 'react-player';

class LivePlayer extends preact.Component {
  render() {
    return (
      <div
        style={{
          width: '100%',
          height: '360px',
          backgroundImage: `url(https://img.youtube.com/vi/${this.props.video_id}/0.jpg)`
        }}
      >
        {/* <ReactPlayer url={`https://www.youtube.com/watch?v=${this.props.video_id}`} /> */}
      </div>
    );
  }
}

export default LivePlayer;
