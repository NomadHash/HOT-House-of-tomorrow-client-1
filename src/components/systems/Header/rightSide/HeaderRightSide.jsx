import React from 'react';
import styled from 'styled-components';
import { BsPencil, BsHeart } from 'react-icons/bs';
import DropDownTab from '../dropDownTab/DropDownTab';

const RightBlock = styled.div`
  display: flex;
  justify-content: center;
`;

const HeaderNavBtn = styled.button`
  border: none;
  background: none;
  margin-right: 5px;
  overflow: hidden;
  border-radius: 100%;

  width: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  outline: none;

  &:hover {
    cursor: pointer;
  }
`;

const Writing = styled(BsPencil)`
  font-size: 25px;
  color: #444444;
  &:hover {
    cursor: pointer;
  }
`;
const Like = styled(BsHeart)`
  font-size: 30px;
  color: #444444;
  &:hover {
    cursor: pointer;
  }
`;
const ProfileImg = styled.img`
  width: 100%;
  overflow: hidden;
  border-radius: 100%;
`;

function HeaderRightSide({
  openDropDown,
  dropDownHandler,
  onProfileHandler,
  onSavedHandler,
  onSettingHandler,
  onLogOutHandler,
  profileImg,
}) {
  return (
    <>
      <RightBlock>
        <HeaderNavBtn type="button">
          <Writing />
        </HeaderNavBtn>
        <HeaderNavBtn type="button">
          <Like />
        </HeaderNavBtn>
        <HeaderNavBtn type="button" onClick={dropDownHandler}>
          <ProfileImg src={profileImg} alt="profile" />
        </HeaderNavBtn>
        {openDropDown ? (
          <DropDownTab
            dropDownHandler={dropDownHandler}
            onProfileHandler={onProfileHandler}
            onSavedHandler={onSavedHandler}
            onSettingHandler={onSettingHandler}
            onLogOutHandler={onLogOutHandler}
          />
        ) : null}
      </RightBlock>
    </>
  );
}

export default HeaderRightSide;