import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Account } from "@app/_models/account";
import { Customer } from "@app/_models/customer";
import { Observable } from "rxjs";
import { AuthenticationService } from "@app/_services";
import { AccountInput } from "@app/_models/accountinput";
import { AccountCreationStatus } from "@app/_models/accountCreationStatus";

@Injectable({
  providedIn: "root",
})
export class AccountService {
  constructor(private http: HttpClient) {}

  getCustAccounts(customerid: string) {
    return this.http.get<Account[]>(
      `http://localhost:8086/account-ms/getAccounts/${customerid}`
    );
  }
  getAccount(accountid: number) {
    return this.http.get<Account>(
      `http://localhost:8086/account-ms/getAccount/${accountid}`
    );
  }

  createAccount(
    customerid: string,
    accountId: number,
    customerId: string,
    currentBalance: number,
    accountType: string,
    ownerName: string
  ) {
    return this.http.post<AccountCreationStatus>(
      `http://localhost:8086/account-ms/createAccount/${customerid}`,
      { accountId, customerId, currentBalance, accountType, ownerName }
    );
  }
}
