import { ReactNode } from 'react';

import * as S from './style';

const Warning = ({ children, warningDuration }: { children: ReactNode, warningDuration: number }) => {
    return (
        <S.WarningWrap>
            <S.Warning>
                {children}
            </S.Warning>
            <S.WarningBottomLine duration={warningDuration} />
        </S.WarningWrap>
    )
}

export default Warning;