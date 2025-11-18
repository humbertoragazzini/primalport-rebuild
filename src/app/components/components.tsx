import PpButton from "@/src/components/atoms/Button";
import Heading from "@/src/components/atoms/Heading";

// one source of truth: all literals so Tailwind can see them
const COLORS = [
  { name: "red", bg: "bg-red", text: "text-red" },
  { name: "black", bg: "bg-black", text: "text-black" },
  { name: "yellow", bg: "bg-yellow", text: "text-yellow" },
  { name: "graphite", bg: "bg-graphite", text: "text-graphite" },
  { name: "light-grey", bg: "bg-light-grey", text: "text-light-grey" },
  { name: "rose", bg: "bg-rose", text: "text-rose" },
  { name: "yellow-bright", bg: "bg-yellow-bright", text: "text-yellow-bright" },
  { name: "plum", bg: "bg-plum", text: "text-plum" },
  { name: "lime", bg: "bg-lime", text: "text-lime" },
  { name: "burgundy", bg: "bg-burgundy", text: "text-burgundy" },
  { name: "deep-black", bg: "bg-deep-black", text: "text-deep-black" },
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
                className={`w-20 h-20 rounded-lg shadow-md border border-slate-800 ${color.bg}`}
              />
              <span className="text-xs font-medium text-slate-100">
                {color.name}
              </span>
              <span className="text-[10px] uppercase tracking-wide text-slate-500">
                {color.bg}
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
            <div key={level} className="space-y-3">
              {/* Section label */}
              <p className="text-xs uppercase tracking-wider text-slate-400">
                Level h{level}
              </p>

              {/* Row of all color variants for this level */}
              <div className="flex flex-col gap-2">
                {COLORS.map((color) => (
                  <Heading
                    key={`${level}-${color.name}`}
                    level={level as 1 | 2 | 3 | 4 | 5 | 6}
                    className={`${color.text}`}
                  >
                    {`H${level} – ${color.name}`}
                  </Heading>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ButtonsShowcase() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 px-6 py-10">
      <div className="w-full max-w-4xl rounded-2xl bg-slate-900 border border-slate-700 p-6 shadow-xl">
        <h2 className="mb-4 text-2xl font-semibold text-slate-50">Buttons</h2>

        <div className="space-y-10">
          <PpButton></PpButton>
        </div>
      </div>
    </div>
  );
}
