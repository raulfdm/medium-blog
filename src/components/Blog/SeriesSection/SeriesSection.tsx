import React from 'react';
import { SeriesType, PostSeries } from './../../../types';
import { Container } from '../../Ui';
import { SeriesMenu } from '../SeriesMenu';

export type SeriesSectionTypes = {
  noDivider?: boolean;
  title: string;
  series?: SeriesType;
  seriesInfo?: PostSeries | null;
};

const SeriesSection: React.FC<SeriesSectionTypes> = ({
  noDivider,
  series,
  title,
  seriesInfo,
}) => {
  if (!series) {
    return null;
  }
  return (
    <>
      {!noDivider && <hr />}
      <Container as="section">
        <SeriesMenu
          series={series}
          postIndex={seriesInfo!.index}
          title={title}
        />
      </Container>
    </>
  );
};

export default SeriesSection;
