import { api } from "../util/api"
import { useEffect, useState } from "react"
import { useQuery } from "react-query"

export default function useRaces(){
    const [content, setContent] = useState()
    const [changeRaces, setChangeRaces] = useState(true)
    const [whichRaces, setWhichRaces] = useState('races')

    const {isLoading, error, data, refetch} = useQuery('data', getRaces)

    async function getRaces(){
        let value = await api.get(whichRaces)
        if (changeRaces) setContent(value.data)
        return value.data
    }

    useEffect(() => {
        setWhichRaces('races/url')
        console.log('rodando1')
    }, [changeRaces])

    useEffect(() => {
        refetch ? refetch() : ''
        console.log('rodando2')
    }, [whichRaces])

    return {
        content,
        data,
        isLoading,
        error,
        refetch,
        setChangeRaces,
        setWhichRaces,
        changeRaces,
    }
}