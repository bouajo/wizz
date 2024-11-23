'use client';

import React, { useEffect, useState } from 'react';

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
  }, []);

  return <div data-theme={theme}>{children}</div>;
};

export default ThemeProvider;