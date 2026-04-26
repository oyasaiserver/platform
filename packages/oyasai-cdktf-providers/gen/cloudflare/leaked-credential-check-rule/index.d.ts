import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface LeakedCredentialCheckRuleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Defines ehe ruleset expression to use in matching the password in a request.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/leaked_credential_check_rule#password LeakedCredentialCheckRule#password}
    */
    readonly password?: string;
    /**
    * Defines the ruleset expression to use in matching the username in a request.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/leaked_credential_check_rule#username LeakedCredentialCheckRule#username}
    */
    readonly username?: string;
    /**
    * Defines an identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/leaked_credential_check_rule#zone_id LeakedCredentialCheckRule#zone_id}
    */
    readonly zoneId?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/leaked_credential_check_rule cloudflare_leaked_credential_check_rule}
*/
export declare class LeakedCredentialCheckRule extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_leaked_credential_check_rule";
    /**
    * Generates CDKTF code for importing a LeakedCredentialCheckRule resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the LeakedCredentialCheckRule to import
    * @param importFromId The id of the existing LeakedCredentialCheckRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/leaked_credential_check_rule#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the LeakedCredentialCheckRule to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/leaked_credential_check_rule cloudflare_leaked_credential_check_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LeakedCredentialCheckRuleConfig = {}
    */
    constructor(scope: Construct, id: string, config?: LeakedCredentialCheckRuleConfig);
    get id(): any;
    private _password?;
    get password(): string;
    set password(value: string);
    resetPassword(): void;
    get passwordInput(): string;
    private _username?;
    get username(): string;
    set username(value: string);
    resetUsername(): void;
    get usernameInput(): string;
    private _zoneId?;
    get zoneId(): string;
    set zoneId(value: string);
    resetZoneId(): void;
    get zoneIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
