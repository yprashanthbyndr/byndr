

import { HomeReducer, ActionModel } from '../../models';
import {
  SAVE_SCROLL_HEIGHT, SAVE_CONTACT_US_IP_VALUES, SUBMIT_CONTACT_FORM_SUCCESS,
  OPEN_OR_CLOSE_MENUBAR, OPEN_OR_CLOSE_PLAY_VIDEO, SAVE_SELECTED_TESTIMONIAL,
  STICKY_PRICINGTABLE, MINI_HEADER_OPTIONS, TESTIMONIAL_INTERVAL
} from '../actions';

const INIT_STATE: HomeReducer = {
  HideHeader: false,
  StickInnerHeader: false,
  WindowScroolheight: 0,
  ContactUsForm: {
    title: '',
    name: '',
    email: '',
    phone: '',
    Position: '',
    institution: '',
    num_students: '',
    num_classes: '',
    comments: '',
  },
  ContactFormSubmitSuccess: false,
  OpenMenuBar: false,
  OpenPlayVideo: false,
  activeTestimonial: 'vvit',
  Stickypricing_table: false,
  MiniHeaderOptions: "overview",
  // SelectedFaq:''
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
    case OPEN_OR_CLOSE_PLAY_VIDEO:

      return {
        ...state, OpenPlayVideo: !state.OpenPlayVideo
      }
    case SAVE_SELECTED_TESTIMONIAL:
      return {
        ...state, activeTestimonial: action.payload
      }
    case STICKY_PRICINGTABLE:

      return {
        ...state, Stickypricing_table: action.payload
      }

    case MINI_HEADER_OPTIONS:
      return {
        ...state, MiniHeaderOptions: action.payload
      }
    case TESTIMONIAL_INTERVAL:
      let Current = state.activeTestimonial;
      return {
        ...state, activeTestimonial: Current == 'vvit' ? 'stanley' : Current == 'stanley' ? 'sist' : 'vvit'
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
    case 'phone':
      return {
        ...state, ContactUsForm: {
          ...state.ContactUsForm,
          phone: action.payload.value,
        }
      }
    case 'Position':
      return {
        ...state, ContactUsForm: {
          ...state.ContactUsForm,
          Position: action.payload.value,

        }
      }
    case 'institution':
      return {
        ...state, ContactUsForm: {
          ...state.ContactUsForm,
          institution: action.payload.value,

        }
      }
    case 'num_students':
      return {
        ...state, ContactUsForm: {
          ...state.ContactUsForm,
          num_students: action.payload.value,
        }
      }
    case 'num_classes':
      return {
        ...state, ContactUsForm: {
          ...state.ContactUsForm,
          num_classes: action.payload.value,
        }
      }

    case 'comments':
      return {
        ...state, ContactUsForm: {
          ...state.ContactUsForm,
          comments: action.payload.value,
        }
      }
    default:
      return {
        ...state
      }

  }

}