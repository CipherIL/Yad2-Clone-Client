import React from "react";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import PublishMainFirstRow from "./PublishMainFirstRow.component";
import PublishMainSecondRow from "./PublishMainSecondRow.component";
import PublishMainThirdRow from "./PublishMainThirdRow.component";

//TODO: fix categories on hover

const PublishMain = () => {
    const {width} = useWindowDimensions();
    return (
        <div className="publish-page__main">
            <span className="publish-page__main__title">אני רוצה לפרסם מודעה בלוח...</span>
            { width>620 && <div className="publish-page__main__catergories">
                <div className="publish-page__main__catergories__first-row">
                    <PublishMainFirstRow/>
                </div>
                <div className="publish-page__main__catergories__second-row">
                    <PublishMainSecondRow/>
                </div>
                <div className="publish-page__main__catergories__third-row">
                    <PublishMainThirdRow width={width}/>
                </div>
            </div>}
            { width<=620 && <div className="publish-page__main__catergories">
                <PublishMainFirstRow/>
                <PublishMainSecondRow/>
                <PublishMainThirdRow width={width}/>
            </div>}
        </div>
    )
}

export default PublishMain;