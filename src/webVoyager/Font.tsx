interface Props {
  color?: string;
  children?: React.ReactNode;
  face?: string;
  size?: string | number;
}

const parseSize = (size: Props['size']): string => {
  if (size === undefined) {
    return '';
  }
  if (typeof size === 'number') {
    return `${size.toString()}px`;
  }
  if (isNaN(parseInt(size))) {
    return size;
  }
  return `${size}px`;
};

const Font = ({ color, children, face, size }: Props) => (
  <span
    style={{
      color: color,
      fontFamily: face,
      fontSize: parseSize(size),
    }}
  >
    {children}
  </span>
);

export default Font;
