import { Actor, HttpAgent } from "@dfinity/agent";
import { idlFactory, canisterId } from "../../declarations/okracoin_backend/";

const agent = new HttpAgent()
const experience = Actor.createActor(idlFactory, { agent, canisterId})

export  {experience}