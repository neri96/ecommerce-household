import { useRef, useState, useEffect } from 'react';

import { v4 as uuidv4 } from 'uuid';

import { AiOutlineArrowLeft } from 'react-icons/ai';
import { AiOutlineArrowRight } from 'react-icons/ai';

import * as S from './style';

enum Directions {
    LEFT = 'left',
    RIGHT = 'right'
}

const ProductSlider = ({ images }: { images: string[] }) => {
    const [index, setIndex] = useState(0);
    const [sliderImages, setSliderImages] = useState(images);

    useEffect(() => {
        if(images) {
            setSliderImages([...images]);
        }
    }, [images])

    const handleSlider = (e: any, direction: `${Directions}`) => {
        if((index === 0) && (direction === Directions.LEFT) ||
        (index === (images.length - 1)) && (direction === Directions.RIGHT)) {
            return;
        }

        setIndex((prevIndex: number) => {
            return direction === Directions.LEFT ? prevIndex - 1 : prevIndex + 1;
        })
    }

    return (
        <S.ProductSlider>
            <S.SliderWrap 
                index={index}
                length={sliderImages && sliderImages.length}
            >
                {sliderImages.map((img: string, i: number, self: any) => (
                        <img 
                            key={uuidv4()}
                            src={`/${img}`} 
                            alt='Изображение товара'
                        />
                    )
                )}
            </S.SliderWrap>
            <S.SliderArrow 
                direction={Directions.LEFT} 
                onClick={(e) => handleSlider(e, Directions.LEFT)}
            >
                <AiOutlineArrowLeft color={`${index === 0 && 'rgba(204, 204, 204, .6)'}`} />
            </S.SliderArrow>
            <S.SliderArrow 
                direction={Directions.RIGHT} 
                onClick={(e) => handleSlider(e, Directions.RIGHT)}
            >
                <AiOutlineArrowRight 
                    color={`${index === (sliderImages.length - 1) && 'rgba(204, 204, 204, .6)'}`} 
                />
            </S.SliderArrow>
            <S.SliderControllers>
                {Array.from(Array(sliderImages.length).keys()).map((imgIndex: any) => (
                    <S.PaginationPaint
                        isCurrent={imgIndex === index} 
                        key={uuidv4()} 
                        onClick={() => setIndex(imgIndex)} 
                    />
                ))}
            </S.SliderControllers>
        </S.ProductSlider>
    )
    }

export default ProductSlider;