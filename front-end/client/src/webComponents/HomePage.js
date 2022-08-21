import React from "react";
import styled from "styled-components";

const HomePage = ({}) => {
  const ButtonContained1Function = (e, name) => {
    alert(`${name} was clicked`);
  };
  const ButtonContained2Function = (e, name) => {
    alert(`${name} was clicked`);
  };
  return (
    <HomeRoot>
      <FlexColumn>
        <AppBar>
          <FlexRow>
            <LeftSide width={`216px`}>
              <Logo1 src={`https://file.rendit.io/n/drAsujDsbcBdpdY3Atmn.svg`} />
            </LeftSide>
            <AppBarSearchInput>
              <SearchFilled src={`https://file.rendit.io/n/sSk4dYVFDLZhoU5RuQnP.svg`} />
              <FlexColumn>
                <Typography24 placeholder={`Search...`} />
              </FlexColumn>
            </AppBarSearchInput>
          </FlexRow>
          <FlexRow1 gap={`61px`}>
            <FlexRow2>
              <LeftSide width={`auto`}>
                <Typography26 color={`rgba(255, 255, 255, 0.5)`}>Home</Typography26>
              </LeftSide>
              <LeftSide width={`auto`}>
                <Typography26 color={`rgba(255, 255, 255, 0.5)`}>How it works</Typography26>
              </LeftSide>
              <LeftSide width={`auto`}>
                <Typography26 color={`rgba(255, 255, 255, 0.5)`}>Features</Typography26>
              </LeftSide>
              <Typography26 color={`rgba(255, 255, 255, 0.5)`}>Support</Typography26>
            </FlexRow2>
            <FlexRow1 gap={`22px`}>
              <FlexRow7>
                <Image1 src={`https://file.rendit.io/n/A4LA4e6EfftfEWUCjIsM.svg`} />
                <Typography26 color={`#01c8ef`}>My tickets</Typography26>
              </FlexRow7>
              <FlexRow1 gap={`35px`}>
                <ButtonContained1 onClick={e => ButtonContained1Function(e, "ButtonContained1")}>
                  <Base1>
                    <Button2>CONNECT WALLET</Button2>
                  </Base1>
                </ButtonContained1>
              </FlexRow1>
            </FlexRow1>
          </FlexRow1>
        </AppBar>
        <FlexRow9>
          <FlexColumn1>
            <Typography38 minWidth={`796`}>
              <Typography37 minWidth={`796`}>
                Buy tickets that<Typography36> you can really own</Typography36>
              </Typography37>
            </Typography38>
            <Typography38 minWidth={`796`}>
              <Typography39 color={`rgba(255, 255, 255, 0.7)`}>
                Smart NFT tickets to collect, receive gifts from artists and fair-resell your ticket
                if you can’t go
              </Typography39>
            </Typography38>
            <FlexRow10>
              <ButtonContained2 onClick={e => ButtonContained2Function(e, "ButtonContained2")}>
                <Base2>
                  <Button3>CONNECT WALLET</Button3>
                </Base2>
              </ButtonContained2>
              <FlexRow11>
                <Image1 src={`https://file.rendit.io/n/A4LA4e6EfftfEWUCjIsM.svg`} />
                <Typography41>NEXT EVENTS TICKETS</Typography41>
              </FlexRow11>
            </FlexRow10>
          </FlexColumn1>
          <NFT src={`https://file.rendit.io/n/VFlN74YYZuSaOWCXiv2o.png`} />
        </FlexRow9>
        <FlexRow12>
          <FlexColumn2>
            <FlexColumn>
              <Typography44>
                Safe booking
                <Typography43 color={`#101b37`}>, no fraud</Typography43>
              </Typography44>
            </FlexColumn>
            <Typography38 minWidth={`796`}>
              <Typography39 color={`rgba(0, 0, 0, 0.54)`}>
                Stop scalping!
                <br />
                <br />
                Our smart tickets are Impossible to counterfeit, so people can buy safely, from
                anyone.
              </Typography39>
            </Typography38>
          </FlexColumn2>
          <Desktop src={`https://file.rendit.io/n/lQM0YdGjoEUJxpzqzMpy.png`} />
        </FlexRow12>
      </FlexColumn>
      <BlackFlexColumn>
        <FlexColumn3>
          <Typography10>
            Smart tickets <Typography43 color={`#ffffff`}>features</Typography43>
          </Typography10>
          <FlexRow13>
            <FlexRow1 gap={`44.95px`}>
              <Iconimagenes src={`https://file.rendit.io/n/Fa1QZiX0g3AW4X5htocF.png`} />
              <FlexColumn4>
                <Typography12>Collect gifts</Typography12>
                <FlexColumn>
                  <Typography14>
                    Artists can gift you digital rewards and VIP content directly.
                  </Typography14>
                </FlexColumn>
              </FlexColumn4>
            </FlexRow1>
            <FlexRow1 gap={`44.95px`}>
              <Iconimagenes src={`https://file.rendit.io/n/3xp6thouwaoCbV75vRBX.png`} />
              <FlexColumn4>
                <Typography12>All-in-one place</Typography12>
                <FlexColumn>
                  <Typography14>
                    You preserve your epic memories, one event at the time.
                  </Typography14>
                </FlexColumn>
              </FlexColumn4>
            </FlexRow1>
            <FlexRow1 gap={`44.95px`}>
              <Iconimagenes src={`https://file.rendit.io/n/yCvxcGjYaW0VPE7iBSjf.png`} />
              <FlexColumn4>
                <Typography12>Safe and trackable</Typography12>
                <FlexColumn>
                  <Typography14>
                    No one can copy your tickets, and you can track every owner.
                  </Typography14>
                </FlexColumn>
              </FlexColumn4>
            </FlexRow1>
          </FlexRow13>
        </FlexColumn3>
      </BlackFlexColumn>
      <FlexRow17>
        <Iconwallet src={`https://file.rendit.io/n/u4uBCv2jEb3FRUjcv1vR.png`} />
        <FlexColumn7>
          <Typography38 minWidth={`881`}>
            <Typography37 minWidth={`881`}>
              Connect your wallet and
              <Typography36> mint your ticket</Typography36>
            </Typography37>
          </Typography38>
          <Typography38 minWidth={`881`}>
            <Typography5>It’s easy, fast and 100% safe.</Typography5>
          </Typography38>
          <FlexRow10>
            <ButtonContained2 onClick={e => ButtonContained2Function(e, "ButtonContained")}>
              <Base2>
                <Button3>CONNECT WALLET</Button3>
              </Base2>
            </ButtonContained2>
            <FlexRow11>
              <Image1 src={`https://file.rendit.io/n/S9VCn55NmiwKDa9Gn05c.svg`} />
              <Typography41>NEXT EVENTS TICKETS</Typography41>
            </FlexRow11>
          </FlexRow10>
        </FlexColumn7>
      </FlexRow17>
      <BlackFlexColumn1>
        <Logo src={`https://file.rendit.io/n/2mosVptkPlPEfUo71v4t.svg`} />
        <Typography>Metaboletos© 2022 | All rights reserved</Typography>
      </BlackFlexColumn1>
    </HomeRoot>
  );
};
const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 30px;
`;
const LeftSide = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  justify-content: flex-start;
  align-items: center;
  width: ${props => props.width};
`;
const FlexRow1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: ${props => props.gap};
`;
const Typography26 = styled.div`
  display: flex;
  font-size: 16px;
  font-family: Roboto;
  letter-spacing: 0.15px;
  line-height: 24px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  color: ${props => props.color};
`;
const Image1 = styled.img`
  width: 21.52px;
  height: 20.64px;
`;
const Typography38 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  align-self: stretch;
  min-width: ${props => props.minWidth};
`;
const Typography37 = styled.div`
  font-size: 90px;
  font-family: Roboto;
  letter-spacing: -1.5px;
  line-height: 112.03px;
  color: #ffffff;
  align-self: stretch;
  min-width: ${props => props.minWidth};
`;
const Typography36 = styled.div`
  font-size: 90px;
  font-family: Roboto;
  font-weight: 700;
  letter-spacing: -1.5px;
  line-height: 112.03px;
  color: #e51376;
  display: contents;
  white-space: pre-wrap;
`;
const Typography39 = styled.div`
  font-size: 34px;
  font-family: Roboto;
  letter-spacing: 0.25px;
  line-height: 41.99px;
  align-self: stretch;
  min-width: 796px;
  color: ${props => props.color};
`;
const FlexRow10 = styled.div`
  width: 530px;
  display: flex;
  flex-direction: row;
  gap: 30px;
  justify-content: flex-start;
  align-items: flex-start;
`;
const ButtonContained2 = styled.button`
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.12), 0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 3px 1px -2px rgba(0, 0, 0, 0.2);
  background-color: #e51376;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  padding: 24px;
  border-width: 0px;
  box-sizing: content-box;
  cursor: pointer;
  &: hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
  }
`;
const Base2 = styled.div`
  display: flex;
  overflow: hidden;
  flex-direction: row;
  gap: 8px;
  justify-content: center;
  align-items: center;
  padding: 8px 22px;
`;
const Button3 = styled.div`
  font-size: 24px;
  font-family: Roboto;
  letter-spacing: 0.46px;
  line-height: 26px;
  text-transform: uppercase;
  color: #ffffff;
  width: 190px;
  height: 18px;
`;
const FlexRow11 = styled.div`
  border-color: #01c8ef;
  border-style: solid;
  height: 68px;
  display: flex;
  flex-direction: row;
  gap: 16px;
  justify-content: flex-start;
  align-items: center;
  align-self: stretch;
  flex-grow: 1;
  border-radius: 4px;
  padding: 10px 32px;
  border-width: 1px;
  height: 75px;
`;
const Typography41 = styled.div`
  display: flex;
  font-size: 24px;
  font-family: Roboto;
  letter-spacing: 0.15px;
  line-height: 36px;
  color: #01c8ef;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  min-width: 160px;
`;
const Typography43 = styled.div`
  font-size: 96px;
  font-family: Roboto;
  letter-spacing: -1.5px;
  line-height: 112.03px;
  display: contents;
  color: ${props => props.color};
`;
const Iconimagenes = styled.img`
  width: 168.12px;
  height: 168.12px;
`;
const FlexColumn4 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 17.98px;
  justify-content: center;
  align-items: flex-start;
`;
const Typography12 = styled.div`
  display: flex;
  font-size: 43.15px;
  font-family: Roboto;
  line-height: 50.36px;
  color: rgba(255, 255, 255, 0.7);
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
const Typography14 = styled.div`
  font-size: 30.57px;
  font-family: Roboto;
  letter-spacing: 0.22px;
  line-height: 37.75px;
  color: rgba(255, 255, 255, 0.5);
  align-self: stretch;
  min-width: 301.17px;
`;
const HomeRoot = styled.div`
  width: 100%;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const AppBar = styled.div`
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.12), 0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 3px 1px -2px rgba(0, 0, 0, 0.2);
  width: 100%;
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
const Logo1 = styled.img`
  width: 176px;
  height: 33px;
`;
const AppBarSearchInput = styled.div`
  width: 289px;
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
const Typography24 = styled.input`
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
const FlexRow2 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 35px;
  justify-content: center;
  align-items: center;
`;
const FlexRow7 = styled.div`
  border-color: #01c8ef;
  border-style: solid;
  display: flex;
  flex-direction: row;
  gap: 16px;
  justify-content: flex-start;
  align-items: center;
  border-radius: 4px;
  padding: 10px 32px;
  border-width: 1px;
`;
const ButtonContained1 = styled.button`
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.12), 0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 3px 1px -2px rgba(0, 0, 0, 0.2);
  width: 210px;
  height: 42px;
  background-color: #e51376;
  display: flex;
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
const Base1 = styled.div`
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
const Button2 = styled.div`
  font-size: 15px;
  font-family: Roboto;
  font-weight: 500;
  letter-spacing: 0.46px;
  line-height: 26px;
  text-transform: uppercase;
  color: #ffffff;
  width: 69px;
  height: 2px;
`;
const FlexRow9 = styled.div`
  width: 1420px;
  background-image: linear-gradient(180deg, #101b37 52%, #58186e 100%);
  display: flex;
  flex-direction: row;
  gap: 80px;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0px 250px 120px 250px;
`;
const FlexColumn1 = styled.div`
  width: 796px;
  height: 624px;
  display: flex;
  flex-direction: column;
  gap: 80px;
  justify-content: flex-start;
  align-items: flex-start;
  align-self: stretch;
  flex-grow: 1;
  padding: 100px 0px 0px 0px;
`;
const NFT = styled.img`
  width: 692px;
  height: 986px;
`;
const FlexRow12 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 80px;
  justify-content: center;
  align-items: center;
  padding: 0px 0px 0px 250px;
`;
const FlexColumn2 = styled.div`
  width: 796px;
  height: 844px;
  display: flex;
  flex-direction: column;
  gap: 80px;
  justify-content: center;
  align-items: flex-start;
  align-self: stretch;
  flex-grow: 1;
`;
const Typography44 = styled.div`
  font-size: 96px;
  font-family: Roboto;
  font-weight: 700;
  letter-spacing: -1.5px;
  line-height: 112.03px;
  color: #e51376;
  align-self: stretch;
  min-width: 598px;
`;
const Desktop = styled.img`
  width: 796px;
  height: 608px;
`;
const BlackFlexColumn = styled.div`
  background-color: #101b37;
  display: flex;
  flex-direction: column;
  gap: 160px;
  justify-content: center;
  align-items: center;
  align-self: flex-start;
  padding: 180px 60px;
  margin: 0px 0px 0.02px 0px;
`;
const FlexColumn3 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 150px;
  justify-content: center;
  align-items: center;
`;
const Typography10 = styled.div`
  text-align: center;
  display: flex;
  font-size: 96px;
  font-family: Roboto;
  font-weight: 700;
  letter-spacing: -1.5px;
  line-height: 112.03px;
  color: #e51376;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  white-space: pre-wrap;
`;
const FlexRow13 = styled.div`
  width: 1718px;
  display: flex;
  flex-direction: row;
  gap: 28.77px;
  justify-content: space-between;
  align-items: center;
`;
const FlexRow17 = styled.div`
  width: 1916px;
  height: 793px;
  background-image: linear-gradient(180deg, #101b37 52%, #58186e 100%);
  display: flex;
  flex-direction: row;
  gap: 87px;
  justify-content: center;
  align-items: center;
`;
const Iconwallet = styled.img`
  width: 366px;
  height: 366px;
`;
const FlexColumn7 = styled.div`
  height: 624px;
  display: flex;
  flex-direction: column;
  gap: 80px;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 100px 0px 0px 0px;
`;
const Typography5 = styled.div`
  font-size: 60px;
  font-family: Roboto;
  font-weight: 300;
  letter-spacing: -0.5px;
  line-height: 72px;
  color: rgba(255, 255, 255, 0.7);
  align-self: stretch;
  min-width: 881px;
`;
const BlackFlexColumn1 = styled.div`
  width: 1920px;
  height: 287px;
  background-color: #000000;
  display: flex;
  flex-direction: column;
  gap: 80px;
  justify-content: flex-end;
  align-items: center;
  padding: 36px 0px;
`;
const Logo = styled.img`
  width: 496px;
  height: 93px;
`;
const Typography = styled.div`
  display: flex;
  font-size: 20px;
  font-family: Roboto;
  font-weight: 500;
  letter-spacing: 0.15px;
  line-height: 32px;
  color: #ffffff;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export default HomePage;
