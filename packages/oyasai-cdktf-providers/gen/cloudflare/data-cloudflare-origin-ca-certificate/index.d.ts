import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareOriginCaCertificateConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/origin_ca_certificate#certificate_id DataCloudflareOriginCaCertificate#certificate_id}
    */
    readonly certificateId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/origin_ca_certificate#filter DataCloudflareOriginCaCertificate#filter}
    */
    readonly filter?: DataCloudflareOriginCaCertificateFilter;
}
export interface DataCloudflareOriginCaCertificateFilter {
    /**
    * Limit to the number of records returned.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/origin_ca_certificate#limit DataCloudflareOriginCaCertificate#limit}
    */
    readonly limit?: number;
    /**
    * Offset the results
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/origin_ca_certificate#offset DataCloudflareOriginCaCertificate#offset}
    */
    readonly offset?: number;
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/origin_ca_certificate#zone_id DataCloudflareOriginCaCertificate#zone_id}
    */
    readonly zoneId: string;
}
export declare function dataCloudflareOriginCaCertificateFilterToTerraform(struct?: DataCloudflareOriginCaCertificateFilter | cdktf.IResolvable): any;
export declare function dataCloudflareOriginCaCertificateFilterToHclTerraform(struct?: DataCloudflareOriginCaCertificateFilter | cdktf.IResolvable): any;
export declare class DataCloudflareOriginCaCertificateFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareOriginCaCertificateFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataCloudflareOriginCaCertificateFilter | cdktf.IResolvable | undefined);
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
    private _zoneId?;
    get zoneId(): string;
    set zoneId(value: string);
    get zoneIdInput(): string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/origin_ca_certificate cloudflare_origin_ca_certificate}
*/
export declare class DataCloudflareOriginCaCertificate extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_origin_ca_certificate";
    /**
    * Generates CDKTF code for importing a DataCloudflareOriginCaCertificate resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareOriginCaCertificate to import
    * @param importFromId The id of the existing DataCloudflareOriginCaCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/origin_ca_certificate#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareOriginCaCertificate to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/origin_ca_certificate cloudflare_origin_ca_certificate} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareOriginCaCertificateConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareOriginCaCertificateConfig);
    get certificate(): any;
    private _certificateId?;
    get certificateId(): string;
    set certificateId(value: string);
    resetCertificateId(): void;
    get certificateIdInput(): string;
    get csr(): any;
    get expiresOn(): any;
    private _filter;
    get filter(): DataCloudflareOriginCaCertificateFilterOutputReference;
    putFilter(value: DataCloudflareOriginCaCertificateFilter): void;
    resetFilter(): void;
    get filterInput(): any;
    get hostnames(): any;
    get id(): any;
    get requestType(): any;
    get requestedValidity(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
