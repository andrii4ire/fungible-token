import styled from "styled-components";

const CardWrap = styled.div`
  position: relative;
  display: flex;
  height: 320px;
  width: 544px;
  border-bottom: 0.5px solid #4fd1d9;
  border-top: 3px solid #4fd1d9;

  cursor: pointer;
  user-select: none;

  &:active {
    color: #6b6ef9;
  }
`;

const BackgroundBlock = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  opacity: 0.4;
  background: linear-gradient(
    179.54deg,
    #4fd1d9 0.29%,
    rgba(79, 209, 217, 0) 99.6%
  );
`;

const CardText = styled.div`
  position: absolute;
  top: 74px;
  left: 20px;
  width: calc(100% - 40px);
  line-height: 18px;
`;

const CardDecorateBottom = styled.div`
  position: absolute;
  height: 8px;
  width: 280px;
  bottom: -1px;
  right: -1px;
  background: #000000;
`;

const DecorateLine = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 270px;
  border-bottom: 3px solid #4fd1d9;
  border-left: 3px solid transparent;
`;

const InclinedLine = styled.div`
  position: absolute;
  bottom: -1px;
  left: 4px;
  width: 0.5px;
  height: 14px;
  background: #4fd1d9;
  transform: rotate(40deg);
`;

const Line = styled.div`
  position: absolute;
  top: -3.5px;
  left: 9px;
  width: calc(100% - 9px);
  height: 0.5px;
  background: #4fd1d9;
`;

const CutBlock = styled.div`
  position: absolute;
  top: -3px;
  left: calc(50% - 110px);
  z-index: 1;
  width: 220px;
  background: #000000;
  height: 12px;

  &:after {
    content: "";
    position: absolute;
    right: -16px;
    top: 0px;
    width: 0px;
    height: 0px;
    border-top: 0px solid transparent;
    border-left: 16px solid black;
    border-bottom: 12px solid transparent;
  }
  &:before {
    content: "";
    position: absolute;
    left: -16px;
    top: 0px;
    width: 0px;
    height: 0px;
    border-top: 0px solid transparent;
    border-right: 16px solid black;
    border-bottom: 12px solid transparent;
  }
`;

const Title = styled.div`
  position: absolute;
  top: -15px;
  left: calc(50% - 80px);
  z-index: 2;
  width: 160px;
  color: #4fd1d9;
`;

type TechnicalCardProps = {
  text: string;
  titleText: string;
};
export const TechnicalCard = ({ text, titleText }: TechnicalCardProps) => {
  return (
    <CardWrap>
      <BackgroundBlock></BackgroundBlock> <Title>{titleText}</Title>
      <CutBlock />
      <CardDecorateBottom>
        <InclinedLine />
        <DecorateLine />
        <Line />
      </CardDecorateBottom>
      <CardText>{text}</CardText>
    </CardWrap>
  );
};
