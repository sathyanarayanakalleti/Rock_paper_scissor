import {
  CardContainer,
  ScoreNameContainer,
  ScoreName,
  ScoreBoard,
  ScoreHeading,
  ScoreResult,
} from './styledComponents'

const ScoreCardView = props => {
  const {score} = props
  return (
    <CardContainer>
      <ScoreNameContainer>
        <ScoreName>
          ROCK
          <br /> PAPERS <br /> sCISSORS
        </ScoreName>
        <ScoreBoard>
          <ScoreHeading>Score</ScoreHeading>
          <ScoreResult>{score}</ScoreResult>
        </ScoreBoard>
      </ScoreNameContainer>
    </CardContainer>
  )
}
export default ScoreCardView
