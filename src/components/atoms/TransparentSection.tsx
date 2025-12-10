export default function TransparentSection({ children, id }: any) {
  return (
    <div
      id={id}
      className="scroll-mt-24 mx-auto mb-38 mt-17 w-full max-w-[1280px] flex justify-center items-center px-2 lg:px-6"
    >
      {children}
    </div>
  );
}
