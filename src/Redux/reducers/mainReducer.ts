

import { HomeReducer, ActionModel } from '../../models';
import {
  SAVE_SCROLL_HEIGHT, SAVE_CONTACT_US_IP_VALUES, SUBMIT_CONTACT_FORM_SUCCESS,
  OPEN_OR_CLOSE_MENUBAR, OPEN_OR_CLOSE_PLAY_VIDEO, SAVE_SELECTED_TESTIMONIAL,
  STICKY_PRICINGTABLE, MINI_HEADER_OPTIONS, TESTIMONIAL_INTERVAL, TCHANGE_DIRECTION_IN_HOME_SLIDES, SAVE_SELECTED_SLIDE_INHOME, STICKY_MINI_HEADER, action_Sticky_Mini_Header
} from '../actions';

const INIT_STATE: HomeReducer = {
  HideHeader: false,
  StickyHeader_in_LMS: true,
  StickMiniHeader: false,
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
  activeTestimonial: 'snist',
  Stickypricing_table: false,
  MiniHeaderOptions: "overview",
  HomeScreenprops: {
    changeDetector: false,
    activeSlide: "teachers",
  }
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
        ...state, activeTestimonial: Current == 'vvism' ? 'stanley' : Current == 'stanley' ? 'sist' : 'vvism'
      }

    case TCHANGE_DIRECTION_IN_HOME_SLIDES:

      return {
        ...state, HomeScreenprops: {
          ...state.HomeScreenprops,
          changeDetector: true,
        }
      }

    case SAVE_SELECTED_SLIDE_INHOME:

      return {
        ...state, HomeScreenprops: {
          ...state.HomeScreenprops,
          changeDetector: false,
          activeSlide: action.payload,
          // WindowScroolheight: action.payload.
        }
      }

    case STICKY_MINI_HEADER:
      return {
        ...state,
        HideHeader: action.payload.StickyMainHeader,
        StickMiniHeader: action.payload.StickyMiniHeader,
        WindowScroolheight: action.payload.scroolHieght
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