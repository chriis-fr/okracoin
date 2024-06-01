use candid::Principal; 
use ic_cdk::update; 

#[update]
async fn get_token_name() -> String {
    let ledger_id = Principal::from_text("mxzaz-hqaaa-aaaar-qaada-cai").unwrap(); 
    let req = (); 

    let (res, ): (String, ) = 
       ic_cdk::call(ledger_id, "icrc1_ledger", (req, ))
           .await.unwrap(); 

    res
}

ic_cdk::export_candid!();