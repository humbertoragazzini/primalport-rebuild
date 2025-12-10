export default function GradientSection({ children, id, className }: any) {
  return (
    <div
      id={id}
      className={`w-full scroll-mt-24 py-[1px] mb-32 bg-[radial-gradient(circle,rgba(2,6,24,1)_0%,rgba(87,199,133,1)_95%,rgba(2,6,24,1)_100%)] md:bg-[radial-gradient(circle,rgba(2,6,24,1)_0%,rgba(87,199,133,1)_0%,rgba(2,6,24,1)_100%)] ${
        className ? className : ""
      }`}
    >
      <div className="inner-container inset-0 pt-16 pb-28 bg-gradient-to-br from-slate-800 via-slate-950 to-slate-800 h-full">
        <div className="max-w-[1280px] mx-auto px-2 lg:px-6">{children}</div>
      </div>
    </div>
  );
}
