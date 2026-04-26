import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareEmailSecurityBlockSenderConfig extends cdktf.TerraformMetaArguments {
    /**
    * Account Identifier
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_security_block_sender#account_id DataCloudflareEmailSecurityBlockSender#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_security_block_sender#filter DataCloudflareEmailSecurityBlockSender#filter}
    */
    readonly filter?: DataCloudflareEmailSecurityBlockSenderFilter;
    /**
    * The unique identifier for the allow policy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_security_block_sender#pattern_id DataCloudflareEmailSecurityBlockSender#pattern_id}
    */
    readonly patternId?: number;
}
export interface DataCloudflareEmailSecurityBlockSenderFilter {
    /**
    * The sorting direction.
    * Available values: "asc", "desc".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_security_block_sender#direction DataCloudflareEmailSecurityBlockSender#direction}
    */
    readonly direction?: string;
    /**
    * The field to sort by.
    * Available values: "pattern", "created_at".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_security_block_sender#order DataCloudflareEmailSecurityBlockSender#order}
    */
    readonly order?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_security_block_sender#pattern DataCloudflareEmailSecurityBlockSender#pattern}
    */
    readonly pattern?: string;
    /**
    * Available values: "EMAIL", "DOMAIN", "IP", "UNKNOWN".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_security_block_sender#pattern_type DataCloudflareEmailSecurityBlockSender#pattern_type}
    */
    readonly patternType?: string;
    /**
    * Allows searching in multiple properties of a record simultaneously.
    * This parameter is intended for human users, not automation. Its exact
    * behavior is intentionally left unspecified and is subject to change
    * in the future.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_security_block_sender#search DataCloudflareEmailSecurityBlockSender#search}
    */
    readonly search?: string;
}
export declare function dataCloudflareEmailSecurityBlockSenderFilterToTerraform(struct?: DataCloudflareEmailSecurityBlockSenderFilter | cdktf.IResolvable): any;
export declare function dataCloudflareEmailSecurityBlockSenderFilterToHclTerraform(struct?: DataCloudflareEmailSecurityBlockSenderFilter | cdktf.IResolvable): any;
export declare class DataCloudflareEmailSecurityBlockSenderFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareEmailSecurityBlockSenderFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataCloudflareEmailSecurityBlockSenderFilter | cdktf.IResolvable | undefined);
    private _direction?;
    get direction(): string;
    set direction(value: string);
    resetDirection(): void;
    get directionInput(): string;
    private _order?;
    get order(): string;
    set order(value: string);
    resetOrder(): void;
    get orderInput(): string;
    private _pattern?;
    get pattern(): string;
    set pattern(value: string);
    resetPattern(): void;
    get patternInput(): string;
    private _patternType?;
    get patternType(): string;
    set patternType(value: string);
    resetPatternType(): void;
    get patternTypeInput(): string;
    private _search?;
    get search(): string;
    set search(value: string);
    resetSearch(): void;
    get searchInput(): string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_security_block_sender cloudflare_email_security_block_sender}
*/
export declare class DataCloudflareEmailSecurityBlockSender extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_email_security_block_sender";
    /**
    * Generates CDKTF code for importing a DataCloudflareEmailSecurityBlockSender resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareEmailSecurityBlockSender to import
    * @param importFromId The id of the existing DataCloudflareEmailSecurityBlockSender that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_security_block_sender#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareEmailSecurityBlockSender to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_security_block_sender cloudflare_email_security_block_sender} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareEmailSecurityBlockSenderConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareEmailSecurityBlockSenderConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get comments(): any;
    get createdAt(): any;
    private _filter;
    get filter(): DataCloudflareEmailSecurityBlockSenderFilterOutputReference;
    putFilter(value: DataCloudflareEmailSecurityBlockSenderFilter): void;
    resetFilter(): void;
    get filterInput(): any;
    get id(): any;
    get isRegex(): any;
    get lastModified(): any;
    get pattern(): any;
    private _patternId?;
    get patternId(): number;
    set patternId(value: number);
    resetPatternId(): void;
    get patternIdInput(): number;
    get patternType(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
