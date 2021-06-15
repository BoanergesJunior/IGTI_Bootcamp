import antman from '../assets/antman.png'

export default function CardInfo() {

    return (
        <>
            <div className="shadow-xl w-48 h-44 rounded-sm m-2">
            <div className="flex flex-row items-center space-x-9">
                    <img src={antman} alt="antman" className="w-14 rounded-full m-2"/>
                    <div className="flex flex-col items-center">
                        <span>14%</span>
                        <span className="text-xs">12312 votos</span>
                    </div>
                </div>
                <div className="text-xl text-center m-5">name</div>
                <div className="font-sans text-center">Não eleito</div>
            </div>
        </>
    )
}
