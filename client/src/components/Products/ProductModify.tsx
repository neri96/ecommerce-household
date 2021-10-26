import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdEdit, MdDelete } from 'react-icons/md';

import Delete from './Delete';

import * as S from './style';

import { ModifyType } from '../../ts/types';

const ProductModify = ({ item }: any) => {
    const [isDelOpen, setIsDelOpen] = useState<boolean>(false);

    const handleDel = () => setIsDelOpen(!isDelOpen);

    return (
        <S.ProductModify>
            <Link to={{ 
                pathname: '/admin', 
                state: { type: ModifyType.EDIT, itemValue: item } 
            }}>
                <MdEdit color='#009900' />
            </Link>
            <MdDelete color='#ff1a1a' onClick={handleDel} />

            {isDelOpen ? 
                <Delete productId={item._id} handleDel={handleDel} /> : null}
        </S.ProductModify>
    )
}

export default ProductModify;