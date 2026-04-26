import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareEmailRoutingDnsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Domain of your zone.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_routing_dns#subdomain DataCloudflareEmailRoutingDns#subdomain}
    */
    readonly subdomain?: string;
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_routing_dns#zone_id DataCloudflareEmailRoutingDns#zone_id}
    */
    readonly zoneId?: string;
}
export interface DataCloudflareEmailRoutingDnsErrorsSource {
}
export declare function dataCloudflareEmailRoutingDnsErrorsSourceToTerraform(struct?: DataCloudflareEmailRoutingDnsErrorsSource): any;
export declare function dataCloudflareEmailRoutingDnsErrorsSourceToHclTerraform(struct?: DataCloudflareEmailRoutingDnsErrorsSource): any;
export declare class DataCloudflareEmailRoutingDnsErrorsSourceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareEmailRoutingDnsErrorsSource | undefined;
    set internalValue(value: DataCloudflareEmailRoutingDnsErrorsSource | undefined);
    get pointer(): any;
}
export interface DataCloudflareEmailRoutingDnsErrors {
}
export declare function dataCloudflareEmailRoutingDnsErrorsToTerraform(struct?: DataCloudflareEmailRoutingDnsErrors): any;
export declare function dataCloudflareEmailRoutingDnsErrorsToHclTerraform(struct?: DataCloudflareEmailRoutingDnsErrors): any;
export declare class DataCloudflareEmailRoutingDnsErrorsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareEmailRoutingDnsErrors | undefined;
    set internalValue(value: DataCloudflareEmailRoutingDnsErrors | undefined);
    get code(): any;
    get documentationUrl(): any;
    get message(): any;
    private _source;
    get source(): DataCloudflareEmailRoutingDnsErrorsSourceOutputReference;
}
export declare class DataCloudflareEmailRoutingDnsErrorsList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareEmailRoutingDnsErrorsOutputReference;
}
export interface DataCloudflareEmailRoutingDnsMessagesSource {
}
export declare function dataCloudflareEmailRoutingDnsMessagesSourceToTerraform(struct?: DataCloudflareEmailRoutingDnsMessagesSource): any;
export declare function dataCloudflareEmailRoutingDnsMessagesSourceToHclTerraform(struct?: DataCloudflareEmailRoutingDnsMessagesSource): any;
export declare class DataCloudflareEmailRoutingDnsMessagesSourceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareEmailRoutingDnsMessagesSource | undefined;
    set internalValue(value: DataCloudflareEmailRoutingDnsMessagesSource | undefined);
    get pointer(): any;
}
export interface DataCloudflareEmailRoutingDnsMessages {
}
export declare function dataCloudflareEmailRoutingDnsMessagesToTerraform(struct?: DataCloudflareEmailRoutingDnsMessages): any;
export declare function dataCloudflareEmailRoutingDnsMessagesToHclTerraform(struct?: DataCloudflareEmailRoutingDnsMessages): any;
export declare class DataCloudflareEmailRoutingDnsMessagesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareEmailRoutingDnsMessages | undefined;
    set internalValue(value: DataCloudflareEmailRoutingDnsMessages | undefined);
    get code(): any;
    get documentationUrl(): any;
    get message(): any;
    private _source;
    get source(): DataCloudflareEmailRoutingDnsMessagesSourceOutputReference;
}
export declare class DataCloudflareEmailRoutingDnsMessagesList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareEmailRoutingDnsMessagesOutputReference;
}
export interface DataCloudflareEmailRoutingDnsResultErrorsMissing {
}
export declare function dataCloudflareEmailRoutingDnsResultErrorsMissingToTerraform(struct?: DataCloudflareEmailRoutingDnsResultErrorsMissing): any;
export declare function dataCloudflareEmailRoutingDnsResultErrorsMissingToHclTerraform(struct?: DataCloudflareEmailRoutingDnsResultErrorsMissing): any;
export declare class DataCloudflareEmailRoutingDnsResultErrorsMissingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareEmailRoutingDnsResultErrorsMissing | undefined;
    set internalValue(value: DataCloudflareEmailRoutingDnsResultErrorsMissing | undefined);
    get content(): any;
    get name(): any;
    get priority(): any;
    get ttl(): any;
    get type(): any;
}
export interface DataCloudflareEmailRoutingDnsResultErrors {
}
export declare function dataCloudflareEmailRoutingDnsResultErrorsToTerraform(struct?: DataCloudflareEmailRoutingDnsResultErrors): any;
export declare function dataCloudflareEmailRoutingDnsResultErrorsToHclTerraform(struct?: DataCloudflareEmailRoutingDnsResultErrors): any;
export declare class DataCloudflareEmailRoutingDnsResultErrorsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareEmailRoutingDnsResultErrors | undefined;
    set internalValue(value: DataCloudflareEmailRoutingDnsResultErrors | undefined);
    get code(): any;
    private _missing;
    get missing(): DataCloudflareEmailRoutingDnsResultErrorsMissingOutputReference;
}
export declare class DataCloudflareEmailRoutingDnsResultErrorsList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareEmailRoutingDnsResultErrorsOutputReference;
}
export interface DataCloudflareEmailRoutingDnsResultRecord {
}
export declare function dataCloudflareEmailRoutingDnsResultRecordToTerraform(struct?: DataCloudflareEmailRoutingDnsResultRecord): any;
export declare function dataCloudflareEmailRoutingDnsResultRecordToHclTerraform(struct?: DataCloudflareEmailRoutingDnsResultRecord): any;
export declare class DataCloudflareEmailRoutingDnsResultRecordOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareEmailRoutingDnsResultRecord | undefined;
    set internalValue(value: DataCloudflareEmailRoutingDnsResultRecord | undefined);
    get content(): any;
    get name(): any;
    get priority(): any;
    get ttl(): any;
    get type(): any;
}
export declare class DataCloudflareEmailRoutingDnsResultRecordList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareEmailRoutingDnsResultRecordOutputReference;
}
export interface DataCloudflareEmailRoutingDnsResult {
}
export declare function dataCloudflareEmailRoutingDnsResultToTerraform(struct?: DataCloudflareEmailRoutingDnsResult): any;
export declare function dataCloudflareEmailRoutingDnsResultToHclTerraform(struct?: DataCloudflareEmailRoutingDnsResult): any;
export declare class DataCloudflareEmailRoutingDnsResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareEmailRoutingDnsResult | undefined;
    set internalValue(value: DataCloudflareEmailRoutingDnsResult | undefined);
    get content(): any;
    private _errors;
    get errors(): DataCloudflareEmailRoutingDnsResultErrorsList;
    get name(): any;
    get priority(): any;
    private _record;
    get record(): DataCloudflareEmailRoutingDnsResultRecordList;
    get ttl(): any;
    get type(): any;
}
export interface DataCloudflareEmailRoutingDnsResultInfo {
}
export declare function dataCloudflareEmailRoutingDnsResultInfoToTerraform(struct?: DataCloudflareEmailRoutingDnsResultInfo): any;
export declare function dataCloudflareEmailRoutingDnsResultInfoToHclTerraform(struct?: DataCloudflareEmailRoutingDnsResultInfo): any;
export declare class DataCloudflareEmailRoutingDnsResultInfoOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareEmailRoutingDnsResultInfo | undefined;
    set internalValue(value: DataCloudflareEmailRoutingDnsResultInfo | undefined);
    get emailRoutingDnsCount(): any;
    get page(): any;
    get perPage(): any;
    get totalCount(): any;
    get totalPages(): any;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_routing_dns cloudflare_email_routing_dns}
*/
export declare class DataCloudflareEmailRoutingDns extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_email_routing_dns";
    /**
    * Generates CDKTF code for importing a DataCloudflareEmailRoutingDns resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareEmailRoutingDns to import
    * @param importFromId The id of the existing DataCloudflareEmailRoutingDns that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_routing_dns#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareEmailRoutingDns to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/email_routing_dns cloudflare_email_routing_dns} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareEmailRoutingDnsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareEmailRoutingDnsConfig);
    private _errors;
    get errors(): DataCloudflareEmailRoutingDnsErrorsList;
    get id(): any;
    private _messages;
    get messages(): DataCloudflareEmailRoutingDnsMessagesList;
    private _result;
    get result(): DataCloudflareEmailRoutingDnsResultOutputReference;
    private _resultInfo;
    get resultInfo(): DataCloudflareEmailRoutingDnsResultInfoOutputReference;
    private _subdomain?;
    get subdomain(): string;
    set subdomain(value: string);
    resetSubdomain(): void;
    get subdomainInput(): string;
    get success(): any;
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
