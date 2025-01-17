import deepmerge from "deepmerge";
import { lb } from "lens-shmens";
import { ComponentChildren, h, JSX, Fragment } from "preact";
import { useEffect, useMemo, useState } from "preact/hooks";
import { FooterPage } from "../../components/footerPage";
import { ProgramPreviewPlaygroundDay } from "../../components/preview/programPreviewPlaygroundDay";
import { TopNavMenu } from "../../components/topNavMenu";
import { IAccount } from "../../models/account";
import { PlannerToProgram } from "../../models/plannerToProgram";
import { Program } from "../../models/program";
import { Settings } from "../../models/settings";
import { IPlannerProgram, IPlannerProgramDay, IPlannerProgramWeek, ISettings } from "../../types";
import { UidFactory } from "../../utils/generator";
import { useLensReducer } from "../../utils/useLensReducer";
import { PlannerCodeBlock } from "../planner/components/plannerCodeBlock";
import { PlannerEditorView } from "../planner/components/plannerEditorView";
import { PlannerProgram } from "../planner/models/plannerProgram";
import { IPlannerState } from "../planner/models/types";
import { TopNavMenu_2 } from "../../components/topNavMenu-2";

export interface IMainContentProps {
  client: Window["fetch"];
  account?: IAccount;
}

export function MainContent(props: IMainContentProps): JSX.Element {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    let source = params.get("cpgsrc");
    if (source) {
      window.localStorage.setItem("source", source);
    }
    source = window.localStorage.getItem("source");
    if (source) {
      for (const link of Array.from(document.querySelectorAll(".google-play-link"))) {
        const href = link.getAttribute("href");
        link.setAttribute("href", `${href}&referrer=${source}`);
      }

      for (const link of Array.from(document.querySelectorAll(".apple-store-link"))) {
        const href = link.getAttribute("href");
        link.setAttribute("href", `${href}&ct=${source}`);
      }
    }
  }, []);

  return (
    <div className="mx-auto">
      <div>
        <div className="bg-contain bg-no-repeat" style={{ backgroundImage: "url('/images/redesign/background.jpg')" }}>
          <TopNavMenu_2 />
          <Hero />
          <CreateYourOwnPrograms />
          <BuiltinPrograms />
        </div>

        <TopNavMenu client={props.client} account={props.account} maxWidth={1200} current="/about" />

        <Features />
        <div className="mt-8 text-center"></div>
        <div className="pt-8 mt-16 border-t border-grayv2-100">
          <FooterPage maxWidth={1200} withoutBg={true} account={props.account} />
        </div>
      </div>
    </div>
  );
}

function Hero(): JSX.Element {
  return (
    <div className="flex flex-col md:flex-row my-12 mx-auto" style={{ maxWidth: "1200px" }}>
      <div style={{ flex: 2 }}>
        <div className="ml-24" style={{ maxWidth: "30rem" }}>
          <div className="flex mb-3">
            <img className="inline" style={{ width: "5.5em" }} src="/images/redesign/stars.png" alt="five stars"></img>
            <span className="hidden font-bold leading-none md:block">“Best Workout App”</span>
          </div>

          <h1 className="mb-4 font-bold text-4xl leading-tight">
            The most powerful weightlifting <span className="font-bold text-purplev2-main">planner</span> and{" "}
            <span className="font-bold text-orangev2">tracker</span> app
          </h1>
          <p className="mb-4 text-sm">
            It's like having mobile-friendly <strong>Google Sheets</strong> and <strong>Strong</strong> in the same app!
            Create your own programs, or choose one of the existing programs, like{" "}
            <a className="font-bold underline text-bluev2" href="/programs/gzclp/" target="_blank">
              GZCLP
            </a>{" "}
            or{" "}
            <a className="font-bold underline text-bluev2" href="https://thefitness.wiki/5-3-1-primer/" target="_blank">
              5/3/1
            </a>
            , that have helped thousands of lifters get bigger and stronger.
          </p>

          <div className="mb-8 text-center md:text-left">
            <StoresLinks />
          </div>
        </div>
      </div>
      <div style={{ flex: 1, marginRight: "125px" }} className="relative flex justify-center">
        <div className="relative" style={{ width: "241px", height: "494px" }}>
          <div
            className="absolute top-0 left-0 z-10 bg-contain bg-no-repeat"
            style={{ backgroundImage: "url(/images/redesign/iphone-frame.png)", width: "241px", height: "494px" }}
          />
          <video
            className="absolute top-0 left-0"
            style={{ width: "222px", height: "478px", top: "8px", left: "10px", borderRadius: "20px" }}
            playsInline
            autoPlay
            muted
            loop
            src="/images/mainvideo.mp4"
          ></video>
        </div>
      </div>
    </div>
  );
}

function CreateYourOwnPrograms(): JSX.Element {
  return (
    <div className="mx-auto mt-16 text-base" style={{ maxWidth: 1000 }}>
      <div className="flex justify-center">
        <img style={{ width: "2em" }} src="/images/redesign/icon-editor.svg" alt="icon-editor"></img>
        <h6 className="font-semibold" style={{ color: "#8356F6" }}>
          Workout Editor
        </h6>
      </div>
      <h2 className="mb-4 text-4xl font-bold text-center">Create your own programs</h2>
      <p className="text-center mx-auto mb-12" style={{ width: "700px" }}>
        Write your weightlifting program in plain text using a special syntax — Liftoscript. Define what exercises to do
        on what weeks/days, warmups, progressive overload type. You can even use a built-in scripting language to define
        non-trivial progression schemes!
      </p>

      <div className="my-4">
        <div className="relative">
          <div
            className="absolute z-10 bg-contain bg-no-repeat"
            style={{
              backgroundImage: "url(/images/redesign/arrow.png)",
              width: "140px",
              height: "40px",
              top: 150,
              left: 400,
            }}
          />
        </div>

        <MainEditorAndPlayground />
      </div>
    </div>
  );
}

function BuiltinPrograms(): JSX.Element {
  return (
    <div className="mx-auto mt-8 " style={{ maxWidth: 1000, backgroundColor: "#F3EEFF" }}>
      <div className="flex justify-center self-center mt-20">
        <img style={{ width: "2em" }} src="/images/redesign/icon-programs.svg" alt="icon-programs"></img>
        <h6 className="font-semibold text-base" style={{ color: "#8356F6" }}>
          Weightlifting Programs
        </h6>
      </div>
      <h2 className="mb-4 text-4xl font-bold text-center">Follow free build-in programs</h2>
      <p className="mb-2">
        Start with a trusted program. All are built with Liftoscript, making them fully customizable to match your goals
        and preferences.
      </p>
      <ul className="ml-8 list-disc">
        <li>
          <a target="_blank" className="font-bold underline text-bluev2" href="/programs/the5314b">
            5/3/1 for beginners
          </a>
        </li>
        <li>
          <a target="_blank" className="font-bold underline text-bluev2" href="/programs/basicBeginner">
            Fitness Basic Beginner Program
          </a>
        </li>
        <li>
          <a target="_blank" className="font-bold underline text-bluev2" href="/programs/dbPpl">
            Dumbbell PPL
          </a>
        </li>
        <li>
          <a target="_blank" className="font-bold underline text-bluev2" href="/programs/gzclp">
            GZCLP
          </a>
        </li>
        <li>
          <a target="_blank" className="font-bold underline text-bluev2" href="/programs/gzcl-the-rippler">
            GZCL: The Rippler
          </a>
        </li>
        <li>
          <a target="_blank" className="font-bold underline text-bluev2" href="/programs/gzcl-jacked-and-tan-2">
            GZCL: Jacked And Tan 2.0
          </a>
        </li>
        <li>
          <a target="_blank" className="font-bold underline text-bluev2" href="/programs/gzcl-uhf-9-weeks">
            GZCL: UHF (Ultra High Frequency) 9 weeks
          </a>
        </li>
        <li>
          <a target="_blank" className="font-bold underline text-bluev2" href="/programs/gzcl-uhf-5-weeks">
            GZCL: UHF (Ultra High Frequency) 5 weeks
          </a>
        </li>
        <li>
          <a target="_blank" className="font-bold underline text-bluev2" href="/programs/gzcl-vdip">
            GZCL: VDIP (Volume-Dependent Intensity Progression)
          </a>
        </li>
        <li>
          <a target="_blank" className="font-bold underline text-bluev2" href="/programs/gzcl-general-gainz">
            GZCL: General Gainz
          </a>
        </li>
        <li>
          <a
            target="_blank"
            className="font-bold underline text-bluev2"
            href="/programs/gzcl-general-gainz-burrito-but-big"
          >
            GZCL: General Gainz - Burrito But Big
          </a>
        </li>
        <li>
          <a target="_blank" className="font-bold underline text-bluev2" href="/programs/lylegenericbulking">
            Lyle's Generic Bulking
          </a>
        </li>
        <li>
          <a target="_blank" className="font-bold underline text-bluev2" href="/programs/metallicadpappl">
            Metallicadpa PPL
          </a>
        </li>
        <li>
          <a target="_blank" className="font-bold underline text-bluev2" href="/programs/ss1">
            Starting Strength
          </a>
        </li>
        <li>
          <a target="_blank" className="font-bold underline text-bluev2" href="/programs/strongcurves1">
            Strong Curves
          </a>
        </li>
        <li>
          <a target="_blank" className="font-bold underline text-bluev2" href="/programs/texasmethod">
            Texas Method
          </a>
        </li>
        <li>
          <a target="_blank" className="font-bold underline text-bluev2" href="/programs/arnoldgoldensix">
            Arnold Schwarzenegger's Golden Six
          </a>
        </li>
      </ul>
    </div>
  );
}

function Features(): JSX.Element {
  return (
    <div className="mx-auto mt-8 text-base" style={{ maxWidth: "800px" }}>
      <h2 className="mb-4 text-4xl font-bold text-center">Features</h2>

      <Feature
        img="/images/mainprogram.png"
        imgOnLeft={false}
        title="Workout Editor"
        subtitle={
          <span>
            Extremely customizable workout editor. Create your programs using{" "}
            <a href="/docs" target="_blank" className="font-bold underline text-bluev2">
              Liftoscript
            </a>{" "}
            - just type the exercises, reps, weights, progressions across days and weeks.
          </span>
        }
        pos1={{ x: 80, y: 40, r: 15 }}
        pos2={{ x: 40, y: 75, r: 20 }}
      />

      <Feature
        img="/images/mainworkouthistory.png"
        imgOnLeft={true}
        title="Workout history"
        subtitle="All your workouts will be recorded, and you will have the ability to edit any recorded workout as needed."
        pos1={{ x: 20, y: 70, r: 20 }}
        pos2={{ x: 80, y: 20, r: 15 }}
      />

      <Feature
        img="/images/mainworkouttracking.png"
        imgOnLeft={false}
        title="Tracking workout progress"
        subtitle="You can track your workouts in the app, and see the progress you've made over time."
        pos1={{ x: 30, y: 40, r: 20 }}
        pos2={{ x: 75, y: 50, r: 25 }}
      >
        <div
          className="absolute z-10 bg-contain oval-plates-calculator"
          style={{
            top: "158px",
            right: "35px",
            background: "url(/images/oval.svg) no-repeat",
            width: "144px",
            height: "77px",
            transform: "rotate(-11deg)",
          }}
        />
        <div
          className="absolute z-10 bg-contain arrow-plates-calculator"
          style={{
            top: "92px",
            left: "-44px",
            background: "url(/images/handdrawn-arrow.svg) no-repeat",
            width: "112px",
            height: "56px",
            transform: "rotate(-140deg) scale(1, -1)",
          }}
        />
        <div
          className="absolute z-10 bg-contain hint-plates-calculator"
          style={{
            top: "61px",
            left: "-315px",
            fontSize: "2.5em",
            color: "#c53030",
            fontFamily: "Dancing Script, cursive",
          }}
        >
          Plates Calculator
        </div>
        <div
          className="absolute z-10 bg-contain oval-rest-timer"
          style={{
            bottom: "51px",
            right: "-22px",
            background: "url(/images/oval.svg) no-repeat",
            backgroundSize: "100%",
            width: "108px",
            height: "57px",
            transform: "rotate(-11deg)",
          }}
        />
        <div
          className="absolute z-10 bg-contain arrow-rest-timer"
          style={{
            bottom: "0px",
            left: "-24px",
            background: "url(/images/handdrawn-arrow.svg) no-repeat",
            width: "112px",
            height: "56px",
            transform: "rotate(150deg)",
          }}
        />
        <div
          className="absolute z-10 bg-contain hint-rest-timer"
          style={{
            bottom: "0px",
            left: "-200px",
            fontSize: "2.5em",
            color: "#c53030",
            fontFamily: "Dancing Script, cursive",
            whiteSpace: "nowrap",
          }}
        >
          Rest Timer
        </div>
      </Feature>

      <Feature
        img="/images/maincloudstorage.png"
        imgOnLeft={true}
        title="Cloud Storage"
        subtitle="If you log in using your Google or Apple account, your workout history will be stored in the cloud, so you can access it both on the web and in the app."
        pos2={{ x: 30, y: 35, r: 30 }}
      >
        <div
          className="absolute z-10 bg-contain oval-account"
          style={{
            top: "104px",
            left: "115px",
            background: "url(/images/oval.svg) no-repeat",
            backgroundSize: "100%",
            width: "108px",
            height: "57px",
            transform: "rotate(-11deg)",
          }}
        />
        <div
          className="absolute z-10 bg-contain arrow-account"
          style={{
            top: "40px",
            left: "233px",
            background: "url(/images/handdrawn-arrow.svg) no-repeat",
            width: "112px",
            height: "56px",
            transform: "rotate(-40deg)",
          }}
        />
        <div
          className="absolute z-10 bg-contain hint-account"
          style={{
            top: "20px",
            left: "360px",
            fontSize: "2.5em",
            color: "#c53030",
            fontFamily: "Dancing Script, cursive",
            whiteSpace: "nowrap",
          }}
        >
          Log In
        </div>
      </Feature>

      <Feature
        img="/images/maingraphs.png"
        imgOnLeft={false}
        title="Graphs"
        subtitle={
          <span>
            You can visually track your progress using graphs - weights or volume <strong>per exercise</strong>, or{" "}
            <strong>per muscle group</strong>.
          </span>
        }
        pos1={{ x: 80, y: 80, r: 20 }}
      />

      <Feature
        img="/images/mainmusclestats.png"
        imgOnLeft={true}
        title="Muscle stats"
        subtitle="Get visibility into daily and weekly sets and volume in a program to ensure balanced load and hitting your muscles groups properly."
        pos1={{ x: 60, y: 60, r: 30 }}
        pos2={{ x: 80, y: 80, r: 20 }}
      />

      <Feature
        img="/images/mainundulationgraphs.jpeg"
        imgOnLeft={false}
        title="Undulation graphs"
        subtitle="See how volume and intensity changes for your program exercises week over week in multi-week programs"
        pos1={{ x: 60, y: 60, r: 30 }}
      />

      <Feature
        img="/images/mainmeasurements.jpeg"
        imgOnLeft={true}
        title="Body Measurements"
        subtitle={
          <>
            <p className="mb-4">Track your bodyweight and body part measurements (bicep, tricep, chest, etc).</p>
            <p>You can also overlay bodyweight graph on the exercise graphs.</p>
          </>
        }
        pos2={{ x: 40, y: 60, r: 40 }}
      />

      <div className="items-center justify-center mt-16">
        <h3 className="mb-4 text-3xl font-bold leading-none text-center">Web Editor</h3>
        <p className="text-center">
          Typing your program on a phone can indeed be tedious. To ease this process, there is a{" "}
          <a href="/planner" className="font-bold underline text-bluev2">
            web editor
          </a>{" "}
          available. You can edit programs from your account, or you can generate a link to a program, and share with
          other people. And you can import those links into the app.
        </p>
        <div className="mt-4 text-center">
          <img src="/images/mainwebeditor.png" width="100%" />
        </div>
      </div>
    </div>
  );
}

function StoresLinks(): JSX.Element {
  return (
    <div className="flex">
      <div>
        <img
          className="inline"
          style={{ width: "115px", height: "130px" }}
          src="/images/redesign/qr-code.svg"
          alt="qr-code"
        ></img>
      </div>
      <div className="flex flex-col ml-5">
        <div class="inline-block align-middle">
          <a
            href="https://apps.apple.com/app/apple-store/id1661880849?pt=126680920&mt=8"
            className="inline-block mt-2 overflow-hidden rounded-xl apple-store-link"
            style={{ width: "165px", height: "55px" }}
          >
            <img
              src="/images/redesign/download-app-store.svg"
              alt="Download on the App Store"
              style={{ width: "165px", height: "55px" }}
              className="rounded-xl"
            />
          </a>
        </div>
        <div class="inline-block align-middle">
          <a
            target="_blank"
            className="google-play-link"
            href="https://play.google.com/store/apps/details?id=com.liftosaur.www.twa"
          >
            <img
              alt="Get it on Google Play"
              src="/images/redesign/download-google-play.svg"
              style={{ width: "165px", height: "55px" }}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

interface IFeatureProps {
  pos1?: { x: number; y: number; r: number };
  pos2?: { x: number; y: number; r: number };
  img: string;
  imgOnLeft: boolean;
  title: string;
  subtitle: string | JSX.Element;
  children?: ComponentChildren;
}

function Feature(props: IFeatureProps): JSX.Element {
  const width = 216;
  const height = 444;
  const innerWidth = 200;
  const innerHeight = 428;
  const insetX = 9;
  const insetY = 7;
  const imgPart = (
    <div className="relative flex justify-center flex-1 mt-8">
      <Bubbles pos1={props.pos1} pos2={props.pos2} />
      <div className="relative" style={{ width, height }}>
        <img
          src={props.img}
          className="absolute"
          style={{ width: innerWidth, height: innerHeight, top: insetY, left: insetX }}
        />
        <div
          className="absolute top-0 left-0 z-10 bg-contain"
          style={{ backgroundImage: "url(/images/iphoneframe.png)", width, height }}
        />
        <div className="hidden md:block">{props.children}</div>
      </div>
    </div>
  );
  const textPart = (
    <div className="flex items-center justify-center flex-1">
      <div>
        <h3 className="mb-4 text-3xl font-bold leading-none text-center md:text-left">{props.title}</h3>
        <p style={{ maxWidth: "20rem" }}>{props.subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className={`flex flex-col gap-4 mb-8 ${props.imgOnLeft ? "md:flex-row-reverse" : "md:flex-row"}`}>
      {textPart}
      {imgPart}
    </div>
  );
}

interface IBubblesProps {
  pos1?: { x: number; y: number; r: number };
  pos2?: { x: number; y: number; r: number };
}

function Bubbles(props: IBubblesProps): JSX.Element {
  const { pos1, pos2 } = props;
  return (
    <svg className="absolute inset-0" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {pos1 && <ellipse cx={pos1.x} cy={pos1.y} rx={pos1.r} ry={pos1.r} fill="#FF8066" fill-opacity="0.3" />}
      {pos2 && <ellipse cx={pos2.x} cy={pos2.y} rx={pos2.r} ry={pos2.r} fill="#8256F6" fill-opacity="0.3" />}
    </svg>
  );
}

function MainEditorAndPlayground(): JSX.Element {
  const initialDay: IPlannerProgramDay = {
    name: "Tap on the squares to complete sets",
    exerciseText: `Squat / 5x5 / progress: lp(5lb)
Leg Curl / 3x8 / progress: dp(5lb, 8, 12)`,
  };

  const initialWeek: IPlannerProgramWeek = {
    name: "Week 1",
    days: [initialDay],
  };

  const planner: IPlannerProgram = {
    name: "My Program",
    weeks: [initialWeek],
  };
  const settings = Settings.build();

  const initialState: IPlannerState = {
    id: UidFactory.generateUid(8),
    current: {
      program: planner,
    },
    ui: { weekIndex: 0, exerciseUi: { edit: new Set(), collapsed: new Set() } },
    history: {
      past: [],
      future: [],
    },
  };
  const [state, dispatch] = useLensReducer(initialState, {});
  const lbDay = lb<IPlannerState>().p("current").pi("program").p("weeks").i(0).p("days").i(0);
  const { evaluatedWeeks, exerciseFullNames } = useMemo(
    () => PlannerProgram.evaluate(state.current.program, settings),
    [state.current.program]
  );
  const evaluatedDay = evaluatedWeeks[0][0];
  const text = state.current.program.weeks[0].days[0].exerciseText;

  return (
    <div className="flex flex-col gap-4 mb-1 md:flex-row">
      <div className="flex-1">
        <div className="text-lg font-bold mt-6 mb-3">See it in action:</div>
        <p className="mb-3">
          Change the sets, reps or weight or add "
          <PlannerCodeBlock className="inline-block" script={"Bicep Curl / 3x10 / 12"} />" on a new line.
        </p>
        <PlannerEditorView
          name="Exercises"
          exerciseFullNames={exerciseFullNames}
          customExercises={{}}
          lineNumbers={true}
          error={evaluatedDay.success ? undefined : evaluatedDay.error}
          value={text}
          onChange={(e) => {
            dispatch(lbDay.p("exerciseText").record(e));
          }}
          onBlur={() => {}}
          onLineChange={() => {}}
        />
        <p className="mt-6 bg-gray-600">
          Custom progressions, myo-reps, drop sets, manipulating weight, reps, RPE or even rest timer via scripts —
          anything is possible. Check the docs to learn more about Liftoscipt.
        </p>
      </div>

      <div
        className="flex-1 p-10 pb-0 rounded-3xl"
        style={{ background: "linear-gradient(to right,#F6F2FF, #EDE6F6 )" }}
      >
        <div
          style={{
            border: "2px solid #C9BEEF",
            boxShadow: "0 0 10px rgba(180, 167, 255, 0.5)",
            borderRadius: "40px 40px 0 0",
            borderBottom: "none",
          }}
        >
          <div
            className=""
            style={{
              backgroundColor: "white",
              borderRadius: "37px 37px 0 0 ",
              border: "10px solid rgba(180, 167, 255, 0.5)",
              boxShadow: "0 0 10px rgba(180, 167, 255, 0.5)",
              borderBottom: "none",
            }}
          >
            {evaluatedDay.success && <MainPlayground key={text} planner={state.current.program} settings={settings} />}
          </div>
        </div>
      </div>
    </div>
  );
}

interface IMainPlaygroundProps {
  planner: IPlannerProgram;
  settings: ISettings;
}

function MainPlayground(props: IMainPlaygroundProps): JSX.Element {
  const { planner } = props;
  const [settings, setSettings] = useState(props.settings);
  const [program, setProgram] = useState(
    new PlannerToProgram(UidFactory.generateUid(8), 1, planner, settings).convertToProgram()
  );
  const [progress, setProgress] = useState(Program.nextProgramRecord(program, settings, 1, {}));

  return (
    <ProgramPreviewPlaygroundDay
      program={Program.fullProgram(program, settings)}
      dayIndex={0}
      isPlayground={true}
      settings={settings}
      progress={progress}
      staticStates={{}}
      onProgressChange={(newProgress) => {
        console.log(newProgress);
        setProgress(newProgress);
      }}
      onProgramChange={(newProgram) => {
        setProgram(newProgram);
        setProgress(Program.nextProgramRecord(newProgram, settings, 1, {}));
      }}
      onSettingsChange={(newSettings) => {
        setSettings(newSettings);
        const newProgram = new PlannerToProgram(UidFactory.generateUid(8), 1, planner, newSettings).convertToProgram();
        setProgram(newProgram);
        setProgress(Program.nextProgramRecord(newProgram, newSettings, 1, {}));
      }}
      onFinish={() => {
        const { program: newProgram, exerciseData } = Program.runAllFinishDayScripts(program, progress, settings, {});
        const newSettings = {
          ...settings,
          exerciseData: deepmerge(settings.exerciseData, exerciseData),
        };
        const newProgress = Program.nextProgramRecord(newProgram, newSettings, 1, {});
        setSettings(newSettings);
        setProgram(newProgram);
        setProgress(newProgress);
      }}
    />
  );
}
