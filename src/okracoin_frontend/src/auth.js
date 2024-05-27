import { AuthClient } from "@dfinity/auth-client"
import {
    HttpAgent,
} from "@dfinity/agent"
import { icrc1_ledger_canister } from "../../declarations/icrc1_ledger_canister"

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
    const agent = new HttpAgent({identity});

    await agent.fetchRootKey()

    icrc1Ledger = icrc1_ledger_canister({agent})

}