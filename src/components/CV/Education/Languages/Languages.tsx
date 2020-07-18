import React from 'react';

import { styled } from 'components/CV/styles';
import { CourseList } from 'components/CV/shared/Ui';
import { deepMemo } from 'utils/components';
import { CvJsonEducationLanguages } from 'graphql-types';

const StyledCourseList = styled(CourseList)`
  padding: 1rem 0;
`;

const Language = styled.li``;

export const Languages: React.FC<{
  data: CvJsonEducationLanguages[];
}> = deepMemo(({ data }) => {
  return (
    <StyledCourseList>
      {data.map(({ name, id, proficiency }) => (
        <Language key={id!}>
          {name} - {proficiency}
        </Language>
      ))}
    </StyledCourseList>
  );
});
