import React from "react";
import styled from "styled-components";

export const Prueba = ({}) => {
  const ButtonContainedFunction = (e, name) => {
    alert(`${name} was clicked`);
  };
  const ButtonContained1Function = (e, name) => {
    alert(`${name} was clicked`);
  };

  return (
    <EventRoot>
      {/* <FlexRow>
        <WhiteFlexRow>
          <LockFilled
            src={`https://file.rendit.io/n/rrNt8n1OLYRdup1VObr8.svg`}
          />
          <Text1>metaboletos.xyz</Text1>
        </WhiteFlexRow>
      </FlexRow> */}
      <Element1>
        <Fondo>
          <Image1 src={`https://file.rendit.io/n/njYFsMJsP6SZGJyVCWVm.png`} />
          <Element2 />
        </Fondo>
        <Contenido>
          <TituloEvento>
            <Typography1>
              <Typography>Música indie</Typography>
            </Typography1>
            <Typography3>
              <Typography2>Kyle Savage</Typography2>
            </Typography3>
            <Typography1>
              <Typography4>Lágrimas de Acero Tour 2022</Typography4>
            </Typography1>
          </TituloEvento>
          <FlexColumn gap={`16px`}>
            <Bullets>
              <Location1 gap={`10px`}>
                <LocationOnOutlined
                  src={`https://file.rendit.io/n/XatdLcMqYAFluyNaM1ys.svg`}
                />
                <Location1 gap={`0px`}>
                  <Typography3>
                    <Typography6 minWidth={`89`}>Arena CDMX</Typography6>
                  </Typography3>
                  <Link1 color={`#ff68af`}>Ver en maps</Link1>
                </Location1>
              </Location1>
              <Location1 gap={`10px`}>
                <LocationOnOutlined
                  src={`https://file.rendit.io/n/jf7dWPUTKzhurqNFuat3.svg`}
                />
                <FlexRow2>
                  <Typography3>
                    <Typography6 minWidth={`146`}>
                      2 de septiembre de 10:00 PM - 01:00 AM
                      {"  "}
                    </Typography6>
                  </Typography3>
                  <Link1 color={`#ff68af`}>Agregar a calendario</Link1>
                </FlexRow2>
              </Location1>
            </Bullets>
          </FlexColumn>
          <FlexColumn gap={`36px`}>
            <FlexColumn gap={`20px`}>
              <FlexColumn3 width={`343px`}>
                <Typography10>Métodos de pago aceptados</Typography10>
              </FlexColumn3>
              <FlexRow3>
                <FlexRow4 justifyContent={`center`}>
                  <Ethereumbrands
                    src={`https://file.rendit.io/n/jU65vy3sypiqzM4VpdrU.svg`}
                  />
                  <Link1 color={`#ffffff`}>Ethereum</Link1>
                </FlexRow4>
                <FlexRow4 justifyContent={`center`}>
                  <FlexRow6>
                    <Ccvisabrands
                      src={`https://file.rendit.io/n/ZEPDZLW7XkGU7wxYEuDX.svg`}
                    />
                    <Ccmastercardbrands
                      src={`https://file.rendit.io/n/XP36rAZWCeN6kLqFc2re.svg`}
                    />
                  </FlexRow6>
                  <Link1 color={`#ffffff`}>Débito y crédito</Link1>
                </FlexRow4>
              </FlexRow3>
            </FlexColumn>
            <FlexColumn gap={`10px`}>
              <FlexColumn3 width={`343px`}>
                <Typography10>Sobre el evento</Typography10>
              </FlexColumn3>
              <Typography19>
                <Typography6 minWidth={`343`}>
                  Kyle Savage regresa con su nuevo álbum titulado Lágrimas de
                  Acero, en un tour por latinoamérica durante 2022. ¡Compra tu
                  boleto y vive la experiencia!
                </Typography6>
              </Typography19>
              <MasInfo>
                <LocationOnOutlined
                  src={`https://file.rendit.io/n/tHPaeUk9iFV1eBQXIPJ9.svg`}
                />
                <Typography20>Más información del evento</Typography20>
              </MasInfo>
            </FlexColumn>
            <FlexColumn gap={`10px`}>
              <FlexColumn3 width={`auto`}>
                <FlexColumn gap={`20px`}>
                  <FlexColumn gap={`10px`}>
                    <Typography10>Lugar del evento</Typography10>
                    <MapsicleMap
                      src={`https://file.rendit.io/n/wNlGXyu2OqSFGBhA4C1t.png`}
                    />
                    <Typography24>Arena CDMX</Typography24>
                    <Typography3>
                      <Typography6 minWidth={`343`}>
                        Av. de las Granjas 800, Santa Barbara, Azcapotzalco,
                        02230 Ciudad de México, CDMX
                      </Typography6>
                    </Typography3>
                  </FlexColumn>
                  <FlexColumn gap={`14px`}>
                    <FlexRow3>
                      <FlexRow4 justifyContent={`center`}>
                        <LocationOnOutlined
                          src={`https://file.rendit.io/n/0trUPTLpEqPbUGhXl3kj.svg`}
                        />
                        <Link1 color={`#ffffff`}>Estacionamiento</Link1>
                      </FlexRow4>
                      <FlexRow4 justifyContent={`center`}>
                        <LocationOnOutlined
                          src={`https://file.rendit.io/n/0trUPTLpEqPbUGhXl3kj.svg`}
                        />
                        <Link1 color={`#ffffff`}>Alimentos</Link1>
                      </FlexRow4>
                    </FlexRow3>
                    <FlexRow3>
                      <FlexRow4 justifyContent={`center`}>
                        <LocationOnOutlined
                          src={`https://file.rendit.io/n/0trUPTLpEqPbUGhXl3kj.svg`}
                        />
                        <Link1 color={`#ffffff`}>
                          Rampas para gente de capacidades diferentes
                        </Link1>
                      </FlexRow4>
                    </FlexRow3>
                    <FlexRow3>
                      <FlexRow4 justifyContent={`center`}>
                        <LocationOnOutlined
                          src={`https://file.rendit.io/n/0trUPTLpEqPbUGhXl3kj.svg`}
                        />
                        <Link1 color={`#ffffff`}>
                          Espacio seguro para mujeres
                        </Link1>
                      </FlexRow4>
                      <FlexRow4 justifyContent={`center`}>
                        <LocationOnOutlined
                          src={`https://file.rendit.io/n/0trUPTLpEqPbUGhXl3kj.svg`}
                        />
                        <Link1 color={`#ffffff`}>Souvenirs</Link1>
                      </FlexRow4>
                    </FlexRow3>
                  </FlexColumn>
                </FlexColumn>
              </FlexColumn3>
            </FlexColumn>
            <FlexColumn gap={`10px`}>
              <FlexColumn gap={`20px`}>
                <FlexColumn gap={`10px`}>
                  <FlexColumn3 width={`343px`}>
                    <Typography10>Tu metaboleto es 100% seguro</Typography10>
                  </FlexColumn3>
                  <Typography40>
                    Usamos tecnología blockchain para asociar tu boleto con tu
                    celular. <br />
                    <br />
                    Tu boleto inteligente es seguro, anónimo y permite que los
                    artistas interactúen directamente contigo, mediante regalos
                    digitales.
                  </Typography40>
                </FlexColumn>
              </FlexColumn>
            </FlexColumn>
            <FlexColumn gap={`20px`}>
              <FlexColumn3 width={`343px`}>
                <Typography10>Qué incluye tu metaboleto</Typography10>
              </FlexColumn3>
              <FlexColumn17>
                <FlexRow15>
                  <Ethereumbrands
                    src={`https://file.rendit.io/n/3Jw9w2bx7xKRtj7NTE1F.svg`}
                  />
                  <Typography44 justifyContent={`center`}>
                    <Typography6 minWidth={`248`}>
                      Nadie más pueda usarlo, solo tú
                    </Typography6>
                  </Typography44>
                </FlexRow15>
                <FlexRow15>
                  <Ethereumbrands
                    src={`https://file.rendit.io/n/3Jw9w2bx7xKRtj7NTE1F.svg`}
                  />
                  <Typography44 justifyContent={`flex-start`}>
                    <Typography6 minWidth={`248`}>
                      Evita estafas de boletos falsos
                    </Typography6>
                  </Typography44>
                </FlexRow15>
                <FlexRow15>
                  <Ethereumbrands
                    src={`https://file.rendit.io/n/3Jw9w2bx7xKRtj7NTE1F.svg`}
                  />
                  <Typography44 justifyContent={`flex-start`}>
                    <Typography6 minWidth={`248`}>
                      Paga el mismo precio aquí o en reventa, siempre
                    </Typography6>
                  </Typography44>
                </FlexRow15>
                <FlexRow15>
                  <Ethereumbrands
                    src={`https://file.rendit.io/n/3Jw9w2bx7xKRtj7NTE1F.svg`}
                  />
                  <Typography44 justifyContent={`flex-start`}>
                    <Typography6 minWidth={`248`}>
                      Si no alcanzas a ir al evento, puedes revenderlo al precio
                      justo
                    </Typography6>
                  </Typography44>
                </FlexRow15>
                <FlexRow15>
                  <Ethereumbrands
                    src={`https://file.rendit.io/n/3Jw9w2bx7xKRtj7NTE1F.svg`}
                  />
                  <Typography44 justifyContent={`flex-start`}>
                    <Typography6 minWidth={`248`}>
                      Cada reventa aporta ganancias al artista y a los
                      organizadores
                    </Typography6>
                  </Typography44>
                </FlexRow15>
                <FlexRow15>
                  <Ethereumbrands
                    src={`https://file.rendit.io/n/3Jw9w2bx7xKRtj7NTE1F.svg`}
                  />
                  <Typography44 justifyContent={`flex-start`}>
                    <Typography6 minWidth={`248`}>
                      Los artistas pueden enviarte regalos digitales que podrás
                      coleccionar en tu cuenta y en tu wallet digital
                    </Typography6>
                  </Typography44>
                </FlexRow15>
              </FlexColumn17>
            </FlexColumn>
            <FlexColumn18>
              <FlexColumn19 flexDirection={`column`}>
                <Typography10>Comparte este evento</Typography10>
                <AgregarCalendario>
                  <ButtonContained
                    onClick={(e) =>
                      ButtonContainedFunction(e, "ButtonContained")
                    }
                  >
                    <Base>
                      <LogoutFilled
                        src={`https://file.rendit.io/n/xgUGeHtCvs7Uw8CGXGkZ.svg`}
                      />
                      <Button1>Compartir</Button1>
                    </Base>
                  </ButtonContained>
                </AgregarCalendario>
              </FlexColumn19>
            </FlexColumn18>
          </FlexColumn>
          <FlexColumn19 flexDirection={`row`}>
            <FlexColumn20>
              <Typography57>17</Typography57>
              <Typography59>días</Typography59>
            </FlexColumn20>
            <FlexColumn20>
              <Typography61 color={`#ffffff`}>:</Typography61>
            </FlexColumn20>
            <FlexColumn20>
              <Typography57>12</Typography57>
              <Typography59>Horas</Typography59>
            </FlexColumn20>
            <FlexColumn20>
              <Typography61 color={`#ffffff`}>:</Typography61>
            </FlexColumn20>
            <FlexColumn20>
              <Typography57>34</Typography57>
              <Typography59>min</Typography59>
            </FlexColumn20>
            <FlexColumn20>
              <Typography61 color={`#ffffff`}>:</Typography61>
            </FlexColumn20>
            <FlexColumn20>
              <Typography57>19</Typography57>
              <Typography59>seg</Typography59>
            </FlexColumn20>
          </FlexColumn19>
          <AgregarCalendario>
            <ButtonContained1
              onClick={(e) => ButtonContained1Function(e, "ButtonContained1")}
              width={`303px`}
            >
              <Base>
                <IconLeft
                  src={`https://file.rendit.io/n/pTtxHx7JF9UUXTXqc66r.svg`}
                />
                <Button2>Agregar al calendario</Button2>
              </Base>
            </ButtonContained1>
          </AgregarCalendario>
        </Contenido>
        <NavBar>
          <Location1 gap={`10px`}>
            <LocationOnOutlined
              src={`https://file.rendit.io/n/5wx9jVdsbt1EqXkfpAoX.svg`}
            />
          </Location1>
          <Location1 gap={`10px`}>
            <Logo src={`https://file.rendit.io/n/0wK4ONmqaGoygirDtu4T.svg`} />
          </Location1>
          <FlexRow4 justifyContent={`flex-end`}>
            <LocationOnOutlined
              src={`https://file.rendit.io/n/lK9ZGdwfKlwEb57x4Fuo.svg`}
            />
            <Element3>
              <Ticketsolid
                src={`https://file.rendit.io/n/IEE0y8kTUqf455dwuZX5.svg`}
              />
              <Typography79>3</Typography79>
            </Element3>
          </FlexRow4>
        </NavBar>
        <StickyCTA>
          <FlexColumn27>
            <ETH gap={`11px`}>
              <Typography61 color={`#e51376`}>0.008 ETH</Typography61>
            </ETH>
            <ETH gap={`10px`}>
              <Typography82>300 mXn</Typography82>
            </ETH>
          </FlexColumn27>
          <ButtonContained1
            onClick={(e) => ButtonContained1Function(e, "ButtonContained2")}
            width={`228px`}
          >
            <Base>
              <Button3>Quiero boletos</Button3>
              <IconRight
                src={`https://file.rendit.io/n/AT6jKCRYxJtFWF28jApR.svg`}
              />
            </Base>
          </ButtonContained1>
        </StickyCTA>
      </Element1>
    </EventRoot>
  );
};
const Typography1 = styled.div`
  display: flex;
  opacity: 0.7;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  align-self: stretch;
  min-width: 343px;
`;
const Typography3 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: ${(props) => props.gap};
`;
const Location1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: ${(props) => props.gap};
`;
const LocationOnOutlined = styled.img`
  width: 24px;
  height: 24px;
`;
const Typography6 = styled.div`
  font-size: 14px;
  font-family: Roboto;
  letter-spacing: 0.17px;
  line-height: 20.02px;
  color: #ffffff;
  align-self: stretch;
  min-width: ${(props) => props.minWidth};
`;
const Link1 = styled.div`
  display: flex;
  font-size: 14px;
  font-family: Roboto;
  letter-spacing: 0.17px;
  line-height: 20.02px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  color: ${(props) => props.color};
`;
const FlexColumn3 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: flex-start;
  width: ${(props) => props.width};
`;
const Typography10 = styled.div`
  display: flex;
  font-size: 24px;
  font-family: Roboto;
  font-weight: 700;
  line-height: 32.02px;
  color: #ffffff;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
const FlexRow3 = styled.div`
  width: 343px;
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: flex-start;
  align-items: center;
`;
const FlexRow4 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  justify-content: ${(props) => props.justifyContent};
`;
const Ethereumbrands = styled.img`
  width: 15px;
  height: 24px;
`;
const FlexRow15 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  min-width: 271px;
`;
const Typography44 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-grow: 1;
  justify-content: ${(props) => props.justifyContent};
`;
const FlexColumn19 = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  min-width: 343px;
  flex-direction: ${(props) => props.flexDirection};
`;
const AgregarCalendario = styled.div`
  height: 32px;
  display: flex;
  flex-direction: row;
  gap: 11px;
  justify-content: flex-start;
  align-items: center;
  align-self: stretch;
  min-width: 303px;
  padding: 15px 20px;
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
const FlexColumn20 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
const Typography57 = styled.div`
  display: flex;
  font-size: 34px;
  font-family: Roboto;
  letter-spacing: 0.25px;
  line-height: 41.99px;
  color: #ffffff;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
const Typography59 = styled.div`
  display: flex;
  font-size: 12px;
  font-family: Roboto;
  letter-spacing: 1px;
  line-height: 31.92px;
  text-transform: uppercase;
  color: #ffffff;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
const Typography61 = styled.div`
  display: flex;
  font-size: 20px;
  font-family: Roboto;
  font-weight: 500;
  letter-spacing: 0.15px;
  line-height: 32px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: ${(props) => props.color};
`;
const ButtonContained1 = styled.button`
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.12),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.2);
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
  width: ${(props) => props.width};
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
const EventRoot = styled.div`
  width: 375px;
  height: 2270px;
  background-color: #101b37;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
const FlexRow = styled.div`
  width: 375px;
  background-image: url("https://file.rendit.io/n/ho36pUESoeNYwJlyBInQ.png");
  background-size: cover;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 35px 0px 4px 0px;
`;
const WhiteFlexRow = styled.div`
  width: 110px;
  background-color: #f6f6f6;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 3px;
  align-items: center;
  padding: 5px 0px 4px 0px;
`;
const LockFilled = styled.img`
  width: 10px;
  height: 10px;
  align-self: flex-end;
  margin: 0px 0px 1px 0px;
`;
const Text1 = styled.div`
  font-size: 11px;
  font-family: Roboto;
  font-weight: 500;
  letter-spacing: 0.46px;
  color: rgba(0, 0, 0, 0.76);
`;
const Element1 = styled.div`
  height: 2105px;
  position: relative;
  min-width: 375px;
`;
const Fondo = styled.div`
  width: 375px;
  height: 229px;
  position: absolute;
  top: 60px;
`;
const Image1 = styled.img`
  width: 375px;
  height: 229px;
  position: absolute;
`;
const Element2 = styled.div`
  width: 375px;
  height: 91px;
  background-image: linear-gradient(
    360deg,
    #101b37 0%,
    rgba(16, 27, 55, 0) 100%
  );
  position: absolute;
  top: 138px;
`;
const Contenido = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  justify-content: flex-start;
  align-items: flex-start;
  position: absolute;
  top: 60px;
  padding: 184px 16px 16px 16px;
`;
const TituloEvento = styled.div`
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
const Typography = styled.div`
  font-size: 12px;
  font-family: Roboto;
  letter-spacing: 0.4px;
  line-height: 19.92px;
  text-transform: uppercase;
  color: #ffffff;
  align-self: stretch;
  min-width: 343px;
`;
const Typography2 = styled.div`
  font-size: 34px;
  font-family: Roboto;
  font-weight: 700;
  letter-spacing: 0.25px;
  line-height: 41.99px;
  color: #ffffff;
  align-self: stretch;
  min-width: 343px;
`;
const Typography4 = styled.div`
  font-size: 14px;
  font-family: Roboto;
  font-weight: 500;
  letter-spacing: 0.1px;
  line-height: 21.98px;
  text-transform: uppercase;
  color: #ffffff;
  align-self: stretch;
  min-width: 343px;
`;
const Bullets = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center;
  align-items: flex-start;
  align-self: stretch;
  min-width: 313px;
`;
const FlexRow2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
`;
const FlexRow6 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  justify-content: flex-start;
  align-items: flex-start;
`;
const Ccvisabrands = styled.img`
  width: 32px;
  height: 24px;
`;
const Ccmastercardbrands = styled.img`
  width: 33px;
  height: 24px;
`;
const Typography19 = styled.div`
  height: 57px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  align-self: stretch;
  min-width: 343px;
`;
const MasInfo = styled.div`
  width: 343px;
  display: flex;
  flex-direction: row;
  gap: 5px;
  justify-content: flex-start;
  align-items: center;
  padding: 1px 0px;
`;
const Typography20 = styled.div`
  text-align: center;
  display: flex;
  font-size: 12px;
  font-family: Roboto;
  letter-spacing: 1px;
  line-height: 31.92px;
  text-transform: uppercase;
  color: #90caf9;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
const MapsicleMap = styled.img`
  width: 343px;
  height: 177px;
`;
const Typography24 = styled.div`
  text-align: center;
  display: flex;
  font-size: 20px;
  font-family: Roboto;
  letter-spacing: 0.15px;
  line-height: 32px;
  color: #ffffff;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
const Typography40 = styled.div`
  width: 343px;
  font-size: 14px;
  font-family: Roboto;
  letter-spacing: 0.17px;
  line-height: 20.02px;
  color: #ffffff;
`;
const FlexColumn17 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  align-items: flex-start;
  padding: 0px 36px;
`;
const FlexColumn18 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: flex-start;
  align-items: flex-start;
  align-self: stretch;
  min-width: 343px;
`;
const ButtonContained = styled.button`
  border-color: #ff68af;
  border-style: solid;
  width: 301px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border-width: 1px;
  padding: 0px;
  background: none;
  box-sizing: content-box;
  cursor: pointer;
  &: hover {
    opacity: 70%;
  }
`;
const LogoutFilled = styled.img`
  width: 24px;
  height: 9px;
`;
const Button1 = styled.div`
  font-size: 15px;
  font-family: Roboto;
  font-weight: 500;
  letter-spacing: 0.46px;
  line-height: 26px;
  text-transform: uppercase;
  color: #ff68af;
  width: 66px;
  height: 18px;
`;
const IconLeft = styled.img`
  width: 24px;
  height: 17px;
  align-self: flex-start;
`;
const Button2 = styled.div`
  font-size: 15px;
  font-family: Roboto;
  font-weight: 500;
  letter-spacing: 0.46px;
  line-height: 26px;
  text-transform: uppercase;
  color: #ffffff;
  width: 171px;
  height: 18px;
`;
const NavBar = styled.div`
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 335px;
  background-color: #101b37;
  display: flex;
  flex-direction: row;
  gap: 11px;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  padding: 15px 20px;
`;
const Logo = styled.img`
  width: 135px;
  height: 25px;
`;
const Element3 = styled.div`
  width: 31.03px;
  height: 32.29px;
  position: relative;
`;
const Ticketsolid = styled.img`
  width: 31.03px;
  height: 32.29px;
  position: absolute;
`;
const Typography79 = styled.div`
  text-align: center;
  display: flex;
  font-size: 12px;
  font-family: Roboto;
  font-weight: 700;
  letter-spacing: 0.4px;
  line-height: 19.92px;
  color: #ffffff;
  width: 6.67px;
  background-color: #e51376;
  flex-direction: column;
  gap: 11.11px;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -1px;
  left: 14.03px;
  border-radius: 27.78px;
  padding: 0px 6.67px;
`;
const StickyCTA = styled.div`
  background-color: #f7f5f5;
  display: flex;
  flex-direction: row;
  gap: 11px;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  top: 544px;
  padding: 15px 20px;
`;
const FlexColumn27 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  flex-grow: 1;
`;
const Typography82 = styled.div`
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
const Button3 = styled.div`
  font-size: 15px;
  font-family: Roboto;
  font-weight: 500;
  letter-spacing: 0.46px;
  line-height: 26px;
  text-transform: uppercase;
  color: #f7f5f5;
  width: 128px;
  height: 18px;
`;
const IconRight = styled.img`
  width: 24px;
  height: 24px;
  align-self: flex-start;
`;
