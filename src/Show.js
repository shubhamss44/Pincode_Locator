
import './Show.css'

function Show(props) {
    return (
       (
       <div className="box">
        <table style={{fontSize:"large",fontWeight:"bold"}}>
            <tr>
                <td style={{border:"3px solid black"}} className="serial">Serial No.</td>
                <td style={{border:"3px solid black"}} className="name">Name</td>
                <td style={{border:"3px solid black"}} className="branch">Branch Type</td>
                <td style={{border:"3px solid black"}} className="circle">Circle</td>
                <td style={{border:"3px solid black"}} className="country">Country</td>
                <td style={{border:"3px solid black"}} className="distict">District</td>
                <td style={{border:"3px solid black"}} className="division">Division</td>
                <td style={{border:"3px solid black"}} className="block">Block</td>
                <td style={{border:"3px solid black"}} className="region">Region</td>
                <td style={{border:"3px solid black"}} className="state">State</td>
            </tr>
            {props.postoffices.map((data,index)=>{
              return (
                   <tr className='result-box'>
                 <td style={{border:"2px solid black"}} className="serial-tab">{index+1}</td>
                 <td style={{border:"2px solid black"}} className="name-tab">{data.Name}</td>
                 <td style={{border:"2px solid black"}} className="branch-tab">{data.BranchType}</td>
                 <td style={{border:"2px solid black"}} className="circle-tab">{data.Circle}</td>
                 <td style={{border:"2px solid black"}} className="country-tab">{data.Country}</td>
                 <td style={{border:"2px solid black"}} className="distict-tab">{data.District}</td>
                 <td style={{border:"2px solid black"}} className="division-tab">{data.Division}</td>
                 <td style={{border:"2px solid black"}} className="block-tab">{data.Block}</td>
                 <td style={{border:"2px solid black"}} className="region-tab">{data.Region}</td>
                 <td style={{border:"2px solid black"}} className="state-tab">{data.State}</td>
             </tr>
              )
            })}
        </table>
       </div>
    )
    );
}

export default Show;