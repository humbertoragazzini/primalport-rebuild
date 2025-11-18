const COLORS = [
  { name: "red", className: "bg-red" },
  { name: "black", className: "bg-black" },
  { name: "yellow", className: "bg-yellow" },
  { name: "graphite", className: "bg-graphite" },
  { name: "light-grey", className: "bg-light-grey" },
  { name: "rose", className: "bg-rose" },
  { name: "yellow-bright", className: "bg-yellow-bright" },
  { name: "plum", className: "bg-plum" },
  { name: "lime", className: "bg-lime" },
  { name: "burgundy", className: "bg-burgundy" },
  { name: "deep-black", className: "bg-deep-black" },
];

export function ColorGrid() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 px-6 py-10">
      <div className="w-full max-w-4xl rounded-2xl bg-slate-900 border border-slate-700 p-6 shadow-xl">
        <h2 className="mb-2 text-2xl font-semibold text-slate-50">
          Brand Colours
        </h2>
        <p className="mb-6 text-sm text-slate-400">
          Squares use Tailwind utilities (e.g. <code>bg-plum</code>) backed by
          colours defined in <code>@theme</code> in your CSS.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
          {COLORS.map((color) => (
            <div key={color.name} className="flex flex-col items-center gap-2">
              <div
                className={`w-20 h-20 rounded-lg shadow-md border border-slate-800 ${color.className}`}
              />
              <span className="text-xs font-medium text-slate-100">
                {color.name}
              </span>
              <span className="text-[10px] uppercase tracking-wide text-slate-500">
                {color.className}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
