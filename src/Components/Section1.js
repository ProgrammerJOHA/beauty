import { GeneralBtn } from "../tools/Tools";


export function Section1() {
    return (
        <section className="section1">
            <div className="textdiv">
                <h1>Супер кресло</h1>
                <p>Текст акции всегда отражает суть, а не просто <br />
                    болтовню, поэтому внимательнее</p>
            </div>
            <GeneralBtn btnBorderColor={'white'} text={'Подробнее'} textColor={'white'} />
        </section>
    )
}