import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareEmailSecurityBlockSendersConfig extends cdktf.TerraformMetaArguments {
    /**
    * Account Identifier
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_security_block_senders#account_id DataCloudflareEmailSecurityBlockSenders#account_id}
    */
    readonly accountId?: string;
    /**
    * The sorting direction.
    * Available values: "asc", "desc".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_security_block_senders#direction DataCloudflareEmailSecurityBlockSenders#direction}
    */
    readonly direction?: string;
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_security_block_senders#max_items DataCloudflareEmailSecurityBlockSenders#max_items}
    */
    readonly maxItems?: number;
    /**
    * The field to sort by.
    * Available values: "pattern", "created_at".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_security_block_senders#order DataCloudflareEmailSecurityBlockSenders#order}
    */
    readonly order?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_security_block_senders#pattern DataCloudflareEmailSecurityBlockSenders#pattern}
    */
    readonly pattern?: string;
    /**
    * Available values: "EMAIL", "DOMAIN", "IP", "UNKNOWN".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_security_block_senders#pattern_type DataCloudflareEmailSecurityBlockSenders#pattern_type}
    */
    readonly patternType?: string;
    /**
    * Allows searching in multiple properties of a record simultaneously.
    * This parameter is intended for human users, not automation. Its exact
    * behavior is intentionally left unspecified and is subject to change
    * in the future.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_security_block_senders#search DataCloudflareEmailSecurityBlockSenders#search}
    */
    readonly search?: string;
}
export interface DataCloudflareEmailSecurityBlockSendersResult {
}
export declare function dataCloudflareEmailSecurityBlockSendersResultToTerraform(struct?: DataCloudflareEmailSecurityBlockSendersResult): any;
export declare function dataCloudflareEmailSecurityBlockSendersResultToHclTerraform(struct?: DataCloudflareEmailSecurityBlockSendersResult): any;
export declare class DataCloudflareEmailSecurityBlockSendersResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareEmailSecurityBlockSendersResult | undefined;
    set internalValue(value: DataCloudflareEmailSecurityBlockSendersResult | undefined);
    get comments(): any;
    get createdAt(): any;
    get id(): any;
    get isRegex(): any;
    get lastModified(): any;
    get pattern(): any;
    get patternType(): any;
}
export declare class DataCloudflareEmailSecurityBlockSendersResultList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataCloudflareEmailSecurityBlockSendersResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_security_block_senders cloudflare_email_security_block_senders}
*/
export declare class DataCloudflareEmailSecurityBlockSenders extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_email_security_block_senders";
    /**
    * Generates CDKTF code for importing a DataCloudflareEmailSecurityBlockSenders resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareEmailSecurityBlockSenders to import
    * @param importFromId The id of the existing DataCloudflareEmailSecurityBlockSenders that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_security_block_senders#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareEmailSecurityBlockSenders to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_security_block_senders cloudflare_email_security_block_senders} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareEmailSecurityBlockSendersConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareEmailSecurityBlockSendersConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _direction?;
    get direction(): string;
    set direction(value: string);
    resetDirection(): void;
    get directionInput(): string;
    private _maxItems?;
    get maxItems(): number;
    set maxItems(value: number);
    resetMaxItems(): void;
    get maxItemsInput(): number;
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
    private _result;
    get result(): DataCloudflareEmailSecurityBlockSendersResultList;
    private _search?;
    get search(): string;
    set search(value: string);
    resetSearch(): void;
    get searchInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
