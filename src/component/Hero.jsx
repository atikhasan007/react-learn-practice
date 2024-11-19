


const Hero = (props) => {
  return (
    <div>
     <h1>{props.title}</h1> 
     <p>{props.des}</p>
     <ul>
        <li>Name:{props.item['name']}</li>
        <li>Age:{props.item['age']}</li>
        <li>City:{props.item['city']}</li>
     </ul>

     <button onClick={props.ChildButtonClick}>ButClick</button>
        <img src="https://w7.pngwing.com/pngs/895/199/png-transparent-spider-man-heroes-download-with-transparent-background-free-thumbnail.png"/>
      
    </div>
  );
};

export default Hero;
