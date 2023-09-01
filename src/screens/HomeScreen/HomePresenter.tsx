import React from 'react';
import ProTypes from 'prop-types';


interface HomeProps{
    movieDetail : any;
    loading : boolean;
}



const HomPresenter : React.FC<HomeProps> = ({
    movieDetail,
    loading
}) => {
    return (
        <div>홈</div>
    )
}

HomPresenter.propTypes = {
    movieDetail : ProTypes.object,
    loading : ProTypes.bool.isRequired
}

export default HomPresenter;