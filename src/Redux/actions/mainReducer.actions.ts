
import { ActionModel } from '../../models';

export const SAMPLE_ = 'SAMPLE_';
export const SAVE_SCROLL_HEIGHT = 'SAVE_SCROLL_HEIGHT';
export const SAVE_CONTACT_US_IP_VALUES = 'SAVE_CONTACT_US_IP_VALUES';
export const SUBMIT_CONTACT_FORM_SUCCESS = 'SUBMIT_CONTACT_FORM_SUCCESS';


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

function actionCantactUs_Ip_Values(field: string, value: string) {
    return {
        type: SAVE_CONTACT_US_IP_VALUES,
        payload: { field, value }
    };
}

function actionCantactUs_ApiResponse(successOrFail: string) {
    return {
        type: SUBMIT_CONTACT_FORM_SUCCESS,
        payload: successOrFail
    };
}

export {
    sampleFunction,
    actionSaveScrollHeight,
    actionCantactUs_Ip_Values ,
    actionCantactUs_ApiResponse
};

