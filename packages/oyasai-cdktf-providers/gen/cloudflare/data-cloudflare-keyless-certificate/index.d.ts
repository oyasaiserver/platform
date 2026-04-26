import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareKeylessCertificateConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/keyless_certificate#keyless_certificate_id DataCloudflareKeylessCertificate#keyless_certificate_id}
    */
    readonly keylessCertificateId: string;
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/keyless_certificate#zone_id DataCloudflareKeylessCertificate#zone_id}
    */
    readonly zoneId?: string;
}
export interface DataCloudflareKeylessCertificateTunnel {
}
export declare function dataCloudflareKeylessCertificateTunnelToTerraform(struct?: DataCloudflareKeylessCertificateTunnel): any;
export declare function dataCloudflareKeylessCertificateTunnelToHclTerraform(struct?: DataCloudflareKeylessCertificateTunnel): any;
export declare class DataCloudflareKeylessCertificateTunnelOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareKeylessCertificateTunnel | undefined;
    set internalValue(value: DataCloudflareKeylessCertificateTunnel | undefined);
    get privateIp(): any;
    get vnetId(): any;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/keyless_certificate cloudflare_keyless_certificate}
*/
export declare class DataCloudflareKeylessCertificate extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_keyless_certificate";
    /**
    * Generates CDKTF code for importing a DataCloudflareKeylessCertificate resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareKeylessCertificate to import
    * @param importFromId The id of the existing DataCloudflareKeylessCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/keyless_certificate#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareKeylessCertificate to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/keyless_certificate cloudflare_keyless_certificate} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareKeylessCertificateConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflareKeylessCertificateConfig);
    get createdOn(): any;
    get enabled(): any;
    get host(): any;
    get id(): any;
    private _keylessCertificateId?;
    get keylessCertificateId(): string;
    set keylessCertificateId(value: string);
    get keylessCertificateIdInput(): string;
    get modifiedOn(): any;
    get name(): any;
    get permissions(): any;
    get port(): any;
    get status(): any;
    private _tunnel;
    get tunnel(): DataCloudflareKeylessCertificateTunnelOutputReference;
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
