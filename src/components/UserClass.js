import React from "react"
class UserClass extends React.Component {
    constructor() {
        super()
        // console.log("Hello From Child Construtor", this.props.name)
        this.state = {
            userInfo: {
                name: "Kritee",
                location: "Ballia"
            }
        }
    }
    async componentDidMount() {
        // console.log("Hello From Child ComponentDidMount", this.props.name)
        const data = await fetch("https://api.github.com/users/akshaymarch7");
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo: json
        })
    }
    componentDidUpdate() {
        console.log("Component Did Update Called")
    }
    render() {
        // console.log("Hello from Child Render", this.props.name)
        const { avatar_url, name, location } = this.state.userInfo
        return (<div className="user-card">
            <img src={avatar_url}></img>
            <h1>{name}</h1>
            <h2>{location}</h2>

        </div>)
    }
}

export default UserClass