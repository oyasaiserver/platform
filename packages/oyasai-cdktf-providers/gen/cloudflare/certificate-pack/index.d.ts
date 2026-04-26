import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CertificatePackConfig extends cdktf.TerraformMetaArguments {
    /**
    * Certificate Authority selected for the order.  For information on any certificate authority specific details or restrictions [see this page for more details.](https://developers.cloudflare.com/ssl/reference/certificate-authorities)
    * Available values: "google", "lets_encrypt", "ssl_com".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/certificate_pack#certificate_authority CertificatePack#certificate_authority}
    */
    readonly certificateAuthority: string;
    /**
    * Whether or not to add Cloudflare Branding for the order.  This will add a subdomain of sni.cloudflaressl.com as the Common Name if set to true.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/certificate_pack#cloudflare_branding CertificatePack#cloudflare_branding}
    */
    readonly cloudflareBranding?: boolean | cdktf.IResolvable;
    /**
    * Comma separated list of valid host names for the certificate packs. Must contain the zone apex, may not contain more than 50 hosts, and may not be empty.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/certificate_pack#hosts CertificatePack#hosts}
    */
    readonly hosts?: string[];
    /**
    * Type of certificate pack.
    * Available values: "advanced".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/certificate_pack#type CertificatePack#type}
    */
    readonly type: string;
    /**
    * Validation Method selected for the order.
    * Available values: "txt", "http", "email".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/certificate_pack#validation_method CertificatePack#validation_method}
    */
    readonly validationMethod: string;
    /**
    * Validity Days selected for the order.
    * Available values: 14, 30, 90, 365.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/certificate_pack#validity_days CertificatePack#validity_days}
    */
    readonly validityDays: number;
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/certificate_pack#zone_id CertificatePack#zone_id}
    */
    readonly zoneId?: string;
}
export interface CertificatePackCertificatesGeoRestrictions {
}
export declare function certificatePackCertificatesGeoRestrictionsToTerraform(struct?: CertificatePackCertificatesGeoRestrictions): any;
export declare function certificatePackCertificatesGeoRestrictionsToHclTerraform(struct?: CertificatePackCertificatesGeoRestrictions): any;
export declare class CertificatePackCertificatesGeoRestrictionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CertificatePackCertificatesGeoRestrictions | undefined;
    set internalValue(value: CertificatePackCertificatesGeoRestrictions | undefined);
    get label(): any;
}
export interface CertificatePackCertificates {
}
export declare function certificatePackCertificatesToTerraform(struct?: CertificatePackCertificates): any;
export declare function certificatePackCertificatesToHclTerraform(struct?: CertificatePackCertificates): any;
export declare class CertificatePackCertificatesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CertificatePackCertificates | undefined;
    set internalValue(value: CertificatePackCertificates | undefined);
    get bundleMethod(): any;
    get expiresOn(): any;
    private _geoRestrictions;
    get geoRestrictions(): CertificatePackCertificatesGeoRestrictionsOutputReference;
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
export declare class CertificatePackCertificatesList extends cdktf.ComplexList {
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
    get(index: number): CertificatePackCertificatesOutputReference;
}
export interface CertificatePackDcvDelegationRecords {
}
export declare function certificatePackDcvDelegationRecordsToTerraform(struct?: CertificatePackDcvDelegationRecords): any;
export declare function certificatePackDcvDelegationRecordsToHclTerraform(struct?: CertificatePackDcvDelegationRecords): any;
export declare class CertificatePackDcvDelegationRecordsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CertificatePackDcvDelegationRecords | undefined;
    set internalValue(value: CertificatePackDcvDelegationRecords | undefined);
    get cname(): any;
    get cnameTarget(): any;
    get emails(): any;
    get httpBody(): any;
    get httpUrl(): any;
    get status(): any;
    get txtName(): any;
    get txtValue(): any;
}
export declare class CertificatePackDcvDelegationRecordsList extends cdktf.ComplexList {
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
    get(index: number): CertificatePackDcvDelegationRecordsOutputReference;
}
export interface CertificatePackValidationErrors {
}
export declare function certificatePackValidationErrorsToTerraform(struct?: CertificatePackValidationErrors): any;
export declare function certificatePackValidationErrorsToHclTerraform(struct?: CertificatePackValidationErrors): any;
export declare class CertificatePackValidationErrorsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CertificatePackValidationErrors | undefined;
    set internalValue(value: CertificatePackValidationErrors | undefined);
    get message(): any;
}
export declare class CertificatePackValidationErrorsList extends cdktf.ComplexList {
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
    get(index: number): CertificatePackValidationErrorsOutputReference;
}
export interface CertificatePackValidationRecords {
}
export declare function certificatePackValidationRecordsToTerraform(struct?: CertificatePackValidationRecords): any;
export declare function certificatePackValidationRecordsToHclTerraform(struct?: CertificatePackValidationRecords): any;
export declare class CertificatePackValidationRecordsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CertificatePackValidationRecords | undefined;
    set internalValue(value: CertificatePackValidationRecords | undefined);
    get cname(): any;
    get cnameTarget(): any;
    get emails(): any;
    get httpBody(): any;
    get httpUrl(): any;
    get status(): any;
    get txtName(): any;
    get txtValue(): any;
}
export declare class CertificatePackValidationRecordsList extends cdktf.ComplexList {
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
    get(index: number): CertificatePackValidationRecordsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/certificate_pack cloudflare_certificate_pack}
*/
export declare class CertificatePack extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_certificate_pack";
    /**
    * Generates CDKTF code for importing a CertificatePack resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CertificatePack to import
    * @param importFromId The id of the existing CertificatePack that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/certificate_pack#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CertificatePack to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/certificate_pack cloudflare_certificate_pack} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CertificatePackConfig
    */
    constructor(scope: Construct, id: string, config: CertificatePackConfig);
    private _certificateAuthority?;
    get certificateAuthority(): string;
    set certificateAuthority(value: string);
    get certificateAuthorityInput(): string;
    private _certificates;
    get certificates(): CertificatePackCertificatesList;
    private _cloudflareBranding?;
    get cloudflareBranding(): boolean | cdktf.IResolvable;
    set cloudflareBranding(value: boolean | cdktf.IResolvable);
    resetCloudflareBranding(): void;
    get cloudflareBrandingInput(): any;
    private _dcvDelegationRecords;
    get dcvDelegationRecords(): CertificatePackDcvDelegationRecordsList;
    private _hosts?;
    get hosts(): string[];
    set hosts(value: string[]);
    resetHosts(): void;
    get hostsInput(): string[];
    get id(): any;
    get primaryCertificate(): any;
    get status(): any;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string;
    private _validationErrors;
    get validationErrors(): CertificatePackValidationErrorsList;
    private _validationMethod?;
    get validationMethod(): string;
    set validationMethod(value: string);
    get validationMethodInput(): string;
    private _validationRecords;
    get validationRecords(): CertificatePackValidationRecordsList;
    private _validityDays?;
    get validityDays(): number;
    set validityDays(value: number);
    get validityDaysInput(): number;
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
