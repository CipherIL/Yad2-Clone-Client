import React from "react";
import PublishMainFirstRow from "./publishMainParts/PublishMainFirstRow.component";
import PublishMainSecondRow from "./publishMainParts/PublishMainSecondRow.component";
import PublishMainThirdRow from "./publishMainParts/PublishMainThirdRow.component";

const PublishSelection = ({width}) => {
    return (
        <div className="publish-page__main">
            <span className="publish-page__main__title">אני רוצה לפרסם מודעה בלוח...</span>
            { width>620 && <div className="publish-page__main__catergories">
                <div className="publish-page__main__catergories__first-row">
                    <PublishMainFirstRow width={width}/>
                </div>
                <div className="publish-page__main__catergories__second-row">
                    <PublishMainSecondRow width={width}/>
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

export default PublishSelection;