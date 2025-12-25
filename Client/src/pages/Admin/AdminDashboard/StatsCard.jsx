function StatsCard({ title, value }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow p-5 flex flex-col justify-between">
      <p className="text-gray-500 text-sm">{title}</p>
      <h3 className="text-2xl font-bold text-indigo-600 mt-2">{value}</h3>
    </div>
  );
}

export default StatsCard;
