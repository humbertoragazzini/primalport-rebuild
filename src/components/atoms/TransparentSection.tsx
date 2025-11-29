export default function TransparentSection({ children, id }: any) {
  return (
    <div
      id={id}
      className="py-16 my-8 mx-auto w-full max-w-[1480px] min-h-screen flex justify-center items-center px-2 xl:px-6"
    >
      {children}
    </div>
  );
}
