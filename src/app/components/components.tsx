import Heading from "@/components/atoms/Heading";

// one source of truth
const COLORS = [
  "red",
  "black",
  "yellow",
  "graphite",
  "light-grey",
  "rose",
  "yellow-bright",
  "plum",
  "lime",
  "burgundy",
  "deep-black",
];

// for the square grid we need bg-* versions too
const COLOR_BG = COLORS.map((name) => ({
  name,
  className: `bg-${name}`,
}));

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
          {COLOR_BG.map((color) => (
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

export function HeadingShowcase() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 px-6 py-10">
      <div className="w-full max-w-4xl rounded-2xl bg-slate-900 border border-slate-700 p-6 shadow-xl">
        <h2 className="mb-4 text-2xl font-semibold text-slate-50">
          Headings (sizes & colors)
        </h2>

        <div className="space-y-10">
          {[1, 2, 3, 4, 5, 6].map((level) => (
            <div key={level} className="space-y-4">
              <Heading level={level}>Heading Level {level}</Heading>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {COLORS.map((color) => (
                  <div
                    key={`${level}-${color}`}
                    className={`p-3 rounded-lg bg-slate-800/50 border border-slate-700 text-${color}`}
                  >
                    <Heading level={level}>
                      {`Heading ${level} – ${color}`}
                    </Heading>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
