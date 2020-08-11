
import React from 'react';

type Props= {};

type State = {
  time: Date;
  buttonMsg: string;
  isClockStopped: boolean;
};

export class Clock extends React.Component<Props, State> {


  constructor(props: Props){
    super(props);
    this.state = {
      "time": new Date(),
      "buttonMsg": "stop Clock",
      "isClockStopped": false
    };

  }

  componentDidMount() {
    this.startOrStopClock({ "targetIsClockStopped": false });
  }

  componentWillUnmount() {
    this.startOrStopClock({ "targetIsClockStopped": true });

  }

  private tick() {
    this.setState({ "time": new Date() })
  }

  private timerId: ReturnType<typeof setInterval> | undefined = undefined;

  private startOrStopClock(params: { targetIsClockStopped: boolean; }) {

    const { targetIsClockStopped } = params;

    if (targetIsClockStopped) {
      clearInterval(this.timerId!);
    } else {
      this.timerId = setInterval(() => this.tick(), 1000);
    }

    this.setState({
      "buttonMsg": targetIsClockStopped ? "Start Clock" : "Stop Clock",
      "isClockStopped": !targetIsClockStopped
    })

  }


  private toggleClock(){
    this.startOrStopClock({ "targetIsClockStopped": this.state.isClockStopped });
  }

  private getButton() {

    return (
      <button onClick={() => this.toggleClock()}>
        {this.state.buttonMsg}
      </button>
    );

  }




  render() {
    return (
      <p>
        it is {this.state.time.toLocaleTimeString()} !
        {this.getButton()}
      </p>
    )
  }
}

