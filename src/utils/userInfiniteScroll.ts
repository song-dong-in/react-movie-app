import { useEffect } from "react";
import { useState } from "react";

const useInfiniteScroll = () : number =>{

    const [page, setPage] = useState<number>(1);

    const handlescroll = ():void=>{
        const scrollTop : number = document.documentElement.scrollTop;
        
        const innerHeight : number = window.innerHeight;

        const scrollHeight : number = document.documentElement.scrollHeight;

        if(scrollTop + innerHeight + 50 >= scrollHeight){
            setPage((prevPage)=> prevPage +1);
        }
    }
        useEffect(() =>{
            window.addEventListener("scroll", handlescroll);

            return()=>{
                window.removeEventListener("scroll", handlescroll);
                };
        },[]);
    
    
        return page;
    

};

export default useInfiniteScroll;

