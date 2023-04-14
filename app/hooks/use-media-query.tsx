import {useCallback, useEffect, useState} from 'react';

function useMediaQuery(query: string): boolean {
  const getMatches = (query: string): boolean => {
    // Prevents SSR issues
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches;
    }
    return false;
  };

  const [matches, setMatches] = useState(false);

  const handleChange = useCallback(
    () => setMatches(getMatches(query)),
    [query],
  );

  useEffect(() => {
    const matchMedia = window.matchMedia(query);

    // Triggered at the first client-side load and if query changes
    handleChange();

    if (matchMedia.addListener) {
      matchMedia.addListener(handleChange);
    } else {
      matchMedia.addEventListener('change', handleChange);
    }

    return () => {
      if (matchMedia.removeListener) {
        matchMedia.removeListener(handleChange);
      } else {
        matchMedia.removeEventListener('change', handleChange);
      }
    };
  }, [handleChange, query]);

  return matches;
}

export default useMediaQuery;
