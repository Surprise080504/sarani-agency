import styled from "styled-components";

export const ProjectRoot = styled.div`
    width: 100vw;
    padding: 40px 50px 200px 50px;
    position: relative;
    @media screen and (max-width:820px){
        padding: 40px 30px 200px 30px !important;
    }
`;
export const ProjectTitle = styled.div`
    width: 100%;
    text-align: center;
    font-size: 60px;
    font-weight: bold;
    margin: 70px 0 130px 0;
    font-family: serif;
    @media screen and (max-width:1000px){
        margin: 50px 0 !important;
    }
`;
export const HolePart = styled.div`
    padding: 0 100px;
    @media screen and (max-width:1200px){
        padding: 0 !important;
    }
`;
export const HoleText = styled.div`
    font-family: serif;
    font-weight: 700;
    font-size: 35px;
    margin: 20px 0;
    @media screen and (max-width:510px){
        font-size: 30px !important;
        text-align: center !important;
        line-height: 30px !important;
    }
`;
export const HoleImg = styled.div`
    height: 600px;
    background: url('img/home.PNG') no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
    @media screen and (max-width:1400px){
        height: 500px !important;
        width: 100% !important;
    }
    @media screen and (max-width:700px){
        height: 300px !important;
    }
`;
export const FelPart = styled.div`
    padding: 0 100px;
    width: 100%;
    margin-top: 150px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width:1730px){
        padding: 0 50px !important;
        justify-content: space-around !important;
    }
    @media screen and (max-width:1340px){
        margin-top: 100px !important;
    }
    @media screen and (max-width:1130px){
        flex-direction: column !important;
    }
    @media screen and (max-width:600px){
        padding: 0 !important;
    }
`;
export const FelItem = styled.div`
    @media screen and (max-width:600px){
        width: 100% !important;
        margin-bottom: 50px !important;
    }
`;
export const FelImg = styled.div`
    background: url(${(props) => props.src});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-size: cover;
    height: ${(props) => props.height};
    width: 700px;
    position: relative;
    background-position: center;
    @media screen and (max-width:1630px){
        width: 650px !important;
        height: 500px !important;
    }
    @media screen and (max-width:1530px){
        width: 550px !important;
        height: 400px !important;
    }
    @media screen and (max-width:1340px){
        width: 450px !important;
        height: 350px !important;
    }
    @media screen and (max-width:1130px){
        width: 550px !important;
    }
    @media screen and (max-width:600px){
        width: 100% !important;
        height: 300px !important;
    }
`;
export const DesignPart = styled.div`
    padding: 0 100px;
    margin-top: 150px;
    @media screen and (max-width:1140px){
        padding: 0 !important;
    }
`;
export const DesignImg = styled.div`
    height: 600px;
    background: url('img/BRAVIA.png') no-repeat;
    background-size: 100% 100%;
    background-size: cover;
    background-position: center;
    @media screen and (max-width:1140px){
        height: 500px !important;
    }
    @media screen and (max-width:800px){
        height: 350px !important;
    }
`;
export const WorkBack = styled.div`
    width: 700px;
    height: 700px;
    background: url('img/workback.png') no-repeat;
    background-size: 100% 100%;
    background-size: cover;
    z-index: -1;
    position: absolute;
    top: 100px;
    left: 0;
    background-position: center;
`;
export const Mark = styled.div`
    width: 200px;
    height: 200px;
    background: url('img/companymark.png') no-repeat;
    background-size: 100% 100%;
    background-size: cover;
    z-index: 2;
    position: absolute;
    top: -100px;
    right: 50px;
    background-position: center;
    @media screen and (max-width:1530px){
        width: 100px !important;
        height: 100px !important;
        top: -50px !important;
    }
`;