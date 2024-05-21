import Container3 from "../molecules/Container3";
// import ContainerTitle3 from "../molecules/ContainerTitle3";
import mysql from "../../data/mysql";
import './Section3.css'
// import Title3 from "../atoms/Title3";
import TitleContainer3 from "../molecules/TitleContainer3";


function Section3(){
    return(
        <>
        <div id="SectionTitle">
            <TitleContainer3></TitleContainer3>
        </div>
        
        <div id="sectionBox3">

            
            {
            mysql.data.map(myInfo => <Container3 image={myInfo.image} text={myInfo.text}></Container3>)
            }
        </div> 
        
               
        </>

    );
}

export default Section3;