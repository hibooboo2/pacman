var PacMan = React.createClass({
    getInitialState: function(){
        console.log("Engine" + JSON.stringify(this.props.engine));
        return {
            engine: this.props.engine,
            color: "red"
        };
    },
     componentDidMount: function(){
        // componentDidMount is called by react when the component
        // has been rendered on the page. We can set the interval here:
         console.log("hi");
    },
    componentWillUnmount: function(){
        // This method is called immediately before the component is removed
        // from the page and destroyed. We can clear the interval here:
        console.log("hi");
    },
    flip: function(){
        this.state.engine.on = !this.state.engine.on;
        this.setState({engine: this.state.engine});
    },
    changeColor: function(){
      if (this.state.color === "red") {
          this.setState({color: "green"});
      } else {
          this.setState({color:"red"});
      }
    },
    render: function() {
        return (
            <div className="PacManBox" onClick={this.changeColor}>
                <b style={{color:this.state.color}} onClick={this.changeColor}>On:{this.state.engine.on + ""}</b>
                <input type="button" onClick={this.flip}/>
            </div>
        )
    }
});

React.render(
  <PacMan engine={CreateMovementEngine()} />,
  document.getElementById('main_Container')
);
