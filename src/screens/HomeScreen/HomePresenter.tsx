import React from 'react';
import ProTypes from 'prop-types';
import Loader from '../../components/Loader/Loader';
import styles from './Home.module.css';


interface HomeProps{
    movieDetail : any;
    loading : boolean;
    error : any;
}



const HomPresenter : React.FC<HomeProps> = ({
    movieDetail,
    loading,
    error
}) => {
    return loading?  (
        <Loader></Loader>
        ) : (
        <div>홈</div>
        )
}

HomPresenter.propTypes = {
    movieDetail : ProTypes.object,
    loading : ProTypes.bool.isRequired
}

export default HomPresenter;