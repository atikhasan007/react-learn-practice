import { useParams } from "react-router-dom";
import Menu from "../component/Menu.jsx";

const productPage =()=> {

  let {id, name} = useParams();
  return (
    <div>
        <Menu/>
        <p>Id:{id}</p>
        <p>Name:{name}</p>
        <h1>This is product page</h1>
      
    </div>
  );
};

export default productPage;
