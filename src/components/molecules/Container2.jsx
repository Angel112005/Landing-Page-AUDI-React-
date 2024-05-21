import Description2 from "../atoms/Description2";
import Image2 from "../atoms/Image2";
import Text2 from "../atoms/Text2";
import "./Container2.css";

function Container2() {
  return (
    <>
      <div id="imgC2">
        <Image2></Image2>
      </div>

      <div id="MainBox2">
        <div id="TxtC2">
          <Text2></Text2>
        </div>

        <div id="Desc2">
          <Description2></Description2>
        </div>
      </div>
    </>
  );
}

export default Container2;
