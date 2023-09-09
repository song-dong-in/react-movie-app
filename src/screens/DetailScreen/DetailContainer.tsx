import { Component } from "react";
import DetailPresenter from "./DetailPresenter";
import withRouter from "../../utils/withRouter";

interface DetailContainerstate{
    result : any | null,
    error : any | null,
    loading : boolean,
    recommendations : any,
    cast : any,
    keyword : any,
    backdrops : any,
    posters : any,
    tvDetail2 : any,
    reviews : any
}

class DetailContainer extends Component<{}, DetailContainerstate>{

    constructor(props : any){
        super(props);
        this.state={
            result : [],
            error : null,
            loading : true,
            recommendations : [null],
            cast : [],
            keyword : [],
            reviews : [],
            backdrops : [],
            posters : [],
            tvDetail2 : [],
        }
    }



    render(){
        return <DetailPresenter></DetailPresenter>
    }
}


export default withRouter(DetailContainer);