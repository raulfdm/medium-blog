import React from 'react';
import { Link } from 'gatsby';
import { defineMessages, FormattedMessage } from 'react-intl';

import { useIntl } from '@contexts/react-intl';
import { LocaleValues, DeepNonNullable } from '@app-types';
import { isNilOrEmpty } from '@utils/utilities';
import { Phrase, Wrapper } from './styled';
import { SitePageContextTranslation } from '@app-types/graphql';

const messages = defineMessages({
  en: {
    id: 'languages.en',
  },
  pt: {
    id: 'languages.pt',
  },
});

type AvailableTranslationsProps = {
  translation?: DeepNonNullable<SitePageContextTranslation>;
};

export const AvailableTranslations: React.FC<AvailableTranslationsProps> = ({
  translation,
}) => {
  const { formatMessage, switchLocale } = useIntl();

  if (isNilOrEmpty(translation)) return null;

  const { language, postUri } = translation!;

  return (
    <Wrapper data-testid="blog-available-translations" as="div">
      <Phrase>
        <span>
          <FormattedMessage id="blog.availableTranslations.text" />{' '}
        </span>
        <Link
          to={postUri}
          onClick={() => {
            switchLocale(language as LocaleValues);
          }}
          data-testid="blog-available-translations-link"
        >
          {formatMessage(messages[language as LocaleValues])}
        </Link>
      </Phrase>
    </Wrapper>
  );
};
