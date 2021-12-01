import "./sidebar.css"

export default function Sidebar() {
    return (
        <div className="sidebar">
          <div className="sidebarItem">
            <span className="sidebarTitle">About Me</span>
            <img src="https://images.unsplash.com/photo-1499380848949-2960e980ed02?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" height="300" alt=""/>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptate qui
              necessitatibus nostrum ilum reprehendeit

            </p>
          </div>
          <div className="sidebarItem">
           <span className="sidebarTitle">CATGORIES</span>
           <ul className="sidebarList">
             <li className="sidebarListItem">Life</li>
             <li className="sidebarListItem">Music</li>
             <li className="sidebarListItem">Style</li>
             <li className="sidebarListItem">Sport</li>
             <li className="sidebarListItem">Tech</li>
             <li className="sidebarListItem">Cinema</li>
           </ul>
          </div>
          <div className="sidebarItem">
          <span className="sidebarTitle">Follow Us</span>
          <div className="sidebarSocial">
              <i className="sidebarIcon fab fa-facebook-square"></i>
              <i className="sidebarIcon fab fa-twitter"></i>
              <i className="sidebarIcon fab fa-pinterest-square"></i>
              <i className="sidebarIcon fab fa-instagram"></i>
          </div>
          </div>
        </div>
    );
}