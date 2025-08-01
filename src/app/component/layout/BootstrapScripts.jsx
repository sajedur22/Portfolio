'use client';

import { useEffect } from 'react';

export default function BootstrapScripts() {
  useEffect(() => {
    // Dynamically import bootstrap bundle with popper support
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return null;
}
