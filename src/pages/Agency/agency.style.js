import styled from "styled-components";

export const AgencyOut = styled.div`
  width: 100vw;
  height: 100vh;
  background: url("img/agency/firstagency.png") no-repeat;
  background-position: center;
  background-size: cover;
  padding: 20px 100px 0 100px;
  position: relative;
`;
export const ModalOut = styled.div`
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ModalMain = styled.div`
  width: 700px;
  height: 400px;
  background: #000;
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;
export const LeftBtn = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 50%;
`;
export const ModalBody = styled.div`
  margin-top: 40px;
  width: 100%;
`;
export const LeftBtnOut = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;
export const ModalText = styled.div`
  color: #fff;
  font-size: 15px;
  text-align: center;
  font-family: Montserrat;
`;
export const ModalTitle = styled.div`
  color: #fff;
  font-size: 30px;
  font-weight: 700;
  font-family: serif;
  margin-bottom: 30px;
  text-align: center;
`;
export const Dots = styled.div`
  display: flex;
  width: 30px;
  justify-content: space-between;
`;
export const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
`;
export const DotOut = styled.div`
  width: 97%;
  position: absolute;
  display: flex;
  justify-content: center;
  bottom: 10px;
`;
export const ModalItems = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 30px;
`;
export const ModalItem = styled.div`
  text-align: center;
  color: #fff;
  font-size: 16px;
  font-family: Montserrat;
`;
export const OneItemImg = styled.img``;
