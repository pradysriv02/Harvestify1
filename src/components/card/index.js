export default function Card({ data, label, icon }) {
  return (
    <div className="rounded-lg flex items-center border-lightgreen border-stroke bg-white py-6 px-8 gap-4 shadow">
      <div className="bg-green-100 gap-2 p-4 flex h-11.5 w-11.5 text-green-700 items-center justify-center rounded-full bg-meta-2">
        {icon}
      </div>
      <div className="flex items-center justify-between">
        <div>
          <span className="text-sm font-medium text-gray-500">{label}</span>
          <h4 className="text-2xl font-bold text-black">{data}</h4>
        </div>
      </div>
    </div>
  );
}
