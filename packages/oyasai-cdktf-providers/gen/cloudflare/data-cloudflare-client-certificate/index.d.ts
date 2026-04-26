import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareClientCertificateConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/client_certificate#client_certificate_id DataCloudflareClientCertificate#client_certificate_id}
    */
    readonly clientCertificateId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/client_certificate#filter DataCloudflareClientCertificate#filter}
    */
    readonly filter?: DataCloudflareClientCertificateFilter;
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/client_certificate#zone_id DataCloudflareClientCertificate#zone_id}
    */
    readonly zoneId?: string;
}
export interface DataCloudflareClientCertificateCertificateAuthority {
}
export declare function dataCloudflareClientCertificateCertificateAuthorityToTerraform(struct?: DataCloudflareClientCertificateCertificateAuthority): any;
export declare function dataCloudflareClientCertificateCertificateAuthorityToHclTerraform(struct?: DataCloudflareClientCertificateCertificateAuthority): any;
export declare class DataCloudflareClientCertificateCertificateAuthorityOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareClientCertificateCertificateAuthority | undefined;
    set internalValue(value: DataCloudflareClientCertificateCertificateAuthority | undefined);
    get id(): any;
    get name(): any;
}
export interface DataCloudflareClientCertificateFilter {
    /**
    * Limit to the number of records returned.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/client_certificate#limit DataCloudflareClientCertificate#limit}
    */
    readonly limit?: number;
    /**
    * Offset the results
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/client_certificate#offset DataCloudflareClientCertificate#offset}
    */
    readonly offset?: number;
    /**
    * Client Certitifcate Status to filter results by.
    * Available values: "all", "active", "pending_reactivation", "pending_revocation", "revoked".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/client_certificate#status DataCloudflareClientCertificate#status}
    */
    readonly status?: string;
}
export declare function dataCloudflareClientCertificateFilterToTerraform(struct?: DataCloudflareClientCertificateFilter | cdktf.IResolvable): any;
export declare function dataCloudflareClientCertificateFilterToHclTerraform(struct?: DataCloudflareClientCertificateFilter | cdktf.IResolvable): any;
export declare class DataCloudflareClientCertificateFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareClientCertificateFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataCloudflareClientCertificateFilter | cdktf.IResolvable | undefined);
    private _limit?;
    get limit(): number;
    set limit(value: number);
    resetLimit(): void;
    get limitInput(): number;
    private _offset?;
    get offset(): number;
    set offset(value: number);
    resetOffset(): void;
    get offsetInput(): number;
    private _status?;
    get status(): string;
    set status(value: string);
    resetStatus(): void;
    get statusInput(): string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/client_certificate cloudflare_client_certificate}
*/
export declare class DataCloudflareClientCertificate extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_client_certificate";
    /**
    * Generates CDKTF code for importing a DataCloudflareClientCertificate resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareClientCertificate to import
    * @param importFromId The id of the existing DataCloudflareClientCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/client_certificate#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareClientCertificate to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/client_certificate cloudflare_client_certificate} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareClientCertificateConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareClientCertificateConfig);
    get certificate(): any;
    private _certificateAuthority;
    get certificateAuthority(): DataCloudflareClientCertificateCertificateAuthorityOutputReference;
    private _clientCertificateId?;
    get clientCertificateId(): string;
    set clientCertificateId(value: string);
    resetClientCertificateId(): void;
    get clientCertificateIdInput(): string;
    get commonName(): any;
    get country(): any;
    get csr(): any;
    get expiresOn(): any;
    private _filter;
    get filter(): DataCloudflareClientCertificateFilterOutputReference;
    putFilter(value: DataCloudflareClientCertificateFilter): void;
    resetFilter(): void;
    get filterInput(): any;
    get fingerprintSha256(): any;
    get id(): any;
    get issuedOn(): any;
    get location(): any;
    get organization(): any;
    get organizationalUnit(): any;
    get serialNumber(): any;
    get signature(): any;
    get ski(): any;
    get state(): any;
    get status(): any;
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
