import { faBriefcase} from "@fortawesome/free-solid-svg-icons";
const categories = [
    {
        id: 1,
        name: "Quy trình SCL",
        path : "" ,
        children :[
            {
                id: 1,
                name: "Hồ sơ danh mục SCL",
                icon : faBriefcase ,
                path : "" 
                
            },
            {
                id: 2,
                name: "Thẩm định hồ sơ DMSCL",
                icon : faBriefcase ,
                path : "" 
                
            }

        ]
    } ,
    {
        id: 2,
        name: "Quy trình SCL 2",
        path : "" ,
        children :[
            {
                id: 1,
                name: "Hồ sơ danh mục SCL",
                icon : faBriefcase ,
                path : "" 
                
            },
            {
                id: 2,
                name: "Thẩm định hồ sơ DMSCL",
                icon : faBriefcase ,
                path : "" 
                
            }

        ]
    }
    
];



export default categories;
