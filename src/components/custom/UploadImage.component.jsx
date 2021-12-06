import React, { useState } from "react";

const UploadImage = ({isMainImage,imageURL="",uploadFunction,deleteFunction}) => {

    const [showUploadModal,setShowUploadModal] = useState(false);
    
    return (
        <>
        {showUploadModal && <div className="upload-image-modal" onClick={()=>{setShowUploadModal(false)}}>
            <div className="upload-image-modal__content" onClick={(e)=>{e.stopPropagation()}}>
                <div className="upload-image-modal__content__title">הכנסת קישור</div>
                <input type="text" className="upload-image-modal__content__input"/>
                <button className="upload-image-modal__content__button"
                onClick={(e)=>{
                    const url = e.target.previousSibling.value;
                    uploadFunction(url);
                    setShowUploadModal(false);
                }}
                >המשך</button>
                <span className="upload-image-modal__content__close" onClick={()=>{setShowUploadModal(false)}}>
                    &#10005;</span>
            </div>
        </div>}

        <div className={"upload-image-container"+(isMainImage?" main":"")}
        onClick={()=>{setShowUploadModal(true)}}>
            {isMainImage && <div className="image__title">
                תמונה ראשית
            </div>}
            <div className="image__upload">
                {imageURL!=="" && <img src={imageURL} alt="img" className="image__upload__background-image"/>}
                <span className="image__upload__symbol">+</span>
                <span className="image__upload__text">העלאת תמונות</span>
                {imageURL!=="" && <span className="image__upload__delete" onClick={(e)=>{
                    e.stopPropagation();
                    deleteFunction()
                }}
                >&#128465;</span>}
            </div>
        </div>
        </>
    )
}

export default UploadImage;