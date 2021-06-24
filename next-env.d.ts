/// <reference types="next" />
/// <reference types="next/types/global" />

declare module '*.md' {
  import React from 'react';
  const react: React.VFC;
  // Intentionally unknown so types can be cast.
  const attributes: unknown;
  export { attributes, react };
}
