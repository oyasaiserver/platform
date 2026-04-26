import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareHealthchecksConfig extends cdktf.TerraformMetaArguments {
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/healthchecks#max_items DataCloudflareHealthchecks#max_items}
    */
    readonly maxItems?: number;
    /**
    * Identifier
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/healthchecks#zone_id DataCloudflareHealthchecks#zone_id}
    */
    readonly zoneId?: string;
}
export interface DataCloudflareHealthchecksResultHttpConfig {
}
export declare function dataCloudflareHealthchecksResultHttpConfigToTerraform(struct?: DataCloudflareHealthchecksResultHttpConfig): any;
export declare function dataCloudflareHealthchecksResultHttpConfigToHclTerraform(struct?: DataCloudflareHealthchecksResultHttpConfig): any;
export declare class DataCloudflareHealthchecksResultHttpConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareHealthchecksResultHttpConfig | undefined;
    set internalValue(value: DataCloudflareHealthchecksResultHttpConfig | undefined);
    get allowInsecure(): any;
    get expectedBody(): any;
    get expectedCodes(): any;
    get followRedirects(): any;
    private _header;
    get header(): any;
    get method(): any;
    get path(): any;
    get port(): any;
}
export interface DataCloudflareHealthchecksResultTcpConfig {
}
export declare function dataCloudflareHealthchecksResultTcpConfigToTerraform(struct?: DataCloudflareHealthchecksResultTcpConfig): any;
export declare function dataCloudflareHealthchecksResultTcpConfigToHclTerraform(struct?: DataCloudflareHealthchecksResultTcpConfig): any;
export declare class DataCloudflareHealthchecksResultTcpConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareHealthchecksResultTcpConfig | undefined;
    set internalValue(value: DataCloudflareHealthchecksResultTcpConfig | undefined);
    get method(): any;
    get port(): any;
}
export interface DataCloudflareHealthchecksResult {
}
export declare function dataCloudflareHealthchecksResultToTerraform(struct?: DataCloudflareHealthchecksResult): any;
export declare function dataCloudflareHealthchecksResultToHclTerraform(struct?: DataCloudflareHealthchecksResult): any;
export declare class DataCloudflareHealthchecksResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareHealthchecksResult | undefined;
    set internalValue(value: DataCloudflareHealthchecksResult | undefined);
    get address(): any;
    get checkRegions(): any;
    get consecutiveFails(): any;
    get consecutiveSuccesses(): any;
    get createdOn(): any;
    get description(): any;
    get failureReason(): any;
    private _httpConfig;
    get httpConfig(): DataCloudflareHealthchecksResultHttpConfigOutputReference;
    get id(): any;
    get interval(): any;
    get modifiedOn(): any;
    get name(): any;
    get retries(): any;
    get status(): any;
    get suspended(): any;
    private _tcpConfig;
    get tcpConfig(): DataCloudflareHealthchecksResultTcpConfigOutputReference;
    get timeout(): any;
    get type(): any;
}
export declare class DataCloudflareHealthchecksResultList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareHealthchecksResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/healthchecks cloudflare_healthchecks}
*/
export declare class DataCloudflareHealthchecks extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_healthchecks";
    /**
    * Generates CDKTF code for importing a DataCloudflareHealthchecks resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareHealthchecks to import
    * @param importFromId The id of the existing DataCloudflareHealthchecks that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/healthchecks#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareHealthchecks to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/healthchecks cloudflare_healthchecks} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareHealthchecksConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareHealthchecksConfig);
    private _maxItems?;
    get maxItems(): number;
    set maxItems(value: number);
    resetMaxItems(): void;
    get maxItemsInput(): number;
    private _result;
    get result(): DataCloudflareHealthchecksResultList;
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
