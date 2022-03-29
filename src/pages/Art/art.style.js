import styled from "styled-components";

export const Uppart = styled.div`
    width: 100vw;
    height: 400px;
    background: url('img/artback.jpg') no-repeat;
    background-size: cover;
    background-position:  center;
    padding: 40px 100px 0 100px;
    position: relative;
    @media screen and (max-width:1380px){
        padding: 40px 50px 0 50px !important;
    }
    @media screen and (max-width:1300px){
        padding: 40px 30px 0 30px !important;
    }
`;
export const Title = styled.div`
    color: #fff;
    font-size: 90px;
    font-family: serif;
    position: absolute;
    top: 180px;
    font-weight: bold;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const CorpoItems = styled.div`
    padding: 100px 100px 150px 100px;
    display: grid;
    grid-row-gap: 100px;
    grid-template-columns: 1fr 1fr;
    background: #fff;
    @media screen and (max-width:1490px){
        padding: 100px 0 150px 0 !important;
    }
    @media screen and (max-width:1050px){   
        grid-template-columns: 1fr !important;
    }
    @media screen and (max-width:660px){
        grid-row-gap: 50px !important;
    }
`;

export const TransBack = styled.div`
    width: 100%;
    height: 100%;
    z-index: 1;
    position: absolute;
    background-color: rgba(0,0,0,0.3);
    top: 0;
    color: #fff;
    left: 0;
    font-size: 60px;
    font-weight: bold;
    font-family: serif;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width:1000px){
        height: 100% !important;
        padding: 200px 0 !important;
        font-size: 50px !important;
    }
    @media screen and (max-width:750px){
        font-size: 40px !important;
        padding: 100px 0 !important;
        text-align: center !important;
        line-height: 40px !important;
    }
    @media screen and (max-width:560px){
        padding: 50px 0 !important;
    }
`;
export const CorpoItem = styled.div`
    margin: auto;
`;
export const ItemImg = styled.div`
    width: 600px;
    height: 400px;
    background: url(${(props) => props.src});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    @media screen and (max-width:1300px){
        width: 500px !important;
    }
    @media screen and (max-width:1050px){
        width: 600px !important;
    }
    @media screen and (max-width:660px){
        width: 400px !important;
        height: 300px !important;
    }
    @media screen and (max-width:460px){
        width: 300px !important;
    }
`;
export const ItemTitle = styled.div`
    font-family: serif;
    font-weight: 700;
    font-size: 35px;
    margin: 20px 0;
`;
export const ItemText = styled.div`
    font-family: Montserrat;
    font-size: 19px;
    width: 270px;
    color: #000;
`;
export const Applications = styled.div`
    padding:150px 100px;
    background: url('img/greyback.png') no-repeat;
    background-size: cover;
    background-position: center;
    @media screen and (max-width:850px){
        padding: 150px 50px !important;
    }
    @media screen and (max-width:430px){
        padding: 100px 30px !important;
    }
`;
export const AppTitle = styled.div`
    font-size: 60px;
    font-family: serif;
    font-weight: bold;
    margin-bottom: 30px;
    @media screen and (max-width:430px){
        font-size: 40px !important;
        text-align: center !important;
    }
`;
export const AppTextGrp = styled.div`
    display: flex;
    width: 100%;
    border-bottom: 1px solid #000;
    @media screen and (max-width:600px){
        flex-direction: column !important;
        border-style: none !important;
    }
`;
export const AppText = styled.div`
    width: 50%;
    font-family: Montserrat;
    font-size: 20px;
    margin-top: 20px;
    @media screen and (max-width:600px){
        border-bottom: 1px solid #000 !important;
        width: 100% !important;
    }
`;
export const TeosPart = styled.div`
    width: 100%;
    margin-top: 200px;
    position: relative;
    @media screen and (max-width:750px){
        margin-top: 100px !important;
    }
`;
export const TeosTitlePart = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
`;
export const TeosTitle = styled.div`
    font-family: serif;
    font-size: 30px;
    font-weight: bold;
    min-width: 350px;
`;
export const TeosText = styled.div`
    font-family: Montserrat;
    font-size: 20px;
    min-width: 180px;
    text-align: right;
`;
export const TeosLine = styled.div`
    border: 1px solid #000;
    width: 100%;
`;
export const TeosBack = styled.div`
    width: 100%;
    margin-top: 30px;
    background: url('img/hole.jpg') no-repeat;
    background-size: cover;
    height: 700px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-position: center;
    color: #fff;
    font-size: 50px;
    font-weight: bold;
    font-family: serif;
    @media screen and (max-width:1000px){
        height: 400px !important;
        padding: 200px 0 !important;
    }
    @media screen and (max-width:750px){
        padding: 100px 0 !important;
    }
    @media screen and (max-width:560px){
        height: 300px !important;
    }
`;