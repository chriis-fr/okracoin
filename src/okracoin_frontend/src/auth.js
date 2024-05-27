import { AuthClient } from "@dfinity/auth-client"
import {
    HttpAgent,
    Actor
} from "@dfinity/agent"
import { idlFactory as icrc1LedgerIdl} from "../../declarations/icrc1_ledger_canister"

export let icrc1Ledger = null;

export const initAuth = async () => {
    const authClient = await AuthClient.create();

    if(await authClient.isAuthenticated()) {
        handleAuthenticated(authClient)
    } else {
        await authClient.login({
            identityProvider: "https://identity.ic0.app",
            onSuccess: () => {
                handleAuthenticated(authClient)
            }
        })
    }
}

const handleAuthenticated = async (authClient) => {
    const identity = authClient.getIdentity();
    const agent = new HttpAgent({identity})

    agent.fetchRootKey();
    icrc1Ledger = Actor.createActor(icrc1LedgerIdl, {
        agent,
        canisterId: "mxzaz-hqaaa-aaaar-qaada-cai"
    })
}