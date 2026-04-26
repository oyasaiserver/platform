import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareMtlsCertificateAssociationsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/mtls_certificate_associations#account_id DataCloudflareMtlsCertificateAssociations#account_id}
    */
    readonly accountId?: string;
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/mtls_certificate_associations#mtls_certificate_id DataCloudflareMtlsCertificateAssociations#mtls_certificate_id}
    */
    readonly mtlsCertificateId: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/mtls_certificate_associations cloudflare_mtls_certificate_associations}
*/
export declare class DataCloudflareMtlsCertificateAssociations extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_mtls_certificate_associations";
    /**
    * Generates CDKTF code for importing a DataCloudflareMtlsCertificateAssociations resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareMtlsCertificateAssociations to import
    * @param importFromId The id of the existing DataCloudflareMtlsCertificateAssociations that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/mtls_certificate_associations#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareMtlsCertificateAssociations to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/mtls_certificate_associations cloudflare_mtls_certificate_associations} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareMtlsCertificateAssociationsConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflareMtlsCertificateAssociationsConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _mtlsCertificateId?;
    get mtlsCertificateId(): string;
    set mtlsCertificateId(value: string);
    get mtlsCertificateIdInput(): string;
    get service(): any;
    get status(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
