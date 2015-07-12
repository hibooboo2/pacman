var PacMan = React.createClass({
    getInitialState: function(){
        window.addEventListener('DOMMouseScroll', this.changeAnimationSpeed, false);
        window.addEventListener('mousewheel', this.changeAnimationSpeed, false);
        return {
            engine: this.props.engine,
            color: "red",
            character: this.props.character,
            animationDuration: 1
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
        this.state.engine.on = !this.state.engine.gameOn;
        this.setState({engine: this.state.engine});
    },
    changeAnimationSpeed: function(e){
        console.log("e");
        if ( e.wheelDelta > 0 ) {
            this.setState({animationDuration: this.state.animationDuration + 0.1});
        } else if (e.wheelDelta < 0) {
            this.setState({animationDuration: this.state.animationDuration - 0.1});
        }
    },
    render: function(){
        var animationConfig = {
            animationName:this.state.character,
            animationDuration: this.state.animationDuration + "s"
        };
        return (
            <div className={"PacMan animate"} style={animationConfig} onWheel={this.changeAnimationSpeed} >

            </div>
        )
    }
});

var CharacterList = React.createClass({
    getInitialState: function(){
        return {
            characters: this.props.characters
        };
    },
    comonentDidMount: function(){
        // componentDidMount is called by react when the component
        // has been rendered on the page. We can set the interval here:
        console.log("hi");
    },
    componentWillUnmount: function(){
        // This method is called immediately before the component is removed
        // from the page and destroyed. We can clear the interval here:
        console.log("hi");
    },
    render: function() {
        var x = [];
        this.state.characters.forEach(function(char, i){
            console.log("Char:" + char);
            x[i] = (<PacMan character={char} />);
        });
        console.log(x);
        return (
            <div className="CharacterList">
                {x}
            </div>
        )
    }
});
chars = ["pacMan-left", "pacMan-right", "msPacMan-left", "msPacMan-right" , "msPacMan-up", "msPacMan-down"];
React.render(
  <CharacterList characters={chars} />,
  document.getElementById('main_Container')
);