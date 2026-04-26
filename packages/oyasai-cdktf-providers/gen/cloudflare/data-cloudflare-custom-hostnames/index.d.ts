import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareCustomHostnamesConfig extends cdktf.TerraformMetaArguments {
    /**
    * Filter by the certificate authority that issued the SSL certificate.
    * Available values: "google", "lets_encrypt", "ssl_com".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/custom_hostnames#certificate_authority DataCloudflareCustomHostnames#certificate_authority}
    */
    readonly certificateAuthority?: string;
    /**
    * Filter by custom origin server name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/custom_hostnames#custom_origin_server DataCloudflareCustomHostnames#custom_origin_server}
    */
    readonly customOriginServer?: string;
    /**
    * Direction to order hostnames.
    * Available values: "asc", "desc".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/custom_hostnames#direction DataCloudflareCustomHostnames#direction}
    */
    readonly direction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/custom_hostnames#hostname DataCloudflareCustomHostnames#hostname}
    */
    readonly hostname?: DataCloudflareCustomHostnamesHostname;
    /**
    * Filter by the hostname's activation status.
    * Available values: "active", "pending", "active_redeploying", "moved", "pending_deletion", "deleted", "pending_blocked", "pending_migration", "pending_provisioned", "test_pending", "test_active", "test_active_apex", "test_blocked", "test_failed", "provisioned", "blocked".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/custom_hostnames#hostname_status DataCloudflareCustomHostnames#hostname_status}
    */
    readonly hostnameStatus?: string;
    /**
    * Hostname ID to match against. This ID was generated and returned during the initial custom_hostname creation. This parameter cannot be used with the 'hostname' parameter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/custom_hostnames#id DataCloudflareCustomHostnames#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/custom_hostnames#max_items DataCloudflareCustomHostnames#max_items}
    */
    readonly maxItems?: number;
    /**
    * Field to order hostnames by.
    * Available values: "ssl", "ssl_status".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/custom_hostnames#order DataCloudflareCustomHostnames#order}
    */
    readonly order?: string;
    /**
    * Whether to filter hostnames based on if they have SSL enabled.
    * Available values: 0, 1.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/custom_hostnames#ssl DataCloudflareCustomHostnames#ssl}
    */
    readonly ssl?: number;
    /**
    * Filter by SSL certificate status.
    * Available values: "initializing", "pending_validation", "deleted", "pending_issuance", "pending_deployment", "pending_deletion", "pending_expiration", "expired", "active", "initializing_timed_out", "validation_timed_out", "issuance_timed_out", "deployment_timed_out", "deletion_timed_out", "pending_cleanup", "staging_deployment", "staging_active", "deactivating", "inactive", "backup_issued", "holding_deployment".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/custom_hostnames#ssl_status DataCloudflareCustomHostnames#ssl_status}
    */
    readonly sslStatus?: string;
    /**
    * Filter by whether the custom hostname is a wildcard hostname.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/custom_hostnames#wildcard DataCloudflareCustomHostnames#wildcard}
    */
    readonly wildcard?: boolean | cdktf.IResolvable;
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/custom_hostnames#zone_id DataCloudflareCustomHostnames#zone_id}
    */
    readonly zoneId?: string;
}
export interface DataCloudflareCustomHostnamesHostname {
    /**
    * Filters hostnames by a substring match on the hostname value. This parameter cannot be used with the 'id' parameter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/custom_hostnames#contain DataCloudflareCustomHostnames#contain}
    */
    readonly contain?: string;
}
export declare function dataCloudflareCustomHostnamesHostnameToTerraform(struct?: DataCloudflareCustomHostnamesHostname | cdktf.IResolvable): any;
export declare function dataCloudflareCustomHostnamesHostnameToHclTerraform(struct?: DataCloudflareCustomHostnamesHostname | cdktf.IResolvable): any;
export declare class DataCloudflareCustomHostnamesHostnameOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareCustomHostnamesHostname | cdktf.IResolvable | undefined;
    set internalValue(value: DataCloudflareCustomHostnamesHostname | cdktf.IResolvable | undefined);
    private _contain?;
    get contain(): string;
    set contain(value: string);
    resetContain(): void;
    get containInput(): string;
}
export interface DataCloudflareCustomHostnamesResultOwnershipVerification {
}
export declare function dataCloudflareCustomHostnamesResultOwnershipVerificationToTerraform(struct?: DataCloudflareCustomHostnamesResultOwnershipVerification): any;
export declare function dataCloudflareCustomHostnamesResultOwnershipVerificationToHclTerraform(struct?: DataCloudflareCustomHostnamesResultOwnershipVerification): any;
export declare class DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareCustomHostnamesResultOwnershipVerification | undefined;
    set internalValue(value: DataCloudflareCustomHostnamesResultOwnershipVerification | undefined);
    get name(): any;
    get type(): any;
    get value(): any;
}
export interface DataCloudflareCustomHostnamesResultOwnershipVerificationHttp {
}
export declare function dataCloudflareCustomHostnamesResultOwnershipVerificationHttpToTerraform(struct?: DataCloudflareCustomHostnamesResultOwnershipVerificationHttp): any;
export declare function dataCloudflareCustomHostnamesResultOwnershipVerificationHttpToHclTerraform(struct?: DataCloudflareCustomHostnamesResultOwnershipVerificationHttp): any;
export declare class DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareCustomHostnamesResultOwnershipVerificationHttp | undefined;
    set internalValue(value: DataCloudflareCustomHostnamesResultOwnershipVerificationHttp | undefined);
    get httpBody(): any;
    get httpUrl(): any;
}
export interface DataCloudflareCustomHostnamesResultSslDcvDelegationRecords {
}
export declare function dataCloudflareCustomHostnamesResultSslDcvDelegationRecordsToTerraform(struct?: DataCloudflareCustomHostnamesResultSslDcvDelegationRecords): any;
export declare function dataCloudflareCustomHostnamesResultSslDcvDelegationRecordsToHclTerraform(struct?: DataCloudflareCustomHostnamesResultSslDcvDelegationRecords): any;
export declare class DataCloudflareCustomHostnamesResultSslDcvDelegationRecordsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareCustomHostnamesResultSslDcvDelegationRecords | undefined;
    set internalValue(value: DataCloudflareCustomHostnamesResultSslDcvDelegationRecords | undefined);
    get cname(): any;
    get cnameTarget(): any;
    get emails(): any;
    get httpBody(): any;
    get httpUrl(): any;
    get status(): any;
    get txtName(): any;
    get txtValue(): any;
}
export declare class DataCloudflareCustomHostnamesResultSslDcvDelegationRecordsList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareCustomHostnamesResultSslDcvDelegationRecordsOutputReference;
}
export interface DataCloudflareCustomHostnamesResultSslSettings {
}
export declare function dataCloudflareCustomHostnamesResultSslSettingsToTerraform(struct?: DataCloudflareCustomHostnamesResultSslSettings): any;
export declare function dataCloudflareCustomHostnamesResultSslSettingsToHclTerraform(struct?: DataCloudflareCustomHostnamesResultSslSettings): any;
export declare class DataCloudflareCustomHostnamesResultSslSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareCustomHostnamesResultSslSettings | undefined;
    set internalValue(value: DataCloudflareCustomHostnamesResultSslSettings | undefined);
    get ciphers(): any;
    get earlyHints(): any;
    get http2(): any;
    get minTlsVersion(): any;
    get tls13(): any;
}
export interface DataCloudflareCustomHostnamesResultSslValidationErrors {
}
export declare function dataCloudflareCustomHostnamesResultSslValidationErrorsToTerraform(struct?: DataCloudflareCustomHostnamesResultSslValidationErrors): any;
export declare function dataCloudflareCustomHostnamesResultSslValidationErrorsToHclTerraform(struct?: DataCloudflareCustomHostnamesResultSslValidationErrors): any;
export declare class DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareCustomHostnamesResultSslValidationErrors | undefined;
    set internalValue(value: DataCloudflareCustomHostnamesResultSslValidationErrors | undefined);
    get message(): any;
}
export declare class DataCloudflareCustomHostnamesResultSslValidationErrorsList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareCustomHostnamesResultSslValidationErrorsOutputReference;
}
export interface DataCloudflareCustomHostnamesResultSslValidationRecords {
}
export declare function dataCloudflareCustomHostnamesResultSslValidationRecordsToTerraform(struct?: DataCloudflareCustomHostnamesResultSslValidationRecords): any;
export declare function dataCloudflareCustomHostnamesResultSslValidationRecordsToHclTerraform(struct?: DataCloudflareCustomHostnamesResultSslValidationRecords): any;
export declare class DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareCustomHostnamesResultSslValidationRecords | undefined;
    set internalValue(value: DataCloudflareCustomHostnamesResultSslValidationRecords | undefined);
    get cname(): any;
    get cnameTarget(): any;
    get emails(): any;
    get httpBody(): any;
    get httpUrl(): any;
    get status(): any;
    get txtName(): any;
    get txtValue(): any;
}
export declare class DataCloudflareCustomHostnamesResultSslValidationRecordsList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareCustomHostnamesResultSslValidationRecordsOutputReference;
}
export interface DataCloudflareCustomHostnamesResultSsl {
}
export declare function dataCloudflareCustomHostnamesResultSslToTerraform(struct?: DataCloudflareCustomHostnamesResultSsl): any;
export declare function dataCloudflareCustomHostnamesResultSslToHclTerraform(struct?: DataCloudflareCustomHostnamesResultSsl): any;
export declare class DataCloudflareCustomHostnamesResultSslOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareCustomHostnamesResultSsl | undefined;
    set internalValue(value: DataCloudflareCustomHostnamesResultSsl | undefined);
    get bundleMethod(): any;
    get certificateAuthority(): any;
    get customCertificate(): any;
    get customCsrId(): any;
    get customKey(): any;
    private _dcvDelegationRecords;
    get dcvDelegationRecords(): DataCloudflareCustomHostnamesResultSslDcvDelegationRecordsList;
    get expiresOn(): any;
    get hosts(): any;
    get id(): any;
    get issuer(): any;
    get method(): any;
    get serialNumber(): any;
    private _settings;
    get settings(): DataCloudflareCustomHostnamesResultSslSettingsOutputReference;
    get signature(): any;
    get status(): any;
    get type(): any;
    get uploadedOn(): any;
    private _validationErrors;
    get validationErrors(): DataCloudflareCustomHostnamesResultSslValidationErrorsList;
    private _validationRecords;
    get validationRecords(): DataCloudflareCustomHostnamesResultSslValidationRecordsList;
    get wildcard(): any;
}
export interface DataCloudflareCustomHostnamesResult {
}
export declare function dataCloudflareCustomHostnamesResultToTerraform(struct?: DataCloudflareCustomHostnamesResult): any;
export declare function dataCloudflareCustomHostnamesResultToHclTerraform(struct?: DataCloudflareCustomHostnamesResult): any;
export declare class DataCloudflareCustomHostnamesResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareCustomHostnamesResult | undefined;
    set internalValue(value: DataCloudflareCustomHostnamesResult | undefined);
    get createdAt(): any;
    private _customMetadata;
    get customMetadata(): any;
    get customOriginServer(): any;
    get customOriginSni(): any;
    get hostname(): any;
    get id(): any;
    private _ownershipVerification;
    get ownershipVerification(): DataCloudflareCustomHostnamesResultOwnershipVerificationOutputReference;
    private _ownershipVerificationHttp;
    get ownershipVerificationHttp(): DataCloudflareCustomHostnamesResultOwnershipVerificationHttpOutputReference;
    private _ssl;
    get ssl(): DataCloudflareCustomHostnamesResultSslOutputReference;
    get status(): any;
    get verificationErrors(): any;
}
export declare class DataCloudflareCustomHostnamesResultList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareCustomHostnamesResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/custom_hostnames cloudflare_custom_hostnames}
*/
export declare class DataCloudflareCustomHostnames extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_custom_hostnames";
    /**
    * Generates CDKTF code for importing a DataCloudflareCustomHostnames resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareCustomHostnames to import
    * @param importFromId The id of the existing DataCloudflareCustomHostnames that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/custom_hostnames#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareCustomHostnames to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/custom_hostnames cloudflare_custom_hostnames} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareCustomHostnamesConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareCustomHostnamesConfig);
    private _certificateAuthority?;
    get certificateAuthority(): string;
    set certificateAuthority(value: string);
    resetCertificateAuthority(): void;
    get certificateAuthorityInput(): string;
    private _customOriginServer?;
    get customOriginServer(): string;
    set customOriginServer(value: string);
    resetCustomOriginServer(): void;
    get customOriginServerInput(): string;
    private _direction?;
    get direction(): string;
    set direction(value: string);
    resetDirection(): void;
    get directionInput(): string;
    private _hostname;
    get hostname(): DataCloudflareCustomHostnamesHostnameOutputReference;
    putHostname(value: DataCloudflareCustomHostnamesHostname): void;
    resetHostname(): void;
    get hostnameInput(): any;
    private _hostnameStatus?;
    get hostnameStatus(): string;
    set hostnameStatus(value: string);
    resetHostnameStatus(): void;
    get hostnameStatusInput(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
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
    private _result;
    get result(): DataCloudflareCustomHostnamesResultList;
    private _ssl?;
    get ssl(): number;
    set ssl(value: number);
    resetSsl(): void;
    get sslInput(): number;
    private _sslStatus?;
    get sslStatus(): string;
    set sslStatus(value: string);
    resetSslStatus(): void;
    get sslStatusInput(): string;
    private _wildcard?;
    get wildcard(): boolean | cdktf.IResolvable;
    set wildcard(value: boolean | cdktf.IResolvable);
    resetWildcard(): void;
    get wildcardInput(): any;
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
