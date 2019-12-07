

import { HomeReducer, ActionModel } from '../../models';
import { SAVE_SCROLL_HEIGHT, SAVE_CONTACT_US_IP_VALUES, SUBMIT_CONTACT_FORM_SUCCESS, OPEN_OR_CLOSE_MENUBAR, SAVE_SELECTED_TESTIMONIAL } from '../actions';

const INIT_STATE: HomeReducer = {
  HideHeader: false,
  StickInnerHeader: false,
  WindowScroolheight: 0,
  ContactUsForm: {
    title: '',
    name: '',
    email: '',
    phoneNo: '',
    positionAtCollege: '',
    collegeName: '',
    No_Student: '',
    message: ''
  },
  ContactFormSubmitSuccess: false,
  OpenMenuBar: false,
  activeTestimonial: 'vvit_img'
};

export default (state = INIT_STATE, action: ActionModel) => {
  switch (action.type) {

    case SAVE_SCROLL_HEIGHT:
      return {
        ...state, WindowScroolheight: action.payload.height,
        HideHeader: action.payload.HideHeader == undefined ? state.HideHeader : action.payload.HideHeader
      }

    case SAVE_CONTACT_US_IP_VALUES:
      return SaveContactDetails(state, action)

    case SUBMIT_CONTACT_FORM_SUCCESS:
      return {
        ...state, ContactFormSubmitSuccess: true
      }

    case OPEN_OR_CLOSE_MENUBAR:

      return {
        ...state, OpenMenuBar: !state.OpenMenuBar
      }
    case SAVE_SELECTED_TESTIMONIAL:
      return {
        ...state, activeTestimonial: action.payload
      }

    default:
      return state;
  }
};




function SaveContactDetails(state: any, action: any) {


  switch (action.payload.field) {

    case 'title':
      return {
        ...state, ContactUsForm: {
          ...state.ContactUsForm,
          title: action.payload.value,

        }
      }
    case 'name':
      return {
        ...state, ContactUsForm: {
          ...state.ContactUsForm,
          name: action.payload.value,
        }
      }
    case 'email':
      return {
        ...state, ContactUsForm: {
          ...state.ContactUsForm,
          email: action.payload.value,
        }
      }
    case 'phoneNo':
      return {
        ...state, ContactUsForm: {
          ...state.ContactUsForm,
          phoneNo: action.payload.value,
        }
      }
    case 'positionAtCollege':
      return {
        ...state, ContactUsForm: {
          ...state.ContactUsForm,
          positionAtCollege: action.payload.value,

        }
      }
    case 'collegeName':
      return {
        ...state, ContactUsForm: {
          ...state.ContactUsForm,
          collegeName: action.payload.value,

        }
      }
    case 'No_Student':
      return {
        ...state, ContactUsForm: {
          ...state.ContactUsForm,
          No_Student: action.payload.value,
        }
      }

    case 'message':
      return {
        ...state, ContactUsForm: {
          ...state.ContactUsForm,
          message: action.payload.value,
        }
      }
    default:
      return {
        ...state
      }

  }

}