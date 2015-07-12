var PacMan = React.createClass({
    getInitialState: function(){
        //window.addEventListener('DOMMouseScroll', this.changeAnimationSpeed, false);
        //window.addEventListener('mousewheel', this.changeAnimationSpeed, false);
        console.log(this.props.character.name+this.props.dir);
        return {
            engine: this.props.engine,
            color: "red",
            character: this.props.character,
            //animationDuration: 1,
            dir: this.props.dir
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
            animationName: this.state.character.name,
            //animationDuration: this.state.animationDuration + "s",
            //animationTimingFunction: "steps("+ this.state.character.steps+")",
            animationIterationCount: "infinite"
        };
        if (this.state.character.dirs[this.state.dir].transform !== undefined) {
            animationConfig.transform =             this.state.character.dirs[this.state.dir].transform;
        }
        console.log(animationConfig);
        return (
            <div className={"flex Character "+ this.state.character.name + " " + this.state.character.type} style={animationConfig} onWheel={this.changeAnimationSpeed} >
            </div>
        )
    }
});

var CharacterList = React.createClass({
    getInitialState: function(){
        return {
            characters: this.props.characters,
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
        var counter = 0;
        this.state.characters.forEach(function(char){
            console.log("Char:" + char.name);
            for(var dir in char.dirs) {
                console.log(char + dir);
                x[counter] = (<PacMan character={char} dir={dir} />);
                counter++;
            }
        });
        console.log(x);
        return (
            <div className="CharacterList">
                {x}
            </div>
        )
    }
});
var characters = [
        {
            name:"Edible",
            type:"Ghost",
            dirs: {
                left: { transform: "rotate(0deg)" },
                up: { transform: "rotate(90deg)" },
                right: { transform: "rotate(180deg)" },
                down: { transform: "rotate(270deg)" }
            }
        },
        {
            name:"Dying",
            type:"Dying",
            dirs: {
                left: { transform: "rotate(0deg)" },
                up: { transform: "rotate(90deg)" },
                right: { transform: "rotate(180deg)" },
                down: { transform: "rotate(270deg)" }
            }
        },
        {
            name:"DeadGhost",
            type:"Ghost",
            dirs: {
                left: { transform: "rotate(0deg)" },
                up: { transform: "rotate(90deg)" },
                right: { transform: "rotate(180deg)" },
                down: { transform: "rotate(270deg)" }
            }
        },
        {
            name:"Blinky",
            type:"Ghost",
            dirs: {
                left: { transform: "rotate(0deg)" },
                up: { transform: "rotate(90deg)" },
                right: { transform: "rotate(180deg)" },
                down: { transform: "rotate(270deg)" }
            }
        },
        {
            name:"Pinky",
            type:"Ghost",
            dirs: {
                left: { transform: "rotate(0deg)" },
                up: { transform: "rotate(90deg)" },
                right: { transform: "rotate(180deg)" },
                down: { transform: "rotate(270deg)" }
            }
        },
        {
            name:"Inky",
            type:"Ghost",
            dirs: {
                left: { transform: "rotate(0deg)" },
                up: { transform: "rotate(90deg)" },
                right: { transform: "rotate(180deg)" },
                down: { transform: "rotate(270deg)" }
            }
        },
        {
            name:"Clyde",
            type:"Ghost",
            dirs: {
                left: { transform: "rotate(0deg)" },
                up: { transform: "rotate(90deg)" },
                right: { transform: "rotate(180deg)" },
                down: { transform: "rotate(270deg)" }
            }
        },
        {
            name:"MsPacMan",
            type:"PacPerson",
            dirs: {
                left: { transform: "rotate(0deg)" },
                up: { transform: "rotate(90deg)" },
                right: { transform: "rotate(180deg)" },
                down: { transform: "rotate(270deg)" }
            }
        },
        {
            name:"PacMan",
            type:"PacPerson",
            dirs: {
                left: { transform: "rotate(0deg)" },
                up: { transform: "rotate(90deg)" },
                right: { transform: "rotate(180deg)" },
                down: { transform: "rotate(270deg)" }
            }
        }
    ];

React.render(
    <CharacterList characters={characters} />,
    document.getElementById('main_Container')
);