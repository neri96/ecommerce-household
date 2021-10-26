import { useSelector } from 'react-redux';

import { CSSTransition } from 'react-transition-group';

import ErrorModal from '../ErrorModal';
import TextWrap from './TextWrap';

import * as S from './style';

const MainPage = (props: any) => {
    const errorState = useSelector((state: any) => state.errorState);
    
    return (
        <S.MainPage>
            <CSSTransition
                in={!!errorState.length}
                classNames='fade-error'
                timeout={300}
                unmountOnExit
            >
                <ErrorModal />
            </CSSTransition>
            <TextWrap />
        </S.MainPage>
    )
}

export default MainPage;
