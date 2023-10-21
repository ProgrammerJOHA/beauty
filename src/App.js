import CardParent from "./Components/CardParent";
import { FooterParent } from "./Components/FooterParent";
import Navbar from "./Components/Navbar";
import { Pinkdiv } from "./Components/Pinkdiv";
import { Section1 } from "./Components/Section1.js";
import './Main.css';
import { GeneralBtn } from "./tools/Tools";

function App() {
  return (
    <div className="App">
      {/* Navbar qismi */}
      <Navbar />
      <Section1 />
      <CardParent Texth1={'Специальные предложения'}/>
      <div className="ParentPink">
        <Pinkdiv Pinkh1={`Получайте бонусы и подарки`} Pinkp={'Каждый месяц разыгрываем 10 000 рублей для наших клиентов'} Notknow={<input type="text" placeholder="Введите e-mail" />} Img={<img src="./Img/envelope.png" alt="Img" />} />
        <Pinkdiv Pinkh1={`Получайте бонусы и подарки`} Pinkp={'Каждый месяц разыгрываем 10 000 рублей для наших клиентов'} Notknow={<GeneralBtn btnBorderColor={'white'} text={'Карта магазинов'} textColor={'white'} />} Img={<img src="./Img/Vector.png" alt="Img" />}/>
      </div>
      <div className="backgroundParent">
      <div className="logoParent">
        <div className="logos">
          <img src="./Img/image.png" alt="imglogo" />
          <img src="./Img/image.png" alt="imglogo" />
          <img src="./Img/image.png" alt="imglogo" />
        </div>
        <div className="logos">
          <img src="./Img/image.png" alt="imglogo" />
          <img src="./Img/image.png" alt="imglogo" />
          <img src="./Img/image.png" alt="imglogo" />
        </div>
        <div className="logos">
          <img src="./Img/image.png" alt="imglogo" />
          <img src="./Img/image.png" alt="imglogo" />
          <img src="./Img/image.png" alt="imglogo" />
        </div>
        <div className="logos">
          <img src="./Img/image.png" alt="imglogo" />
          <img src="./Img/image.png" alt="imglogo" />
          <img src="./Img/image.png" alt="imglogo" />
        </div>
      </div>
      </div>
      <div className="Cards2">
      <CardParent Texth1={'Вы недавно смотрели'}/>
      </div>
      <FooterParent />
      <div className="footer2">
        <div className="footerImges">
          <div className="footerImg">
            <img src="./Img/Vector (1).png" alt="" />
          </div>
          <div className="footerImg">
            <img src="./Img/Group.png" alt="" />
          </div>
          <div className="footerImg">
            <img src="./Img/facebook-logo.png" alt="" />
          </div>
          <div className="footerImg">
            <img src="./Img/instagram.png" alt="" />
          </div>
        </div>
        <h1>198555, Невский пр. 140, офис 140</h1>
        <p>8 (812) 123-45-67</p>
        <GeneralBtn btnBorderColor={'red'} text={'Обратный звонок'} textColor={'black'}/>
      </div>
    </div>
  )
}

export default App;
