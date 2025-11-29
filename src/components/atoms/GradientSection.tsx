export default function GradientSection({ children, id }: any) {
  return (
    <div
      id={id}
      className="w-full py-[1px] bg-[radial-gradient(circle,rgba(2,6,24,1)_0%,rgba(87,199,133,1)_95%,rgba(2,6,24,1)_100%)] md:bg-[radial-gradient(circle,rgba(2,6,24,1)_0%,rgba(87,199,133,1)_0%,rgba(2,6,24,1)_100%)]"
    >
      <div className="inset-0 bg-gradient-to-br from-slate-800 via-slate-950 to-slate-800 h-full">
        {children}
      </div>
    </div>
  );
}
