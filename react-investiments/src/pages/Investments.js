import Data from "../components/Data";
import Header from "../components/Header";
import Main from "../components/Main";

import { investments } from '../data/investments'

export default function Investments() {
    return (
        <> 
            <Main>
                {investments.map(investmentsDescription => {
                    return (
                        <Header key={investmentsDescription.id}>
                            <div>
                                <h1 className="font-mono text-lg">{investmentsDescription.description}</h1>
                                <Data id={investmentsDescription.id} TotalPercentage="TotalPercentage"/>
                            </div>
                        </Header>
                        )})
                    }
            </Main>
        </>
    )
}
