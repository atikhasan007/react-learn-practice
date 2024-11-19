
import { useParams } from "react-router-dom";
import Menu from "../component/Menu.jsx";
const profilePage =()=> {

  let {facebookID, YouTubeID} = useParams();
  return (
    <div>
         <Menu/>
         <p>Youtube={YouTubeID}</p>
         <p>FacebookID={facebookID}</p>
        <h1>This page is profile page</h1>
      
    </div>
  );
};

export default profilePage;
