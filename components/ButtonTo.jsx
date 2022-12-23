import React from 'react'

import styled from 'styled-components'

const ButtonText = styled.Text`
    padding-top: 6px;
    padding-bottom: 6px;
    padding-left: 10px;
    padding-right: 10px;
    cursor: pointer;
` 

export function ButtonTo({title}) {
  return (
    <ButtonText>{title}</ButtonText>
  )
};