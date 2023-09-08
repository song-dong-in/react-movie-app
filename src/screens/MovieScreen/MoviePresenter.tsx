import Loader from "../../components/Loader/Loader";

interface MoviePresenterProps{
    nowPlaying: any[] | null;
    upcoming: any[] | null;
    popular: any[] | null;
    topRated: any[] | null;
    error: string | null;
    loading: any[] | boolean;
    popularInfinite: any[] | null;
    nowPlayingInfinite: any[] | null;
    upcomingInfinite: any[] | null;
    topRatedInfinite: any[] | null;

}








const MoviePresenter : React.FC<MoviePresenterProps> = ({
    nowPlaying,
    upcoming,
    popular,
    topRated,
    error,
    loading,
    popularInfinite,
    nowPlayingInfinite,
    upcomingInfinite,
    topRatedInfinite


}) => {
    const {location : {pathname}} = window;

    console.log(nowPlaying);




    return loading ?(
            <Loader></Loader>
        ) :
        (
        <div>무비 엠알</div>
        );
}

export default MoviePresenter;