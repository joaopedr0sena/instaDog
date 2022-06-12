import React, { useState } from 'react';
import {
  Ul,
  Li,
  Icon,
  MLink,
  DivMain,
  ItemsMenu,
  Paragraph,
  HamburgerIcon,
} from './styles';
import '../../../assets/icons/icomoon/style.css';

export default function Menu() {
  const [show, setShow] = useState(false);

  const handleChange = () => {
    setShow(!show);
  };

  return (
    <DivMain>
      <HamburgerIcon onClick={handleChange}>|||</HamburgerIcon>
      <ItemsMenu show={show}>
        <Ul>
          <MLink to="/salvos">
            <Li>
              <Icon className="icon-bookmark" />
              <Paragraph>salvos</Paragraph>
            </Li>
          </MLink>
          <Li>
            <Icon>+</Icon>
            <Paragraph>projetos</Paragraph>
          </Li>
        </Ul>
      </ItemsMenu>
    </DivMain>
  );
}
