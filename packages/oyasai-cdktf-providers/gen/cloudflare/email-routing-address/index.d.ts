import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface EmailRoutingAddressConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/email_routing_address#account_id EmailRoutingAddress#account_id}
    */
    readonly accountId?: string;
    /**
    * The contact email address of the user.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/email_routing_address#email EmailRoutingAddress#email}
    */
    readonly email: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/email_routing_address cloudflare_email_routing_address}
*/
export declare class EmailRoutingAddress extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_email_routing_address";
    /**
    * Generates CDKTF code for importing a EmailRoutingAddress resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the EmailRoutingAddress to import
    * @param importFromId The id of the existing EmailRoutingAddress that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/email_routing_address#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the EmailRoutingAddress to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/email_routing_address cloudflare_email_routing_address} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EmailRoutingAddressConfig
    */
    constructor(scope: Construct, id: string, config: EmailRoutingAddressConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get created(): any;
    private _email?;
    get email(): string;
    set email(value: string);
    get emailInput(): string;
    get id(): any;
    get modified(): any;
    get tag(): any;
    get verified(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
