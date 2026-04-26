import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareMtlsCertificateConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/mtls_certificate#account_id DataCloudflareMtlsCertificate#account_id}
    */
    readonly accountId: string;
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/mtls_certificate#mtls_certificate_id DataCloudflareMtlsCertificate#mtls_certificate_id}
    */
    readonly mtlsCertificateId: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/mtls_certificate cloudflare_mtls_certificate}
*/
export declare class DataCloudflareMtlsCertificate extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_mtls_certificate";
    /**
    * Generates CDKTF code for importing a DataCloudflareMtlsCertificate resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareMtlsCertificate to import
    * @param importFromId The id of the existing DataCloudflareMtlsCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/mtls_certificate#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareMtlsCertificate to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/mtls_certificate cloudflare_mtls_certificate} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareMtlsCertificateConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflareMtlsCertificateConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    get accountIdInput(): string;
    get ca(): any;
    get certificates(): any;
    get expiresOn(): any;
    get id(): any;
    get issuer(): any;
    private _mtlsCertificateId?;
    get mtlsCertificateId(): string;
    set mtlsCertificateId(value: string);
    get mtlsCertificateIdInput(): string;
    get name(): any;
    get serialNumber(): any;
    get signature(): any;
    get uploadedOn(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
