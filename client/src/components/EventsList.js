import React, { useState } from "react";
import styled from "styled-components";
import { EVENT_NFTS } from "../utils/events";
import EventCard from "./EventCard";

const EventsList = (props) => {
  const ButtonContainedFunction = (e, name) => {
    alert(`${name} was clicked`);
  };

  const events = EVENT_NFTS.map((evt) => (
    <EventCard key={evt.id} data={evt} ethPrice={props.ethPrice} />
  ));

  return (
    <SearchNFTPageRoot>
      <FlexRow2>
        <FlexColumn>
          <LeftSide width={`auto`}>
            <RazzmatazzFlexRow>
              <HomeFilled
                src={`https://file.rendit.io/n/yFczyPjLWZzsCFsJWKXG.svg`}
              />
            </RazzmatazzFlexRow>
            <Typography150 color={`#ffffff`}>Home</Typography150>
          </LeftSide>
          <LeftSide width={`auto`}>
            <Image9 src={`https://file.rendit.io/n/oL7yMgRo6Ij62m0wG6f0.svg`} />
            <Typography150 color={`rgba(255, 255, 255, 0.5)`}>
              My tickets
            </Typography150>
          </LeftSide>
          <LeftSide width={`auto`}>
            <HomeFilled
              src={`https://file.rendit.io/n/zl2IBlmn0hYc8DTUNeEE.svg`}
            />
            <Typography150 color={`rgba(255, 255, 255, 0.5)`}>
              Favorites
            </Typography150>
          </LeftSide>
          <LeftSide width={`auto`}>
            <HomeFilled
              src={`https://file.rendit.io/n/VI8liutKhxJhJKdCFRFB.svg`}
            />
            <Typography150 color={`rgba(255, 255, 255, 0.5)`}>
              Collections
            </Typography150>
          </LeftSide>
          <LeftSide width={`auto`}>
            <HomeFilled
              src={`https://file.rendit.io/n/1PEL3PeOrZmeOC9nVmFQ.svg`}
            />
            <Typography150 color={`rgba(255, 255, 255, 0.5)`}>
              Settings
            </Typography150>
          </LeftSide>
        </FlexColumn>
        <FlexColumn1 gap={`70px`}>
          <LeftSide width={`auto`}>
            <ChevronLeftFilled
              src={`https://file.rendit.io/n/g3whqbwzIp6GuK75iSEg.svg`}
            />
            <Typography>Go back</Typography>
          </LeftSide>
          <FlexColumn1 gap={`24px`}>
            <Typography2>Next events</Typography2>
            <LeftSide width={`auto`}>
              <ChevronLeftFilled
                src={`https://file.rendit.io/n/gNsAxTC2TOO2Xx8q2nLH.svg`}
              />
              <ChipFilled>
                <Container backgroundColor={`#e51376`}>
                  <Chip textAlign={`left`}>Near me</Chip>
                </Container>
              </ChipFilled>
              <ChipFilled>
                <Container backgroundColor={`#e51376`}>
                  <Chip textAlign={`center`}>Festivals</Chip>
                </Container>
              </ChipFilled>
              <ChipFilled>
                <Container backgroundColor={`rgba(255, 255, 255, 0.16)`}>
                  <Chip textAlign={`center`}>Concerts</Chip>
                </Container>
              </ChipFilled>
              <Container backgroundColor={`rgba(255, 255, 255, 0.16)`}>
                <Chip textAlign={`left`}>Tech</Chip>
              </Container>
              <ChipFilled>
                <Container backgroundColor={`rgba(255, 255, 255, 0.16)`}>
                  <Chip textAlign={`left`}>Theatre</Chip>
                </Container>
              </ChipFilled>
              <ChipFilled>
                <Container backgroundColor={`rgba(255, 255, 255, 0.16)`}>
                  <Chip textAlign={`left`}>Culture</Chip>
                </Container>
              </ChipFilled>
              <ChipFilled>
                <Container backgroundColor={`rgba(255, 255, 255, 0.16)`}>
                  <Chip textAlign={`left`}>Sports</Chip>
                </Container>
              </ChipFilled>
              <ChipFilled>
                <Container backgroundColor={`rgba(255, 255, 255, 0.16)`}>
                  <Chip textAlign={`left`}>Stand Up</Chip>
                </Container>
              </ChipFilled>
              <ChipFilled>
                <Container backgroundColor={`rgba(255, 255, 255, 0.16)`}>
                  <Chip textAlign={`left`}>Conferences</Chip>
                </Container>
              </ChipFilled>
              <ChipFilled>
                <Container backgroundColor={`rgba(255, 255, 255, 0.16)`}>
                  <Chip textAlign={`left`}>Food</Chip>
                </Container>
              </ChipFilled>
              <ChevronLeftFilled
                src={`https://file.rendit.io/n/I5oQLE7EnafFEaMOwJtC.svg`}
              />
            </LeftSide>
          </FlexColumn1>

          <FlexColumn1 gap={`40px`}>
            <FlexRow10>{events}</FlexRow10>
          </FlexColumn1>
        </FlexColumn1>
      </FlexRow2>
    </SearchNFTPageRoot>
  );
};
const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
const LeftSide = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  justify-content: flex-start;
  align-items: center;
  width: ${(props) => props.width};
`;
const FlexRow1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: ${(props) => props.gap};
`;
const HomeFilled = styled.img`
  width: 24px;
  height: 24px;
`;
const Typography150 = styled.div`
  display: flex;
  font-size: 16px;
  font-family: Roboto;
  letter-spacing: 0.15px;
  line-height: 24px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  color: ${(props) => props.color};
`;
const FlexColumn1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: ${(props) => props.gap};
`;
const ChevronLeftFilled = styled.img`
  width: 46px;
  height: 46px;
`;
const ChipFilled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 178.72px;
`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-radius: 28.6px;
  padding: 7.15px;
  background-color: ${(props) => props.backgroundColor};
`;
const Chip = styled.div`
  display: flex;
  font-size: 23.23px;
  font-family: Roboto;
  letter-spacing: 0.29px;
  line-height: 32.17px;
  color: #ffffff;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5.36px 10.72px;
  text-align: ${(props) => props.textAlign};
`;
const FlexRow10 = styled.div`
  width: 1467.45px;
  flex-wrap: wrap;
  display: flex;
  flex-direction: row;
  gap: 36px;
  justify-content: flex-start;
  align-items: flex-start;
`;
const Card = styled.div`
  background-color: #ffffff;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  gap: 16px;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 16px;
  padding: 0px 0px 16px 0px;
  height: ${(props) => props.height};
`;

const Image1 = styled.img`
  width: 325px;
  height: 198px;
`;
const FlexColumn4 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0px 16px;
`;
const FlexRow11 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
  min-width: 293px;
`;
const TituloEvento = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
const Typography14 = styled.div`
  display: flex;
  font-size: 24px;
  font-family: Roboto;
  font-weight: 700;
  line-height: 32.02px;
  color: #101b37;
  align-self: stretch;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  min-width: 154px;
`;
const Typography16 = styled.div`
  display: flex;
  font-size: 14px;
  font-family: Roboto;
  letter-spacing: 0.1px;
  line-height: 21.98px;
  text-transform: uppercase;
  color: #101b37;
  align-self: stretch;
  opacity: 0.7;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  min-width: 154px;
`;
const FlexColumn5 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;
const Typography18 = styled.div`
  text-align: right;
  font-size: 7.8px;
  font-family: Roboto;
  letter-spacing: 0.26px;
  line-height: 12.95px;
  color: #101b37;
`;
const Typography20 = styled.div`
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
const Typography19 = styled.div`
  text-align: right;
  font-size: 12px;
  font-family: Roboto;
  letter-spacing: 0.4px;
  line-height: 19.92px;
  color: #101b37;
  width: 25px;
  height: 19px;
`;
const Ellipse = styled.img`
  width: 48.56px;
  height: 48.56px;
`;
const Bullets = styled.div`
  width: 251px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center;
  align-items: flex-start;
`;
const Typography21 = styled.div`
  display: flex;
  font-size: 14px;
  font-family: Roboto;
  letter-spacing: 0.17px;
  line-height: 20.02px;
  color: #101b37;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: ${(props) => props.width};
`;
const FlexRow14 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
`;
const Image10 = styled.img`
  width: 325px;
  height: 29px;
`;
const FlexColumn6 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
const StickyCTA = styled.div`
  display: flex;
  flex-direction: row;
  gap: 11px;
  justify-content: flex-start;
  align-items: center;
  padding: 15px 16px;
`;
const FlexColumn7 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  flex-grow: 1;
`;
const ETH = styled.div`
  height: 13.5px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  align-self: stretch;
  flex-grow: 1;
  min-width: 96px;
  gap: ${(props) => props.gap};
`;
const Typography25 = styled.div`
  display: flex;
  font-size: 20px;
  font-family: Roboto;
  font-weight: 500;
  letter-spacing: 0.15px;
  line-height: 32px;
  color: #e51376;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
const Typography27 = styled.div`
  display: flex;
  font-size: 14px;
  font-family: Roboto;
  letter-spacing: 0.17px;
  line-height: 20.02px;
  text-transform: uppercase;
  color: #101b37;
  width: 96px;
  opacity: 0.7;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex-grow: 1;
`;
const ButtonContained = styled.button`
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.12),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.2);
  width: 186px;
  background-color: #e51376;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
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
  letter-spacing: 0.46px;
  line-height: 26px;
  text-transform: uppercase;
  color: #ffffff;
  width: 17px;
  height: 18px;
`;
const FlexRow15 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;
const AccessTimeFilled = styled.img`
  width: 18px;
  height: 18px;
`;
const Typography29 = styled.div`
  display: flex;
  font-size: 12px;
  font-family: Roboto;
  letter-spacing: 1px;
  line-height: 31.92px;
  text-transform: uppercase;
  color: #e51376;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
const Image5 = styled.img`
  width: 325px;
  height: 24.98px;
`;
const Typography87 = styled.div`
  text-align: right;
  display: flex;
  font-size: 12px;
  font-family: Roboto;
  letter-spacing: 0.4px;
  line-height: 19.92px;
  color: #101b37;
  height: 19px;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
const Image14 = styled.img`
  width: 325px;
  height: 27px;
`;
const Button5 = styled.div`
  display: flex;
  font-size: 15px;
  font-family: Roboto;
  font-weight: 500;
  letter-spacing: 0.46px;
  line-height: 26px;
  text-transform: uppercase;
  color: #ffffff;
  overflow: hidden;
  flex-direction: row;
  gap: 8px;
  justify-content: center;
  align-items: center;
  padding: 8px 22px;
`;
const SearchNFTPageRoot = styled.div`
  background-color: #101b37;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  gap: 51px;
  justify-content: center;
  align-items: center;
`;
const AppBar = styled.div`
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
const Typography161 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
const Typography160 = styled.input`
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
const ButtonContained8 = styled.button`
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.12),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.2);
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
const Base8 = styled.div`
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
const Button9 = styled.div`
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
const FlexRow2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 130px;
  align-items: center;
  padding: 0px 69px;
`;
const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 120px;
  gap: 60px;
  justify-content: flex-start;
  align-items: flex-start;
  align-self: flex-start;
  margin: 2px 0px 0px 0px;
`;
const RazzmatazzFlexRow = styled.div`
  background-color: #e51376;
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 10px;
  padding: 10px;
`;
const Image9 = styled.img`
  width: 21.52px;
  height: 20.64px;
`;
const Typography = styled.div`
  display: flex;
  font-size: 24px;
  font-family: Roboto;
  line-height: 32.02px;
  color: rgba(255, 255, 255, 0.5);
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
const Typography2 = styled.div`
  display: flex;
  font-size: 60px;
  font-family: Roboto;
  font-weight: 700;
  letter-spacing: -0.5px;
  line-height: 72px;
  color: #ffffff;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export default EventsList;
