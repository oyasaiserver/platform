import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareCertificatePackConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/certificate_pack#certificate_pack_id DataCloudflareCertificatePack#certificate_pack_id}
    */
    readonly certificatePackId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/certificate_pack#filter DataCloudflareCertificatePack#filter}
    */
    readonly filter?: DataCloudflareCertificatePackFilter;
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/certificate_pack#zone_id DataCloudflareCertificatePack#zone_id}
    */
    readonly zoneId?: string;
}
export interface DataCloudflareCertificatePackCertificatesGeoRestrictions {
}
export declare function dataCloudflareCertificatePackCertificatesGeoRestrictionsToTerraform(struct?: DataCloudflareCertificatePackCertificatesGeoRestrictions): any;
export declare function dataCloudflareCertificatePackCertificatesGeoRestrictionsToHclTerraform(struct?: DataCloudflareCertificatePackCertificatesGeoRestrictions): any;
export declare class DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareCertificatePackCertificatesGeoRestrictions | undefined;
    set internalValue(value: DataCloudflareCertificatePackCertificatesGeoRestrictions | undefined);
    get label(): any;
}
export interface DataCloudflareCertificatePackCertificates {
}
export declare function dataCloudflareCertificatePackCertificatesToTerraform(struct?: DataCloudflareCertificatePackCertificates): any;
export declare function dataCloudflareCertificatePackCertificatesToHclTerraform(struct?: DataCloudflareCertificatePackCertificates): any;
export declare class DataCloudflareCertificatePackCertificatesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareCertificatePackCertificates | undefined;
    set internalValue(value: DataCloudflareCertificatePackCertificates | undefined);
    get bundleMethod(): any;
    get expiresOn(): any;
    private _geoRestrictions;
    get geoRestrictions(): DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference;
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
export declare class DataCloudflareCertificatePackCertificatesList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareCertificatePackCertificatesOutputReference;
}
export interface DataCloudflareCertificatePackDcvDelegationRecords {
}
export declare function dataCloudflareCertificatePackDcvDelegationRecordsToTerraform(struct?: DataCloudflareCertificatePackDcvDelegationRecords): any;
export declare function dataCloudflareCertificatePackDcvDelegationRecordsToHclTerraform(struct?: DataCloudflareCertificatePackDcvDelegationRecords): any;
export declare class DataCloudflareCertificatePackDcvDelegationRecordsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareCertificatePackDcvDelegationRecords | undefined;
    set internalValue(value: DataCloudflareCertificatePackDcvDelegationRecords | undefined);
    get cname(): any;
    get cnameTarget(): any;
    get emails(): any;
    get httpBody(): any;
    get httpUrl(): any;
    get status(): any;
    get txtName(): any;
    get txtValue(): any;
}
export declare class DataCloudflareCertificatePackDcvDelegationRecordsList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareCertificatePackDcvDelegationRecordsOutputReference;
}
export interface DataCloudflareCertificatePackFilter {
    /**
    * Specify the deployment environment for the certificate packs.
    * Available values: "staging", "production".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/certificate_pack#deploy DataCloudflareCertificatePack#deploy}
    */
    readonly deploy?: string;
    /**
    * Include Certificate Packs of all statuses, not just active ones.
    * Available values: "all".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/certificate_pack#status DataCloudflareCertificatePack#status}
    */
    readonly status?: string;
}
export declare function dataCloudflareCertificatePackFilterToTerraform(struct?: DataCloudflareCertificatePackFilter | cdktf.IResolvable): any;
export declare function dataCloudflareCertificatePackFilterToHclTerraform(struct?: DataCloudflareCertificatePackFilter | cdktf.IResolvable): any;
export declare class DataCloudflareCertificatePackFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareCertificatePackFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataCloudflareCertificatePackFilter | cdktf.IResolvable | undefined);
    private _deploy?;
    get deploy(): string;
    set deploy(value: string);
    resetDeploy(): void;
    get deployInput(): string;
    private _status?;
    get status(): string;
    set status(value: string);
    resetStatus(): void;
    get statusInput(): string;
}
export interface DataCloudflareCertificatePackValidationErrors {
}
export declare function dataCloudflareCertificatePackValidationErrorsToTerraform(struct?: DataCloudflareCertificatePackValidationErrors): any;
export declare function dataCloudflareCertificatePackValidationErrorsToHclTerraform(struct?: DataCloudflareCertificatePackValidationErrors): any;
export declare class DataCloudflareCertificatePackValidationErrorsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareCertificatePackValidationErrors | undefined;
    set internalValue(value: DataCloudflareCertificatePackValidationErrors | undefined);
    get message(): any;
}
export declare class DataCloudflareCertificatePackValidationErrorsList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareCertificatePackValidationErrorsOutputReference;
}
export interface DataCloudflareCertificatePackValidationRecords {
}
export declare function dataCloudflareCertificatePackValidationRecordsToTerraform(struct?: DataCloudflareCertificatePackValidationRecords): any;
export declare function dataCloudflareCertificatePackValidationRecordsToHclTerraform(struct?: DataCloudflareCertificatePackValidationRecords): any;
export declare class DataCloudflareCertificatePackValidationRecordsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareCertificatePackValidationRecords | undefined;
    set internalValue(value: DataCloudflareCertificatePackValidationRecords | undefined);
    get cname(): any;
    get cnameTarget(): any;
    get emails(): any;
    get httpBody(): any;
    get httpUrl(): any;
    get status(): any;
    get txtName(): any;
    get txtValue(): any;
}
export declare class DataCloudflareCertificatePackValidationRecordsList extends cdktf.ComplexList {
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
    get(index: number): DataCloudflareCertificatePackValidationRecordsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/certificate_pack cloudflare_certificate_pack}
*/
export declare class DataCloudflareCertificatePack extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_certificate_pack";
    /**
    * Generates CDKTF code for importing a DataCloudflareCertificatePack resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareCertificatePack to import
    * @param importFromId The id of the existing DataCloudflareCertificatePack that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/certificate_pack#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareCertificatePack to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/certificate_pack cloudflare_certificate_pack} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareCertificatePackConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareCertificatePackConfig);
    get certificateAuthority(): any;
    private _certificatePackId?;
    get certificatePackId(): string;
    set certificatePackId(value: string);
    resetCertificatePackId(): void;
    get certificatePackIdInput(): string;
    private _certificates;
    get certificates(): DataCloudflareCertificatePackCertificatesList;
    get cloudflareBranding(): any;
    private _dcvDelegationRecords;
    get dcvDelegationRecords(): DataCloudflareCertificatePackDcvDelegationRecordsList;
    private _filter;
    get filter(): DataCloudflareCertificatePackFilterOutputReference;
    putFilter(value: DataCloudflareCertificatePackFilter): void;
    resetFilter(): void;
    get filterInput(): any;
    get hosts(): any;
    get id(): any;
    get primaryCertificate(): any;
    get status(): any;
    get type(): any;
    private _validationErrors;
    get validationErrors(): DataCloudflareCertificatePackValidationErrorsList;
    get validationMethod(): any;
    private _validationRecords;
    get validationRecords(): DataCloudflareCertificatePackValidationRecordsList;
    get validityDays(): any;
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
