var React = require('react');
var {Link}  = require('react-router');
/*var Examples = React.createClass({
    render: function() {
        return(
            <h3>Examples Component</h3>
        );
    }
}); */

var Examples = () => {
    return(
        <div>
            <h1 className="text-center">Examples</h1>
            <p>Hare are few example locations to try out:</p>
            <ol>
                <li>
                    <Link to='/?location=Austin'>Austin, TX</Link>
                </li>
                <li>
                    <Link to='/?location=Rio'>Rio, Brazil</Link>
                </li>
            </ol>
        </div>    
        );
};

module.exports = Examples;