import { string } from "prop-types";

export interface HomeReducer {
    HideHeader: any,
    StickInnerHeader: boolean,
    WindowScroolheight: number,
    ContactUsForm: ContactFormObject,
    ContactFormSubmitSuccess: boolean,
    OpenMenuBar: boolean
}

interface ContactFormObject {
    title: string
    name: string
    email: string
    phoneNo: string
    positionAtCollege: string
    collegeName: string
    No_Student: string
    message: string
}