import React from 'react';

interface MessageProps {
  text: string;
  important: boolean;
}
export default function message({ text, important }: MessageProps) {
  return <div>{important ? 'important message' : 'regular message'}</div>;
}
