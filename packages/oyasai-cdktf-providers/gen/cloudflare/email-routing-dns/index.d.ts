import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface EmailRoutingDnsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Domain of your zone.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/email_routing_dns#name EmailRoutingDns#name}
    */
    readonly name?: string;
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/email_routing_dns#zone_id EmailRoutingDns#zone_id}
    */
    readonly zoneId: string;
}
export interface EmailRoutingDnsErrorsSource {
}
export declare function emailRoutingDnsErrorsSourceToTerraform(struct?: EmailRoutingDnsErrorsSource): any;
export declare function emailRoutingDnsErrorsSourceToHclTerraform(struct?: EmailRoutingDnsErrorsSource): any;
export declare class EmailRoutingDnsErrorsSourceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EmailRoutingDnsErrorsSource | undefined;
    set internalValue(value: EmailRoutingDnsErrorsSource | undefined);
    get pointer(): any;
}
export interface EmailRoutingDnsErrors {
}
export declare function emailRoutingDnsErrorsToTerraform(struct?: EmailRoutingDnsErrors): any;
export declare function emailRoutingDnsErrorsToHclTerraform(struct?: EmailRoutingDnsErrors): any;
export declare class EmailRoutingDnsErrorsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): EmailRoutingDnsErrors | undefined;
    set internalValue(value: EmailRoutingDnsErrors | undefined);
    get code(): any;
    get documentationUrl(): any;
    get message(): any;
    private _source;
    get source(): EmailRoutingDnsErrorsSourceOutputReference;
}
export declare class EmailRoutingDnsErrorsList extends cdktf.ComplexList {
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
    get(index: number): EmailRoutingDnsErrorsOutputReference;
}
export interface EmailRoutingDnsMessagesSource {
}
export declare function emailRoutingDnsMessagesSourceToTerraform(struct?: EmailRoutingDnsMessagesSource): any;
export declare function emailRoutingDnsMessagesSourceToHclTerraform(struct?: EmailRoutingDnsMessagesSource): any;
export declare class EmailRoutingDnsMessagesSourceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EmailRoutingDnsMessagesSource | undefined;
    set internalValue(value: EmailRoutingDnsMessagesSource | undefined);
    get pointer(): any;
}
export interface EmailRoutingDnsMessages {
}
export declare function emailRoutingDnsMessagesToTerraform(struct?: EmailRoutingDnsMessages): any;
export declare function emailRoutingDnsMessagesToHclTerraform(struct?: EmailRoutingDnsMessages): any;
export declare class EmailRoutingDnsMessagesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): EmailRoutingDnsMessages | undefined;
    set internalValue(value: EmailRoutingDnsMessages | undefined);
    get code(): any;
    get documentationUrl(): any;
    get message(): any;
    private _source;
    get source(): EmailRoutingDnsMessagesSourceOutputReference;
}
export declare class EmailRoutingDnsMessagesList extends cdktf.ComplexList {
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
    get(index: number): EmailRoutingDnsMessagesOutputReference;
}
export interface EmailRoutingDnsResultErrorsMissing {
}
export declare function emailRoutingDnsResultErrorsMissingToTerraform(struct?: EmailRoutingDnsResultErrorsMissing): any;
export declare function emailRoutingDnsResultErrorsMissingToHclTerraform(struct?: EmailRoutingDnsResultErrorsMissing): any;
export declare class EmailRoutingDnsResultErrorsMissingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EmailRoutingDnsResultErrorsMissing | undefined;
    set internalValue(value: EmailRoutingDnsResultErrorsMissing | undefined);
    get content(): any;
    get name(): any;
    get priority(): any;
    get ttl(): any;
    get type(): any;
}
export interface EmailRoutingDnsResultErrors {
}
export declare function emailRoutingDnsResultErrorsToTerraform(struct?: EmailRoutingDnsResultErrors): any;
export declare function emailRoutingDnsResultErrorsToHclTerraform(struct?: EmailRoutingDnsResultErrors): any;
export declare class EmailRoutingDnsResultErrorsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): EmailRoutingDnsResultErrors | undefined;
    set internalValue(value: EmailRoutingDnsResultErrors | undefined);
    get code(): any;
    private _missing;
    get missing(): EmailRoutingDnsResultErrorsMissingOutputReference;
}
export declare class EmailRoutingDnsResultErrorsList extends cdktf.ComplexList {
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
    get(index: number): EmailRoutingDnsResultErrorsOutputReference;
}
export interface EmailRoutingDnsResultRecord {
}
export declare function emailRoutingDnsResultRecordToTerraform(struct?: EmailRoutingDnsResultRecord): any;
export declare function emailRoutingDnsResultRecordToHclTerraform(struct?: EmailRoutingDnsResultRecord): any;
export declare class EmailRoutingDnsResultRecordOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): EmailRoutingDnsResultRecord | undefined;
    set internalValue(value: EmailRoutingDnsResultRecord | undefined);
    get content(): any;
    get name(): any;
    get priority(): any;
    get ttl(): any;
    get type(): any;
}
export declare class EmailRoutingDnsResultRecordList extends cdktf.ComplexList {
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
    get(index: number): EmailRoutingDnsResultRecordOutputReference;
}
export interface EmailRoutingDnsResult {
}
export declare function emailRoutingDnsResultToTerraform(struct?: EmailRoutingDnsResult): any;
export declare function emailRoutingDnsResultToHclTerraform(struct?: EmailRoutingDnsResult): any;
export declare class EmailRoutingDnsResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EmailRoutingDnsResult | undefined;
    set internalValue(value: EmailRoutingDnsResult | undefined);
    get content(): any;
    private _errors;
    get errors(): EmailRoutingDnsResultErrorsList;
    get name(): any;
    get priority(): any;
    private _record;
    get record(): EmailRoutingDnsResultRecordList;
    get ttl(): any;
    get type(): any;
}
export interface EmailRoutingDnsResultInfo {
}
export declare function emailRoutingDnsResultInfoToTerraform(struct?: EmailRoutingDnsResultInfo): any;
export declare function emailRoutingDnsResultInfoToHclTerraform(struct?: EmailRoutingDnsResultInfo): any;
export declare class EmailRoutingDnsResultInfoOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EmailRoutingDnsResultInfo | undefined;
    set internalValue(value: EmailRoutingDnsResultInfo | undefined);
    get emailRoutingDnsCount(): any;
    get page(): any;
    get perPage(): any;
    get totalCount(): any;
    get totalPages(): any;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/email_routing_dns cloudflare_email_routing_dns}
*/
export declare class EmailRoutingDns extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_email_routing_dns";
    /**
    * Generates CDKTF code for importing a EmailRoutingDns resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the EmailRoutingDns to import
    * @param importFromId The id of the existing EmailRoutingDns that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/email_routing_dns#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the EmailRoutingDns to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/email_routing_dns cloudflare_email_routing_dns} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EmailRoutingDnsConfig
    */
    constructor(scope: Construct, id: string, config: EmailRoutingDnsConfig);
    get created(): any;
    get enabled(): any;
    private _errors;
    get errors(): EmailRoutingDnsErrorsList;
    get id(): any;
    private _messages;
    get messages(): EmailRoutingDnsMessagesList;
    get modified(): any;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
    private _result;
    get result(): EmailRoutingDnsResultOutputReference;
    private _resultInfo;
    get resultInfo(): EmailRoutingDnsResultInfoOutputReference;
    get skipWizard(): any;
    get status(): any;
    get success(): any;
    get tag(): any;
    private _zoneId?;
    get zoneId(): string;
    set zoneId(value: string);
    get zoneIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
