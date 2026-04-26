import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareCustomHostnameConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/custom_hostname#custom_hostname_id DataCloudflareCustomHostname#custom_hostname_id}
    */
    readonly customHostnameId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/custom_hostname#filter DataCloudflareCustomHostname#filter}
    */
    readonly filter?: DataCloudflareCustomHostnameFilter;
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/custom_hostname#zone_id DataCloudflareCustomHostname#zone_id}
    */
    readonly zoneId?: string;
}
export interface DataCloudflareCustomHostnameFilterHostname {
    /**
    * Filters hostnames by a substring match on the hostname value. This parameter cannot be used with the 'id' parameter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/custom_hostname#contain DataCloudflareCustomHostname#contain}
    */
    readonly contain?: string;
}
export declare function dataCloudflareCustomHostnameFilterHostnameToTerraform(struct?: DataCloudflareCustomHostnameFilterHostname | cdktf.IResolvable): any;
export declare function dataCloudflareCustomHostnameFilterHostnameToHclTerraform(struct?: DataCloudflareCustomHostnameFilterHostname | cdktf.IResolvable): any;
export declare class DataCloudflareCustomHostnameFilterHostnameOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareCustomHostnameFilterHostname | cdktf.IResolvable | undefined;
    set internalValue(value: DataCloudflareCustomHostnameFilterHostname | cdktf.IResolvable | undefined);
    private _contain?;
    get contain(): string;
    set contain(value: string);
    resetContain(): void;
    get containInput(): string;
}
export interface DataCloudflareCustomHostnameFilter {
    /**
    * Filter by the certificate authority that issued the SSL certificate.
    * Available values: "google", "lets_encrypt", "ssl_com".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/custom_hostname#certificate_authority DataCloudflareCustomHostname#certificate_authority}
    */
    readonly certificateAuthority?: string;
    /**
    * Filter by custom origin server name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/custom_hostname#custom_origin_server DataCloudflareCustomHostname#custom_origin_server}
    */
    readonly customOriginServer?: string;
    /**
    * Direction to order hostnames.
    * Available values: "asc", "desc".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/custom_hostname#direction DataCloudflareCustomHostname#direction}
    */
    readonly direction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/custom_hostname#hostname DataCloudflareCustomHostname#hostname}
    */
    readonly hostname?: DataCloudflareCustomHostnameFilterHostname;
    /**
    * Filter by the hostname's activation status.
    * Available values: "active", "pending", "active_redeploying", "moved", "pending_deletion", "deleted", "pending_blocked", "pending_migration", "pending_provisioned", "test_pending", "test_active", "test_active_apex", "test_blocked", "test_failed", "provisioned", "blocked".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/custom_hostname#hostname_status DataCloudflareCustomHostname#hostname_status}
    */
    readonly hostnameStatus?: string;
    /**
    * Hostname ID to match against. This ID was generated and returned during the initial custom_hostname creation. This parameter cannot be used with the 'hostname' parameter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/custom_hostname#id DataCloudflareCustomHostname#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Field to order hostnames by.
    * Available values: "ssl", "ssl_status".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/custom_hostname#order DataCloudflareCustomHostname#order}
    */
    readonly order?: string;
    /**
    * Whether to filter hostnames based on if they have SSL enabled.
    * Available values: 0, 1.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/custom_hostname#ssl DataCloudflareCustomHostname#ssl}
    */
    readonly ssl?: number;
    /**
    * Filter by SSL certificate status.
    * Available values: "initializing", "pending_validation", "deleted", "pending_issuance", "pending_deployment", "pending_deletion", "pending_expiration", "expired", "active", "initializing_timed_out", "validation_timed_out", "issuance_timed_out", "deployment_timed_out", "deletion_timed_out", "pending_cleanup", "staging_deployment", "staging_active", "deactivating", "inactive", "backup_issued", "holding_deployment".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/custom_hostname#ssl_status DataCloudflareCustomHostname#ssl_status}
    */
    readonly sslStatus?: string;
    /**
    * Filter by whether the custom hostname is a wildcard hostname.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/custom_hostname#wildcard DataCloudflareCustomHostname#wildcard}
    */
    readonly wildcard?: boolean | cdktf.IResolvable;
}
export declare function dataCloudflareCustomHostnameFilterToTerraform(struct?: DataCloudflareCustomHostnameFilter | cdktf.IResolvable): any;
export declare function dataCloudflareCustomHostnameFilterToHclTerraform(struct?: DataCloudflareCustomHostnameFilter | cdktf.IResolvable): any;
export declare class DataCloudflareCustomHostnameFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareCustomHostnameFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataCloudflareCustomHostnameFilter | cdktf.IResolvable | undefined);
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
    get hostname(): DataCloudflareCustomHostnameFilterHostnameOutputReference;
    putHostname(value: DataCloudflareCustomHostnameFilterHostname): void;
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
    private _order?;
    get order(): string;
    set order(value: string);
    resetOrder(): void;
    get orderInput(): string;
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
}
export interface DataCloudflareCustomHostnameOwnershipVerification {
}
export declare function dataCloudflareCustomHostnameOwnershipVerificationToTerraform(struct?: DataCloudflareCustomHostnameOwnershipVerification): any;
export declare function dataCloudflareCustomHostnameOwnershipVerificationToHclTerraform(struct?: DataCloudflareCustomHostnameOwnershipVerification): any;
export declare class DataCloudflareCustomHostnameOwnershipVerificationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareCustomHostnameOwnershipVerification | undefined;
    set internalValue(value: DataCloudflareCustomHostnameOwnershipVerification | undefined);
    get name(): any;
    get type(): any;
    get value(): any;
}
export interface DataCloudflareCustomHostnameOwnershipVerificationHttp {
}
export declare function dataCloudflareCustomHostnameOwnershipVerificationHttpToTerraform(struct?: DataCloudflareCustomHostnameOwnershipVerificationHttp): any;
export declare function dataCloudflareCustomHostnameOwnershipVerificationHttpToHclTerraform(struct?: DataCloudflareCustomHostnameOwnershipVerificationHttp): any;
export declare class DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareCustomHostnameOwnershipVerificationHttp | undefined;
    set internalValue(value: DataCloudflareCustomHostnameOwnershipVerificationHttp | undefined);
    get httpBody(): any;
    get httpUrl(): any;
}
export interface DataCloudflareCustomHostnameSslDcvDelegationRecords {
}
export declare function dataCloudflareCustomHostnameSslDcvDelegationRecordsToTerraform(struct?: DataCloudflareCustomHostnameSslDcvDelegationRecords): any;
export declare function dataCloudflareCustomHostnameSslDcvDelegationRecordsToHclTerraform(struct?: DataCloudflareCustomHostnameSslDcvDelegationRecords): any;
export declare class DataCloudflareCustomHostnameSslDcvDelegationRecordsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareCustomHostnameSslDcvDelegationRecords | undefined;
    set internalValue(value: DataCloudflareCustomHostnameSslDcvDelegationRecords | undefined);
    get cname(): any;
    get cnameTarget(): any;
    get emails(): any;
    get httpBody(): any;
    get httpUrl(): any;
    get status(): any;
    get txtName(): any;
    get txtValue(): any;
}
export declare class DataCloudflareCustomHostnameSslDcvDelegationRecordsList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareCustomHostnameSslDcvDelegationRecordsOutputReference;
}
export interface DataCloudflareCustomHostnameSslSettings {
}
export declare function dataCloudflareCustomHostnameSslSettingsToTerraform(struct?: DataCloudflareCustomHostnameSslSettings): any;
export declare function dataCloudflareCustomHostnameSslSettingsToHclTerraform(struct?: DataCloudflareCustomHostnameSslSettings): any;
export declare class DataCloudflareCustomHostnameSslSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareCustomHostnameSslSettings | undefined;
    set internalValue(value: DataCloudflareCustomHostnameSslSettings | undefined);
    get ciphers(): any;
    get earlyHints(): any;
    get http2(): any;
    get minTlsVersion(): any;
    get tls13(): any;
}
export interface DataCloudflareCustomHostnameSslValidationErrors {
}
export declare function dataCloudflareCustomHostnameSslValidationErrorsToTerraform(struct?: DataCloudflareCustomHostnameSslValidationErrors): any;
export declare function dataCloudflareCustomHostnameSslValidationErrorsToHclTerraform(struct?: DataCloudflareCustomHostnameSslValidationErrors): any;
export declare class DataCloudflareCustomHostnameSslValidationErrorsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareCustomHostnameSslValidationErrors | undefined;
    set internalValue(value: DataCloudflareCustomHostnameSslValidationErrors | undefined);
    get message(): any;
}
export declare class DataCloudflareCustomHostnameSslValidationErrorsList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareCustomHostnameSslValidationErrorsOutputReference;
}
export interface DataCloudflareCustomHostnameSslValidationRecords {
}
export declare function dataCloudflareCustomHostnameSslValidationRecordsToTerraform(struct?: DataCloudflareCustomHostnameSslValidationRecords): any;
export declare function dataCloudflareCustomHostnameSslValidationRecordsToHclTerraform(struct?: DataCloudflareCustomHostnameSslValidationRecords): any;
export declare class DataCloudflareCustomHostnameSslValidationRecordsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareCustomHostnameSslValidationRecords | undefined;
    set internalValue(value: DataCloudflareCustomHostnameSslValidationRecords | undefined);
    get cname(): any;
    get cnameTarget(): any;
    get emails(): any;
    get httpBody(): any;
    get httpUrl(): any;
    get status(): any;
    get txtName(): any;
    get txtValue(): any;
}
export declare class DataCloudflareCustomHostnameSslValidationRecordsList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareCustomHostnameSslValidationRecordsOutputReference;
}
export interface DataCloudflareCustomHostnameSsl {
}
export declare function dataCloudflareCustomHostnameSslToTerraform(struct?: DataCloudflareCustomHostnameSsl): any;
export declare function dataCloudflareCustomHostnameSslToHclTerraform(struct?: DataCloudflareCustomHostnameSsl): any;
export declare class DataCloudflareCustomHostnameSslOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareCustomHostnameSsl | undefined;
    set internalValue(value: DataCloudflareCustomHostnameSsl | undefined);
    get bundleMethod(): any;
    get certificateAuthority(): any;
    get customCertificate(): any;
    get customCsrId(): any;
    get customKey(): any;
    private _dcvDelegationRecords;
    get dcvDelegationRecords(): DataCloudflareCustomHostnameSslDcvDelegationRecordsList;
    get expiresOn(): any;
    get hosts(): any;
    get id(): any;
    get issuer(): any;
    get method(): any;
    get serialNumber(): any;
    private _settings;
    get settings(): DataCloudflareCustomHostnameSslSettingsOutputReference;
    get signature(): any;
    get status(): any;
    get type(): any;
    get uploadedOn(): any;
    private _validationErrors;
    get validationErrors(): DataCloudflareCustomHostnameSslValidationErrorsList;
    private _validationRecords;
    get validationRecords(): DataCloudflareCustomHostnameSslValidationRecordsList;
    get wildcard(): any;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/custom_hostname cloudflare_custom_hostname}
*/
export declare class DataCloudflareCustomHostname extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_custom_hostname";
    /**
    * Generates CDKTF code for importing a DataCloudflareCustomHostname resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareCustomHostname to import
    * @param importFromId The id of the existing DataCloudflareCustomHostname that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/custom_hostname#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareCustomHostname to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/custom_hostname cloudflare_custom_hostname} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareCustomHostnameConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareCustomHostnameConfig);
    get createdAt(): any;
    private _customHostnameId?;
    get customHostnameId(): string;
    set customHostnameId(value: string);
    resetCustomHostnameId(): void;
    get customHostnameIdInput(): string;
    private _customMetadata;
    get customMetadata(): any;
    get customOriginServer(): any;
    get customOriginSni(): any;
    private _filter;
    get filter(): DataCloudflareCustomHostnameFilterOutputReference;
    putFilter(value: DataCloudflareCustomHostnameFilter): void;
    resetFilter(): void;
    get filterInput(): any;
    get hostname(): any;
    get id(): any;
    private _ownershipVerification;
    get ownershipVerification(): DataCloudflareCustomHostnameOwnershipVerificationOutputReference;
    private _ownershipVerificationHttp;
    get ownershipVerificationHttp(): DataCloudflareCustomHostnameOwnershipVerificationHttpOutputReference;
    private _ssl;
    get ssl(): DataCloudflareCustomHostnameSslOutputReference;
    get status(): any;
    get verificationErrors(): any;
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
