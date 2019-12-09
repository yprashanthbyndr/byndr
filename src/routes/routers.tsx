import { AboutUs,Pricing,Product,ProductRoles,Blog,HomeSplit_A, HomeSplit_B, ContactUs } from "../screens"
import SingleBlog from "../screens/SingleBlog"

const ByndrRoutes = [
    {
        pageName:"Page 1",
        title:"Page 1",
        seoVisibility:true, // default it has to be true
        metaTitle:"Page 1",
        metaTags:"Meta Tags for Page 1",
        path:'/',
        metaDescription:"Meta Description for Page 1",
        component:HomeSplit_A,
        routes: [],
    },
    {
        pageName:"Page 2",
        title:"Page 2",
        seoVisibility:true, // default it has to be true
        metaTitle:"Page 2",
        metaTags:"Meta Tags for Page 2",
        path:'/test-case',
        metaDescription:"Meta Description for Page 2",
        component:HomeSplit_B,
        routes: []
    },
    {
        pageName:"We are an education company",
        title:"About Us",
        seoVisibility:true, // default it has to be true
        metaTitle:"About Us",
        metaTags:"About Us Meta Tags",
        path:'/aboutus',
        metaDescription:"About Us Meta Description",
        component:AboutUs,
        routes: []
    },
    {
        pageName:"Pricing Plans",
        title:"Pricing Plans",
        seoVisibility:true, // default it has to be true
        metaTitle:"Pricing Plans",
        metaTags:"Pricing Plans Meta Tags",
        path:'/pricing',
        metaDescription:"Pricing Plans Meta Description",
        component:Pricing,
        routes: []
    },
    {
        pageName:"Product",
        title:"Product",
        seoVisibility:true, // default it has to be true
        metaTitle:"Product",
        metaTags:"Product Meta Tags",
        path:'/product',
        metaDescription:"Product Meta Description",
        component:Product,
        routes: []
    },
    {
        pageName:"Product Roles",
        title:"Product Roles",
        seoVisibility:true, // default it has to be true
        metaTitle:"Product Roles",
        metaTags:"Product Roles Meta Tags",
        path:'/product-roles',
        metaDescription:"Product Roles Meta Description",
        component:ProductRoles,
        routes: []
    },
    {
        pageName:"Contact Us",
        title:"Contact Us",
        seoVisibility:true, // default it has to be true
        metaTitle:"Contact Us",
        metaTags:"Contact Us Meta Tags",
        path:'/contact-us',
        metaDescription:"Contact Us Meta Description",
        component:ContactUs,
        routes: []
    },
    {
        pageName:"Blog",
        title:"Blog",
        seoVisibility:true, // default it has to be true
        metaTitle:"Blog",
        metaTags:"Blog Meta Tags",
        path:'/blog',
        metaDescription:"Blog Meta Description",
        component:Blog,
        routes: []
    },
    ,
    {
        pageName:"Single Blog",
        title:"Single Blog",
        seoVisibility:true, // default it has to be true
        metaTitle:"Single Blog",
        metaTags:"Single Blog Meta Tags",
        path:'/blogSingle',
        metaDescription:"Single Blog Meta Description",
        component:SingleBlog,
        routes: []
    }
]

export { ByndrRoutes}