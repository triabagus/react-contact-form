import React from 'react';

function HomePage(props) {

    return(
        <div>
            {props.title} {props.subTitle} {props.text}
        </div>
    );

}

export default HomePage;