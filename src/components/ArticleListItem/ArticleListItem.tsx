import React from 'react';

import './ArticleListItem.css';

const articleListItem = (props) => {
    let publishDate;
    let info2;
    let imgColumn;
    let articleListItemClass = 'grid-x grid-margin-x grid-padding-y article-list-item';
    let additionalInfo;
    
    if(props.publishDate) {
        publishDate = <time className="h5 article-list-item__time">{props.publishDate}</time>;
    }

    if(props.info2) {
        info2 = <React.Fragment>
                    <span className="article-list-item__info-separator">/</span>
                    <p className="article-list-item__info2">{props.info2}</p>
                </React.Fragment>;
    }

    if(props.img) {
        imgColumn = <div className="cell small-12 medium-6 article-list-item__image-container">
                        <img src={props.img} alt={props.title}/>
                    </div>;

        articleListItemClass += ' article-list-item--with-image';
    }

    if(props.children) {
        additionalInfo = <p className="article-list-item__additional-info">{props.children}</p>
    }

    return (
        <div className={articleListItemClass}>
            <div className="cell small-12 medium-auto article-list-item__info-container">
                {publishDate}
                <h2 className="h3 article-list-item__heading">{props.title}</h2>
                <span className="article-list-item__info-separator">/</span>
                <p className="article-list-item__info1">{props.info1}</p>
                {info2}
                {additionalInfo}
            </div>
            {imgColumn}
        </div>
    )};

export default articleListItem;