import { store, actionSaveScrollHeight } from "../Redux";

function SaveScroll_Height(HideHeder, currentScroolHeight) {

    // console.log(" & * & * & * in SaveScroll_Height :  ", reduxstate.WindowScroolheight, currentScroolHeight, currentScroolHeight - reduxstate.WindowScroolheight);

    // let HideHeader;
    // let diff = currentScroolHeight - reduxstate.WindowScroolheight;
    // console.log("check service : ", diff, diff > 50 && !(reduxstate.HideHeader), reduxstate.HideHeader);

    // if (diff > 1 && !reduxstate.HideHeader) {
    //     console.log(" scrool down ")
    //     HideHeader = true
    // } else if (diff < -1 && reduxstate.HideHeader) {
    //     console.log(" scrool up ")
    //     HideHeader = false
    // }

    if (HideHeder !== undefined) {
        store.dispatch(actionSaveScrollHeight(currentScroolHeight, HideHeder));
    } else{
        store.dispatch(actionSaveScrollHeight(currentScroolHeight, HideHeder));
    }


}

export { SaveScroll_Height }