import React from "react"

class Comp extends React.Component {

    constructor() {
      super();
      this.state = {
        money: 0,
        test: 100
      };
    }

    render() {
      return (
        <p>
          {this.state.money}
        </p>
      )
    }
}

Comp.defaultProps = {
    
}

export default Comp;