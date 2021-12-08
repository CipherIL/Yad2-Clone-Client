import React, { useState } from "react";

// Component Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UploadImage from "../../../components/custom/UploadImage.component";
import { nanoid } from "nanoid";

const PublishPrivateRealestatePartFive = ({selected,completed,returnButton,reopen,submitFunction}) => {
    const [mainImg,setMainImg] = useState("");
    const [images,setImages] = useState(["","","","","","","","",""]);
    const handleSubmit = () => {
        submitFunction("CHANGE_FIFTH_FORM_VALUES",{mainImage:mainImg,images:images.filter(img=>img!=="")})
    }

    return (
        <div className={"private-realestate__selection upload-images"+(completed?" completed":"")} onClick={reopen}>
            <div className="private-realestate__selection__title">
                <div className={"private-realestate__selection__title__number"+(selected?" selected":"")}>
                {completed?<FontAwesomeIcon icon={["fas","check"]}/>:"5"}</div>
                <div className="private-realestate__selection__title__text">תמונות וסרטונים</div>
            </div>
            {completed &&
            <div className="private-realestate__selection__edit-button">
                <FontAwesomeIcon icon={["fas","pencil-alt"]}/>
                <div className="private-realestate__selection__edit-button__text">עריכה</div>
            </div>}
            {selected&&<>
            <div className="main-image__select">
                <div className="main-image__select__description">
                    ידעת שמודעות עם תמונות ברורות מקבלות פי 10 יותר פניות? 
                    <br />
                    לא להסס להעלות לפה תמונות (אפשר עד 10) ולהבליט את הצדדים הטובים ביותר של הנכס
                </div>
                <UploadImage
                isMainImage={true}
                imageURL={mainImg}
                uploadFunction={(url)=>{
                    setMainImg(url)}}
                deleteFunction={()=>{
                    setMainImg("")}}
                />
            </div>
            <div className="images-select">
                {images.map((img,i)=>{
                    return (
                        <UploadImage
                        key={nanoid()}
                        imageURL={img}
                        uploadFunction={(url)=>{
                            const newArr = [...images];
                            newArr.splice(i,1,url);
                            setImages(newArr)}}
                        deleteFunction={()=>{
                            const newArr = [...images];
                            newArr.splice(i,1,"");
                            setImages(newArr)}}
                        />
                    )
                })}
            </div>
            <div className="private-realestate__selection__buttons">
                    <button className="private-realestate__selection__button-return" onClick={returnButton}>חזרה</button>
                    <button className="private-realestate__selection__button-submit" onClick={handleSubmit}>להמשיך לשלב הבא</button>
            </div>
            </>}
        </div>
    )
}

export default PublishPrivateRealestatePartFive;