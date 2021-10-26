import { useState } from 'react';
import { IoMdClose } from 'react-icons/io';

import FadingComponent from '../includes/FadingComponent';
import useToggleElement from '../../hooks/useToggleElement';

import labels from './labels';

import * as S from './style';

const Category = ({ value, setValue }: any) => {
    const { isOpen, handleElement, ref } = useToggleElement();

    const handleCategory = (e: any) => {
        setValue({ ...value, category: e.currentTarget.getAttribute('data-val') })
    }

    const clearCategory = () => {
        setValue({ ...value, category: '' });
    }

    const textTranslate = (value: string) => {
        for(let label of labels) {
            if(label.valEng === value) {
                console.log(label);
                
                return label.valRus;
            }
        }
    }

    return (
        <>
            <S.Select onClick={handleElement} ref={ref}>
                <span>
                    {value.category ? 
                        textTranslate(value.category) :
                        'Выберите категорию'}
                </span>
                {value.category && <IoMdClose onClick={clearCategory} />}
            </S.Select>
            <FadingComponent fadeIn={isOpen}>
                <S.Options>
                    <div className='option' data-val='hygiene' onClick={handleCategory}>
                        <span>Гигиена</span>
                    </div>
                    <div className='option' data-val='kitchen' onClick={handleCategory}>
                        <span>Кухня</span>
                    </div>
                    <div className='option' data-val='auto' onClick={handleCategory}>
                        <span>Авто</span>
                    </div>
                    <div className='option' data-val='other' onClick={handleCategory}>
                        <span>Прочее</span>
                    </div>
                </S.Options>
            </FadingComponent>
        </>
    )
}

export default Category;