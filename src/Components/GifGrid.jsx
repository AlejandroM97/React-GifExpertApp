import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';
import { GifItem } from './GifItem';
import { useFetchGifs } from '../Hooks/useFetchGifs';


export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);




    return (
        <>
            <h3>{category}</h3>
            <h1>Test</h1>
            {


                isLoading && (<h2>Cargando...</h2>)

            }



            <div className="card-grid">

                {

                    images.map((image) => (

                        <GifItem
                            key={image.id}
                            {...image}

                        />


                    ))



                }




            </div>



        </>
    )
}
