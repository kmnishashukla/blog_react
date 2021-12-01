import "./post.css";

export default function Post() {
    return (
        <div className="post">
           <img className="postImg" src="https://images.unsplash.com/photo-1488197047962-b48492212cda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=867&q=80" alt=""
           />
           <div className="postInfo">
               <div className="postCat">
                 <span className="postCat">Music</span>
                 <span className="postCat">Life</span>
               </div>
               <span className="postTitle">
                   Lorem ipsum dolor sit amet 
               </span>
               <hr/>
               <span className="postDate">1 hour ago</span>

           </div>
           <p className="postDesc">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit, Ad nesciunt
              minus accusamus magni quaerat cumque blanditis, maiores vero sed nihil
              sapients accusantium soluta aliquid facere excepturi! Cupditate, earum!
              Molestiae, voluptatum?
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
    )
}