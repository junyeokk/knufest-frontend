import styled from "styled-components";

export const MainContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    p {
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 25%);
    }
`;
export const GuestContainer = styled.div`
    width: 100%;
    margin-top: 80px;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 36px;
    p {
        text-shadow: none;
    }
`;
export const Date = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 33px;
`;

export const GuestCard = styled.div`
    height: 360px;
    display: flex;
    flex-direction: row;
    gap: 25px;
    padding: 0 50px;
    margin-top: 44px;
    overflow: hidden;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
        display: none;
    }
`;
