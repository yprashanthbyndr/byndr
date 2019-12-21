import { string } from "prop-types";

export interface HomeReducer {
    HideHeader: any,
    StickyHeader_in_LMS:boolean,
    StickMiniHeader: boolean,
    WindowScroolheight: number,
    ContactUsForm: Intr_ContactFormObject,
    ContactFormSubmitSuccess: boolean,
    OpenMenuBar: boolean,
    OpenPlayVideo: boolean,
    activeTestimonial: string,
    Stickypricing_table: boolean,
    MiniHeaderOptions: string,
    HomeScreenprops: Intr_HomeScreen,
    // SelectedFaq: string
}


interface Intr_HomeScreen {
    changeDetector: boolean,
    activeSlide: string,
}

interface Intr_ContactFormObject {
    title: string
    name: string
    email: string
    phone: string
    Position: string
    institution: string
    num_students: string
    num_classes: string
    comments: string,
    Recaptcha_Token: any,
}
