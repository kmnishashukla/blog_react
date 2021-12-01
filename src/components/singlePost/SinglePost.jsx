import "./singlePost.css"

export default function SinglePost() {
    return (
        <div className="singlePost">
           <div className="singlePostWrapper">
              <img src="https://images.unsplash.com/photo-1488197047962-b48492212cda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=867&q=80" alt="" className="singlePostImg"/>
               <h1 className="singlePostTitle">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.Earum, amet
                  <div className="singlePostEdit">
                  <i className=" singlePostIcon far fa-edit"></i>
                  <i className=" singlePostIcon far fa-trash-alt"></i>
                  </div>
               </h1>
               <div className="singlePostInfo">
                 <span className="singlePostAuthor">Author:<b>Safak</b></span>
                 <span className="singlePostDate">1 Hour ago</span>
               </div>
               <p className="singlePostDesc">
               Lorem, ipsum dolor sit amet consectetur adipisicing elit, Ad nesciunt
              minus accusamus magni quaerat cumque blanditis, maiores vero sed nihil
              sapients accusantium soluta aliquid facere excepturi! Cupditate, earum!
              Molestiae, voluptatum?
              Lorem, ipsum dolor sit amet consectetur adipisicing elit, Ad nesciunt
              minus accusamus magni quaerat cumque blanditis, maiores vero sed nihil
              sapients accusantium soluta aliquid facere excepturi! Cupditate, earum!
              Molestiae, voluptatum?
               </p>
           </div>
        </div>
    )
}
