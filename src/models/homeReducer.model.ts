import { string } from "prop-types";

export interface HomeReducer {
    HideHeader: any,
    StickInnerHeader: boolean,
    WindowScroolheight: number,
    ContactUsForm: Intr_ContactFormObject,
    ContactFormSubmitSuccess: boolean,
    OpenMenuBar: boolean,
    activeTestimonial: string,
    Stickypricing_table: boolean,
    MiniHeaderOptions: string,
}

interface Intr_ContactFormObject {
    title: string
    name: string
    email: string
    phoneNo: string
    positionAtCollege: string
    collegeName: string
    No_Student: string
    message: string
}
