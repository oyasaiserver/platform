import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareCertificatePacksConfig extends cdktf.TerraformMetaArguments {
    /**
    * Specify the deployment environment for the certificate packs.
    * Available values: "staging", "production".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/certificate_packs#deploy DataCloudflareCertificatePacks#deploy}
    */
    readonly deploy?: string;
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/certificate_packs#max_items DataCloudflareCertificatePacks#max_items}
    */
    readonly maxItems?: number;
    /**
    * Include Certificate Packs of all statuses, not just active ones.
    * Available values: "all".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/certificate_packs#status DataCloudflareCertificatePacks#status}
    */
    readonly status?: string;
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/certificate_packs#zone_id DataCloudflareCertificatePacks#zone_id}
    */
    readonly zoneId?: string;
}
export interface DataCloudflareCertificatePacksResultCertificatesGeoRestrictions {
}
export declare function dataCloudflareCertificatePacksResultCertificatesGeoRestrictionsToTerraform(struct?: DataCloudflareCertificatePacksResultCertificatesGeoRestrictions): any;
export declare function dataCloudflareCertificatePacksResultCertificatesGeoRestrictionsToHclTerraform(struct?: DataCloudflareCertificatePacksResultCertificatesGeoRestrictions): any;
export declare class DataCloudflareCertificatePacksResultCertificatesGeoRestrictionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareCertificatePacksResultCertificatesGeoRestrictions | undefined;
    set internalValue(value: DataCloudflareCertificatePacksResultCertificatesGeoRestrictions | undefined);
    get label(): any;
}
export interface DataCloudflareCertificatePacksResultCertificates {
}
export declare function dataCloudflareCertificatePacksResultCertificatesToTerraform(struct?: DataCloudflareCertificatePacksResultCertificates): any;
export declare function dataCloudflareCertificatePacksResultCertificatesToHclTerraform(struct?: DataCloudflareCertificatePacksResultCertificates): any;
export declare class DataCloudflareCertificatePacksResultCertificatesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareCertificatePacksResultCertificates | undefined;
    set internalValue(value: DataCloudflareCertificatePacksResultCertificates | undefined);
    get bundleMethod(): any;
    get expiresOn(): any;
    private _geoRestrictions;
    get geoRestrictions(): DataCloudflareCertificatePacksResultCertificatesGeoRestrictionsOutputReference;
    get hosts(): any;
    get id(): any;
    get issuer(): any;
    get modifiedOn(): any;
    get priority(): any;
    get signature(): any;
    get status(): any;
    get uploadedOn(): any;
    get zoneId(): any;
}
export declare class DataCloudflareCertificatePacksResultCertificatesList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareCertificatePacksResultCertificatesOutputReference;
}
export interface DataCloudflareCertificatePacksResultDcvDelegationRecords {
}
export declare function dataCloudflareCertificatePacksResultDcvDelegationRecordsToTerraform(struct?: DataCloudflareCertificatePacksResultDcvDelegationRecords): any;
export declare function dataCloudflareCertificatePacksResultDcvDelegationRecordsToHclTerraform(struct?: DataCloudflareCertificatePacksResultDcvDelegationRecords): any;
export declare class DataCloudflareCertificatePacksResultDcvDelegationRecordsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareCertificatePacksResultDcvDelegationRecords | undefined;
    set internalValue(value: DataCloudflareCertificatePacksResultDcvDelegationRecords | undefined);
    get cname(): any;
    get cnameTarget(): any;
    get emails(): any;
    get httpBody(): any;
    get httpUrl(): any;
    get status(): any;
    get txtName(): any;
    get txtValue(): any;
}
export declare class DataCloudflareCertificatePacksResultDcvDelegationRecordsList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareCertificatePacksResultDcvDelegationRecordsOutputReference;
}
export interface DataCloudflareCertificatePacksResultValidationErrors {
}
export declare function dataCloudflareCertificatePacksResultValidationErrorsToTerraform(struct?: DataCloudflareCertificatePacksResultValidationErrors): any;
export declare function dataCloudflareCertificatePacksResultValidationErrorsToHclTerraform(struct?: DataCloudflareCertificatePacksResultValidationErrors): any;
export declare class DataCloudflareCertificatePacksResultValidationErrorsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareCertificatePacksResultValidationErrors | undefined;
    set internalValue(value: DataCloudflareCertificatePacksResultValidationErrors | undefined);
    get message(): any;
}
export declare class DataCloudflareCertificatePacksResultValidationErrorsList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareCertificatePacksResultValidationErrorsOutputReference;
}
export interface DataCloudflareCertificatePacksResultValidationRecords {
}
export declare function dataCloudflareCertificatePacksResultValidationRecordsToTerraform(struct?: DataCloudflareCertificatePacksResultValidationRecords): any;
export declare function dataCloudflareCertificatePacksResultValidationRecordsToHclTerraform(struct?: DataCloudflareCertificatePacksResultValidationRecords): any;
export declare class DataCloudflareCertificatePacksResultValidationRecordsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareCertificatePacksResultValidationRecords | undefined;
    set internalValue(value: DataCloudflareCertificatePacksResultValidationRecords | undefined);
    get cname(): any;
    get cnameTarget(): any;
    get emails(): any;
    get httpBody(): any;
    get httpUrl(): any;
    get status(): any;
    get txtName(): any;
    get txtValue(): any;
}
export declare class DataCloudflareCertificatePacksResultValidationRecordsList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareCertificatePacksResultValidationRecordsOutputReference;
}
export interface DataCloudflareCertificatePacksResult {
}
export declare function dataCloudflareCertificatePacksResultToTerraform(struct?: DataCloudflareCertificatePacksResult): any;
export declare function dataCloudflareCertificatePacksResultToHclTerraform(struct?: DataCloudflareCertificatePacksResult): any;
export declare class DataCloudflareCertificatePacksResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareCertificatePacksResult | undefined;
    set internalValue(value: DataCloudflareCertificatePacksResult | undefined);
    get certificateAuthority(): any;
    private _certificates;
    get certificates(): DataCloudflareCertificatePacksResultCertificatesList;
    get cloudflareBranding(): any;
    private _dcvDelegationRecords;
    get dcvDelegationRecords(): DataCloudflareCertificatePacksResultDcvDelegationRecordsList;
    get hosts(): any;
    get id(): any;
    get primaryCertificate(): any;
    get status(): any;
    get type(): any;
    private _validationErrors;
    get validationErrors(): DataCloudflareCertificatePacksResultValidationErrorsList;
    get validationMethod(): any;
    private _validationRecords;
    get validationRecords(): DataCloudflareCertificatePacksResultValidationRecordsList;
    get validityDays(): any;
}
export declare class DataCloudflareCertificatePacksResultList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareCertificatePacksResultOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/certificate_packs cloudflare_certificate_packs}
*/
export declare class DataCloudflareCertificatePacks extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_certificate_packs";
    /**
    * Generates CDKTF code for importing a DataCloudflareCertificatePacks resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareCertificatePacks to import
    * @param importFromId The id of the existing DataCloudflareCertificatePacks that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/certificate_packs#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareCertificatePacks to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/certificate_packs cloudflare_certificate_packs} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareCertificatePacksConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareCertificatePacksConfig);
    private _deploy?;
    get deploy(): string;
    set deploy(value: string);
    resetDeploy(): void;
    get deployInput(): string;
    private _maxItems?;
    get maxItems(): number;
    set maxItems(value: number);
    resetMaxItems(): void;
    get maxItemsInput(): number;
    private _result;
    get result(): DataCloudflareCertificatePacksResultList;
    private _status?;
    get status(): string;
    set status(value: string);
    resetStatus(): void;
    get statusInput(): string;
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
