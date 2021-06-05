export default function DateInput({
    labelDescription = 'Descricao do label: ',
    inputValue = '2021-04-30',
    onInputChange = null
}) {
    function handleInputChange({currentTarget}) {
        if(onInputChange) {
            const newValue = currentTarget.value
            onInputChange(newValue)
        }
    }   

    return (
        <div className="flex flex-col my-4">
            <label className="text-sm text-gray-500 mb-2" htmlFor="inputName">
                {labelDescription} 
            </label>
            <input autoFocus id="inputName" className="border p-1" type="date" value={inputValue} onChange={handleInputChange}/>
        </div>
    )
}
