import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ServiceData } from "../Components/constants";

const Vorur = () => {
  return (
    <div className="p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ServiceData.map((item) => (
          <Link key={item.title} href={`/vorur/[title]?title=${item.title}`}>
            <div className="border-2 border-solid border-red-500 hover:border-green-600 hover:shadow-2xl p-4 rounded-lg shadow-lg cursor-pointer flex flex-col h-full">
              <div className="h-16 flex items-center justify-center border-b-2 border-red-500">
                <h2 className="text-xl text-center">{item.title}</h2>
              </div>
              <div className="flex-grow flex items-center justify-center h-48">
                <img
                  src={item.Image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-32 flex items-center justify-center border-t-2 border-red-500 mt-2">
                <p className="text-center">{item.content}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Vorur;
