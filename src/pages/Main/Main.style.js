import { expr } from "jquery";
import styled from "styled-components";
import Back from "../../assets/img/background-image.png";
import btn_background from "../../assets/img/button-background.png";
export const MainOut = styled.div`
    width: 100vw;
    height: 100vh;
    background: url('img/mainback.png') no-repeat;
    background-size: cover;
    background-color: #fff;
    background-position: center;
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: space-between;
    padding: 40px 100px 0 100px;
    @media screen and (max-width:1460px){
        padding: 40px 50px 0 50px !important;
    }
    @media screen and (max-width:1280px){
        padding: 40px 30px 0 30px !important;
    }
    @media screen and (max-width:1000px){
        padding: 40px 30px 20px 30px !important;
    }
`;
export const MainLogo = styled.img`
    
`;
export const ExpText = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 90px;
    font-family: Serif;
    font-weight: 700;
    z-index: 1;

    @media screen and (max-width:1200px){
        font-size: 70px !important;
        text-align: center !important;
        line-height: 60px !important;
    }
    @media screen and (max-width:1000px){
        font-size: 60px !important;
    }
    @media screen and (max-width:810px){
        font-size: 50px !important;
    }
`;
export const Modelhouse = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
`;
export const HouseImg = styled.img``;
export const HouseText = styled.div`
    color: #fff;
    font-size: 18px;
    letter-spacing: 1px;
    width: 100px;
    margin-left: 10px;
`;
export const BuildBtn = styled.div`
    display: flex;
    color: #000;
    font-size: 17px;
    cursor: pointer;
    padding: 0 8px 0 30px;
    letter-spacing: 3px;
    border-radius: 40px;
    height: 80px;
    font-family: Montserrat_bold;
    align-items: center;
    font-weight: 500;
    background-color: #fff;
    @media screen and (max-width:1000px){
        width: 350px !important;
        text-align: center !important;
    }
`;
export const ArrowRight = styled.div`
    width: 60px;
    min-width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    background-color: #e5e5e5;
    align-items: center;
    color: #000;
    margin-left: 20px;
`;
export const ArrowRightUs = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    background-color: #fff2dc;
    align-items: center;
    color: #000;
    margin-left: 20px;
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translate(0,-50%);
`;
export const StartRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 2;
    width: 100%;
    @media screen and (max-width:760px){
        flex-direction: column !important;
    }
`;
export const IncrePart = styled.div`
    width: 100vw;
    padding: 250px 100px 0 100px;
    background-image: url(${Back});
    background-position: top center;
    background-repeat: no-repeat;
    background-size: cover;
    @media screen and (max-width:1000px){
        padding: 250px 50px 0 50px !important;
    }
   @media screen and (max-width:580px){
    padding-top: 150px !important;
    padding: 150px 20px 0 20px !important;
   }
`;
export const IncreText = styled.div`
    color: #000;
    font-size: 70px;
    font-weight: 900;
    font-family: serif;
    width: 900px;
    line-height: 80px;
    @media screen and (max-width:900px){
        width: 100% !important;
        font-size: 50px !important;
        line-height: 55px !important;
    }
    @media screen and (max-width:580px){
        text-align: center !important;
        font-size: 40px !important;
        line-height: 40px !important;
    }
    @media screen and (max-width:400px){
        font-size: 35px !important;
    }
`;
export const AboutusBorder = styled.img`
    position: absolute;
    width: 300px;
    height: 70px;
`;
export const IncreSubText = styled.div`
    font-family: Montserrat;
    font-size: 30px;
    width: 540px;
    margin: 70px 0 150px 0;
   @media screen and (max-width:620px){
       width: 100% !important;
       font-size: 25px !important;
   }
   @media screen and (max-width:580px){
       text-align: center !important;
   }
   @media screen and (max-width:400px){
       font-size: 20px !important;
   }
`;
//they trust us
export const TrustPart = styled.div`
    width: 100%;
    text-align: center;
`;
export const TrustTitle = styled.div`
    font-family: Montserrat;
    font-size: 20px;
    margin-bottom: 30px;
`;
export const TrustLogos = styled.div`

`;
export const SolutionPart = styled.div`
    width: 100%;
    background: url('img/greyback.png') no-repeat;
    background-size: cover;
    background-color: #fff;
    background-position: center;
    padding: 120px 120px 150px 120px;
    display: flex;
    flex-direction: column;
    @media screen and (max-width:1400px){
        padding: 120px 20px 150px 20px !important;
    }
    @media screen and (max-width:560px){
        padding: 120px 20px 50px 20px !important;
    }
`;
export const SolutionPartTwoItems = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    @media screen and (max-width:915px){
        flex-direction: column !important;
    }
`;
export const SolutionPartItem = styled.div`
    width: 600px;
    height: 600px;
    border: 2px solid #000;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    overflow: hidden;
    text-align: center;
    position:relative;
    @media screen and (max-width:1200px){
        width: 450px !important;
        height: 450px !important;
    }
    @media screen and (max-width:510px){
        width: 300px !important;
        height: 300px !important;
    }

`;
export const CircleOut = styled.div`
    width: 50%;
    @media screen and (max-width:1200px){
        width: auto !important;
    }
    @media screen and (max-width:915px){
        width:100% !important;
        display: flex !important;
        justify-content: center !important;
    }
`;
export const CircleTitle = styled.div`
    font-family: serif;
    font-size: 70px;
    font-weight: bold;
    @media screen and (max-width:1200px){
        font-size: 50px !important;
    }
    @media screen and (max-width:510px){
        font-size: 40px !important;
    }
`;
export const CircleSubTitle = styled.div`
    font-family: Montserrat;
    font-size: 17px;
    line-height: 20px;
`;
export const SolutionPartTitle = styled.div`
    width: 100%;
    text-align: center;
    margin-bottom: 50px;
    font-family: Montserrat;
    color: #000;
    font-size: 20px;
`;
export const SelectedProject = styled.div`
    margin-top: 200px;
`;
export const SelectedTitle = styled.div`
    width: 100%;
    text-align: center;
     width: 100%;
    text-align: center;
    margin-bottom: 50px;
    font-family: Montserrat;
    color: #000;
    font-size: 20px;
`;
export const SelectedTwo = styled.div`
    display: flex;
    margin-top: 10px;
    @media screen and (max-width:1170px){
        flex-direction: column !important;
        width: 100% !important;
        align-items: center !important;
        margin-bottom: 50px !important;
    }
`;
export const SelectedOne = styled.div`
    width: 50%;
    @media screen and (max-width:1170px){
        width: auto !important;
        display: flex !important;
        flex-direction: column !important;
        align-items: center !important;
    }
`;
export const SelectedImg = styled.div`
    width: 500px;
    height: 500px;
    background: url(${(props) => props.src}) no-repeat;
    background-position: center;
    background-size: cover;
    @media screen and (max-width:560px){
        width: 300px !important;
        height: 300px !important;
    }
`;
export const SelectedImgText = styled.div`
    font-family: serif;
    color: #000;
    font-size: 30px;
    font-weight: bold;
    margin: 10px 0 0 0;
    width: 500px;
    @media screen and (max-width:560px){
        font-size: 25px !important;
        width: 100% !important;
        text-align: center !important;
        line-height: 30px !important;
    }
`;
export const SelectedImgSubText = styled.div`
    font-family: Montserrat;
    font-size: 18px;
    width: 500px;
    @media screen and (max-width:560px){
        width: 100% !important;
        text-align: center !important;
    }
`;
export const HolisticPart = styled.div`
    background-color: #fff;
    width: 100%;
    padding: 100px 0 150px 0;
`;
export const MixText = styled.div`
    width: 100%;
    margin: 80px 0;
    background: url('img/mixtext.png') no-repeat;
    background-size: cover;
    height: 100px;
    background-position: center;
`;
export const HolisticText = styled.div`
    color: #000;
    font-size: 70px;
    font-weight: 900;
    font-family: serif;
    width: 770px;
    line-height: 80px;
    margin-left: 100px;
    @media screen and (max-width:1030px){
        width: 100% !important;
        margin-left: 0 !important;
        text-align: center !important;
        font-size: 60px !important;
        line-height: 60px !important;
        padding: 0 20px !important;
    }
    @media screen and (max-width:680px){
        font-size: 45px !important;
        line-height: 50px !important;
    }
`;
export const HolBtns = styled.div`
    margin-left: 100px;
    display: flex;
    grid-column-gap: 20px;
    @media screen and (max-width:1030px){
        margin-left: 0 !important;
        width: 100% !important;
        justify-content: center !important;
        flex-wrap: wrap !important;
        padding: 20px !important;
        grid-row-gap: 20px !important;
    }
`;
export const AboutusBtn = styled.div`
    width: 400px;
    height: 80px;
    background-image: url(${btn_background});
    background-size: 100% 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: relative;
    border-radius: 50px;
    display: flex;
    align-items: center;
    @media screen and (max-width:450px){
        width: 320px !important;
        height: 70px !important;
    }
`;
export const BtnContent = styled.div`
    z-index: 99;
    padding-left: 20px;
    background: white;
    width: calc(100% * 0.985);
    height: calc(100% * 0.94);
    border-radius: 45px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover{
        background: transparent;
    }
    &:hover span{
        color: white;
    }
    span{
        font-size: 23px;
        letter-spacing: 5px;
        text-transform:uppercase;
        margin-left: -100px;
        background: linear-gradient(to right,#883484,#ff9374);
        background-clip: text;
        font-weight: 700;
        -webkit-background-clip: text;
        color: transparent;
        @media screen and (max-width:450px){
            font-size: 18px !important;
            margin-left: -80px !important;
        }
    }
`;