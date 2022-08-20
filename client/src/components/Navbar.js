import React from "react";
import styled from "styled-components";

const NavBar = ({}) => {
  const handleConnect = (e, name) => {
    console.log(`${name} was clicked`);
  };
  return (
    <AppBarRoot>
      <FlexRow>
        <LeftSide>
          <Logo src={`https://file.rendit.io/n/GmqW05WSRfQVzkGcszTf.svg`} />
        </LeftSide>
        <AppBarSearchInput>
          <SearchFilled
            src={`https://file.rendit.io/n/qAjKScKBPKWeLybQbJaN.svg`}
          />
          <Typography1>
            <Typography placeholder={`Search...`} />
          </Typography1>
        </AppBarSearchInput>
      </FlexRow>
      <FlexRow1>
        <ConnectButton onClick={(e) => handleConnect(e, "ButtonContained")}>
          <Base>
            <Button1>CONNECT WALLET</Button1>
          </Base>
        </ConnectButton>
      </FlexRow1>
    </AppBarRoot>
  );
};

const AppBarRoot = styled.div`
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.12),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.2);
  width: 1840px;
  height: 64px;
  background-color: #101b37;
  display: flex;
  overflow: hidden;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 40px;
`;
const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
const LeftSide = styled.div`
  width: 216px;
  display: flex;
  flex-direction: row;
  gap: 16px;
  justify-content: flex-start;
  align-items: center;
`;
const Logo = styled.img`
  width: 176px;
  height: 33px;
`;
const AppBarSearchInput = styled.div`
  width: 568px;
  background-color: rgba(255, 255, 255, 0.15);
  display: flex;
  overflow: hidden;
  flex-direction: row;
  gap: 8px;
  justify-content: flex-start;
  align-items: center;
  border-radius: 4px;
  padding: 6px 16px;
`;
const SearchFilled = styled.img`
  width: 24px;
  height: 18px;
`;
const Typography1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
const Typography = styled.input`
  font-size: 16px;
  font-family: Roboto;
  letter-spacing: 0.15px;
  line-height: 24px;
  color: #ffffff;
  width: 63px;
  height: 18px;
  padding: 0px;
  border-width: 0px;
  background: none;
  :: placeholder {
    color: #ffffff;
  }
  display: inline-block;
  outline-width: 0px;
`;
const FlexRow1 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 35px;
  justify-content: flex-start;
  align-items: center;
`;
const ConnectButton = styled.button`
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.12),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.2);
  width: 210px;
  height: 42px;
  background-color: #e51376;
  display: flex;
  margin-right: 50px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  padding: 0px;
  border-width: 0px;
  box-sizing: content-box;
  cursor: pointer;
  &: hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
  }
`;
const Base = styled.div`
  width: 135px;
  height: 26px;
  display: flex;
  overflow: hidden;
  flex-direction: row;
  gap: 8px;
  justify-content: center;
  align-items: center;
  padding: 8px 22px;
`;
const Button1 = styled.div`
  font-size: 15px;
  font-family: Roboto;
  font-weight: 500;
  text-transform: uppercase;
  color: #ffffff;
`;

export default NavBar;
