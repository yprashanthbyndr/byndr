import React from 'react';
import { Route } from 'react-router';

const ByndrRoutes = [
    {
        pageName: "Home",
        title: "Home",
        seoVisibility: true, // default it has to be true
        metaTitle: "Home",
        metaTags: "Meta Tags for Home",
        path: '/',
        key: 'home',
        metaDescription: "Meta Description for Home",
        routes: [],
    },
    {
        pageName: "About Us - Byndr",
        title: "About Us - Byndr",
        seoVisibility: true, // default it has to be true
        metaTitle: "About Us - Byndr",
        metaTags: "",
        path: '/aboutus',
        key: 'aboutus',
        metaDescription: "Byndr is a Mobile Learning Platform passionate about creating learning solutions that is transforming the way the world learns.",
        routes: []
    },
    {
        pageName: "Pricing Plans",
        title: "Pricing Plans",
        seoVisibility: true, // default it has to be true
        metaTitle: "Pricing Plans",
        metaTags: "Pricing Plans Meta Tags",
        path: '/pricing',
        key: 'pricing',
        metaDescription: "Pricing Plans Meta Description",
        routes: []
    },
    {
        pageName: "Product",
        title: "Product",
        seoVisibility: true, // default it has to be true
        metaTitle: "Product",
        metaTags: "Product Meta Tags",
        path: '/product',
        key: 'product',
        metaDescription: "Product Meta Description",
        routes: []
    },
    {
        pageName: "Product Roles",
        title: "Product Roles",
        seoVisibility: true, // default it has to be true
        metaTitle: "Product Roles",
        metaTags: "Product Roles Meta Tags",
        path: '/product-roles',
        key: 'product-roles',
        metaDescription: "Product Roles Meta Description",
        routes: []
    },
    {
        pageName: "Contact Us",
        title: "Contact Us",
        seoVisibility: true, // default it has to be true
        metaTitle: "Contact Us",
        metaTags: "Contact Us Meta Tags",
        path: '/contact-us',
        key: 'contact-us',
        metaDescription: "Contact Us Meta Description",
        routes: []
    },
    {
        pageName: "Blog",
        title: "Blog",
        seoVisibility: true, // default it has to be true
        metaTitle: "Blog",
        metaTags: "Blog Meta Tags",
        path: '/blog',
        key: 'blog',
        metaDescription: "Blog Meta Description",
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
        key: 'lms-for-teachers',
        metaDescription: "Contact Us Meta Description",
        routes: []
    },
    {
        pageName: "LMS For Students",
        title: "LMS For Students",
        seoVisibility: true, // default it has to be true
        metaTitle: "LMS For Students",
        metaTags: "LMS For Students Meta Tags",
        path: '/lms-for-students',
        key: 'lms-for-students',
        metaDescription: "LMS For Students Meta Description",
        routes: []
    },
    {
        pageName: "LMS For Admins",
        title: "LMS For Admins",
        seoVisibility: true, // default it has to be true
        metaTitle: "LMS For Admins",
        metaTags: "LMS For Admins Meta Tags",
        path: '/lms-for-admins',
        key: 'lms-for-admins',
        metaDescription: "LMS For Admins Meta Description",
        routes: []
    },
    {
        pageName: "Blog child1",
        title: "Blog child1",
        seoVisibility: true,
        metaTitle: "Blog Child1",
        metaTags: "Blog Meta Tags child1",
        path: '/blog/whats-in-store-for-learning-management-system-india-in-2017',
        key: 'whats-in-store-for-learning-management-system-india-in-2017',
        metaDescription:"BlogChild1",
    },
    {
        pageName: "Key factors to consider when planning to collaborate with a mobile LMS platform",
        title: "Key factors to consider when planning to collaborate with a mobile LMS platform",
        seoVisibility: true,
        metaTitle: "Key factors to consider when planning to collaborate with a mobile LMS platform",
        metaTags: "Key factors to consider when planning to collaborate with a mobile LMS platform",
        path: '/blog/key-factors-to-consider-when-planning-to-collaborate-with-a-mobile-lms-platform',
        key: 'key-factors-to-consider-when-planning-to-collaborate-with-a-mobile-lms-platform',
        metaDescription:"Key factors to consider when planning to collaborate with a mobile LMS platform",
    },{
        pageName: "Use of learning management systems in India",
        title: "Use of learning management systems in India",
        seoVisibility: true,
        metaTitle: "Use of learning management systems in India",
        metaTags: "Use of learning management systems in India",
        path: '/blog/use-of-learning-management-systems-in-india',
        key: 'use-of-learning-management-systems-in-india',
        metaDescription:"Use of learning management systems in India",
    },
    {
        pageName: "Blog child4",
        title: "Blog child4",
        seoVisibility: true,
        metaTitle: "Blog Child4",
        metaTags: "Blog Meta Tags child4",
        path: '/blog/why-colleges-need-mobile-learning-apps',
        key: 'why-colleges-need-mobile-learning-apps',
        metaDescription:"BlogChild4",
    },
    {
        pageName: "Blog child5",
        title: "Blog child5",
        seoVisibility: true,
        metaTitle: "Blog Child5",
        metaTags: "Blog Meta Tags child5",
        path: '/blog/mobile-learning-empowering-education-industry',
        key: 'mobile-learning-empowering-education-industry',
        metaDescription:"BlogChild5",
    },
    {
        pageName: "Blog child6",
        title: "Blog child6",
        seoVisibility: true,
        metaTitle: "Blog Child6",
        metaTags: "Blog Meta Tags child6",
        path: '/blog/mobile-learning-empowering-education-industrylearning-management-systems-self-paced-and-easy-to-use',
        key: 'mobile-learning-empowering-education-industrylearning-management-systems-self-paced-and-easy-to-use',
        metaDescription:"BlogChild6",
    },
    {
        pageName: "Blog child7",
        title: "Blog child7",
        seoVisibility: true,
        metaTitle: "Blog Child7",
        metaTags: "Blog Meta Tags child7",
        path: '/blog/bright-future-ahead-for-lms-industry',
        key: 'bright-future-ahead-for-lms-industry',
        metaDescription:"BlogChild7",
    }
    ,
    {
        pageName: "Blog child8",
        title: "Blog child8",
        seoVisibility: true,
        metaTitle: "Blog Child8",
        metaTags: "Blog Meta Tags child8",
        path: '/blog/how-online-learning-platform-can-help-startup-ventures',
        key: 'how-online-learning-platform-can-help-startup-ventures',
        metaDescription:"BlogChild8",
    }
    ,
    {
        pageName: "Blog child9",
        title: "Blog child9",
        seoVisibility: true,
        metaTitle: "Blog Child9",
        metaTags: "Blog Meta Tags child9",
        path: '/blog/blog-post-title-5',
        key: 'blog-post-title-5',
        metaDescription:"BlogChild9",
   },
    {
        pageName:"Privacy Policy",
        title:"Privacy Policy",
        seoVisibility:true, // default it has to be true
        metaTitle:"Privacy Policy",
        metaTags:"Privacy Policy Meta Tags",
        path:'/privacy-policy',
        key: 'privacy-policy',
        metaDescription:"Privacy Policy Description",
        routes: []
    },
    {
        pageName:"Terms of Use",
        title:"Terms of Use",
        seoVisibility:true, // default it has to be true
        metaTitle:"Terms of Use",
        metaTags:"Terms of Use Meta Tags",
        path:'/terms-of-use',
        key: 'terms-of-use',
        metaDescription:"Terms of Use Description",
        routes: []
    }
]

export default (
    <Route>
        {ByndrRoutes.map((route,index) =>{
            return <Route key={index} path={route.path} />
        })}
    </Route>
);