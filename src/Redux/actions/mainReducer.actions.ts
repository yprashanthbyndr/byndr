
import { ActionModel } from '../../models';

export const SAMPLE_ = 'SAMPLE_';
export const SAVE_SCROLL_HEIGHT = 'SAVE_SCROLL_HEIGHT';
export const SAVE_CONTACT_US_IP_VALUES = 'SAVE_CONTACT_US_IP_VALUES';
export const SUBMIT_CONTACT_FORM_SUCCESS = 'SUBMIT_CONTACT_FORM_SUCCESS';
export const OPEN_OR_CLOSE_MENUBAR = 'OPEN_OR_CLOSE_MENUBAR';
export const OPEN_OR_CLOSE_PLAY_VIDEO = 'OPEN_OR_CLOSE_PLAY_VIDEO';
export const SAVE_SELECTED_TESTIMONIAL = 'SAVE_SELECTED_TESTIMONIAL';
export const STICKY_PRICINGTABLE = "STICKY_PRICINGTABLE";
export const MINI_HEADER_OPTIONS = "MINI_HEADER_OPTIONS";
export const TESTIMONIAL_INTERVAL = "TESTIMONIAL_INTERVAL";
export const TCHANGE_DIRECTION_IN_HOME_SLIDES = "TCHANGE_DIRECTION_IN_HOME_SLIDES";
export const SAVE_SELECTED_SLIDE_INHOME = "SAVE_SELECTED_SLIDE_INHOME";


function sampleFunction(data: any): ActionModel {
    return {
        type: SAMPLE_,
        payload: data.CreateTrasactionHistory,
    };
}

function actionSaveScrollHeight(height: any, HideHeader: boolean): ActionModel {
    return {
        type: SAVE_SCROLL_HEIGHT,
        payload: { height, HideHeader }
    };
}

function actionCantactUs_Ip_Values(field: string, value: string): ActionModel {
    return {
        type: SAVE_CONTACT_US_IP_VALUES,
        payload: { field, value }
    };
}

function actionCantactUs_ApiResponse(successOrFail: string): ActionModel {
    return {
        type: SUBMIT_CONTACT_FORM_SUCCESS,
        payload: successOrFail
    };
}

function actionOpen_Or_Close_MenuBar(): ActionModel {
    return {
        type: OPEN_OR_CLOSE_MENUBAR,
    };
}
function actionOpen_Or_Close_PlayVideo(): ActionModel {
    return {
        type: OPEN_OR_CLOSE_PLAY_VIDEO,
    };
}
function actionTestimonialSelection(selectedOption): ActionModel {
    return {
        type: SAVE_SELECTED_TESTIMONIAL,
        payload: selectedOption
    };
}

function actionSticky_PricingTable(enable) {
    return {
        type: STICKY_PRICINGTABLE,
        payload: enable
    };
}

function actionMiniHeaderOptions(selected: string): ActionModel {
    return {
        type: MINI_HEADER_OPTIONS,
        payload: selected
    };
}

function action_TestimonialInterval(): ActionModel {
    return {
        type: TESTIMONIAL_INTERVAL,
        // payload: selected
    };
}



function action_ChangeDIrection_InHomeSlide(): ActionModel {
    return {
        type: TCHANGE_DIRECTION_IN_HOME_SLIDES,
        // payload: selected
    };
}


function action_Save_SelecteSlide_InHome(selectedSlide: string): ActionModel {
    return {
        type: SAVE_SELECTED_SLIDE_INHOME,
        payload: selectedSlide
    };
}

export {
    sampleFunction,
    actionSaveScrollHeight,
    actionCantactUs_Ip_Values,
    actionCantactUs_ApiResponse,
    actionOpen_Or_Close_MenuBar,
    actionOpen_Or_Close_PlayVideo,
    actionTestimonialSelection,
    actionSticky_PricingTable,
    actionMiniHeaderOptions,
    action_TestimonialInterval,
    action_ChangeDIrection_InHomeSlide,
    action_Save_SelecteSlide_InHome
};

