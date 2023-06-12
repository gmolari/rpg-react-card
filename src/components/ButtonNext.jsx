

function ButtonNext({route}){
    
    return (
        <div className="div-button-next">
            <button onClick={() => route[1](route[0]+1)} className="button-next">Next</button>
        </div>
    )
}

function ButtonPrev({route}){
    
    return (
        <div className="div-button-next">
            <button onClick={() => {
                if (route[0] != 0) route[1](route[0]-1)
                else return
            }} className="button-next">Previous</button>
        </div>
    )
}

export {
    ButtonNext,
    ButtonPrev
}