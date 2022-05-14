import {Component} from "react";
import { Link } from "react-router-dom";
import HeaderView from "./Header";
import './Home.css'


class UserData extends Component {
	
	constructor(props) {
		super(props);

		this.state = {
			items: [],
			DataisLoaded: false
		};
	}
	
	componentDidMount() {
		fetch(
"https://jsonplaceholder.typicode.com/users")
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					items: json,
					DataisLoaded: true
				});
                localStorage.setItem("user", JSON.stringify(json));   
			})
	}
	render() {
		
		const { DataisLoaded, items } = this.state;
		if (!DataisLoaded) return <div>
			<h1> Pleses wait some time.... </h1> </div> ;

		return (
		<div className = "App">
			<HeaderView />
			<h1> Candidate List </h1> {
				items.map((item) => (
				<div className="UserList">					
					<Link to={"/details/id="+item.id}>
					<ol key = { item.id } className="listItem" >
					<ol>id: { item.id }</ol>
					<ol>User_Name: { item.username }</ol>
					<ol>Full_Name: { item.name }</ol>
					<ol>User_Email: { item.email }</ol>
					</ol>
					</Link>
				</div>
				))
			}			
			
		</div>
	);
}
}

export default UserData;
