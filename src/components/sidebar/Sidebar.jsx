import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
    <span className="sidebarTitle">About Me</span>
    <img 
    src="https://img.freepik.com/free-photo/flat-lay-batch-cooking-composition_23-2148765597.jpghttps://img.freepik.com/free-photo/paneer-butter-masala-cheese-cottage-curry-served-with-rice-laccha-paratha_466689-73715.jpg?w=400&t=st=1664878280~exp=1664878880~hmac=44249abe1ca64a6f234aa970dfdef521b807a2ef6c07ee9a6110684be2bc36ab" 
    alt="" 
    />
    <p>
    Food is any substance consumed to provide nutritional support for an organism. 
    Food is usually of plant, animal, or fungal origin, and contains essential nutrients, 
    such as carbohydrates, fats, proteins, vitamins, or minerals. The substance is ingested 
    by an organism and assimilated by the organism's cells to provide energy, maintain life, or 
    stimulate growth. Different species of animals have different feeding behaviours that 
    satisfy the needs of their unique metabolisms,  often evolved to fill a specific ecological 
    niche within specific geographical contexts.
            </p>
        </div>
    <div className="sidebarItem">   
    <span className="sidebarTitle">CATEGORIES</span>
    <ul className="sidebarList">
        <li className="sidebarListItem">Chapati</li>
        <li className="sidebarListItem">Pulse</li>
        <li className="sidebarListItem">Rice</li>
        <li className="sidebarListItem">Cucumber</li>
        <li className="sidebarListItem">Cheese</li>
        <li className="sidebarListItem">Carrot</li>
        </ul>
    </div>
    <div className="sidebarItem">
    <span className="sidebarTitle">FOLOW US</span>
    <div className="sidebarSocial">
        <i className="sidebarIcon fab fa-facebook-square"></i>
        <i className="sidebarIcon fab fa-instagram-square"></i>
        <i className="sidebarIcon fab fa-pinterest-square"></i>
        <i className="sidebarIcon fab fa-twitter-square"></i>
    </div>
    </div>
    </div>
   
  );
}
