export default function Nutrition({ nutrition }) {
    return (
        <>
            <span className="font-bold">{nutrition.label}: </span>
            <span>{nutrition.quantity}</span>
            <span> {nutrition.unit}</span>
        </>
    )
}
