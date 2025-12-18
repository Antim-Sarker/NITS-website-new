import { Users, Users2, Scale, Droplet, Factory, RefreshCw, UsersRound, Truck, BarChart } from "lucide-react";

export default function SCR() {
  const scr = [
    { category: "Better Society", title: "Employees and wider workforce", icon: <Users className="w-10 h-10 text-orange-500" /> },
    { category: "Better Society", title: "Community", icon: <Users2 className="w-10 h-10 text-orange-500" /> },
    { category: "Better Society", title: "Business Ethics", icon: <Scale className="w-10 h-10 text-orange-500" /> },
    { category: "Better Society", title: "Water", icon: <Droplet className="w-10 h-10 text-orange-500" /> },
    { category: "Better Society", title: "Energy and Carbon", icon: <Factory className="w-10 h-10 text-orange-500" /> },
    { category: "Better Society", title: "Materials and Waste", icon: <RefreshCw className="w-10 h-10 text-orange-500" /> },
    { category: "Better Society", title: "Customers", icon: <UsersRound className="w-10 h-10 text-orange-500" /> },
    { category: "Better Society", title: "Suppliers", icon: <Truck className="w-10 h-10 text-orange-500" /> },
    { category: "Better Society", title: "Investors", icon: <BarChart className="w-10 h-10 text-orange-500" /> },
  ];

  return (
    <section id="scr" className="bg-gray-500 text-white py-8 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-2">Corporate Social Responsibility</h2>
        <p className="text-gray-300 mb-12">
          Our commitment towards a better society, environment, and ethical business.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {scr.map((item, index) => (
            <div
              key={index}
              className="bg-white text-gray-900 rounded-lg p-6 flex flex-col items-center justify-center shadow hover:shadow-lg transition duration-300"
            >
              {item.icon}
              <h3 className="mt-4 font-semibold text-center">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
