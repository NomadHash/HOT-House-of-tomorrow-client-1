import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FiChevronDown } from 'react-icons/fi';

const Block = styled.div`
  background: #e8e8e8;
  padding: 6px 7px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  margin-right: 4px;

  strong {
    color: #5f5f5f;
    margin-right: 2px;
    font-weight: 700;
    font-size: 15px;
    margin-right: 2px;
  }
`;
function Space({ modalHandler }) {
  return (
    <Block
      onMouseEnter={() => modalHandler('open', 'space')}
      onMouseLeave={() => modalHandler('close', 'space')}
    >
      <strong>공간</strong>
      <FiChevronDown />
    </Block>
  );
}

//* PROP_TYPES
Space.defaultProps = {
  modalHandler: () => null,
};
Space.propTypes = {
  modalHandler: PropTypes.func,
};

export default Space;
