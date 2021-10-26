import { ReactChild, ReactChildren } from 'react';

import { CSSTransition } from 'react-transition-group';

interface FadingComponentProps {
    fadeIn: boolean;
    children: ReactChild | ReactChildren
}

const FadingComponent = ({ fadeIn, children }: FadingComponentProps) => {
    return (
        <CSSTransition
            in={fadeIn}
            classNames='fade'
            timeout={300}
            unmountOnExit
        >
            {children}
        </CSSTransition>
    )
}

export default FadingComponent;