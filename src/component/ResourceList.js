import React,{useState,useEffect} from 'react';
import axios from 'axios';

    //CUSTOM HOOK
    const useResource=(resourceName)={
        

    }

// class ResourceList extends React.Component {
//   state = {
//     resources: [],
//   }

//   async componentDidMount() {
//     const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resourceName}`);

//     this.setState({ resources: response.data });
//   }

//   async componentDidUpdate(prevProps) {
//     if(prevProps.resourceName !== this.props.resourceName) {
//       const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resourceName}`);

//       this.setState({ resources: response.data });
//     }
//   }

//   render() {
//     return (
//       <ul>
//         {this.state.resources.map(resource => (
//           <li key={resource.id}>{resource.title}</li>
//         ))}
//       </ul>
//     )
//   }
// }
const ResourceList=({resourceName})=>{
    const[resources,setResource]=useState([]);

    const fetchResource=async(resourceName)=>{
        const response = await axios.get(`https://jsonplaceholder.typicode.com/${resourceName}`);

          // this.setState({ resources: response.data });
          setResource(response.data);
        
    }
    useEffect(()=>{
        fetchResource(resourceName);


    },[resourceName]);


    return(
        <ul>
        {resources.map(resource=>(
            <li key={resource.id}>{resource.title}</li>
        ))

        }

        </ul>

    )
}



export default ResourceList;
