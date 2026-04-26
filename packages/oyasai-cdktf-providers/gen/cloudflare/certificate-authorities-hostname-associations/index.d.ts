import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CertificateAuthoritiesHostnameAssociationsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/certificate_authorities_hostname_associations#hostnames CertificateAuthoritiesHostnameAssociations#hostnames}
    */
    readonly hostnames?: string[];
    /**
    * The UUID for a certificate that was uploaded to the mTLS Certificate Management endpoint. If no mtls_certificate_id is given, the hostnames will be associated to your active Cloudflare Managed CA.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/certificate_authorities_hostname_associations#mtls_certificate_id CertificateAuthoritiesHostnameAssociations#mtls_certificate_id}
    */
    readonly mtlsCertificateId?: string;
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/certificate_authorities_hostname_associations#zone_id CertificateAuthoritiesHostnameAssociations#zone_id}
    */
    readonly zoneId: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/certificate_authorities_hostname_associations cloudflare_certificate_authorities_hostname_associations}
*/
export declare class CertificateAuthoritiesHostnameAssociations extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_certificate_authorities_hostname_associations";
    /**
    * Generates CDKTF code for importing a CertificateAuthoritiesHostnameAssociations resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CertificateAuthoritiesHostnameAssociations to import
    * @param importFromId The id of the existing CertificateAuthoritiesHostnameAssociations that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/certificate_authorities_hostname_associations#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CertificateAuthoritiesHostnameAssociations to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/certificate_authorities_hostname_associations cloudflare_certificate_authorities_hostname_associations} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CertificateAuthoritiesHostnameAssociationsConfig
    */
    constructor(scope: Construct, id: string, config: CertificateAuthoritiesHostnameAssociationsConfig);
    private _hostnames?;
    get hostnames(): string[];
    set hostnames(value: string[]);
    resetHostnames(): void;
    get hostnamesInput(): string[];
    get id(): any;
    private _mtlsCertificateId?;
    get mtlsCertificateId(): string;
    set mtlsCertificateId(value: string);
    resetMtlsCertificateId(): void;
    get mtlsCertificateIdInput(): string;
    private _zoneId?;
    get zoneId(): string;
    set zoneId(value: string);
    get zoneIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
