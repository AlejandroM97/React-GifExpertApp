import { useState } from "react";
import { AddCategory,GifGrid  } from "./Components"


export const GifExpertApp = () => {

    const [categories, setcategories] = useState(['one punch'])



    const OnAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;

        setcategories([newCategory, ...categories])

    }



    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory OnNewCategory={(valor) => OnAddCategory(valor)} />
         
                {

                    categories.map(category =>
                    (

                        <GifGrid key={category} category={category}  />

                    ))
                }


        </>
    )


}
