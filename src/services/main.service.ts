import { store, actionSaveScrollHeight } from "../Redux";

function SaveScroll_Height(reduxstate, currentScroolHeight) {

    // console.log(" & * & * & * in SaveScroll_Height :  ", reduxstate.WindowScroolheight, currentScroolHeight, currentScroolHeight - reduxstate.WindowScroolheight);

    let HideHeader;
    let diff = currentScroolHeight - reduxstate.WindowScroolheight;
    console.log("check service : ", diff, diff > 50 && !(reduxstate.HideHeader), reduxstate.HideHeader);

    if (diff > 10 && !reduxstate.HideHeader) {
        HideHeader = true
    } else if (diff < -10 && reduxstate.HideHeader) {
        HideHeader = false
    }

    if (HideHeader !== undefined) {
        store.dispatch(actionSaveScrollHeight(currentScroolHeight, HideHeader));
    } else if (diff > 20) {
        HideHeader = undefined;
        store.dispatch(actionSaveScrollHeight(currentScroolHeight, HideHeader));
    }


}

export { SaveScroll_Height }