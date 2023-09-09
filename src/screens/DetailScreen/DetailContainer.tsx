import { Component } from "react";
import DetailPresenter from "./DetailPresenter";
import withRouter from "../../utils/withRouter";
import { movieApi } from "../../api/movie";

interface DetailContainerstate{
    result : any | null,
    error : any | null,
    loading : boolean,
    recommendations : any,
    cast : any,
    keywords : any,
    backdrops : any,
    posters : any,
    tvDetail2 : any,
    reviews : any
}





class DetailContainer extends Component<{params : number}, DetailContainerstate>{

    constructor(props : any){
        super(props);
        this.state={
            result : [],
            error : null,
            loading : true,
            recommendations : [null],
            cast : [],
            keywords : [],
            reviews : [],
            backdrops : [],
            posters : [],
            tvDetail2 : [],
        };
    }

    async componentDidMount(){
        try{
            const parsedId = this.props.params;
            
            const {data : result} = await movieApi.movieDetail(parsedId);
            const { data : {results : recommendations}} = await movieApi.recommendations(parsedId);   

            const {data : {cast}} = await movieApi.credits(parsedId);

            const {data : {keywords}} = await movieApi.keywords(parsedId);
            
            const {data : {results : reviews}} = await movieApi.reviews(parsedId);
            const { 
                data : {backdrops },
                data : {posters}
            } = await movieApi.images(parsedId);

            console.log(keywords);
            this.setState({
                result,
                recommendations,
                cast,
                keywords,
                reviews,
                backdrops : backdrops && backdrops,
                posters : posters && posters,
                loading : false,
                error : null
            });
        }
        catch(err){

            this.setState({error : "상세정보를 가져올 수 없습니다."});
        }
    }



    render(){
        return <DetailPresenter{...this.state}/>
    }
}


export default withRouter(DetailContainer);