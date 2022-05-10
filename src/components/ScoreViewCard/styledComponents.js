import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
  border-style: solid;
  border-radius: 10px;
  border-width: 2px;
  background-color: transparent;
`
export const ScoreNameContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const ScoreName = styled.div`
  color: #ffffff;
  font-size: 20px;
  font-family: Bree Serif;
`
export const ScoreBoard = styled.div`
  background-color: white;
  width: 15%;
  height: 100%;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`
export const ScoreHeading = styled.h1`
  color: #223a5f;
  font-size: 20px;
`
export const ScoreResult = styled.p`
  color: #223a5f;
  font-size: 42px;
`
