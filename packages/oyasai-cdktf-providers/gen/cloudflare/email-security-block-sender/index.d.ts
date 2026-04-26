import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface EmailSecurityBlockSenderConfig extends cdktf.TerraformMetaArguments {
    /**
    * Account Identifier
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/email_security_block_sender#account_id EmailSecurityBlockSender#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/email_security_block_sender#comments EmailSecurityBlockSender#comments}
    */
    readonly comments?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/email_security_block_sender#is_regex EmailSecurityBlockSender#is_regex}
    */
    readonly isRegex: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/email_security_block_sender#pattern EmailSecurityBlockSender#pattern}
    */
    readonly pattern: string;
    /**
    * Available values: "EMAIL", "DOMAIN", "IP", "UNKNOWN".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/email_security_block_sender#pattern_type EmailSecurityBlockSender#pattern_type}
    */
    readonly patternType: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/email_security_block_sender cloudflare_email_security_block_sender}
*/
export declare class EmailSecurityBlockSender extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_email_security_block_sender";
    /**
    * Generates CDKTF code for importing a EmailSecurityBlockSender resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the EmailSecurityBlockSender to import
    * @param importFromId The id of the existing EmailSecurityBlockSender that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/email_security_block_sender#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the EmailSecurityBlockSender to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/email_security_block_sender cloudflare_email_security_block_sender} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EmailSecurityBlockSenderConfig
    */
    constructor(scope: Construct, id: string, config: EmailSecurityBlockSenderConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _comments?;
    get comments(): string;
    set comments(value: string);
    resetComments(): void;
    get commentsInput(): string;
    get createdAt(): any;
    get id(): any;
    private _isRegex?;
    get isRegex(): boolean | cdktf.IResolvable;
    set isRegex(value: boolean | cdktf.IResolvable);
    get isRegexInput(): any;
    get lastModified(): any;
    private _pattern?;
    get pattern(): string;
    set pattern(value: string);
    get patternInput(): string;
    private _patternType?;
    get patternType(): string;
    set patternType(value: string);
    get patternTypeInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
