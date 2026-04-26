import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface EmailSecurityImpersonationRegistryConfig extends cdktf.TerraformMetaArguments {
    /**
    * Account Identifier
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/email_security_impersonation_registry#account_id EmailSecurityImpersonationRegistry#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/email_security_impersonation_registry#email EmailSecurityImpersonationRegistry#email}
    */
    readonly email: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/email_security_impersonation_registry#is_email_regex EmailSecurityImpersonationRegistry#is_email_regex}
    */
    readonly isEmailRegex: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/email_security_impersonation_registry#name EmailSecurityImpersonationRegistry#name}
    */
    readonly name: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/email_security_impersonation_registry cloudflare_email_security_impersonation_registry}
*/
export declare class EmailSecurityImpersonationRegistry extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_email_security_impersonation_registry";
    /**
    * Generates CDKTF code for importing a EmailSecurityImpersonationRegistry resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the EmailSecurityImpersonationRegistry to import
    * @param importFromId The id of the existing EmailSecurityImpersonationRegistry that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/email_security_impersonation_registry#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the EmailSecurityImpersonationRegistry to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/email_security_impersonation_registry cloudflare_email_security_impersonation_registry} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EmailSecurityImpersonationRegistryConfig
    */
    constructor(scope: Construct, id: string, config: EmailSecurityImpersonationRegistryConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get comments(): any;
    get createdAt(): any;
    get directoryId(): any;
    get directoryNodeId(): any;
    private _email?;
    get email(): string;
    set email(value: string);
    get emailInput(): string;
    get externalDirectoryNodeId(): any;
    get id(): any;
    private _isEmailRegex?;
    get isEmailRegex(): boolean | cdktf.IResolvable;
    set isEmailRegex(value: boolean | cdktf.IResolvable);
    get isEmailRegexInput(): any;
    get lastModified(): any;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get provenance(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
