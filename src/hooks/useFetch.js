import { useState ,useEffect} from 'react';

// el metodo fech por defecto  es el get
export const useFetch =(url)=>{
    //u hooks personalizados tiene q retornar valores
    //varibles -los datos  q viene -q controle cuando ya se recibio la peticion -q nos trae el error
    const [data,setData]=useState(null);
    const [isPending,setIsPending]=useState(true);
    const [error,setError]=useState(null);

    useEffect(()=>{
        const getData = async (url) => {
            try {
             let res=await fetch(url)   
             if (!res.ok) {
              throw{
                err:true,
                status:res.status, 
                statusText: !res.statusText?"OCURRIO UN ERROR":res.statusText}   
             }
             let data = await res.json();

             setIsPending(false);
             setData(data);
             setError({err:false})
            } catch (err) {
                setIsPending(true);
                setError(err);
            }
          };

          getData(url);
    },[url]);

    return{data,isPending,error};
};