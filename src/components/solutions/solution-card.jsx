export default function SolutionCard(props) {
    return (
        <div className="max-w-xs rounded-lg shadow-xl bg-gray-900 text-white h-full">
            <img src={props.imageUri} alt="" className="object-fill object-center bg-white rounded-t-lg w-80 h-60 p-5 border-8 border-gray-900" />
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div key={props.id} className="space-y-2">
                    <h2 className="text-2xl font-semibold tracking-wide">{props.name}</h2>
                    <p className="text-white">{props.description}</p>
                </div>
                <button type="button" className="flex items-center justify-center w-full p-3 tracking-wide rounded-full bg-gradient-to-r from-blue-800 via-blue-600 to-blue-400 text-white hover:bg-blue-600 font-medium">Read more</button>
            </div>
        </div>
    )
}