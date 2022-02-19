import Categories from '../../components/Categories/Categories'
import './CategoriesPage.light.css'
import React from 'react'

export const CategoriesPage = () => {
    return (
        <div>
            <div className='category-container'>
                <div>
                    <Categories />
                    <Categories />
                    <Categories />
                </div>
            </div>
        </div>
    )
}
