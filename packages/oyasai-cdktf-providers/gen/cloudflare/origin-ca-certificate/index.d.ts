import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface OriginCaCertificateConfig extends cdktf.TerraformMetaArguments {
    /**
    * The Certificate Signing Request (CSR). Must be newline-encoded.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/origin_ca_certificate#csr OriginCaCertificate#csr}
    */
    readonly csr: string;
    /**
    * Array of hostnames or wildcard names bound to the certificate.
    * Hostnames must be fully qualified domain names (FQDNs) belonging to zones on your account (e.g., `example.com` or `sub.example.com`). Wildcards are supported only as a `*.` prefix for a single level (e.g., `*.example.com`). Double wildcards (`*.*.example.com`) and interior wildcards (`foo.*.example.com`) are not allowed. The wildcard suffix must be a multi-label domain (`*.example.com` is valid, but `*.com` is not). Unicode/IDN hostnames are accepted and automatically converted to punycode.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/origin_ca_certificate#hostnames OriginCaCertificate#hostnames}
    */
    readonly hostnames: string[];
    /**
    * Signature type desired on certificate ("origin-rsa" (rsa), "origin-ecc" (ecdsa), or "keyless-certificate" (for Keyless SSL servers).
    * Available values: "origin-rsa", "origin-ecc", "keyless-certificate".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/origin_ca_certificate#request_type OriginCaCertificate#request_type}
    */
    readonly requestType: string;
    /**
    * The number of days for which the certificate should be valid.
    * Available values: 7, 30, 90, 365, 730, 1095, 5475.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/origin_ca_certificate#requested_validity OriginCaCertificate#requested_validity}
    */
    readonly requestedValidity?: number;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/origin_ca_certificate cloudflare_origin_ca_certificate}
*/
export declare class OriginCaCertificate extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_origin_ca_certificate";
    /**
    * Generates CDKTF code for importing a OriginCaCertificate resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the OriginCaCertificate to import
    * @param importFromId The id of the existing OriginCaCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/origin_ca_certificate#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the OriginCaCertificate to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/origin_ca_certificate cloudflare_origin_ca_certificate} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options OriginCaCertificateConfig
    */
    constructor(scope: Construct, id: string, config: OriginCaCertificateConfig);
    get certificate(): any;
    private _csr?;
    get csr(): string;
    set csr(value: string);
    get csrInput(): string;
    get expiresOn(): any;
    private _hostnames?;
    get hostnames(): string[];
    set hostnames(value: string[]);
    get hostnamesInput(): string[];
    get id(): any;
    private _requestType?;
    get requestType(): string;
    set requestType(value: string);
    get requestTypeInput(): string;
    private _requestedValidity?;
    get requestedValidity(): number;
    set requestedValidity(value: number);
    resetRequestedValidity(): void;
    get requestedValidityInput(): number;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
