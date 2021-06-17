import _ from 'lodash'

export default function CardCandidate({children}) {
    return (
        <div className="flex flex-row flex-wrap justify-center font-mono">         
            {children}
        </div>
    )
}
