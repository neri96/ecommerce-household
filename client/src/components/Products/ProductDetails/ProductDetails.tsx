import { useState } from 'react';

import ProductDetailsHeader from './ProductDetailsHeader';
import ProductSlider from './ProductSlider';
import ProductData from './ProductData';

import useFetch from '../../../hooks/useFetch';
import useCompareObjects from '../../../hooks/useCompareObjects';

import { isEmpty } from 'lodash';

import { ProductDetailsCtx } from '../../../context';

import { Methods, FetchType } from '../../../ts/types';
import { ProductDetailsProps } from './ts/interfaces';

import * as S from './style';

const ProductDetails = (props: any) => {
    const [productOneUpdates, setProductOneUpdates] = useState(false);
    const [product, setProduct] = useState<ProductDetailsProps>({
        _id: '',
        name: '',
        price: 0,
        discount: 0,
        deliveryPrice: 0,
        quantity: 0,
        images: [],
        category: '',
        description: '',
        reviews: []
    });

    const { pathname } = props.location;

    const { response, sendRequest } = useFetch(FetchType.ONE_PRODUCT);
    const { loading, data } = response;
    
    const { useDeepCompareEffect } = useCompareObjects();

    const { images, name, ...productDetails } = product;

    const handleProductOneUpdates = () => {
        setProductOneUpdates(!productOneUpdates);
    }
    
    const getProduct = () => {
        const productName = pathname.split('/')[3];
        const category = pathname.split('/')[2];

        sendRequest({
            path: `/products/getOne?name=${productName}&category=${category}`,
            method: Methods.GET,
            authReq: true
        });

        if(!isEmpty(data)) {
            setProduct({ ...data.product });            
        };

        if(productOneUpdates) handleProductOneUpdates();
    }

    useDeepCompareEffect(getProduct, [data, productOneUpdates]);
    
    return (
        <S.ProductDetailsWrap>
            <ProductDetailsCtx.Provider value={{ productDetails, handleProductOneUpdates }}>
                <ProductDetailsHeader 
                    name={name as string} 
                    reviews={product.reviews ? product.reviews : []} 
                />
                <S.ProductDetails>
                    <ProductSlider images={images as string[]} />
                        <ProductData />
                </S.ProductDetails>
            </ProductDetailsCtx.Provider>
        </S.ProductDetailsWrap>
    )
}

export default ProductDetails