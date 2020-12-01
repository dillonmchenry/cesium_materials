import styled from 'styled-components';

export const MenuWrapper = styled.div`
    width: 100%;
    max-width: 700px;
    margin: 50px auto;
    color: white;
    background: #29292F;
    padding: 0 30px;
    
    @media (min-width: 750px) {
        max-height: 300px;
    }
    
    h2 {
        font-weight: 500;
    }
`;

export const ButtonWrapper = styled.div`
    display: flex;
    margin: 15px 0;
    
    button {
        color: white;
        cursor: pointer;
        border: 0;
        border-radius: 16px;
        padding: 7px 12px;
        margin-right: 10px;
    }
    
    .add {
        background: #0075DB;
    }
    
    .delete {
        background: #FF444C
    }
    
`;

export const MaterialGrid = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    
    @media (max-width: 750px) {
        flex-direction: column;
    }

`;

