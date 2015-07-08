var PacMan = React.createClass({
    getInitialState: function(){
        return {

        };
    },
     componentDidMount: function(){
        // componentDidMount is called by react when the component
        // has been rendered on the page. We can set the interval here:

    },
    componentWillUnmount: function(){
        // This method is called immediately before the component is removed
        // from the page and destroyed. We can clear the interval here:

    },
    render: function() {
        return (
            <div className="PacManBox">
            </div>
        )
    }
});

React.render(
  <PacMan />,
  document.getElementById('main_Container')
);
