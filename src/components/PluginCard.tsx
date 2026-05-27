import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface PluginCardProps {
  name: string;
  desc: string;
  category: string;
  slug: string;
}

export default function PluginCard({
  name,
  desc,
  category,
  slug,
}: PluginCardProps) {
  return (
    <Link
      href={`/plugins/${slug}`}
      className="
        group
        bg-white
        border
        border-slate-100
        rounded-3xl
        p-8
        shadow-lg
        hover:shadow-2xl
        hover:-translate-y-2
        transition-all
        duration-300
      "
    >
      <div className="inline-flex mb-6 px-3 py-1 rounded-full bg-sky-100 text-sky-700 text-sm font-semibold">
        {category}
      </div>

      <h3 className="text-3xl font-black mb-4">
        {name}
      </h3>

      <p className="text-slate-500 leading-relaxed mb-8">
        {desc}
      </p>

      <div className="flex items-center gap-2 text-sky-500 font-bold group-hover:gap-4 transition-all">
        Ver Plugin
        <ArrowRight className="w-5 h-5" />
      </div>
    </Link>
  );
}