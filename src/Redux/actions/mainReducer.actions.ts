
import { ActionModel } from '../../models';

export const SAMPLE_ = 'SAMPLE_';
export const SAVE_SCROLL_HEIGHT = 'SAVE_SCROLL_HEIGHT';


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
export {
    sampleFunction,
    actionSaveScrollHeight
};

