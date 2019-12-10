import { store, actionSaveScrollHeight, actionCantactUs_Ip_Values, actionCantactUs_ApiResponse, actionOpen_Or_Close_MenuBar, actionTestimonialSelection, actionSticky_PricingTable } from "../Redux";

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
    } else {
        store.dispatch(actionSaveScrollHeight(currentScroolHeight, HideHeder));
    }
}



function MiniHeaderScrollLogic(st, lastScrollTop, HideHeader_Present) {

    let diff = st - lastScrollTop;
    let HideHeder;
    if (st > lastScrollTop && !HideHeader_Present) {
        HideHeder = true;
        SaveScroll_Height(HideHeder, st)
    } else if (HideHeader_Present && diff < -5) {
        HideHeder = false;
        SaveScroll_Height(HideHeder, st)
    } else if (diff > 10 || diff < -10) {
        HideHeder = undefined;
        SaveScroll_Height(HideHeder, st)
    }

}




function CantactUs_Ip_Values(field: string, value: string) {

    store.dispatch(actionCantactUs_Ip_Values(field, value));

}

function SubmitContactPage(reqObject: any) {

    let SuccessOrFail = 'success';
    const proxyurl = "https://cors-anywhere.herokuapp.com/";


    let Url = proxyurl + 'https://www.byndr.com/contact/';
    fetch(Url, {
        method: 'post',
        body: JSON.stringify(reqObject)
    }).then(function (response) {
        return response.json();
    }).then(function (data) {
        console.log(" data on contact api ", data);

        store.dispatch(actionCantactUs_ApiResponse(SuccessOrFail));

    }).catch(err => {
        console.log("   error on contact api   ", err);
    });


}

function Open_Or_Close_MenuBar() {
    store.dispatch(actionOpen_Or_Close_MenuBar());

}

function TestimonialSelection(SelectedOption: string) {
    store.dispatch(actionTestimonialSelection(SelectedOption));
}

function Sticky_PricingTable(divheight: number, scroolHeight: number, StickyEnabled) {

    // let Store= stat


    if (scroolHeight > divheight && !StickyEnabled) {

        console.log(" scrool height is exceeded div geight ");
        store.dispatch(actionSticky_PricingTable(true));

    } else if (StickyEnabled && scroolHeight < divheight) {

        store.dispatch(actionSticky_PricingTable(false));
    }

}

export {
    SaveScroll_Height, CantactUs_Ip_Values, SubmitContactPage, Open_Or_Close_MenuBar, TestimonialSelection,
    Sticky_PricingTable, MiniHeaderScrollLogic
}