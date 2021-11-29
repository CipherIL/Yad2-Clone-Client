import React, { useContext } from "react";
import { UserContext } from "../../contexts/User.context";

//Page part Imports
import PublishHeader from "./page-parts/PublishHeader.component";
import PublishMain from "./page-parts/PublishMain.component";

////////IMPORTANT: the mobile breakpoint for this page is 620px////////

const Publish = () => {
    const {user} = useContext(UserContext);
    return(
        <div className="publish-page">
            <PublishHeader user={user}/>
            <PublishMain/>
        </div>
    )
}

export default Publish;