import { GoArrowRight, GoArrowLeft } from 'react-icons/go';

import * as S from './style';

const textArr = [
    { className: 'first', text: 'товары' },
    { className: 'second', text: 'премиум' },
    { className: 'third', text: 'качества' },
]

const TextWrap = () => {
    return (
        <S.TextWrap>
            {textArr.map((elem, i) => {
                const { className, text } = elem;
                return (
                    <S.Text key={i} order={className}>
                        <div className='arrow-left'>
                            <GoArrowRight size={30} color={"ccc"} />
                        </div>
                        <h1>{text}</h1>
                        <div className='arrow-right'>
                            <GoArrowLeft size={30} color={"ccc"} />
                        </div>
                    </S.Text>
                )
            })}
        </S.TextWrap>
    )
}

export default TextWrap;