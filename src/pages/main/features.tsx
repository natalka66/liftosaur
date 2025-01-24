import { JSX, h } from "preact";

type IFeature = {
  name: string;
  description: string;
  icon: string;
  imgExample: string;
};
const features: IFeature[] = [
  {
    name: "Workout Editor",
    description:
      " Extremely customizable workout editor. Create your programs using Liftoscript - just type the exercises, reps, weights, progressions across days and weeks.",
    icon: "/images/redesign/icon-editor.svg",
    imgExample: "/images/mainprogram.png",
  },
  {
    name: "Workout history",
    description:
      "All your workouts will be recorded, and you will have the ability to edit any recorded workout as needed.",
    icon: "/images/redesign/icon-workout-history.svg",
    imgExample: "/images/mainworkouthistory.png",
  },
  {
    name: "Workout progress",
    description: "You can track your workouts in the app, and see the progress you've made over time.",
    icon: "/images/redesign/icon-workout-progress.svg",
    imgExample: "/images/mainworkouttracking.png",
  },
  {
    name: "Cloud Storage",
    description:
      "If you log in using your Google or Apple account, your workout history will be stored in the cloud, so you can access it both on the web and in the app.",
    icon: "/images/redesign/icon-tracker.svg",
    imgExample: "/images/maincloudstorage.png",
  },
  {
    name: "Graphs",
    description:
      "You can visually track your progress using graphs - weights or volume per exercise, or per muscle group.",
    icon: "/images/redesign/icon-graphs.svg",
    imgExample: "/images/maingraphs.png",
  },
  {
    name: "Muscle stats",
    description:
      "Get visibility into daily and weekly sets and volume in a program to ensure balanced load and hitting your muscles groups properly.",
    icon: "/images/redesign/icon-muscle-stats.svg",
    imgExample: "/images/mainmusclestats.png",
  },
  {
    name: "Undulation graphs",
    description:
      "See how volume and intensity changes for your program exercises week over week in multi-week programs",
    icon: "/images/redesign/icon-undulation-graphs.svg",
    imgExample: "/images/mainundulationgraphs.jpeg",
  },
  {
    name: "Body Measurements",
    description:
      "Track your bodyweight and body part measurements (bicep, tricep, chest, etc). You can also overlay bodyweight graph on the exercise graphs.",
    icon: "/images/redesign/icon-body-measurements.svg",
    imgExample: "/images/mainmeasurements.jpeg",
  },
];

export function Features(): JSX.Element {
  return (
    <div className="mx-auto mt-8 text-base" style={{ maxWidth: "800px" }}>
      <div className="flex justify-center">
        <img style={{ width: "2em" }} src="/images/redesign/icon-tracker.svg" alt="icon-vector"></img>
        <h6 className="font-semibold" style={{ color: "#FF543E" }}>
          Powerful Tracker
        </h6>
      </div>
      <h2 className="mb-4 text-4xl font-bold text-center">Track your progress</h2>
      <p className="justify-center text-center pb-6" style={{ maxWidth: "750px", margin: "0 auto" }}>
        Log every set and rep, monitor body stats, and visualize your progress with detailed graphs. All your data is
        securely stored in the cloud for access anywhere.
      </p>
      {features.map((feature) => (
        <Feature feature={feature}></Feature>
      ))}
    </div>
  );
}

interface IFeatureProps {
  feature: IFeature;
}
function Feature(props: IFeatureProps): JSX.Element {
  return (
    <div>
      <div className="flex " key={props.feature.name}>
        <div class="flex flex-col" style={{ flex: "1" }}>
          <div className="flex items-center">
            {/* <img src={props.data.icon} alt="icon-programs"></img> */}
            <h6 className="font-semibold text-base">{props.feature.name}</h6>
          </div>
          <div>{props.feature.description}</div>
        </div>

        <div className="relative" style={{ width: "241px", height: "494px" }}>
          <div
            className="absolute top-0 left-0 z-10 bg-contain bg-no-repeat"
            style={{ backgroundImage: "url(/images/redesign/iphone-frame.png)", width: "241px", height: "494px" }}
          />
          <img
            src={props.feature.imgExample}
            alt="img Workout Editor"
            style={{ width: "222px", height: "478px", top: "8px", left: "10px", borderRadius: "20px" }}
          ></img>
        </div>
      </div>
    </div>
  );
}
