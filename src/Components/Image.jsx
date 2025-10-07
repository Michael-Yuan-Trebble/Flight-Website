export default function Image({ Image, Caption }) {
  return (
    <div className="relative group w-full h-64 mb-10 shadow-lg rounded-2xl overflow-hidden">
      <img
        src={Image}
        alt="Gif"
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 z-10 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-white text-lg font-semibold">{Caption}</p>
      </div>
    </div>
  );
}