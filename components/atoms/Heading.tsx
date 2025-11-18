type HeadingProps = {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
};

export default function Heading({ level, children, className }: HeadingProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  const sizes: Record<number, string> = {
    1: "text-[4rem]",
    2: "text-[3rem]",
    3: "text-[2.25rem]",
    4: "text-[1.75rem]",
    5: "text-[1.25rem]",
    6: "text-[1rem]",
  };

  return <Tag className={`${sizes[level]} ${className ?? ""}`}>{children}</Tag>;
}
