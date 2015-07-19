var KeyMapper = React.createClass({
    getInitialState: function(){
        Mousetrap.bind(this.props.keyToUse, this.props.toCall);
        return {
            toCall: this.props.toCall,
            toCallName: this.props.toCallName,
            keyToUse: this.props.keyToUse,
            description: this.props.description
        };
    },
    comonentDidMount: function(){
        // componentDidMount is called by react when the component
        // has been rendered on the page. We can set the interval here:
    },
    componentWillUnmount: function(){
        // This method is called immediately before the component is removed
        // from the page and destroyed. We can clear the interval here:
        Mousetrap.unbind(this.state.keyToUse);
    },record: function(sequence) {
        // sequence is an array like ['ctrl+k', 'c']
        Mousetrap.unbind(this.state.keyToUse);
        Mousetrap.bind(sequence.join(' '), this.props.toCall);
        this.setState({keyToUse: sequence.join(' ')});
    },
    changeMapping: function() {
        Mousetrap.record(this.record);
    },
    render: function() {
        return (
            <div className="KeyMapper">
                {this.state.toCallName} = <input type="button" onClick={this.changeMapping} value={this.state.keyToUse}/>
            </div>
        );
    }
});