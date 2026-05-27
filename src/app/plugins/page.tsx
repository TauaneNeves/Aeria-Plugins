import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PluginCard from "../../components/PluginCard";

const plugins = [
  {
    name: "AeriaMenus",
    desc: "Menus modernos, rápidos e totalmente customizáveis.",
    slug: "aeriamenus",
    category: "Menus",
  },
  
];

export default function PluginsPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900">
      
      <Navbar />

      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="mb-16">
          <h1 className="text-6xl font-black mb-4">
            Nossos Plugins
          </h1>

          <p className="text-slate-500 text-xl">
            Soluções modernas para servidores Minecraft.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {plugins.map((plugin) => (
            <PluginCard
              key={plugin.slug}
              name={plugin.name}
              desc={plugin.desc}
              slug={plugin.slug}
              category={plugin.category}
            />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}