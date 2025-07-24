'use client'

import ProductCard from '@/components/ProductCard';
import SectionTitle from '@/components/SectionTitle'
import React, { useEffect, useState } from 'react'

export default function PopularProducts() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const productsData = async () => {
            const res = await fetch('/products.json');
            const data = await res.json();
            setProducts(data)
        }
        productsData();
    }, [])
    
    return (
        <div>
            <SectionTitle
                title="Popular Products"
                subTitle="Browse Our Products"
                details="the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
            />
            <div className='grid grid-cols-3 gap-6'>
                {products.map(product => <ProductCard
                    key={product.id}
                    productData={product}
                />)}
            </div>
            <div className='flex justify-center my-12'>
                <button className="btn btn-xl btn-outline btn-error rounded">More Products</button>
            </div>
        </div>
    )
}
