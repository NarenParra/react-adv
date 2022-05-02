import { LazyLoadPage, LazyLoadPage2, LazyLoadPage3 } from "../01-lazyLoad/pages";

interface Route{
    to:string,
    path:string,
    Component: () => JSX.Element,
    name:string
}

export const routes: Route[] =[
    {
        to:'/lazy1',
        path:'lazy1',
        Component: LazyLoadPage,
        name:'Lazy-1'
    },
    {
        to:'/lazy2',
        path:'lazy2',
        Component: LazyLoadPage2,
        name:'Lazy-2'
    },
    {
        to:'/lazy3',
        path:'lazy3',
        Component: LazyLoadPage3,
        name:'Lazy-3'
    },
]