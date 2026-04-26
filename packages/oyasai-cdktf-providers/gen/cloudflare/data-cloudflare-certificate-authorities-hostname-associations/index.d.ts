import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareCertificateAuthoritiesHostnameAssociationsConfig extends cdktf.TerraformMetaArguments {
    /**
    * The UUID to match against for a certificate that was uploaded to the mTLS Certificate Management endpoint. If no mtls_certificate_id is given, the results will be the hostnames associated to your active Cloudflare Managed CA.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/certificate_authorities_hostname_associations#mtls_certificate_id DataCloudflareCertificateAuthoritiesHostnameAssociations#mtls_certificate_id}
    */
    readonly mtlsCertificateId?: string;
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/certificate_authorities_hostname_associations#zone_id DataCloudflareCertificateAuthoritiesHostnameAssociations#zone_id}
    */
    readonly zoneId?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/certificate_authorities_hostname_associations cloudflare_certificate_authorities_hostname_associations}
*/
export declare class DataCloudflareCertificateAuthoritiesHostnameAssociations extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_certificate_authorities_hostname_associations";
    /**
    * Generates CDKTF code for importing a DataCloudflareCertificateAuthoritiesHostnameAssociations resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareCertificateAuthoritiesHostnameAssociations to import
    * @param importFromId The id of the existing DataCloudflareCertificateAuthoritiesHostnameAssociations that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/certificate_authorities_hostname_associations#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareCertificateAuthoritiesHostnameAssociations to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/certificate_authorities_hostname_associations cloudflare_certificate_authorities_hostname_associations} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareCertificateAuthoritiesHostnameAssociationsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareCertificateAuthoritiesHostnameAssociationsConfig);
    get hostnames(): any;
    get id(): any;
    private _mtlsCertificateId?;
    get mtlsCertificateId(): string;
    set mtlsCertificateId(value: string);
    resetMtlsCertificateId(): void;
    get mtlsCertificateIdInput(): string;
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
