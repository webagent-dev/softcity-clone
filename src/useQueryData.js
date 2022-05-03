
import { useQuery } from 'react-query'


const useGetQueryData = (queryName, queryFunction) => {
     return useQuery(queryName, queryFunction)
}

export default useGetQueryData