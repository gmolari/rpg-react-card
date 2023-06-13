import "../styles/button.sass"

function ButtonNext({route, newClass, newClassD}){
    
    return (
        <div className={"div-button "+newClassD}>
            <button onClick={() => route[1](route[0]+1)} className={"button-next "+newClass}>Next</button>
        </div>
    )
}

function ButtonPrev({route, newClass, newClassD}){
    
    return (
        <div className={"div-button "+newClassD}>
            <button onClick={() => {
                if (route[0] != 0) route[1](route[0]-1)
                else return
            }} className={"button-next "+newClass}>Previous</button>
        </div>
    )
}

export {
    ButtonNext,
    ButtonPrev
}