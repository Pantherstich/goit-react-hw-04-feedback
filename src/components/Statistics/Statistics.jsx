import { StatList, StatItem } from './Statistics.styled';
import { Notification } from '../Notification/Notification';

export const Statistics = ({
  total = 0,
  positivePercentage = 0,
  good,
  neutral,
  bad,
}) => {
  return total ? (
    <StatList>
      <StatItem>Good: {good}</StatItem>
      <StatItem>Neutral: {neutral}</StatItem>
      <StatItem>Bad: {bad}</StatItem>
      <StatItem>Total: {total}</StatItem>
      <StatItem>Positive feedback: {positivePercentage}%</StatItem>
    </StatList>
  ) : (
    <Notification message="There is no feedback"></Notification>
  );
};
