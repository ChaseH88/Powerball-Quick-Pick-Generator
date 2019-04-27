import styled from "styled-components";

export const Container = styled.section`
  max-width: 80vw;
  margin: 20px auto;
  text-align: center;
  & h1 {
    font-size: 3vw;
    margin: 0 0 20px;
  }
`;

export const Button = styled.button`
  background: transparent;
  padding: .4vw 2vw;
  margin: 1vw 0 0;
  font-size: 1vw;
  text-transform: uppercase;
  border: 2px solid #bd0a0f;
  cursor: pointer;
  transition: all 200ms ease;
  &:hover{
    background: #bd0a0f;
    color: #fff;
  }
`;

export const LottoBall = styled.div`
  height: 5vw;
  width: 5vw;
  display: inline-flex;
  margin: 0 5px;
  align-items: center;
  justify-content: center;
  border: 1px solid #eee;
  border-radius: 50%;
  overflow: hidden;
  & span {
    font-weight: 900;
    display: block;
    font-size: 2.75vw
}
background: radial-gradient(ellipse at center, rgba(242,242,242,1) 0%,rgba(185,185,185,1) 100%);
/* background: radial-gradient(ellipse at center, rgba(217,0,1,1) 0%,rgba(168,17,25,1) 100%); */
`;

export const PowerballStyle = styled.div`
  height: 5vw;
  width: 5vw;
  display: inline-flex;
  margin: 0 5px;
  align-items: center;
  justify-content: center;
  border: 1px solid #eee;
  border-radius: 50%;
  overflow: hidden;
  & span {
    font-weight: 900;
    display: block;
    font-size: 2.75vw;
    color: #fff;
  }
  background: radial-gradient(ellipse at center, rgba(217,0,1,1) 0%,rgba(168,17,25,1) 100%);
`;