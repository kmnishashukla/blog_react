import "./write.css"

export default function Write() {
    return (
        <div className="write">
           <img className="writeImg" src="https://images.unsplash.com/photo-1437209484568-e63b90a34f8b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80"  alt= ""/>
            <form className="writeForm">
                <div className="writeFormGroup">
                   <label htmlFor="fileInput">
                   <i className="writeIcon fas fa-plus"></i>
                   </label>
                   <input type="file" id="fileInput" style={{display:"none"}}/>
                   <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>
                </div>
                <div className="writeFormGroup">
                   <textarea placeholder="Tell your story..." type="text" className="writeInput writeText">

                   </textarea>
                </div>
                <button className="writeSubmit">Publish </button>
            </form>
        </div>
    )
}
