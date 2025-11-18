export function ColorShowcase() {
  const colors = [
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

  return (
    <div className="min-h-screen bg-deep-black text-white p-8 flex justify-center items-center">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 bg-black/40 p-6 rounded-xl backdrop-blur">
        {colors.map((color) => (
          <div key={color} className="flex flex-col items-center">
            <div className={`w-20 h-20 rounded-md shadow-lg bg-${color}`} />
            <span className="mt-2 text-sm">{color}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
