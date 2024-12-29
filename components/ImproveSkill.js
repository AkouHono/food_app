export default function ImproveSkills(){

    const list = [
        "Learn new recepies",
        "Experiment with food",
        "write your own recepies",
        "know nutrition facts",
        "Get cooking tips",
         "Get ranked"
        

    ]
    return(
         <div className="section improve-skills">
            <div className="col img">
                <img src="/img/gallery/img1.jpg " alt=""/>
                      
            </div>
                    <div className="col typography">
                      <h1 className="title">Improve Your Skills</h1>
                      {list.map((item, index) =>(
                        <p className="skill-item" key={index}>{item}</p>
                      ))}
                      <button className="btn" >Signup now</button>
                    </div>
                    
                   
       </div>
    )
}