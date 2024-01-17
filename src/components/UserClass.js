import React from "react"
class UserClass extends React.Component {
    constructor(props) {
        super(props)
        console.log("Hello From Child Construtor", this.props.name)
        this.state = {
            count: 0,
            count1: 2
        }
    }
    componentDidMount() {
        console.log("Hello From Child ComponentDidMount", this.props.name)
    }
    render() {
        console.log("Hello from Child Render", this.props.name)
        return (<div className="user-card">
            <p>{this.state.count}</p>
            <p>{this.state.count1}</p>
            <button onClick={() => {
                this.setState({
                    count: ++this.state.count
                })
            }}>Click</button>
            <h1>{this.props.name}</h1>
            <h2>Ballia</h2>
            <h3>Contact : KSG06</h3>
        </div>)
    }
}

export default UserClass