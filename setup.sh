#!/bin/bash

dfx identity new minter  
dfx identity use minter  
export MINTER=$(dfx identity get-principal)  

export TOKEN_NAME="OkraCoin"  # Change the token name here 
export TOKEN_SYMBOL="OKR"  # Change token symbol here 

dfx identity use default  
export DEFAULT=$(dfx identity get-principal)  

export PRE_MINTED_TOKENS=10_000_000_000  # Insert amount of pre minted tokens 
export TRANSFER_FEE=10  # Insert the transfer fee 

dfx identity new archive_controller  
dfx identity use archive_controller  
export ARCHIVE_CONTROLLER=$(dfx identity get-principal)  
export TRIGGER_THRESHOLD=2000  
export NUM_OF_BLOCK_TO_ARCHIVE=1000  
export CYCLE_FOR_ARCHIVE_CREATION=10000000000000  

export FEATURE_FLAGS=true # Set the feature flags to true

dfx deploy icrc1_ledger_canister --specified-id mxzaz-hqaaa-aaaar-qaada-cai --argument "(variant {Init =
record {
     token_symbol = \"${TOKEN_SYMBOL}\";
     token_name = \"${TOKEN_NAME}\";
     minting_account = record { owner = principal \"${MINTER}\" };
     transfer_fee = ${TRANSFER_FEE};
     metadata = vec {};
     feature_flags = opt record{icrc2 = ${FEATURE_FLAGS}};
     initial_balances = vec { record { record { owner = principal \"${DEFAULT}\"; }; ${PRE_MINTED_TOKENS}; }; };
     archive_options = record {
         num_blocks_to_archive = ${NUM_OF_BLOCK_TO_ARCHIVE};
         trigger_threshold = ${TRIGGER_THRESHOLD};
         controller_id = principal \"${ARCHIVE_CONTROLLER}\";
         cycles_for_archive_creation = opt ${CYCLE_FOR_ARCHIVE_CREATION};
     };
 }
})"

./did.sh && dfx generate okracoin_backend && dfx deploy okracoin_backend  # Command for deploying canister one locally