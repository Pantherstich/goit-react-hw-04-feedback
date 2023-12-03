import { Title, SectionLayout } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionLayout>
      <Title>{title}</Title>
      {children}
    </SectionLayout>
  );
};
