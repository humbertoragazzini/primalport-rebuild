export default function TransparentSection({ children, id }: any) {
  return (
    <div
      id={id}
      className="mx-auto w-full max-w-[1480px] flex justify-center items-center px-2 xl:px-6"
    >
      {children}
    </div>
  );
}
