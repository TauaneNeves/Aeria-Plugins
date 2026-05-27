import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export default function FeatureCard({
  icon: Icon,
  title,
  desc,
}: FeatureCardProps) {
  return (
    <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all">
      
      <div className="w-14 h-14 rounded-2xl bg-sky-100 flex items-center justify-center mb-6">
        <Icon className="w-7 h-7 text-sky-500" />
      </div>

      <h3 className="text-2xl font-bold mb-3">
        {title}
      </h3>

      <p className="text-slate-500 leading-relaxed">
        {desc}
      </p>
    </div>
  );
}