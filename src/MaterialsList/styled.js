import styled from 'styled-components';

export const ListWrapper = styled.div`
    position: relative;
    width: 35%;
    max-height: 325px;
    background: #17171A;
    text-align: center;
    border: 1px solid gray;
    overflow: auto;
`;

export const MaterialWrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 10px 15px;
    cursor: pointer;
    text-align: left;
    border-bottom: 1px solid gray;
    ${({ selected }) => selected && `background: #000344`};
    
    p {
        margin: 4px 0;
    }
    
    p.note {
        font-size: 12px;
    }
    
    div.circle {
        width: 30px;
        height: 30px;
        margin-right: 10px;
        border-radius: 50px;
        background: ${({ color }) => color};
    }
    
`;