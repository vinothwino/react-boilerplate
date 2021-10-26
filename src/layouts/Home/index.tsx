import * as React from 'react';
import * as S from './style'
interface HomeLayoutProps {

}

const HomeLayout: React.FunctionComponent<HomeLayoutProps> = (props) => {
    const { children } = props
    return (
        <S.HomeContainer>
            {children}
        </S.HomeContainer>
    );
}

export default HomeLayout;