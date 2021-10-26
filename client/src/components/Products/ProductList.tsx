import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

import _ from 'lodash';

import Product from './Product';
import ProductShowMore from './ProductShowMore';

import useFetch from '../../hooks/useFetch';
import useCompareObjects from '../../hooks/useCompareObjects';

import { FetchItemsDetails } from '../../context';

import { Methods, FetchType, RenderType } from '../../ts/types';

import * as S from './style';

const ProductList = () => {
    const { response, sendRequest } = useFetch(FetchType.PRODUCTS);
    const { loading, data } = response;

    const [products, setProducts] = useState<any>([]);
    const [amount, setAmount] = useState<number>(0);

    const location = useLocation();

    const { useDeepCompareEffect } = useCompareObjects();

    const path = location.pathname.split('/')[2];

    const currentPath = useRef<any>(path);

    const getItems = async () => {
        sendRequest({
            path: `/products/${path}/getAll?amount=${amount}`,
            method: Methods.GET
        })

    }

    useEffect(() => {
        getItems();
    }, [path, amount])
    
    const fetchMore = () => {
        setAmount(amount + 10);
    }

    return (
        <S.ProductListWrap>
            {data.products ?
                <>
                    <FetchItemsDetails.Provider value={{ getItems }}>
                        <S.ProductList>
                            {data.products.map((item: any) => {
                                return (
                                    <Product key={item._id} item={item} />
                                )
                            })}
                        </S.ProductList>
                    </FetchItemsDetails.Provider>
                    {(products.length >= 10 && !data.done) ?
                        <ProductShowMore 
                            fetchMore={fetchMore} 
                            loading={loading}
                        /> :
                        null
                    }
                </>
            : loading ? <h1>LOADING...</h1> : null}
        </S.ProductListWrap>
    )
}

export default ProductList;

