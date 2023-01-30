/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

const withSuspense = (WrappedComponent: React.ComponentType, FallbackComponent = null) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return function Component(props: any) {
    const fallback = <div data-aid='loading'>{FallbackComponent || 'Loading...'}</div>;
    return (
      <React.Suspense fallback={fallback}>
        <div data-aid='children'>
          <WrappedComponent {...props} />
        </div>
      </React.Suspense>
    );
  };
};

export default withSuspense;
