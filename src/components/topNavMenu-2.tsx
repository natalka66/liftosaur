import { h, JSX, Fragment } from "preact";

import { Account } from "./account";

import { IAccount } from "../models/account";
import { Modal } from "./modal";
import { Service } from "../api/service";

export function TopNavMenu_2(): JSX.Element {
  return (
    <nav
      class="w-full mx-auto px-2 p-10"
      style={{
        maxWidth: 1200,
      }}
    >
      <div class="flex items-center ">
        <div className="flex items-center w-full  font-normal text-white font-semibold ">
          <div class="flex items-center mx-5" style={{ flex: "1" }}>
            <a href="https://www.liftosaur.com/">
              <img
                className="inline rounded-2xl mx-5"
                style={{ width: "3.5em", height: "3.5em", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)" }}
                src="/images/redesign/icon.png"
                alt="Liftosaur Logo"
              ></img>
            </a>
            <a href="https://www.liftosaur.com/">
              {" "}
              <span className="font-bold text-2xl">Liftosaur</span>
            </a>
          </div>
          <div className="flex mr-2">
            <div className="flex mr-10">
              <a className="mr-5" href="#programs">
                Programs
              </a>
              <a className="mr-5" href="#exercises">
                Exercises
              </a>
              <a className="mr-5" href="#webeditor">
                Web Editor
              </a>
              <a className="mr-5" href="#docs">
                Docs
              </a>
            </div>
            <div className="flex items-center mr-5">
              <a className="mr-5" href="#signIn">
                Sign in
              </a>
              <a href="#apple">
                <img
                  className="inline align-middle mr-5"
                  style={{ width: "1.5em", height: "1.5em" }}
                  src="/images/redesign/icon-apple.png"
                  alt="Apple Logo"
                ></img>
              </a>
              <a href="#googlePlay">
                <img
                  className="inline align-middle mr-5"
                  style={{ width: "1.5em", height: "1.5em" }}
                  src="/images/redesign/icon-google-play.png"
                  alt="Google play"
                ></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

function SocialIcons(): JSX.Element {
  return (
    <>
      {[
        ["Instagram", "https://www.instagram.com/liftosaurapp", "logo-instagram"],
        ["Twitter", "https://www.twitter.com/liftosaur", "logo-twitter"],
        ["Reddit", "https://www.reddit.com/r/liftosaur", "logo-reddit"],
        ["Discord", "https://discord.gg/AAh3cvdBRs", "logo-discord"],
      ].map(([text, link, img]) => {
        return (
          <li className="inline-block list-none md:block">
            <a
              target="_blank"
              href={link}
              style={{
                textIndent: "9999px",
                backgroundPosition: "50%",
                backgroundSize: "60%",
                backgroundImage: `url(/images/${img}.svg)`,
              }}
              className="inline-block w-10 h-10 px-2 mx-1 overflow-hidden align-middle bg-no-repeat"
            >
              <span>{text}</span>
            </a>
          </li>
        );
      })}
    </>
  );
}

interface IModalAccountProps {
  account?: IAccount;
  service: Service;
  onClose: () => void;
}

function ModalAccount(props: IModalAccountProps): JSX.Element {
  return (
    <Modal onClose={props.onClose} shouldShowClose={true}>
      <Account account={props.account} client={props.service.client} />
    </Modal>
  );
}
