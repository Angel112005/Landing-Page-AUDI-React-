import Images3 from "../atoms/Images3";
import Text3 from "../atoms/Text3";
import Title3 from "../atoms/Title3";
import './Container3.css'

function Container3(props) {
    return(
        <>
            
            <div id="MainBox3">
                
                <div>
                    <Images3 image={props.image}></Images3>
                </div>
                <div>
                    <Text3 text={props.text}></Text3>
                </div>
            </div>
        </>


    );
}

export default Container3;