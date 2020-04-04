import React from 'react';

export const useScripts = (): void => {
  React.useEffect(() => {
    /* This loads all widgets from twitter if exists. 
        It's loaded by html.tsx (data-testid="twitter-script")
        */
    // @ts-ignore
    if (window.twttr?.widgets) {
      // @ts-ignore
      window.twttr.widgets.load();
    }
  }, []);
};
