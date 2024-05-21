import Image1 from "../atoms/Image1";
import Text1 from "../atoms/Text1";
import './Container1.css'

function Container1() {
    return(
        <>
            <div id="Logo">
                <Image1></Image1>
            </div>

            <div id="container1">
            {/* <Image image={props.image}></Image> */}
                <Text1></Text1>
            </div>
        </>
            

    );
}

export default Container1;