import React, {Component} from 'react';

class Home extends Component {
	constructor(props){
		super(props),
		this.state={
			count:0
		}
	}
	_handleClick(){
		this.setState({
			count:++this.state.count
		})
	}
    render() {
        return (
            <div>
                this is home{this.state.count}
                <button onClick={this._handleClick.bind(this)}>增加1!</button>
            </div>
        )
    }
}
export default Home;
