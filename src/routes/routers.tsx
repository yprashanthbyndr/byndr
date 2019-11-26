import { HomeSplit_A, HomeSplit_B } from "../screens"

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
    }
]

export { ByndrRoutes}