import styled from 'styled-components';

export const DetailsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 70%;
    min-height: 270px; 
    color: white;
    padding: 30px;
    background: #17171A;
    margin: 0 20px;
    border-radius: 3px; 
    
    @media (max-width: 750px) {
        margin: 20px 0 0 0;
    }
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 45%;
    
    label {
        margin-bottom: 30px;
    }
    
`;

export const FormInput = styled.input`
    background: #393942;
    color: white;
    width: 100%;
    border: 0;
    padding: 8px; 
    border-radius: 3px;
    margin-top: 5px;
    text-align: ${({ type }) => type === "number" ? `right` : `left`};
`;

export const ColorInput = styled.input`
    position: relative;
    border-radius: 100%;
    height: 30px;
    width: 30px;
    border: none;
    outline: none;
    background: #17171A;
    -webkit-appearance: none;
    margin-top: 5px;
    
    ::-webkit-color-swatch-wrapper {
        padding: 0;
    }
    
    ::-webkit-color-swatch {
        border: none;
        border-radius: 100%;
    }
`;