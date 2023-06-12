import { api } from "../util/api"
import { useState } from "react"
import { useQuery } from "react-query"

export default function useRaces(){
    const [races, setRaces] = useState()
    const [changeRaces, setChangeRaces] = useState(true)
    const [whichRaces, setWhichRaces] = useState('api/races')

    async function getRaces(){
        let value = await api.get(whichRaces)
        if (changeRaces) setRaces(value.data)
        return value.data
    }



    const {isLoading, error, data, refetch} = useQuery('data', getRaces)

    return {
        races,
        data,
        isLoading,
        error,
        refetch,
        setChangeRaces,
        setWhichRaces,
    }
}