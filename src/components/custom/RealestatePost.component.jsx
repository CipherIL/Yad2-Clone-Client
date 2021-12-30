import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { estateFeatures } from "../../data/privateRealestatePublishFormData";
import { nanoid } from "nanoid";

const noGardenTypes = [
"דירה",
"גג/פנטהאוז",
"דופלקס",
"דירת נופש",
"טריפלקס",
"יחידת דיור",
"בניין מגורים",
"סטודיו/לופט",
"כללי",
]

const RealestatePost = ({post}) => {
    const [showPreview,setShowPreview] = useState(true);
    const [showPictureReel,setShowPictureReel] = useState(false);
    const [selectedImageIndex,setSelectedImageIndex] = useState(0);
    const [carouselDir,setCarouselDir] = useState(1);

    const getAddress = () => {
        return `${post.realestateData.street} ${post.realestateData.number}`
    }
    const getCityAndEstateType = () => {
        return `${post.realestateData.estateType}, ${post.realestateData.city}`
    }
    const getRooms = () => {
        return (
        <div className="realestate-post__info">
            <div className="realestate-post__info__data">{post.realestateData.rooms}</div>
            <div className="realestate-post__info__title">חדרים</div>
        </div>
        )    
    }
    const getFloor = () => {
        return (
        <div className="realestate-post__info">
            <div className="realestate-post__info__data">
                {post.realestateData.floor?post.realestateData.floor:"קרקע"}
            </div>
            <div className="realestate-post__info__title">קומה</div>
        </div>
        )    
    }
    const getArea = () => {
        return (
        <div className="realestate-post__info">
            <div className="realestate-post__info__data">
                {post.realestateData.totalArea}
            </div>
            <div className="realestate-post__info__title">מ"ר</div>
        </div>
        )    
    }
    const getPrice = () => {
        return (
            <div>
                {numberWithCommas(""+post.realestateData.price) + " ₪"}
            </div>
        )
    }
    const getPostDate = () => {
        const date = new Date(post.date)
        return (
            Date.now()-parseInt(post.date) > 86400000 ?
            <div className="realestate-post__preview__third-section__date">
                {date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()}
            </div> : "עודכן היום"
        )
    }
    const numberWithCommas = (num) => {
        return (num+"").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    const getEntryDate = () => {
        const date = new Date(post.realestateData.entryDate)
        if(post.realestateData.entryNow) return "כניסה מיידית";
        if(post.realestateData.entryFlexible) return "כניסה גמישה";
        else return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
    }
    const getRealestateSpecs = () => {
        return (
            <>
                <div className="realestate-post__fullview__content__specs__data">
                    {"מצב הנכס "}<b>{post.realestateData.estateCondition.split(" ")[0]}</b>
                </div>
                <div className="realestate-post__fullview__content__specs__data">
                    {"תאריך כניסה "}<b>{getEntryDate()}</b>
                </div>
                {!noGardenTypes.includes(post.realestateData.estateType) && <div className="realestate-post__fullview__content__specs__data">
                    {'מ"ר גינה '}<b>{post.realestateData.totalArea-post.realestateData.builtArea}</b>
                </div>}
                {!noGardenTypes.includes(post.realestateData.estateType) && <div className="realestate-post__fullview__content__specs__data">
                    {'מ"ר בנוי '}<b>{post.realestateData.builtArea}</b>
                </div>}
                {post.realestateData.totalFloors && <div className="realestate-post__fullview__content__specs__data">
                    {"קומות בבניין "}<b>{post.realestateData.totalFloors}</b>
                </div>}
                {post.realestateData.balconies!=="ללא" && <div className="realestate-post__fullview__content__specs__data">
                    {"מרפסות "}<b>{post.realestateData.balconies}</b>
                </div>}
                {post.realestateData.parkingSpots!=="ללא" && <div className="realestate-post__fullview__content__specs__data">
                    {"חניות "}<b>{post.realestateData.parkingSpots}</b>    
                </div>}
            </>
        )
    }
    const getFeatures = () => {
        return (
            <div className="realestate-post__fullview__content__features__features">
                {estateFeatures.map(feature=>{
                    return <div key={nanoid()} className={"realestate-post__fullview__content__feature"+(post.realestateData.features.includes(feature.text)?" bold":"")}>
                        {<FontAwesomeIcon icon={feature.logo} className="realestate-post__fullview__content__feature__logo"/>}
                        <span className="realestate-post__fullview__content__feature__text">{feature.text}</span>
                    </div>
                })}
            </div>
        )
    }

    return (
        <div className="realestate-post">
            {showPreview &&
            <div className="realestate-post__preview" onClick={()=>setShowPreview(false)}>
                <div className="realestate-post__preview__first-section">
                    {post.realestateData.mainImage ?
                    <img src={post.realestateData.mainImage} alt="mainImage" className="realestate-post__preview__first-section__main-image"/>:
                    <img src='/images/realestate_default_main_image.png' alt="defaultMainImage" className="realestate-post__preview__first-section__main-image"/>}
                    <div className="realestate-post__preview__first-section__address">
                        <span className="realestate-post__preview__first-section__address__street-and-number">
                            {getAddress()}
                        </span>
                        <span className="realestate-post__preview__first-section__address__city-and-estate-type">
                            {getCityAndEstateType()}
                        </span>
                    </div>
                </div>
                <div className="realestate-post__preview__second-section">
                    {getRooms()}
                    {getFloor()}
                    {getArea()}
                </div>
                <div className="realestate-post__preview__third-section">
                    {getPrice()}
                    {getPostDate()}
                </div>
            </div>}
            {!showPreview && 
            <div className="realestate-post__fullview">
                {showPictureReel && <div className="realestate-post__fullview__picture-reel" onClick={(e)=>{setShowPictureReel(false)}}>
                    <div className="realestate-post__fullview__picture-reel__right">
                        <img src="/images/button-arrow.png" alt="arrow" onClick={(e)=>{
                            e.stopPropagation();
                            if(selectedImageIndex<post.realestateData.images.length) {
                                setCarouselDir(1);
                                setSelectedImageIndex(selectedImageIndex+1);
                            }
                        }}/>
                    </div>
                    <div className="realestate-post__fullview__picture-reel__images">
                    <img src={post.realestateData.mainImage} alt="" 
                            className={"realestate-post__fullview__picture-reel__image"+
                            (selectedImageIndex===0?` selected ${carouselDir===1?"from-right":"from-left"}`:"") +
                            (selectedImageIndex===1?" prev":"")}
                            />
                    {post.realestateData.images.map((image,i)=>{
                        return (
                            <img src={image} alt="" 
                            className={"realestate-post__fullview__picture-reel__image"+
                            (i+1===selectedImageIndex?` selected ${carouselDir===1?"from-right":"from-left"}`:"") +
                            (i+1===selectedImageIndex+1?" next":"") +
                            (i+1===selectedImageIndex-1?" prev":"")} key={nanoid()}/>
                        )
                    })}
                    </div>
                    <div className="realestate-post__fullview__picture-reel__left" onClick={(e)=>{
                            e.stopPropagation();
                            if(selectedImageIndex>0) {
                                setCarouselDir(-1);
                                setSelectedImageIndex(selectedImageIndex-1);
                            }
                        }}>
                        <img src="/images/button-arrow.png" alt="arrow" />
                    </div>
                </div>}
                <div className="realestate-post__fullview__header" onClick={()=>setShowPreview(true)}>
                    <div className="realestate-post__fullview__header__image-container">
                        {post.realestateData.mainImage ?
                        <img src={post.realestateData.mainImage} alt="mainImage" className="realestate-post__fullview__header__image" 
                        onClick={(e)=>{
                            e.stopPropagation();
                            setSelectedImageIndex(0);
                            setShowPictureReel(true);
                        }}/>:
                        <img src="/images/realestate_default_main_image.png" alt="mainImage" className="realestate-post__fullview__header__image"/>}
                    </div>
                    <div className="realestate-post__fullview__header__data">
                        <div className="realestate-post__fullview__header__data__address">
                            <span className="realestate-post__fullview__header__data__address__street-and-number">
                                {getAddress()}
                            </span>
                            <span className="realestate-post__fullview__header__data__address__city-and-estate-type">
                                {getCityAndEstateType()}
                            </span>
                        </div>
                        <div className="realestate-post__fullview__header__data__price">
                            {getPrice()}
                            {getPostDate()}
                        </div>
                        <div className="realestate-post__fullview__header__data__specs">
                            {getRooms()}
                            {getFloor()}
                            {getArea()}
                        </div>
                        <div className="realestate-post__fullview__header__data__contact">
                            <div className="realestate-post__fullview__header__data__contact__button" onClick={(e)=>{
                                e.stopPropagation();
                                e.target.nextSibling.classList.toggle('show');
                            }}>
                                <FontAwesomeIcon icon={"phone"} className="realestate-post__fullview__header__data__contact__button__icon"/>
                                הצגת מספר טלפון
                            </div>
                            <div className="realestate-post__fullview__header__data__contact__content" onClick={(e)=>e.stopPropagation()}>
                                <div className="realestate-post__fullview__header__data__contact__content__data">{post.userData.contactName}</div>
                                <div className="realestate-post__fullview__header__data__contact__content__data">{post.userData.contactCellphone}</div>
                                <div className="realestate-post__fullview__header__data__contact__content__data email">שליחת דוא"ל למפרסם</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="realestate-post__fullview__main">
                    <div className="realestate-post__fullview__ads">פרוייקטים חדשים באזור</div>
                    <div className="realestate-post__fullview__content">
                        <div className="realestate-post__fullview__content__description">
                            <span className="realestate-post__fullview__content__description__title">תיאור הנכס</span>
                            <span className="realestate-post__fullview__content__description__text">{post.realestateData.description}</span>
                        </div>
                        <div className="realestate-post__fullview__content__specs">
                            {getRealestateSpecs()}
                        </div>
                        <div className="realestate-post__fullview__content__features-container">
                            <span className="realestate-post__fullview__content__features__title">מה יש בנכס?</span>
                            {getFeatures()}
                        </div>
                    </div>
                </div>
                <div className="realestate-post__fullview__footer">

                </div>
            </div>}
        </div>    
    )
}

export default RealestatePost;