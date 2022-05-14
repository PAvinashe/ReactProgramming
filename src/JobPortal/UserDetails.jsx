import { useParams } from "react-router-dom";
import {Component} from "react";
import HeaderView from "./Header";


class UserDetails extends Component{

    constructor(props) {
		super(props);

		this.state = {
			items1: [],	
             IdObj:{},	
		};    
        this.searchIdFromArray = this.searchIdFromArray.bind(this);    
	}

    componentDidMount() {
		let Id= this.props.match.params.id;
        let IdObj1= this.searchIdFromArray(Id);        
        this.setState({IdObj:IdObj1});
        console.log("LN20", IdObj)
	}

    searchIdFromArray(IdSearch){
        
        items1= localStorage.getItem("user");
        return items1.filter(item => {
            return item.id === IdSearch
          })
    }

    
    render() {      
   
        return(
            <>
               <HeaderView />
               UserDetails

               <div className="UserList1">		
					
					<ol key = { IdObj.id } className="listItem1" >
					<ol>id: { IdObj.id }</ol>
					<ol>User_Name: { IdObj.username }</ol>
					<ol>Full_Name: { IdObj.name }</ol>
					<ol>User_Email: { iIdObjtem.email }</ol>
					</ol>
					
				</div>

               
            </>
        );
    }

}

export default UserDetails;
