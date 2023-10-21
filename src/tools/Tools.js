export function GeneralBtn({ btnBorderColor, text, textColor }) {
    return (
        <button className="generalBtn" style={{
            color: `${textColor}`,
            border: `2px solid ${btnBorderColor}`
        }}>{text}</button>
    )
}