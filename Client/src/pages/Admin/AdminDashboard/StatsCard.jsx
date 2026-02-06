function StatsCard({ title, value }) {
  return (
    <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-lg p-6 flex flex-col justify-between hover:scale-105 transform transition-all duration-300 cursor-pointer">
      <p className="text-gray-300 text-sm">{title}</p>
      <h3 className="text-2xl font-bold text-cyan-400 mt-2">{value}</h3>
    </div>
  );
}

export default StatsCard;
