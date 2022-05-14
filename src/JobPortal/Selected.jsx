import {Component} from "react";
import HeaderView from "./Header";


class SelectedUsers extends Component{

    constructor(props) {
		super(props);

		this.state = {
			items2: [],			
		};        
	}

    render() {

        return(
            <>
               <HeaderView />
               Selected Users
            </>
        );
    }

}

export default SelectedUsers;