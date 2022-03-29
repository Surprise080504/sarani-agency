import styled from "styled-components";

export const Uppart = styled.div`
    width: 100vw;
    height: 600px;
    background: url('img/footer-image.png') no-repeat;
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
    @media screen and (max-width:560px){
        font-size: 70px !important;
    }
    @media screen and (max-width:420px){
        font-size: 50px !important;
    }
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
export const SubText = styled.div`
    color: #fff;
    font-size: 22px;
    text-align: center;
    position: absolute;
    top: 350px;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Montserrat;
    @media screen and (max-width:990px){
        padding: 0 20px !important;
    }
    @media screen and (max-width:560px){
        top: 290px !important;
    }
`;
export const CorpoItem = styled.div`
    margin: auto;
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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media screen and (max-width:1390px){
        height: 100% !important;
        padding: 200px 0 !important;
        font-size: 50px !important;
    }
    @media screen and (max-width:1240px){
        padding: 200px 20px !important;
        text-align: center !important;
        line-height: 55px !important;
    }
    @media screen and (max-width:750px){
        font-size: 40px !important;
        line-height: 40px !important;
        padding: 100px 20px !important;

    }
    @media screen and (max-width:560px){
        padding: 50px 20px !important;
    }
    @media screen and (max-width:550px){
        line-height: 30px !important;
        font-size: 30px !important;
    }
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
export const TeoPartOut = styled.div`
    padding:150px 100px;
    @media screen and (max-width:850px){
        padding: 0 50px 100px 50px !important;
    }
    @media screen and (max-width:430px){
        padding: 0px 30px 100px 30px !important;
    }
`;
export const Ourteam = styled.div`
    padding:150px 100px 0 100px;
    background-size: cover;
    background-position: center;
    @media screen and (max-width:850px){
        padding: 150px 50px !important;
    }
    @media screen and (max-width:680px){
        padding-bottom: 0 !important;
    }
    @media screen and (max-width:430px){
        padding: 100px 30px !important;
    }
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
export const ArrowRight = styled.div`
    width: 40px;
    min-width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    background-color: #e5e5e5;
    align-items: center;
    color: #000;
    margin-left: 20px;
`;
export const BuildBtn = styled.div`
    display: flex;
    color: #000;
    font-size: 17px;
    cursor: pointer;
    padding: 0 8px 0 30px;
    letter-spacing: 2px;
    border-radius: 40px;
    height: 70px;
    font-family: Montserrat_bold;
    align-items: center;
    font-weight: 500;
    margin-top: 30px;
    background-color: #fff;
    @media screen and (max-width:550px){
        font-size: 15px !important;
        text-align: center !important;
    }
    @media screen and (max-width:500px){
        width: 300px !important;
    }
`;
export const AppTitle = styled.div`
    font-size: 60px;
    font-family: serif;
    font-weight: bold;
    margin-bottom: 30px;
    @media screen and (max-width:650px){
        text-align: center !important;
    }
    @media screen and (max-width:430px){
        font-size: 40px !important;
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
export const MemberItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const MemberImg = styled.img``;
export const Membername = styled.div`
    font-family: Montserrat;
    margin: 20px 0 5px 0;
    font-weight: 900;
    font-size: 20px;
`;
export const Role = styled.div`
    font-family: Montserrat;
`;
export const TeamMemebers = styled.div`
    display: grid;
    grid-row-gap: 100px;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    @media screen and (max-width:1570px){   
        grid-template-columns: 1fr 1fr 1fr 1fr !important;
    }
    @media screen and (max-width:1300px){   
        grid-template-columns: 1fr 1fr 1fr !important;
    }
    @media screen and (max-width:1000px){   
        grid-template-columns: 1fr 1fr !important;
    }
    @media screen and (max-width:650px){   
        grid-template-columns: 1fr !important;
        grid-row-gap: 50px;
    }
`;