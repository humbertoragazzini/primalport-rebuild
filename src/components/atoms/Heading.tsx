type HeadingProps = {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
};

export default function Heading({ level, children, className }: HeadingProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  const sizes: Record<number, string> = {
    1: "text-4xl md:text-5xl xl:text-6xl",
    2: "text-3xl md:text-4xl xl:text-5xl",
    3: "text-2xl md:text-3xl xl:text-4xl",
    4: "text-xl md:text-2xl xl:text-3xl",
    5: "text-lg md:text-xl xl:text-2xl",
    6: "text-md md:text-lg xl:text-xl",
  };

  return <Tag className={`${sizes[level]} ${className ?? ""}`}>{children}</Tag>;
}
