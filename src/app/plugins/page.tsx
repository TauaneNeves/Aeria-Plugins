export default function PluginsList() {
  const plugins = [{ name: "AeriaMenus", desc: "Menus modernos e intuitivos", slug: "aeriamenus" }];

  return (
    <div className="max-w-6xl mx-auto py-20 px-6">
      <h2 className="text-4xl font-bold mb-12">Nossos Plugins</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {plugins.map((p) => (
          <a href={`/plugins/${p.slug}`} key={p.slug} className="group p-8 rounded-3xl border border-blue-100 bg-white/50 backdrop-blur-md hover:bg-blue-50/50 transition">
            <h3 className="text-xl font-bold mb-2">{p.name}</h3>
            <p className="text-gray-500 text-sm">{p.desc}</p>
          </a>
        ))}
      </div>
    </div>
  );
}