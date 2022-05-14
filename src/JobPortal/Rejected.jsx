import {Component} from "react";
import HeaderView from "./Header";


class RejectedUsers extends Component{

    constructor(props) {
		super(props);

		this.state = {
			items3: [],			
		};        
	}

    render() {

        return(
            <>
               <HeaderView />
               Rejected Users
            </>
        );
    }

}

export default RejectedUsers;
