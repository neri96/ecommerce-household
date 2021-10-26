import styled, { css, keyframes } from 'styled-components';

interface TextDetails {
    order?: string;
}

const MainPage = styled.section`
    height: calc(100vh - 100px);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
`;

const TextWrap = styled.div`
    height: 300px;
    width: 350px;
`;

const textAppear = (pos: number) => keyframes`
    80% { transform: translateX(${pos}px); opacity: 1 }
    100% { transform: translateX(0); opacity: 1 }
`;

const textDance = keyframes`
    0% { text-shadow: -3px -3px 2px #e6e6e6 }
    7% { text-shadow: -5px -5px 2px #e6e6e6 }
    14% { text-shadow: -6px -6px 2px #e6e6e6 }
    21% { text-shadow: -7px -7px 2px #e6e6e6 }
    28% { text-shadow: -6px -6px 2px #e6e6e6 }
    35% { text-shadow: -5px -5px 2px #e6e6e6 }
    42% { text-shadow: -3px -3px 2px #e6e6e6 }
    49% { text-shadow: 5px -5px 2px #e6e6e6 }
    56% { text-shadow: 6px -6px 2px #e6e6e6 }
    63% { text-shadow: 7px -7px 2px #e6e6e6 }
    70% { text-shadow: 6px -6px 2px #e6e6e6 }
    77% { text-shadow: 5px -5px 2px #e6e6e6 }
    84% { text-shadow: -3px -3px 2px #e6e6e6 }
    91% { transform: scale(1.1) }
    100% { transform: scale(1) }
`;

const arrowsAppear = keyframes`
    0% { opacity: 0 }
    100% { opacity: 1 }
`;

const Text = styled.div<TextDetails>`
    height: 100px;
    width: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    opacity: ${props => props.order === 'third' && 0};
    animation-name: ${props => props.order === 'first' ? textAppear(70) : 
    props.order === 'second' ? textAppear(-70) : textAppear(0)};
    animation-duration: 400ms; 
    animation-timing-function: ease-out; 
    animation-fill-mode: forwards;
    animation-delay: 500ms;
    transform: ${props => props.order === 'first' ? `translateX(calc((-100vw - 349px) / 2))` : 
    props.order === 'second' ? `translateX(calc((100vw + 349px) / 2))` : 0};
    .arrow-left, .arrow-right {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        opacity: 0;
        animation-name: ${arrowsAppear};
        animation-duration: 300ms; 
        animation-timing-function: ease-out; 
        animation-delay: ${props => props.order === 'first' ? '1300ms' : 
        props.order === 'second' ? '2600ms' : '3900ms'};
        animation-fill-mode: forwards;
    }
    .arrow-left {
        left: -30px;
    }
    .arrow-right {
        right: -30px;
    }
    h1 {
        margin: 0;
        text-transform: uppercase;
        font-size: 50px;
        animation-name: ${textDance};
        animation-duration: 1400ms; 
        animation-timing-function: ease-out; 
        animation-delay: ${props => props.order === 'first' ? '1300ms' : 
        props.order === 'second' ? '2600ms' : '3900ms'};
        -webkit-touch-callout: none;
        -webkit-user-select: none; 
        -khtml-user-select: none;
        -moz-user-select: none; 
        -ms-user-select: none; 
        user-select: none; 
    }

`;

export { MainPage, TextWrap, Text };