export default function inputField( { Label, Type, placeholder, onChange } ){
    return (
        <div className="mb-3">
            <label className="block text-gray-700 font-medium mb-1">{Label}</label>
            <input type={Type}
                placeholder={placeholder}
                className="w-full p-2 border border-gray-30 rounded"
                onChange={onChange} />
        </div>
    )
}