import TopBar from "../topbar/TopBar";
import "./singlePost.css";

export default function SinglePost() {
 return (
       <div className="SinglePost">
        <div className="singlePostWrapper">
            <img src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
            alt="" 
            className="singlePostImg"
            />
            <h1 className="singlePosttitle">
                Environment means anything that surrounds us. 
                <div className="singlePostEdit">
                <i className="singlePostIcon far fa-edit"></i>
                <i className="singlePostIcon far fa-trash-alt"></i>
                </div>
              </h1>
              <div className="singlePostInfo">
                <span className="singlePostAuthor">
                    Author: <b>Raghav</b>
                    </span>
                <span className="singlePostDate">1 hour ago</span>
        </div>
        <p>
        means anything that surrounds us. It can be living biotic or non-living abiotic things.
         It includes physical, chemical and other natural forces. Living things live in their environment. 
         They constantly interact with it and adapt themselves to conditions in their environment. 
         Environment includes the living and non-living things that an organism interacts with, or 
         has an effect on it. Living elements that an organism interacts with are known as biotic 
         elements: animals, plants, etc., abiotic elements are non living things which include air, 
         water, sunlight etc. Studying the environment means studying the relationships among these 
         various things. An example of interactions between non-living and living things is plants 
         getting their minerals from the soil and making food using sunlight.
        Predation, an organism eating another, is an example of interaction between living things.
      </p>
        </div>
         
      </div>
    
  )
}
