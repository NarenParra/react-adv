import { lazy, LazyExoticComponent } from "react";
import {  LazyLoadPage3 } from "../01-lazyLoad/pages";

type JSXComponent = ()=>JSX.Element;

interface Route{
    to:string,
    path:string,
    Component: LazyExoticComponent<JSXComponent>|JSXComponent,
    name:string
}

const lazy1 = lazy(()=> import(/* webpackChunkName: "LazyPage3" */'../01-lazyLoad/pages/LazyLoadPage'));
const lazy2 = lazy(()=> import(/* webpackChunkName: "LazyPage3" */'../01-lazyLoad/pages/LazyLoadPage2'));

export const routes: Route[] =[
    {
        to:'/lazy1',
        path:'lazy1',
        Component: lazy1,
        name:'Lazy-1'
    },
    {
        to:'/lazy2',
        path:'lazy2',
        Component: lazy2,
        name:'Lazy-2'
    },
    {
        to:'/lazy3',
        path:'lazy3',
        Component: LazyLoadPage3,
        name:'Lazy-3'
    },
]