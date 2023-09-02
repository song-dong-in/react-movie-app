import React from 'react';
import ProTypes from 'prop-types';
import Loader from '../../components/Loader/Loader';
import styles from './Home.module.css';
import {Helmet, HelmetProvider } from 'react-helmet-async';


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
        <div className = {styles.container}>
            <HelmetProvider>
                    <Helmet>
                        <title>넷플릭스 - 홈</title>
                    </Helmet>
            </HelmetProvider>

            <div>컨텐츠 적을 예정</div>
        </div>
    )
}

HomPresenter.propTypes = {
    movieDetail : ProTypes.object,
    loading : ProTypes.bool.isRequired
}

export default HomPresenter;