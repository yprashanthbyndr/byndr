

import { HomeReducer, ActionModel } from '../../models';
import { SAVE_SCROLL_HEIGHT } from '../actions';

const INIT_STATE: HomeReducer = {
  HideHeader: false,
  StickInnerHeader: false,
  WindowScroolheight: 0,
};

export default (state = INIT_STATE, action: ActionModel) => {
  switch (action.type) {


    case SAVE_SCROLL_HEIGHT:
      // if()
      return {
        ...state, WindowScroolheight: action.payload.height,
          HideHeader: action.payload.HideHeader == undefined ? state.HideHeader : action.payload.HideHeader
        }


    default:
      return state;
      }
  };