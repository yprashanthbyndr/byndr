import { AboutUs, Pricing, Product, ProductRoles, Blog, HomeSplit_A, HomeSplit_B, ContactUs, PrivacyPolicy, TermsOfUse, lms_For_Admin, lms_For_Student, lms_For_Teacher } from "../screens"
import SingleBlog from "../screens/SingleBlog";

import { BlogChild1 ,BlogChild2 ,BlogChild3, BlogChild4 } from '../screens/blogChilds/index';

const ByndrRoutes = [
    {
        pageName: "Page 1",
        title: "Page 1",
        seoVisibility: true, // default it has to be true
        metaTitle: "Page 1",
        metaTags: "Meta Tags for Page 1",
        path: '/',
        metaDescription: "Meta Description for Page 1",
        component: HomeSplit_A,
        routes: [],
    },
    {
        pageName: "Page 2",
        title: "Page 2",
        seoVisibility: true, // default it has to be true
        metaTitle: "Page 2",
        metaTags: "Meta Tags for Page 2",
        path: '/test-case',
        metaDescription: "Meta Description for Page 2",
        component: HomeSplit_B,
        routes: []
    },
    {
        pageName: "We are an education company",
        title: "About Us",
        seoVisibility: true, // default it has to be true
        metaTitle: "About Us",
        metaTags: "About Us Meta Tags",
        path: '/aboutus',
        metaDescription: "About Us Meta Description",
        component: AboutUs,
        routes: []
    },
    {
        pageName: "Pricing Plans",
        title: "Pricing Plans",
        seoVisibility: true, // default it has to be true
        metaTitle: "Pricing Plans",
        metaTags: "Pricing Plans Meta Tags",
        path: '/pricing',
        metaDescription: "Pricing Plans Meta Description",
        component: Pricing,
        routes: []
    },
    {
        pageName: "Product",
        title: "Product",
        seoVisibility: true, // default it has to be true
        metaTitle: "Product",
        metaTags: "Product Meta Tags",
        path: '/product',
        metaDescription: "Product Meta Description",
        component: Product,
        routes: []
    },
    {
        pageName: "Product Roles",
        title: "Product Roles",
        seoVisibility: true, // default it has to be true
        metaTitle: "Product Roles",
        metaTags: "Product Roles Meta Tags",
        path: '/product-roles',
        metaDescription: "Product Roles Meta Description",
        component: ProductRoles,
        routes: []
    },
    {
        pageName: "Contact Us",
        title: "Contact Us",
        seoVisibility: true, // default it has to be true
        metaTitle: "Contact Us",
        metaTags: "Contact Us Meta Tags",
        path: '/contact-us',
        metaDescription: "Contact Us Meta Description",
        component: ContactUs,
        routes: []
    },
    {
        pageName: "Blog",
        title: "Blog",
        seoVisibility: true, // default it has to be true
        metaTitle: "Blog",
        metaTags: "Blog Meta Tags",
        path: '/blog',
        metaDescription: "Blog Meta Description",
        component: Blog,
        // routes: [{
        //     pageName: "Blog child1",
        //     title: "Blog child1",
        //     metaTitle: "Blog Child1",
        //     metaTags: "Blog Meta Tags child1",
        //     path: '/whats-in-store-for-learning-management-system-india-in-2017',
        //     // metaDescription:"Blog Meta Description",
        //     component: BlogChild1,
        // }]
    },
    {
        pageName: "LMS For Teachers",
        title: "Contact Us",
        seoVisibility: true, // default it has to be true
        metaTitle: "Contact Us",
        metaTags: "Contact Us Meta Tags",
        path: '/lms-for-teachers',
        metaDescription: "Contact Us Meta Description",
        component: lms_For_Teacher,
        routes: []
    },
    {
        pageName: "LMS For Students",
        title: "LMS For Students",
        seoVisibility: true, // default it has to be true
        metaTitle: "LMS For Students",
        metaTags: "LMS For Students Meta Tags",
        path: '/lms-for-students',
        metaDescription: "LMS For Students Meta Description",
        component: lms_For_Student,
        routes: []
    },
    {
        pageName: "LMS For Admins",
        title: "LMS For Admins",
        seoVisibility: true, // default it has to be true
        metaTitle: "LMS For Admins",
        metaTags: "LMS For Admins Meta Tags",
        path: '/lms-for-admins',
        metaDescription: "LMS For Admins Meta Description",
        component: lms_For_Admin,
        routes: []
    },
    {
        pageName: "Blog child1",
        title: "Blog child1",
        seoVisibility: true,
        metaTitle: "Blog Child1",
        metaTags: "Blog Meta Tags child1",
        path: '/blog/whats-in-store-for-learning-management-system-india-in-2017',
        metaDescription:"BlogChild1",
        component: BlogChild1,
    },
    {
        pageName: "Key factors to consider when planning to collaborate with a mobile LMS platform",
        title: "Key factors to consider when planning to collaborate with a mobile LMS platform",
        seoVisibility: true,
        metaTitle: "Key factors to consider when planning to collaborate with a mobile LMS platform",
        metaTags: "Key factors to consider when planning to collaborate with a mobile LMS platform",
        path: '/blog/key-factors-to-consider-when-planning-to-collaborate-with-a-mobile-lms-platform',
        metaDescription:"Key factors to consider when planning to collaborate with a mobile LMS platform",
        component: BlogChild2,
    },{
        pageName: "Use of learning management systems in India",
        title: "Use of learning management systems in India",
        seoVisibility: true,
        metaTitle: "Use of learning management systems in India",
        metaTags: "Use of learning management systems in India",
        path: '/blog/use-of-learning-management-systems-in-india',
        metaDescription:"Use of learning management systems in India",
        component: BlogChild3,
    },
    {
        pageName: "Blog child4",
        title: "Blog child4",
        seoVisibility: true,
        metaTitle: "Blog Child4",
        metaTags: "Blog Meta Tags child4",
        path: '/blog/why-colleges-need-mobile-learning-apps',
        metaDescription:"BlogChild4",
        component: BlogChild4,
    },
    {
        pageName: "Single Blog",
        title: "Single Blog",
        seoVisibility: true, // default it has to be true
        metaTitle: "Single Blog",
        metaTags: "Single Blog Meta Tags",
        path: '/blogSingle',
        metaDescription: "Single Blog Meta Description",
        component: SingleBlog,
        routes: []
    },
    {
        pageName:"Privacy Policy",
        title:"Privacy Policy",
        seoVisibility:true, // default it has to be true
        metaTitle:"Privacy Policy",
        metaTags:"Privacy Policy Meta Tags",
        path:'/privacy-policy',
        metaDescription:"Privacy Policy Description",
        component:PrivacyPolicy,
        routes: []
    },
    {
        pageName:"Terms of Use",
        title:"Terms of Use",
        seoVisibility:true, // default it has to be true
        metaTitle:"Terms of Use",
        metaTags:"Terms of Use Meta Tags",
        path:'/terms-of-use',
        metaDescription:"Terms of Use Description",
        component:TermsOfUse,
        routes: []
    }
]

export { ByndrRoutes }