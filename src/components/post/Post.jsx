import "./post.css";

export default function Post() {
  return (
    <div className="post">
        <img src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500 " 
        alt="" 
        />
        <div className="postInfo">
            <div className="postCost">
            <span className="postCat">Environment</span>
            <span className="postCat">Ice</span>
            </div>
            <span className="postTitle">
              Globel Warming and Impacts
            </span>
            <hr/>
            <span className="postData">1 hour ago</span>
        </div>
        <p className="postDesc">
        From heatwaves and shrinking rivers to parched fields and monstrous floods, the world witnessed extreme events throughout August.
            </p>
    </div>
    
  )
}
