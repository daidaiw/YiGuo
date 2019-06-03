export default{ 
    path:'/category',
    name:'category',
    component:()=>import('@/views/category/category'),
    children:[
        {path:'fruit',name:'fruit',component:()=>import('@/views/category/categoryItem')}
    ]
}