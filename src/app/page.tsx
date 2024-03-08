import GradientEffectone from "@/utils/icons/GradientEffectone";
import GradientEffecttwo from "@/utils/icons/GradientEffecttwo";
import HomeView from "@/views/home/page";

export default function Home() {
  return (
    <div className="">
      <HomeView />
      <div className="two-gradient">
        <div className="hidden_mobile">
          <GradientEffecttwo width={449} height={449} />
        </div>
        <div className="hidden_pc">
          <GradientEffecttwo />
        </div>
      </div>
      <div className="one-gradient">
        <div className="hidden_mobile">
          <GradientEffectone width={449} height={449} />
        </div>
        <div className="hidden_pc">
          <GradientEffectone />
        </div>
      </div>
    </div>
  );
}
