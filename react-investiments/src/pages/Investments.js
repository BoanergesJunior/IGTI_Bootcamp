import Data from "../components/Data";
import Header from "../components/Header";
import { investments } from '../data/investments'

export default function Investments() {
    return (
        <>   
            {investments.map(investmentsDescription => {
                return (
                    <Header key={investmentsDescription.id}>
                        <div>
                            <h1 className="text-lg">{investmentsDescription.description}</h1>
                            <span className="text-sm ">Rendimento Total: R$ 123</span>

                            <Data id={investmentsDescription.id}/>
                            </div>
                    </Header>
                    )})
                }
        </>
    )
}
