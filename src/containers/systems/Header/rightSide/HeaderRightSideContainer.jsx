import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import HeaderRightSide from '../../../../components/systems/Header/rightSide/HeaderRightSide';
import { typeLogOut } from '../../../../modules/auth/userAuthorization';
// TODO ============================
// TODO HeaderRightSideContainer(CT)
// TODO ============================

function HeaderRightSideContainer({ history }) {
  const [openDropDown, setOpenDropDown] = useState(false);
  const dropDownHandler = () => {
    setOpenDropDown(!openDropDown);
  };
  const dispatch = useDispatch();
  const { loginSuccess } = useSelector(({ authorization }) => ({
    loginSuccess: authorization.loginSuccess,
  }));

  // * ========================
  // *   RIGHT_SIDE_BTN_HANDLER
  // * ========================

  const onProfileHandler = () => {
    history.push('/mypage');
    dropDownHandler();
  };
  const onSavedHandler = () => {
    console.log('saved');
    dropDownHandler();
  };
  const onSettingHandler = () => {
    console.log('setting');
    dropDownHandler();
  };
  const onLogOutHandler = () => {
    dispatch(typeLogOut());
    dropDownHandler();
  };

  useEffect(() => {}, [loginSuccess]);

  const userStorage = JSON.parse(localStorage.getItem('CURRENT_USER'));
  const profileImg = userStorage?.profileImg || 'null';
  let loginModal = (
    <HeaderRightSide
      openDropDown={openDropDown}
      setOpenDropDown={setOpenDropDown}
      dropDownHandler={dropDownHandler}
      onProfileHandler={onProfileHandler}
      onSavedHandler={onSavedHandler}
      onSettingHandler={onSettingHandler}
      onLogOutHandler={onLogOutHandler}
      profileImg={profileImg}
    />
  );
  if (!userStorage) {
    loginModal = <div />;
  }
  return loginModal;
}

export default withRouter(HeaderRightSideContainer);