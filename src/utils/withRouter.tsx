import { useParams } from "react-router-dom"


const widthRouter = (WrappedComponent : React.ComponentType<any>)=>(props : any)=>{

    const params = useParams();

    return (
        <WrappedComponent  
        {...props} params = {params.id} />
    );
}

export default widthRouter;