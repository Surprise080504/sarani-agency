import styled from "styled-components";


export const HeaderOut = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100px;
    height: 70px;
    display: flex;
    z-index: 99;
`;
export const LogoImg = styled.img`
    margin-top: -30px;
    cursor: pointer;
    @media screen and (max-width:1280px){
        margin-top: -20px !important;
    }
`;
export const Dropdownlist = styled.div`
    width:150px;
    height: 200px;
    z-index: 99;
    position: absolute;
    top: 30px;
    background: #000;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 20px;
`;
export const DropdownlistItem = styled.div`
    color: #fff;
    margin-top: 20px;
    cursor: pointer;
`;
export const DropMenus = styled.div`
    display: flex;
    @media screen and (max-width:1280px){
        display: none !important;
    }
`;
export const DropMenuItem = styled.div`
    font-family: Montserrat_bold;
    color: #000;
    display: flex;
    align-items: center;
    font-size: 16px;
    position: relative;
    cursor: pointer;
    letter-spacing: 1px;
    margin: 0 25px;
    justify-content: center;
`;
export const RightBtn = styled.div`
    display: flex;
    align-items: center;
`;
export const BuildBtn = styled.div`
    display: flex;
    color: #fff;
    font-size: 17px;
    cursor: pointer;
    padding: 0 8px 0 30px;
    letter-spacing: 1px;
    border-radius: 40px;
    height: 50px;
    font-family: Montserrat_bold;
    align-items: center;
    font-weight: 500;
    background-color: #000;
    @media screen and (max-width:1280px){
        display: none !important;
    }
`;
export const MsgBtn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    cursor: pointer;
    height: 60px;
    border-radius: 50%;
    background-color: #000;
    margin-left: 20px;
    @media screen and (max-width:1280px){
        display: none !important;
    }
`;
export const ArrowRight = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    background-color: #e5e5e5;
    align-items: center;
    color: #000;
    margin-left: 20px;
`;