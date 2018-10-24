import React from 'react'

export default class Tile extends React.PureComponent {
  constructor(props) {
    super(props);
    this.timerTick = 1;
    this.stateColour = {
      "tree": "green",
      "empty": "transparent",
      "fire": "red",
      "weakFire" : "orange"
    };
  }

  drawRectangle = () => {
    var ctx = this.props.canvRef.current.getContext("2d")
    ctx.beginPath()

    ctx.rect(this.props.tileData.startPosX, this.props.tileData.startPosY, this.props.tileData.tileWidth, this.props.tileData.tileHeight);
    ctx.fillStyle = "black";
    ctx.fill();
    //ctx.lineWidth = 2;
    ctx.strokeStyle = this.stateColour[this.props.tileData.tileState];
    ctx.stroke();
  }


  componentDidMount() {
    this.drawRectangle()
  }

  componentWillUpdate() {
    if (this.props.currentTimer !== this.timerTick) {
      this.timerTick = this.props.timer
      this.drawRectangle()
    }
  }

  render() {
    return (null);
  }
}
