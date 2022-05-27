import styled from 'styled-components';

export const Container = styled.div`
    background-color: #1550ff;
    color: #fff;
    display: flex;
    width: 200px;
    height: 50px;
    border-radius: 10px;
    cursor: pointer;
    opacity: 1;
    transition: all ease .3s;

    &:hover{
        opacity: .8;
    }
`;

export const IconArea = styled.div`
    height: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #ffffff33;
    padding: 0 15px;
`;

export const Icon = styled.img`
    height: 20px;
`;

export const Label = styled.div`
    height: inherit;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
`;