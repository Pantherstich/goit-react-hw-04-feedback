import { Btn, ButtonList } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, leaveFeedback }) => {
  return (
    <ButtonList>
      {options.map(option => {
        return (
          <li key={option}>
            <Btn
              type="button"
              key={option}
              onClick={() => leaveFeedback(option)}
            >
              {option}
            </Btn>
          </li>
        );
      })}
    </ButtonList>
  );
};
