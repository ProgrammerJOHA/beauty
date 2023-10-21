import { BiSearch } from "react-icons/bi";
import { GeneralBtn } from "../tools/Tools";
function Navbar() {
    return (
        <div className="navbar">
                <ul className="top">
                    <li><a href="#">Доставка</a></li>
                    <li><a href="#">Оплата</a></li>
                    <li><a href="#">Отзывы</a></li>
                    <li><a href="#">Вопрос - ответ</a></li>
                    <li><a href="#">Контакты</a></li>
                </ul>
                <div className="main">
                    <div className="logo">
                        <img src="./Img/logo.png" alt="logo" />
                        <h1>BEAUTY</h1>
                    </div>
                    <div className="search">
                        <span><BiSearch /></span>
                        <input type="text" name="search" id="search"/>
                    </div>
                    <h1>8 (812) 123-45-67</h1>
                    <GeneralBtn btnBorderColor={'red'} text={'Обратный звонок'}/>
                </div>
                <div className="line"></div>
                <ul className="bottom">
                    <li><a href="#">Парикмахерская</a></li>
                    <li><a href="#">Барбершоп</a></li>
                    <li><a href="#">Маникюр</a></li>
                    <li><a href="#">Педикюр</a></li>
                    <li><a href="#">Массаж</a></li>
                    <li><a href="#">Мебель</a></li>
                </ul>
        </div>
    )
}
export default Navbar;