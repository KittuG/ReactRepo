import User from "./User";
import UserClass from "./UserClass";
import React from "react";
// const About = () => {
//     return (
//         <div>
//             <User name={"Kritee Sagar (Function)"} />
//             <UserClass name={"Kritee Sagar - Class"} />
//             <h1>About Learning</h1>
//         </div>
//     )
// }



class About extends React.Component {
    constructor(props) {
        super(props);
        // console.log("Hello From Parent Construtor")
    }
    componentDidMount() {
        // console.log("Hello From Parent componentDidMount")
    }
    render() {
        // console.log("Hello From Parent render")
        return (
            <div>
                <UserClass name={"Kritee Sagar - Class"} />
                <h1>About Learning</h1>
            </div>
        )
    }
}
export default About;